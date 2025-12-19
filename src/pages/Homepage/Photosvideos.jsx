import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GoogleReviewButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/360-photos-videos");
  };

  return (
    <div className="flex justify-center items-center py-10">
      <button
        onClick={handleClick}
        className="text-black px-6 py-3 rounded-lg font-bold 
                 transition-all duration-300 ease-in-out 
                 border-2 border-orange-500 
                 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white 
                 transform hover:-translate-y-1 hover:scale-105 
                 shadow-md hover:shadow-orange-500/30 
                 flex items-center gap-2 group"
      >
        360 degree photo & videos
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default GoogleReviewButton;
