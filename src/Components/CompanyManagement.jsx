import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import Famphoto from "../assets/profile.png";
import { FaPlus } from "react-icons/fa6";

const Details = [
  {
    XipperID: "X1234567890",
    personImage: Famphoto,
    Fullname: "Abhijeet Agarwal",
    Department: "HR Internship",
    rights: "Super Admin",
    joined: "27th July , 2024",
    MonthlySpend: "₹ 10,000",
  },
  {
    XipperID: "X1234567890",
    personImage: Famphoto,
    Fullname: "Abhijeet Agarwal",
    Department: "HR Internship",
    rights: "Super Admin",
    joined: "27th July , 2024",
    MonthlySpend: "₹ 10,000",
  },
  {
    XipperID: "X1234567890",
    personImage: Famphoto,
    Fullname: "Abhijeet Agarwal",
    Department: "HR Internship",
    rights: "Super Admin",
    joined: "27th July , 2024",
    MonthlySpend: "₹ 10,000",
  },
  {
    XipperID: "X1234567890",
    personImage: Famphoto,
    Fullname: "Abhijeet Agarwal",
    Department: "HR Internship",
    rights: "Super Admin",
    joined: "27th July , 2024",
    MonthlySpend: "₹ 10,000",
  },
  {
    XipperID: "X1234567890",
    personImage: Famphoto,
    Fullname: "Abhijeet Agarwal",
    Department: "HR Internship",
    rights: "Super Admin",
    joined: "27th July , 2024",
    MonthlySpend: "₹ 10,000",
  },
  {
    XipperID: "X1234567890",
    personImage: Famphoto,
    Fullname: "Abhijeet Agarwal",
    Department: "HR Internship",
    rights: "Super Admin",
    joined: "27th July , 2024",
    MonthlySpend: "₹ 10,000",
  },
  {
    XipperID: "X1234567890",
    personImage: Famphoto,
    Fullname: "Abhijeet Agarwal",
    Department: "HR Internship",
    rights: "Super Admin",
    joined: "27th July , 2024",
    MonthlySpend: "₹ 10,000",
  },
  {
    XipperID: "X1234567890",
    personImage: Famphoto,
    Fullname: "Abhijeet Agarwal",
    Department: "HR Internship",
    rights: "Super Admin",
    joined: "27th July , 2024",
    MonthlySpend: "₹ 10,000",
  },
];

const CompanyManagement = () => {


  return (
    <div className="h-screen overflow-y-hidden flex flex-col font-poppins">
      <div
        className="w-full relative h-full flex-grow overflow-y-auto"
        style={{ backgroundColor: "#F3F2F7" }}
      >
        <div className="flex items-center  justify-between mx-10 mt-10 mb-5">
          <div className="font-semibold text-3xl">
            <h1>Company Management</h1>
          </div>
          <div className="flex gap-6 pl-10">
            <span
              className="px-4 py-3  flex items-center flex-grow border-gray-300 border rounded-2xl focus:outline-none"
              style={{ background: "#6D38C3" }}
            >
              <FaPlus className="mr-2 text-white" />
              <span className="text-white text-sm font-medium whitespace-nowrap">
                Roles and Permissions
              </span>
            </span>
            <span
              className="px-4 py-3  flex items-center flex-grow border-gray-300 border rounded-2xl focus:outline-none"
              style={{ background: "#6D38C3" }}
            >
              <span className="text-white text-sm font-medium whitespace-nowrap">
                Invite Users
              </span>
              <FaPlus className="ml-2 text-white" />
            </span>
          </div>
        </div>
        <div className=" flex justify-between items-center mx-10 mb-5 ">
          <div className="flex gap-6 ">
            <span className="py-2 px-6  flex items-center flex-grow  rounded-2xl focus:outline-none bg-[#6D38C3]">
              <FaPlus className="mr-3 text-white" />
              <span className=" text-white  text-sm font-semibold whitespace-nowrap">
                All
              </span>
            </span>
            <span className="py-2 px-6  flex items-center flex-grow border-gray-300 border rounded-2xl focus:outline-none bg-white ">
              <FaPlus className="mr-3 text-black text-opacity-60" />
              <span className=" text-black text-opacity-60 text-sm font-semibold whitespace-nowrap">
                Departments
              </span>
            </span>
          </div>
          <div className="flex gap-4 pl-20">
            <span className="relative h-full">
              <input
                type="text"
                placeholder="Search your employees"
                className="bg-white border-gray-300 border z-50 h-10 rounded-2xl pl-16 focus:outline-none text-xs"
                style={{ width: "545px" }}
              />
              <span
                className="absolute left-4"
                style={{ top: "10px", fontSize: "24px" }}
              >
                <IoSearch color="gray" size={20} />
              </span>
              <span
                className="absolute right-4"
                style={{ top: "10px", fontSize: "24px" }}
              >
                <IoMicOutline color="gray" size={20} />
              </span>
            </span>
          </div>
          <div className="flex gap-6 pl-10">
            <span className="py-2 px-6  flex items-center flex-grow border-gray-300 border rounded-2xl focus:outline-none bg-white ">
              <FaPlus className="mr-3 text-black text-opacity-60" />
              <span className=" text-black text-opacity-60 text-sm font-semibold whitespace-nowrap">
                Requests
              </span>
              <div className="ml-3 flex items-center justify-center w-6 h-6 bg-[#6D38C3] text-white text-xs font-semibold rounded-full">
                2
              </div>
            </span>
            <span className="py-2 px-6  flex items-center flex-grow border-gray-300 border rounded-2xl focus:outline-none bg-white ">
              <FaPlus className="mr-3 text-black text-opacity-60" />
              <span className=" text-black text-opacity-60 text-sm font-semibold whitespace-nowrap">
                Invited
              </span>
            </span>
          </div>
        </div>
        <div className="w-full mx-10 pt-0.5 pb-10">
          <div className="grid grid-cols-6 py-4 font-medium text-base text-black text-opacity-60 border-b border-black border-opacity-10">
            <div>Xipper ID</div>
            <div>Full name</div>
            <div>Department</div>
            <div>Rights</div>
            <div>Joined</div>
            <div>Monthly spend</div>
          </div>
          {Details.map((order, index) => (
            <div key={index}>
              <div className="grid grid-cols-6 gap-1 items-center py-4  font-semibold text-base text-black text-opacity-70 border-b border-black border-opacity-10">
                <div className="flex items-center">
                  <img
                    src={order.personImage}
                    alt={order.XipperID}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {order.XipperID}
                </div>
                <div className="overflow-hidden">{order.Fullname}</div>
                <div className="overflow-hidden">{order.Department}</div>
                <div className="overflow-hidden">{order.rights}</div>
                <div className="overflow-hidden">{order.joined}</div>
                <div className="overflow-hidden">{order.MonthlySpend}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyManagement;