import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";

const AboutSection = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutSections = async () => {
      try {
        const response = await axiosInstance.get("/about-sections");
        if (response.data.success) {
          setSections(response.data.data);
        } else {
          setError("Failed to fetch about sections");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutSections();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-33 px-6 md:px-16">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-33 px-6 md:px-16">
        <div className="text-center">
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

  if (sections.length === 0) {
    return (
      <section className="bg-white py-33 px-6 md:px-16">
        <div className="text-center">
          <p>No about sections found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-33 px-6 md:px-16">
      {sections.map((section, index) => (
        <div key={section.id}>
          <div className="text-center mb-12">
            <h6 className="text-2xl text-yellow-700 font-semibold">
              {section.title}
            </h6>
            <h3 className="text-4xl text-blue-900 font-semibold">
              Star Holiday Resort is the 1st & Only <br /> Government Approved
              saputara hotels.
            </h3>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Image on right for even index, left for odd index */}
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/2 relative flex justify-center">
                  {section.image_url && (
                    <img
                      src={section.image_url}
                      alt={section.title}
                      className="w-full h-110 rounded-lg shadow-lg object-cover"
                      style={{ height: `${section.height}px` }}
                    />
                  )}
                </div>
                <div className="md:w-1/2">
                  <p
                    className="text-gray-700 leading-relaxed mt-4"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="md:w-1/2">
                  <p
                    className="text-gray-700 leading-relaxed mt-4"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
                <div className="md:w-1/2 relative flex justify-center">
                  {section.image_url && (
                    <img
                      src={section.image_url}
                      alt={section.title}
                      className="w-full h-110 rounded-lg shadow-lg object-cover"
                      style={{ height: `${section.height}px` }}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
