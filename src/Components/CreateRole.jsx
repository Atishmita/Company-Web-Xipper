import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { FiEdit, FiSearch, FiFilter } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import Famphoto from "../assets/profile.png";
import { FaAngleDown } from "react-icons/fa6";

const sectionData = [
  {
    section: "Hotel",
    items: [
      { label: "Room Budget", value: "Enter Price" },
      { label: "Service Budget", value: "Enter Price" },
      { label: "Meal Budget", value: "Enter Price" },
      { label: "Liquor Budget", value: "Enter Price" },
    ],
  },
  {
    section: "Flight",
    items: [
      { label: "Class", value: "Choose Class" },
      { label: "Flight Budget", value: "Enter Price" },
      { label: "Meal Budget", value: "Enter Price" },
    ],
  },
  {
    section: "Car Rent",
    items: [
      { label: "Car Type", value: "Choose Type" },
      { label: "Airport Transfers Budget", value: "Enter Price" },
      { label: "Car Budget", value: "Enter Price" },
    ],
  },
  {
    section: "Services",
    items: [
      { label: "Service Included", value: "Yes or No" },
      { label: "Services Budget", value: "Enter Price" },
    ],
  },
  {
    section: "Visa",
    items: [{ label: "Budget", value: "Enter Price" }],
  },
];

const members = [
  {
    id: "X1234567890",
    name: "Abhijeet Agarwal",
    photo: Famphoto,
  },
  {
    id: "X9876543210",
    name: "John Doe",
    photo: Famphoto,
  },
  {
    id: "X9876543220",
    name: "John Doe",
    photo: Famphoto,
  },
  {
    id: "X9876545210",
    name: "John Doe",
    photo: Famphoto,
  },
  {
    id: "X98765434210",
    name: "John Doe",
    photo: Famphoto,
  },
  {
    id: "X98765433210",
    name: "John Doe",
    photo: Famphoto,
  },
];

const CreateRole = () => {
  const [addedMembers, setAddedMembers] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = (id) => {
    setAddedMembers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen overflow-y-auto flex flex-col font-poppins bg-[#F3F2F7]">
      <div className="flex items-center font-semibold text-3xl m-10">
        <IoChevronBackOutline className="mr-4" />
        <h1>Create Role</h1>
      </div>
      <div className="flex flex-col md:flex-row mx-6 md:mx-12 gap-6">
        <div className="flex flex-col w-full md:w-2/5 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            <h2 className="text-xl font-semibold mb-5">Role Overview</h2>
            <div className="mb-4">
              <label
                htmlFor="role-name"
                className="block text-base font-medium mb-2"
              >
                Role Name
              </label>
              <input
                id="role-name"
                type="text"
                placeholder="Enter Role name"
                className="w-full border border-black border-opacity-10 rounded-lg px-4 py-2.5 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="role-description"
                className="block text-base font-medium mb-2"
              >
                Role Description
              </label>
              <textarea
                id="role-description"
                placeholder="Provide some description about the role"
                className="w-full border border-black border-opacity-10 rounded-lg px-4 py-4 text-sm resize-none h-40"
              />
            </div>
          </div>

          {/* Add Members Section */}
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            <h2 className="text-xl font-semibold mb-5">Add Members</h2>

            <div className="flex items-center mb-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search members"
                  className="w-full pl-4 pr-10 py-2 border rounded-2xl text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-opacity-60" />
              </div>

              <button className="ml-4 flex items-center px-4 py-2 border rounded-lg text-black text-opacity-60 text-base">
                <FiFilter className="mr-2  text-[#6D38C3]" />
                Filter
                <FaAngleDown className="ml-2  " />
              </button>
            </div>

            <div className="space-y-4">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 border rounded-2xl"
                >
                  <div className="flex items-center">
                    <img
                      src={member.photo}
                      alt={`Photo of ${member.name}`}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <div className="ml-4">
                      <h3 className="text-base font-semibold">{member.name}</h3>
                      <span className="text-xs text-black text-opacity-60">
                        {" "}
                        {member.id}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAdd(member.id)}
                    className={`text-sm font-medium py-2 px-4 rounded-lg flex items-center ${
                      addedMembers.has(member.id)
                        ? "bg-[#6D38C3] text-white"
                        : "bg-[#6D38C3] text-white"
                    }`}
                  >
                    {addedMembers.has(member.id) ? (
                      <>
                        Added
                        <TiTick className="ml-2" />
                      </>
                    ) : (
                      <>Add</>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl w-full md:w-3/5 p-6">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Customized Budget</h2>
            <FiEdit className="text-2xl text-[#6D38C3] font-medium" />
          </div>
          <div className="flex gap-8 py-3">
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
                className="border border-opacity-10 rounded-2xl my-5 px-6 py-4 bg-white"
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
                      <h3 className="text-base font-medium mb-2">
                        {item.label}
                      </h3>
                      <div
                        className={`border-2 ${
                          section.section === "Services" ||
                          section.section === "Visa"
                            ? "border-opacity-10 text-black text-opacity-40"
                            : "border-black border-opacity-10"
                        } rounded-lg px-4 py-2 text-sm font-medium text-black text-opacity-40`}
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
            <button className="bg-[#6D38C3] text-white font-semibold py-3 px-6 rounded-lg text-sm">
              Create Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRole;
