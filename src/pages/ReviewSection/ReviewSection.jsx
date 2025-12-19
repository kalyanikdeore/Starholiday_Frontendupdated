import React, { useState, useRef } from "react";
import {
  FaStar,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaArrowLeft,
  FaCheckCircle,
  FaInstagram,
  FaYoutube,
  FaUpload,
  FaCamera,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { logo } from "../../assets";
import axiosInstance from "../../services/api";
import starlogo2 from "../../assets/Images/starlogo2.png";

const ReviewSection = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`cursor-pointer text-4xl ${
            i < (hoverRating || selectedRating)
              ? "text-yellow-400"
              : "text-gray-300"
          } transition-colors duration-200`}
          onMouseEnter={() => setHoverRating(i + 1)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleStarClick(i + 1)}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {selectedRating === 0 ? (
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24  rounded-full flex items-center justify-center text-white text-2xl font-bold">
              <img src={starlogo2} alt="Star Holiday Home" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
            How was your experience with Star Holiday Home
          </h1>

          <p className="text-gray-600 text-center mb-8">
            Share your feedback to help us improve
          </p>

          <div className="flex justify-center space-x-2 mb-8">
            {renderStars()}
          </div>

          <div className="text-center text-gray-500 text-sm">
            Powered by <span className="font-semibold">Star Holiday Home</span>
          </div>
        </div>
      ) : selectedRating <= 3 ? (
        formSubmitted ? (
          <ThankYouMessage
            goBack={() => {
              setSelectedRating(0);
              setFormSubmitted(false);
            }}
          />
        ) : (
          <BadExperiencePage
            rating={selectedRating}
            goBack={() => setSelectedRating(0)}
            onSubmit={() => setFormSubmitted(true)}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            error={error}
            setError={setError}
          />
        )
      ) : (
        <GoodExperiencePage
          rating={selectedRating}
          goBack={() => setSelectedRating(0)}
          setIsLoading={setIsLoading}
          setError={setError}
          onSubmit={() => setFormSubmitted(true)}
        />
      )}
    </div>
  );
};

const BadExperiencePage = ({
  rating,
  goBack,
  onSubmit,
  isLoading,
  setIsLoading,
  error,
  setError,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    review: "",
    rating: rating,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post("/reviews", formData);

      if (response.data.success) {
        onSubmit();
      } else {
        throw new Error(response.data.message || "Failed to submit review");
      }
    } catch (error) {
      console.error("Submission error:", error);

      if (error.code === "NETWORK_ERROR" || error.message === "Network Error") {
        setError("Network error. Please check your connection and try again.");
      } else if (error.response?.status === 500) {
        setError("Server error. Please try again later.");
      } else {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Something went wrong. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
      <button
        onClick={goBack}
        className="flex items-center text-indigo-600 mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="flex justify-center mb-6">
        <div className="w-24 h-24  rounded-full flex items-center justify-center text-white text-2xl font-bold">
          <img src={starlogo2} alt="Star Holiday Home" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        We want to improve
      </h1>

      <p className="text-gray-600 text-center mb-6">
        We want our customers to be 100% satisfied. Please let us know why you
        had a bad experience, so we can improve our service.
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone with area code
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Enter your phone number with area code"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="review">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Please share your detailed feedback about your experience..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      <div className="mt-6 text-center text-gray-500 text-sm">
        Powered by <span className="font-semibold">Star Holiday Home</span>
      </div>
    </div>
  );
};

const ThankYouMessage = ({ goBack }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <FaCheckCircle className="text-5xl text-green-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>

        <p className="text-gray-600 mb-6">
          We appreciate you taking the time to share your feedback with us. Your
          comments are valuable in helping us improve our service.
        </p>

        <p className="text-gray-600 mb-8">
          We'll review your feedback and contact you if needed at the email
          address you provided.
        </p>

        <button
          onClick={goBack}
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Return to Home
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Powered by <span className="font-semibold">Star Holiday Home</span>
      </div>
    </div>
  );
};

