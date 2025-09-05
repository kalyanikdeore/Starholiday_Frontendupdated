import { FaArrowRight } from "react-icons/fa";

const GoogleReviewButton = () => {
  const reviewUrl =
    "https://www.google.com/search?sca_esv=dee9b9933ec66180&rlz=1C1CHBF_enIN1081IN1081&sxsrf=AE3TifODkMKjIZhZ-Tk07NszdkFj75Ahag:1756978295849&q=saputara+star+holiday+home&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4vSVjBk3oKlU-MV3L56ZpzsAp3gL7ZHOImVa4jj5LHSzlwFA4jOmTMLd6rXIjuufddZG4ogVHIwjMVN9IIsNfZoPMqkYVsL5zEdIRd4lP7XgNoFlA%3D%3D&ved=1t:247458&ictx=111&biw=1920&bih=963&dpr=1";

  return (
    <div className="flex justify-center items-center mb-8">
      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-black px-6 py-3 rounded-lg font-bold 
                 transition-all duration-300 ease-in-out 
                 border-2 border-orange-500 
                 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white 
                 transform hover:-translate-y-1 hover:scale-105 
                 shadow-md hover:shadow-orange-500/30 
                 flex items-center gap-2"
      >
        Write a Google Review
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default GoogleReviewButton;
