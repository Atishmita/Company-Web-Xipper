import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import Famphoto from "../assets/profile.png";

const rolesData = [
  {
    role: "Senior Manage",
    services: ["Services", "Liquor", "Hotel Spend limit "],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    photos: [Famphoto, Famphoto, Famphoto],
  },
  {
    role: "Senior Manage",
    services: ["Services", "Liquor", "Hotel Spend limit"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    photos: [Famphoto, Famphoto, Famphoto],
  },
  {
    role: "Senior Manage",
    services: ["Services", "Liquor", "Hotel Spend limit "],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    photos: [Famphoto, Famphoto, Famphoto],
  },
  {
    role: "Senior Manage",
    services: ["Services", "Liquor", "Hotel Spend limit"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
    photos: [Famphoto, Famphoto, Famphoto],
  },
];

const sectionData = [
  {
    section: "Hotel",
    items: [
      { label: "Room Budget", value: "₹ 6000" },
      { label: "Service Budget", value: "₹ 6000" },
      { label: "Meal Budget", value: "₹ 6000" },
      { label: "Liquor Budget", value: "Enter Price" },
    ],
  },
  {
    section: "Flight",
    items: [
      { label: "Class", value: "Economy" },
      { label: "Flight Budget", value: "₹ 6000" },
      { label: "Meal Budget", value: "₹ 6000" },
    ],
  },
  {
    section: "Car Rent",
    items: [
      { label: "Car Type", value: "Mini" },
      { label: "Airport Transfers Budget", value: "₹ 6000" },
      { label: "Car Budget", value: "₹ 6000" },
    ],
  },
  {
    section: "Services",
    items: [
      { label: "Service Included", value: "No" },
      { label: "Services Budget", value: "Enter Price" },
    ],
  },
  {
    section: "Visa",
    items: [{ label: "Budget", value: "₹ 6000" }],
  },
];

const InviteMembers = () => {
  return (
    <div className="h-screen overflow-y-auto flex flex-col font-poppins bg-[#F3F2F7]">
      <div className="flex items-center font-semibold text-3xl m-10">
        <IoChevronBackOutline className="mr-4" />
        <h1>Invite Member</h1>
      </div>
      <div className="flex flex-col md:flex-row mx-6 md:mx-12 gap-6">
        <div className="flex flex-col w-full md:w-2/5 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            <h2 className="text-xl font-semibold mb-5">Basic Details</h2>
            <div className="mb-4">
              <label
                htmlFor="xipper-id"
                className="block text-base font-medium mb-2"
              >
                Xipper ID
              </label>
              <input
                id="xipper-id"
                type="text"
                placeholder="Enter your Xipper ID"
                className="w-full border border-black border-opacity-10 rounded-lg px-4 py-2.5 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="department"
                className="block text-base font-medium mb-2"
              >
                Department
              </label>
              <input
                id="department"
                type="text"
                placeholder="Enter your Department"
                className="w-full border border-black border-opacity-10 rounded-lg px-4 py-2.5 text-sm"
              />
            </div>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            <div className="grid gap-6">
              {rolesData.map((roleData, index) => (
                <div
                  key={index}
                  className="p-6 border border-opacity-10 rounded-2xl"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-4">
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
                  <div className="flex items-center justify-between">
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
                    <div className="ml-4 text-base font-semibold">
                      18 + Members
                    </div>
                    <div className="ml-4 text-base font-semibold text-[#6D38C3]">
                      View all
                    </div>
                    <button className="bg-[#6D38C3] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#5a2e9f] transition duration-300 ml-auto flex items-center">
                      Added
                      <AiOutlineCheck className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl w-full md:w-3/5 p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold mb-4">Customized Budget</h2>
            <FiEdit className="text-2xl text-[#6D38C3] font-medium" />
          </div>
          <div className="flex gap-8">
            <button className="bg-[#6D38C3] text-white font-semibold py-1 px-6 rounded-2xl text-base">
              Travel
            </button>
            <button className="text-black text-opacity-60 font-semibold py-1 px-6 rounded-2xl border border-opacity-10 text-base">
              Food
            </button>
            <button className="text-black text-opacity-60 font-semibold py-1 px-6 rounded-2xl border border-opacity-10 text-base">
              Services
            </button>
            <button className="text-black text-opacity-60 font-semibold py-1 px-6 rounded-2xl border border-opacity-10 text-base">
              Health
            </button>
            <button className="text-black text-opacity-60 font-semibold py-1 px-6 rounded-2xl border border-opacity-10 text-base">
              Shopping
            </button>
          </div>
          <div className="my-6">
            {sectionData.map((section, index) => (
              <div
                key={index}
                className={`border border-opacity-10 rounded-2xl my-5 px-6 py-4 bg-white ${
                  section.section === "Services"
                    ? "col-span-2"
                    : section.section === "Visa"
                    ? "col-span-1"
                    : ""
                }`}
              >
                <h2 className="text-xl font-semibold mb-2">
                  {section.section}
                </h2>
                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
                    section.section === "Services" || section.section === "Visa"
                      ? "gap-6"
                      : ""
                  }`}
                >
                  {section.items.map((item, idx) => (
                    <div key={idx} className="mb-1">
                      <h3 className="text-base font-medium mb-2 text-black">
                        {item.label}
                      </h3>
                      <div
                        className={`border-2 rounded-lg px-4 py-2 text-sm font-medium ${
                          item.value === "Enter Price"
                            ? "text-black text-opacity-40 border-opacity-10"
                            : "text-black border-black"
                        }`}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-[#6D38C3] text-white font-semibold py-3 px-6 rounded-lg  text-sm">
              Invite User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteMembers;