const GoodExperiencePage = ({
  rating,
  goBack,
  setIsLoading,
  setError,
  onSubmit,
}) => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isSubmittingVideo, setIsSubmittingVideo] = useState(false);
  const [videoFormData, setVideoFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  // Text review form state
  const [textReviewForm, setTextReviewForm] = useState({
    name: "",
    email: "",
    phone: "",
    review: "",
    rating: rating,
  });

  const [isSubmittingText, setIsSubmittingText] = useState(false);
  const [textReviewError, setTextReviewError] = useState("");

  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const fileInputRef = useRef(null);

  const openReviewPlatform = (platform) => {
    const urls = {
      google: "https://g.page/r/CQ6zUCu5lCfwEBM/review",
      youtube:
        "https://www.youtube.com/results?search_query=star+holiday+home+saputara",
      instagram: "https://www.instagram.com/starholidayhome/",
    };
    window.open(urls[platform], "_blank");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);
      setShowUploadModal(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = stream;

      const options = { mimeType: "video/webm; codecs=vp9" };
      mediaRecorderRef.current = new MediaRecorder(stream, options);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: "video/webm",
        });
        const url = URL.createObjectURL(blob);
        setVideoPreview(url);
        setVideoFile(
          new File([blob], "recorded-video.webm", { type: "video/webm" })
        );
        recordedChunksRef.current = [];
      };
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access camera. Please check permissions.");
    }
  };

  const startRecording = () => {
    if (mediaRecorderRef.current) {
      recordedChunksRef.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      if (videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    }
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoPreview(null);
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setVideoFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  const handleVideoFormChange = (e) => {
    setVideoFormData({
      ...videoFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextReviewChange = (e) => {
    setTextReviewForm({
      ...textReviewForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitTextReview = async (e) => {
    e.preventDefault();
    setIsSubmittingText(true);
    setTextReviewError("");

    try {
      const response = await axiosInstance.post("/reviews", textReviewForm);

      if (response.data.success) {
        onSubmit();
      } else {
        throw new Error(response.data.message || "Failed to submit review");
      }
    } catch (error) {
      console.error("Text review submission error:", error);
      setTextReviewError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmittingText(false);
    }
  };

  const submitVideo = async () => {
    if (!videoFile) {
      alert("Please upload or record a video first.");
      return;
    }

    if (!videoFormData.name || !videoFormData.email) {
      alert("Please fill in your name and email.");
      return;
    }

    setIsSubmittingVideo(true);

    try {
      const formData = new FormData();
      formData.append("video", videoFile);
      formData.append("name", videoFormData.name);
      formData.append("email", videoFormData.email);
      formData.append("feedback", videoFormData.feedback);

      const response = await axiosInstance.post("/video-feedback", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert("Thank you for your video feedback!");
        removeVideo();
      } else {
        throw new Error(
          response.data.message || "Failed to submit video feedback"
        );
      }
    } catch (error) {
      console.error("Error submitting video:", error);
      alert(
        error.response?.data?.message ||
          error.message ||
          "There was an error submitting your video. Please try again."
      );
    } finally {
      setIsSubmittingVideo(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative">
      <button
        onClick={goBack}
        className="flex items-center text-indigo-600 mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          <img
            src={starlogo2}
            alt="Star Holiday Home"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Thank you for your feedback!
      </h1>

      <p className="text-gray-600 text-center mb-8">
        Leave us a review, it will help us grow and better serve our customers
        like you.
      </p>

      {/* Review Platform Options */}
      <div className="flex justify-center space-x-6 mb-8">
        <button
          onClick={() => openReviewPlatform("google")}
          className="flex flex-col items-center transition-colors duration-300 hover:scale-105"
        >
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-2 shadow-md">
            <FaGoogle className="text-3xl text-[#4285F4] bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />
          </div>
          <span className="text-sm font-semibold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </button>
      </div>

      {/* Text Review Form */}
      {/* <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Or submit a text review
        </h2>

        {textReviewError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {textReviewError}
          </div>
        )}

        <form onSubmit={submitTextReview}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="text-name">
                Your name
              </label>
              <input
                type="text"
                id="text-name"
                name="name"
                value={textReviewForm.name}
                onChange={handleTextReviewChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="text-email">
                Your email
              </label>
              <input
                type="email"
                id="text-email"
                name="email"
                value={textReviewForm.email}
                onChange={handleTextReviewChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="text-phone">
                Phone with area code
              </label>
              <input
                type="tel"
                id="text-phone"
                name="phone"
                value={textReviewForm.phone}
                onChange={handleTextReviewChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
                placeholder="Enter your phone number with area code"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="text-review">
                Review
              </label>
              <textarea
                id="text-review"
                name="review"
                value={textReviewForm.review}
                onChange={handleTextReviewChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
                placeholder="Share your positive experience with us..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmittingText}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isSubmittingText ? "Submitting..." : "Submit Text Review"}
            </button>
          </div>
        </form>
      </div> */}

      {/* Video Upload/Capture Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Share a video experience (optional)
        </h2>

        {!videoPreview ? (
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setShowUploadModal(true)}
              className="flex items-center justify-center p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-400 transition-colors"
            >
              <FaUpload className="mr-2 text-indigo-600" />
              <span>Upload Video</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <video
              src={videoPreview}
              controls
              className="w-full h-48 object-contain bg-black rounded-lg mb-3"
            />

            {/* Video submission form */}
            <div className="w-full space-y-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="video-name"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="video-name"
                  name="name"
                  value={videoFormData.name}
                  onChange={handleVideoFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="video-email"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="video-email"
                  name="email"
                  value={videoFormData.email}
                  onChange={handleVideoFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="video-feedback"
                >
                  Feedback (optional)
                </label>
                <textarea
                  id="video-feedback"
                  name="feedback"
                  value={videoFormData.feedback}
                  onChange={handleVideoFormChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Additional comments about your video..."
                ></textarea>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={removeVideo}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Remove
              </button>
              <button
                onClick={submitVideo}
                disabled={isSubmittingVideo}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
              >
                {isSubmittingVideo ? "Submitting..." : "Submit Video"}
              </button>
            </div>
          </div>
        )}

        {/* Camera view when recording */}
        {videoRef.current && videoRef.current.srcObject && !videoPreview && (
          <div className="mt-4 flex flex-col items-center">
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-48 object-contain bg-black rounded-lg mb-3"
            />
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                <FaCamera className="mr-2" />
                Start Recording
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Stop Recording
              </button>
            )}
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Upload Your Video
              </h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Select a video from your device to share your experience with us.
            </p>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <FaUpload className="text-4xl text-indigo-500 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                Click to browse or drag and drop your video file
              </p>
              <button
                onClick={triggerFileInput}
                className="px-4 py-2 w-38 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Browse Files
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              {/* Camera option */}
              <div className="flex flex-col items-center pt-6">
                <button
                  onClick={startCamera}
                  className="flex items-center justify-center p-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <FaCamera className="mr-2" />
                  <span>Record Video</span>
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center">
              Supported formats: MP4, MOV, AVI, WebM. Max file size: 100MB
            </div>
          </div>
        </div>
      )}

      <div className="text-center text-gray-500 text-sm">
        Powered by <span className="font-semibold">Star Holiday Home</span>
      </div>
    </div>
  );
};

export default ReviewSection;
