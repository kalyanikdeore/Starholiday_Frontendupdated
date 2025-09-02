import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    // Generate random number between 1–99
    const randomNum = Math.floor(Math.random() * 99) + 1;
    // Alternate between men and women randomly
    const gender = Math.random() > 0.5 ? "men" : "women";
    setProfileImg(
      `https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc=`
    );
  }, []);

  const handleBookNow = () => {
    navigate("/bookform");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans bg-white text-gray-800">
      <h2 className="text-4xl text-blue-900 font-bold mb-8 text-center">
        Testimonials
      </h2>

      <div className="border-t border-gray-300 my-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Right Column */}
        <div className="space-y-8 shadow" style={{ marginTop: "101px" }}>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src={profileImg}
                alt="Guest profile"
                className="w-full h-auto rounded-full border-4 border-white shadow-lg"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  marginLeft: "119px",
                }}
              />
            </div>
          </div>

          <div
            className="bg-gray-50 p-6 rounded-lg"
            style={{ marginTop: "-20px" }}
          >
            <h2 className="text-2xl text-center text-blue-700 font-semibold mb-2">
              Amit Sonwane
            </h2>
            <p className="text-gray-600 border-l-4 border-blue-200 pl-4 py-2">
              "A short but very pleasant stay. Thank you for your hospitality.
              Keep up the good work."
            </p>
          </div>
        </div>

        {/* Left Column */}
        <div className="space-y-8 shadow p-5">
          <h2 className="text-2xl font-semibold mb-4">Google Reviews</h2>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium">Krutarth Patel</h3>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              Good clean and hygienic rooms. Helpful staff, total customer
              satisfaction. Will always book them when visiting Saputara.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium">Vijay Shivdasani</h3>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              Very nice place. Very cooperative staff, food quality is very
              good. Prompt service for everything. Specially restaurant staff of
              Star Holiday Resort always welcomed us with a smile. We enjoyed
              special discount facility. Saputara jana ho to Shilpi Hill Resort
              me hi rukna chahiye. Thank you so much for making our holidays
              memorable.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleBookNow}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 mb-8 text-sm shadow-md transition-colors duration-300"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
