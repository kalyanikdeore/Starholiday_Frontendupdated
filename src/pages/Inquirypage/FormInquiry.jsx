import restaurant from "../../assets/Images/restaurant.jpeg";
const InquiryForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col lg:flex-row justify-center items-center">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 max-w-2xl">
        <div
          className="bg-white p-8 rounded-lg shadow-xl border border-blue-100"
          style={{
            boxShadow: "0 10px 25px -5px rgba(0, 66, 102, 0.2)",
          }}
        >
          <h2 className="text-2xl font-extrabold tracking-widest mb-6 text-[#155dfc]">
            INQUIRY FORM
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-700">
                  COMPANY NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-700">
                  CONTACT PERSON <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-700">
                  EMAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-700">
                  MOBILE NUMBER <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700">
                ADDRESS
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                rows="3"
              />
            </div>

            <button
              type="submit"
              className="bg-[#155dfc] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#003355] transition duration-200 shadow-md hover:shadow-lg"
            >
              SUBMIT INQUIRY
            </button>
          </form>
        </div>
      </div>

      {/* Logo Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <div className="text-center">
          <div
            className="p-6 rounded-lg bg-white shadow-xl border border-blue-100 inline-block"
            style={{
              boxShadow: "0 10px 25px -5px rgba(0, 66, 102, 0.2)",
            }}
          >
            <img
              src={restaurant}
              alt="Shilpi Hill Resort"
              className="w-72 mx-auto mb-4"
              style={{ height: "371px", width: "532px" }}
            />
            <p className="text-2xl italic font-medium text-[#155dfc]">
              Pride of Saputara
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
