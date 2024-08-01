import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMicOutline, IoChevronBackOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Famphoto from "../assets/profile.png";
import { FiEdit } from "react-icons/fi";

const rolesData = [
  {
    role: "Senior Manage",
    services: ["Services", "Liquor", "Hotel Spend limit : ₹ 10,000"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    photos: [Famphoto, Famphoto, Famphoto],
  },
  {
    role: "Senior Manage",
    services: ["Services", "Liquor", "Hotel Spend limit : ₹ 10,000"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    photos: [Famphoto, Famphoto, Famphoto],
  },
  {
    role: "Senior Manage",
    services: ["Services", "Liquor", "Hotel Spend limit : ₹ 10,000"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    photos: [Famphoto, Famphoto, Famphoto],
  },
  {
    role: "Senior Manage",
    services: ["Services", "Liquor", "Hotel Spend limit : ₹ 10,000"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    photos: [Famphoto, Famphoto, Famphoto],
  },
];

const RolesandPermissions = () => {
  return (
    <div className="h-screen overflow-y-hidden flex flex-col font-poppins">
      <div
        className="w-full relative h-full flex-grow overflow-y-auto"
        style={{ backgroundColor: "#F3F2F7" }}
      >
        <div className="flex items-center justify-between mx-10 mt-10 mb-5">
          <div className="flex items-center font-semibold text-3xl">
            <IoChevronBackOutline className="mr-4" />
            <h1>Roles and Permissions</h1>
          </div>
          <div className="flex gap-6 pl-10">
            <span
              className="px-4 py-3 flex items-center flex-grow border-gray-300 border rounded-2xl focus:outline-none"
              style={{ background: "#6D38C3" }}
            >
              <span className="text-white text-sm font-medium whitespace-nowrap">
                Create new role
              </span>
              <FaPlus className="ml-4 text-white" />
            </span>
            <span
              className="px-4 py-3 flex items-center flex-grow border-gray-300 border rounded-2xl focus:outline-none"
              style={{ background: "#6D38C3" }}
            >
              <span className="text-white text-sm font-medium whitespace-nowrap">
                Invite Users
              </span>
              <FaPlus className="ml-4 text-white" />
            </span>
          </div>
        </div>

        <div className="mx-10 mt-10 mb-10 grid grid-cols-2 gap-6 w-3/4">
          {rolesData.map((roleData, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-2xl">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4  ">
                  <h2 className="text-xl font-semibold mb-2">
                    Role: {roleData.role}
                  </h2>
                  <FiEdit className="text-2xl text-[#6D38C3] font-medium" />
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex flex-wrap gap-4 items-start">
                    {roleData.services.map((service, i) => (
                      <div
                        key={i}
                        className="border border-black border-opacity-10 rounded-lg text-sm font-medium whitespace-nowrap text-black text-opacity-60 inline-flex items-center px-6 py-2"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                  <button
                    className="text-[#6D38C3] text-sm font-semibold ml-4"
                    style={{
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    View all
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-black text-sm">
                  <span className="font-medium">Description:</span>{" "}
                  {roleData.description}
                </p>
              </div>
              {/* Photos and Members */}
              <div className="flex items-center">
                <div className="relative flex -space-x-4">
                  {roleData.photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo}
                      alt={`Member ${i + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      style={{ zIndex: roleData.photos.length - i }}
                    />
                  ))}
                </div>
                <div className="ml-4 text-base font-semibold">18 + Members</div>
                <div className="ml-4 text-base font-semibold text-[#6D38C3]">
                  View all
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolesandPermissions;
