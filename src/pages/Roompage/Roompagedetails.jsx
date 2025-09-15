import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel"; // Assuming you have this component

// Room data in JSON format
const roomData = {
  "6-bedded-suite": {
    id: "6-bedded-suite",
    title: "6 Bedded Super Deluxe AC Family Suite",
    description:
      "Perfect for group vacations, this suite brings everyone together while ensuring ample space and convenience for all.",
    detailedDescription: [
      "Traveling with a big family or group? Our 6-Bedded Super Deluxe AC Suite offers the perfect combination of space, privacy, and comfort.",
      "With options of twin size beds, this large suite includes a common area, ideal for relaxing or socializing after a day of sightseeing.",
      "Designed with modern interiors, the suite also features air-conditioning, cozy seating, fresh linens, and essential amenities to make your stay comfortable and memorable.",
    ],
    images: [sixbed, bed61, bed62, bedimge], // Import these at the top
    price: 12000,
    size: "100 ft²",
    bedConfiguration:
      "3 double-bedded rooms, 1 two-bedded room, and 1 four-bedded room",
    amenities: [
      "Gallery",
      "2 Star Super delux Ac Non Ac Rooms",
      "Ample Parking",
      "Pure Veg Family Restaurant",
      "Hot Running Water",
      "WiFi",
      "Air Conditioning",
      "Room Service",
      "TV with Satellite Channels",
    ],
    maxOccupancy: 6,
    roomFeatures: [
      "Separate Living Area",
      "Private Bathroom",
      "Minibar",
      "Safe Deposit Box",
      "Telephone",
      "Work Desk",
    ],
  },
  "double-room": {
    id: "double-room",
    title: "Double Deluxe Room",
    description:
      "A comfortable room perfect for couples or business travelers.",
    detailedDescription: [
      "Our Double Deluxe Room offers a perfect blend of comfort and functionality.",
      "Featuring a queen-sized bed with premium linens, this room is designed for a restful stay.",
      "The room includes a work desk, perfect for business travelers, and a cozy sitting area.",
    ],
    // images: [
    //   /* import and add image paths here */
    // ],
    price: 6000,
    size: "45 ft²",
    bedConfiguration: "1 queen-sized bed",
    amenities: [
      "Air Conditioning",
      "WiFi",
      "TV with Satellite Channels",
      "Minibar",
      "Safe Deposit Box",
      "Telephone",
      "Private Bathroom",
      "Room Service",
    ],
    maxOccupancy: 2,
    roomFeatures: [
      "Work Desk",
      "Sitting Area",
      "Blackout Curtains",
      "Hairdryer",
      "Complimentary Toiletries",
    ],
  },
  // Add more room types as needed
};

const RoomDetailsPage = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchRoomData = () => {
      const roomDetails = roomData[roomId];
      if (roomDetails) {
        setRoom(roomDetails);
      }
      setLoading(false);
    };

    fetchRoomData();
  }, [roomId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!room) {
    return (
      <div className="flex justify-center items-center h-screen">
        Room not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image Carousel */}
          <div className="h-96">
            <ImageCarousel images={room.images} interval={4000} />
          </div>

          {/* Room Details */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {room.title}
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              ₹{room.price}/night
            </p>

            <p className="text-gray-600 italic border-l-4 border-blue-500 pl-4 mb-6">
              "{room.description}"
            </p>

            {/* Detailed Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                About This Room
              </h2>
              {room.detailedDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-3 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Room Specifications */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Room Specifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Size:</span>
                    <span className="font-medium">{room.size}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Bed Configuration:</span>
                    <span className="font-medium">{room.bedConfiguration}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Max Occupancy:</span>
                    <span className="font-medium">
                      {room.maxOccupancy} people
                    </span>
                  </li>
                </ul>
              </div>

              {/* Amenities */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Amenities
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Room Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Room Features
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {room.roomFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 p-3 rounded-lg"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Button */}
            <div className="text-center pt-6 border-t border-gray-200">
              <button
                onClick={() =>
                  navigate("/bookform", {
                    state: {
                      roomId: room.id,
                      roomType: room.title,
                      price: room.price,
                    },
                  })
                }
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Book This Room - ₹{room.price}/night
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
