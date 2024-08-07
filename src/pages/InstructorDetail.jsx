import React from "react";
import {
  FaStar,
  FaFlag,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaLanguage,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import {
  AiOutlineMessage,
  AiOutlineBook,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const TutorCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-3 sm:p-4 md:p-5 lg:p-6 animate-fade-in max-w-3xl mx-auto my-4 sm:my-6 md:my-8">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-sm object-cover shadow-md mb-4 lg:mb-0"
            src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109?s=200
"
            alt="Tutor"
          />
          <div className="w-full lg:ml-0 lg:mr-6">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start flex-wrap mt-3">
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-md mr-2  mb-2 lg:mb-0">
                    FEATURED
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold">Clair R.</h2>
                  <FaFlag className="ml-2 text-blue-500" />
                </div>
                <p className="text-sm sm:text-base text-gray-500 flex items-center justify-center lg:justify-start mt-1 sm:mt-2">
                  <FaChalkboardTeacher className="mr-1" /> United Kingdom
                </p>
                <p className="text-sm sm:text-base text-gray-500 flex items-center justify-center lg:justify-start mt-1 sm:mt-2">
                  <FaUserGraduate className="mr-1" /> Lessons 218 Students 23
                </p>
                <p className="text-sm sm:text-base text-gray-500 flex items-center justify-center lg:justify-start mt-1 sm:mt-2">
                  <FaLanguage className="mr-1" /> English Native | Italian A2
                </p>
              </div>
              <div className="text-center lg:text-right mt-3 lg:mt-0">
                <div className="flex items-center justify-center lg:justify-end">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-1 text-lg sm:text-xl font-bold">5.0</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">Ratings: 103</p>
                <p className="text-lg sm:text-xl font-bold mt-1 sm:mt-2">
                  £1,549.83 per hour
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mt-3 sm:mt-4 text-center lg:text-left">
              I am a professional TESOL qualified English teacher from the UK
              with 11 years of classroom experience and more than 8 years of
              online teaching experience. I specialize in teaching English to
              non-native speakers and preparing students for exams such as IELTS
              and TOEFL.
            </p>
            <div className="flex items-center justify-center lg:justify-start mt-3 sm:mt-4">
              <FaTwitter className="text-blue-500 mr-3 sm:mr-4 cursor-pointer" />
              <FaLinkedin className="text-blue-700 mr-3 sm:mr-4 cursor-pointer" />
              <FaFacebook className="text-blue-600 cursor-pointer" />
            </div>
            <div className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 md:gap-4">
              <button className="col-span-2 sm:flex-grow lg:flex-grow-0 bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <AiOutlineBook className="mr-1" />
                Book Free Trial
              </button>
              <Link to="chat">
                <button className="bg-gray-200 text-gray-700 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <AiOutlineMessage className="mr-1" />
                  Message
                </button>
              </Link>
              <button className="bg-yellow-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <AiOutlineEdit className="mr-1" />
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <AiOutlineDelete className="mr-1" />
                Delete
              </button>
            </div>
            <div className="mt-6 sm:mt-7 md:mt-8">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center lg:text-left">
                Reviews
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[1, 2].map((_, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 bg-gray-100 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center justify-center lg:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-500 text-sm sm:text-base"
                        />
                      ))}
                      <span className="ml-2 text-xs sm:text-sm font-medium">
                        by {index === 0 ? "John Doe" : "Jane Smith"}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2 text-center lg:text-left">
                      {index === 0
                        ? "Clair is an excellent tutor! She helped me improve my English skills and prepare for the IELTS exam. Her lessons are well-structured and engaging."
                        : "I highly recommend Clair as an English tutor. She is very patient and knowledgeable. My confidence in speaking English has greatly improved thanks to her lessons."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
