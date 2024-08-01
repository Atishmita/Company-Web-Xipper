import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import Famphoto from "../assets/profile.png";
import { GoAlert } from "react-icons/go";

const employees = [
  {
    id: "X1234567890",
    name: "Abhijeet Agarwal",
    photo: Famphoto,
    department: "Marketing",
    role: "Senior Manager",
    country: "USA",
  },
];

const recentSpendDetails = [
  {
    hotel: "Radisson Blue",
    spend: "₹ 5,400",
    status: "Reimbursed",
  },
  {
    hotel: "Radisson Blue",
    spend: "₹ 5,400",
    status: "Reimbursed",
  },
  {
    hotel: "Radisson Blue",
    spend: "₹ 5,400",
    status: "Reimbursed",
  },
];

const otherDetails = [
  {
    section: "Hotels",
    details: [
      { type: "Room Budget :", value: "Upto ₹6000" },
      { type: "Services budget :", value: "Upto ₹6000" },
      { type: "Meal budget :", value: "Upto ₹6000" },
      { type: "Liquor budget :", value: "Not included" },
    ],
  },
  {
    section: "Flight",
    details: [
      { type: "Class:", value: "Economy" },
      { type: "Budget", value: "₹5000" },
      { type: "Meal budget :", value: "Upto ₹6000" },
    ],
  },
  {
    section: "Car Rent",
    details: [
      { type: "Airport transfers budget : ", value: "Upto ₹6000" },
      { type: "Car Type :", value: "Mini" },
      { type: "Car budget : ", value: "Upto ₹6000" },
    ],
  },
  { section: "Visa", details: [{ type: "Budget", value: "₹2000" }] },
  {
    section: "Services",
    details: [
      { type: "Service ", value: "Included" },
      { type: "Services Budget", value: "Upto ₹1000" },
    ],
  },
];

const MemberDetails = () => {
  return (
    <div className="h-screen overflow-y-auto flex flex-col font-poppins bg-[#F3F2F7]">
      <div className="flex items-center font-semibold text-3xl m-10">
        <IoChevronBackOutline className="mr-4" />
        <h1>Member Details</h1>
      </div>
      <div className="flex flex-col md:flex-row mx-6 md:mx-12 gap-6">
        <div className="flex flex-col w-full md:w-2/5 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            <h2 className="text-xl font-semibold mb-5">Employee</h2>

            {employees.map((employee, index) => (
              <div key={index} className="rounded-lg">
                <div className="flex items-center">
                  <img
                    src={employee.photo}
                    alt={`Employee ${employee.name}`}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="flex flex-col mx-3 gap-1">
                    <h3 className="text-base font-semibold">{employee.name}</h3>
                    <span className="text-xs text-gray-500">
                       {employee.id}
                    </span>
                  </div>
                </div>

                <div className="flex mt-5 gap-20">
                  <div className="flex flex-col">
                    <p className="text-xs font-medium text-black text-opacity-60">
                      Department
                    </p>
                    <p className="text-base font-medium">
                      {employee.department}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-medium text-black text-opacity-60">
                      Role
                    </p>
                    <p className="text-base font-medium">{employee.role}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-medium text-black text-opacity-60">
                      Country
                    </p>
                    <p className="text-base font-medium">{employee.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            <h2 className="text-xl font-semibold mb-5">
              Employee Recent Spend Details
            </h2>

            {recentSpendDetails.map((spend, index) => (
              <div
                key={index}
                className="rounded-2xl border border-black border-opacity-10 p-6 mb-5"
              >
                <div className="flex items-center gap-10">
                  <div className="flex flex-col">
                    <p className="text-xs font-medium text-black text-opacity-60">
                      Hotel
                    </p>
                    <p className="text-base font-medium whitespace-nowrap">
                      {spend.hotel}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-medium text-black text-opacity-60">
                      Spend
                    </p>
                    <p className="text-base font-medium whitespace-nowrap">
                      {spend.spend}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-medium text-black text-opacity-60">
                      Status
                    </p>
                    <p className="text-base font-medium whitespace-nowrap">
                      {spend.status}
                    </p>
                  </div>
                  <div className="text-[#6D38C3] font-medium text-sm whitespace-nowrap">
                    View more
                  </div>
                </div>
              </div>
            ))}
            <div className="text-[#6D38C3] font-medium text-base whitespace-nowrap">
              View all
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-2xl w-full md:w-3/5 p-6">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Spend Rights</h2>
            <FiEdit className="text-2xl text-[#6D38C3] font-medium" />
          </div>
          <div className="flex gap-8 my-2 flex-wrap">
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
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                {otherDetails.map((section, index) =>
                  section.section !== "Visa" &&
                  section.section !== "Services" ? (
                    <div
                      key={index}
                      className="border border-black border-opacity-10 rounded-2xl p-5"
                    >
                      <h3 className="text-xl font-semibold mb-4">
                        {section.section}
                      </h3>
                      <div className="flex gap-2 items-start justify-between">
                        {section.details.map((detail, idx) => (
                          <div key={idx} className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-black text-opacity-60">
                              {detail.type}
                            </p>
                            <p className="text-base font-medium">
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
              <div className="flex flex-row gap-6">
                {otherDetails.map((section, index) =>
                  section.section === "Visa" ||
                  section.section === "Services" ? (
                    <div
                      key={index}
                      className="border border-black border-opacity-10 rounded-2xl p-5 w-full md:w-1/2"
                    >
                      <h3 className="text-xl font-semibold mb-4">
                        {section.section}
                      </h3>
                      <div className="flex gap-2 items-start justify-between">
                        {section.details.map((detail, idx) => (
                          <div key={idx} className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-black text-opacity-60">
                              {detail.type}
                            </p>
                            <p className="text-base font-medium">
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
            <div className="py-4 text-sm text-black text-opacity-60 flex items-center gap-3">
                <GoAlert className="font-semibold text-lg" />
              <p>
                For any queries connect with your Company Admin or Super Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
