import React, { useState, useEffect } from 'react';
import axiosInstance from '../../services/api';
// Video Player Component that handles all URL types correctly
const VideoPlayer = ({ videoUrl, title }) => {
  const [embedUrl, setEmbedUrl] = useState(null);
  const [videoType, setVideoType] = useState('unknown');

  useEffect(() => {
    if (!videoUrl) {
      setVideoType('none');
      return;
    }

    // More precise YouTube detection
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    const isYouTube = youtubeRegex.test(videoUrl);
    
    // Check for common video file extensions
    const videoFileRegex = /\.(mp4|webm|ogg|mov|avi|wmv|flv|mkv)(\?.*)?$/i;
    const isVideoFile = videoFileRegex.test(videoUrl);
    
    if (isYouTube) {
      setVideoType('youtube');
      // Extract YouTube ID from various URL formats
      let videoId = '';
      
      // Standard watch URL: https://www.youtube.com/watch?v=VIDEO_ID
      if (videoUrl.includes('youtube.com/watch?v=')) {
        const urlObj = new URL(videoUrl);
        videoId = urlObj.searchParams.get('v');
      } 
      // Short URL: https://youtu.be/VIDEO_ID
      else if (videoUrl.includes('youtu.be/')) {
        const pathParts = new URL(videoUrl).pathname.split('/');
        videoId = pathParts[pathParts.length - 1];
        // Remove any query parameters
        const queryParamIndex = videoId.indexOf('?');
        if (queryParamIndex !== -1) {
          videoId = videoId.substring(0, queryParamIndex);
        }
      }
      // Embedded URL: https://www.youtube.com/embed/VIDEO_ID
      else if (videoUrl.includes('youtube.com/embed/')) {
        const pathParts = new URL(videoUrl).pathname.split('/');
        videoId = pathParts[pathParts.length - 1];
      }
      // Live stream URL: https://www.youtube.com/live/VIDEO_ID
      else if (videoUrl.includes('youtube.com/live/')) {
        const pathParts = new URL(videoUrl).pathname.split('/');
        videoId = pathParts[pathParts.length - 1];
      }

      if (videoId) {
        setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
      } else {
        // If we can't extract the ID, try to use the URL as-is
        setEmbedUrl(videoUrl);
      }
    } else if (isVideoFile) {
      setVideoType('video');
      setEmbedUrl(videoUrl);
    } else {
      // For other URLs (Vimeo, Dailymotion, etc.) or if we can't determine the type
      setVideoType('other');
      setEmbedUrl(videoUrl);
    }
  }, [videoUrl]);

  if (!videoUrl) {
    return (
      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No video available</span>
      </div>
    );
  }

  if (videoType === 'youtube' && embedUrl) {
    return (
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  } else if (videoType === 'video') {
    // For uploaded video files
    return (
      <video 
        controls 
        className="w-full h-full rounded-lg object-cover"
      >
        <source src={embedUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else if (videoType === 'other' && embedUrl) {
    // For other video platforms or direct URLs
    // Try to use iframe first, fall back to video tag if needed
    try {
      // Check if it's a known embeddable platform
      const urlObj = new URL(embedUrl);
      const hostname = urlObj.hostname;
      
      if (hostname.includes('vimeo') || hostname.includes('dailymotion') || 
          hostname.includes('wistia') || hostname.includes('loom')) {
        return (
          <iframe
            className="w-full h-full rounded-lg"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      }
    } catch (e) {
      console.error('Error parsing URL:', e);
    }
    
    // Fallback: try to use a video tag
    return (
      <video 
        controls 
        className="w-full h-full rounded-lg object-cover"
      >
        <source src={embedUrl} type="video/mp4" />
        Your browser does not support this video. 
        <a href={embedUrl} target="_blank" rel="noopener noreferrer">
          Open video in new tab
        </a>
      </video>
    );
  }

  return (
    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-gray-500">Loading video...</span>
    </div>
  );
};

// Video Testimonial Card
const Saputaravideocard = ({ name, review, video_url, video_file }) => {
  // Use video_url if available, otherwise use video_file
  const videoSource = video_url || video_file;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[400px] md:w-[450px] flex flex-col items-center">
      <div className="w-full h-[300px] mb-4">
        <VideoPlayer videoUrl={videoSource} title={name} />
      </div>
      <h3 className="font-semibold text-lg text-center">{name}</h3>
      <p className="text-gray-600 text-center text-lg my-2">{review}</p>
    </div>
  );
};

// Main Section Component
const Saputaravideosection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        // Using the API endpoint
        const response = await axiosInstance.get('/about-saputara/testimonials');
        
        if (response.data.success) {
          setTestimonials(response.data.data);
        } else {
          setError(response.data.message);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load video testimonials');
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-4 text-center">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-4 text-center">
        <div className="flex justify-center items-center h-40">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        Saputara Hill Station Videos
      </h2>
      <p className="text-gray-600 text-xl max-w-xl mx-auto mb-10">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences visiting Saputara.
      </p>
      
      {testimonials.length === 0 ? (
        <p className="text-gray-500">No video testimonials available yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <Saputaravideocard 
              key={index} 
              name={testimonial.name} 
              review={testimonial.review} 
              video_url={testimonial.video_url}
              video_file={testimonial.video_file}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Saputaravideosection;