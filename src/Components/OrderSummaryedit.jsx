import React from "react";
import { IoChevronBackOutline, IoReturnDownBackOutline } from "react-icons/io5";
import { FaImage, FaVideo, FaMicrophone } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import {
  AiOutlineClose,
  AiOutlineQuestionCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";

import restaurant from "../assets/restaurant.jpeg";

const restaurantData = {
  photo: restaurant,
  name: "Ciao Bella",
  legalEntity: "HOBO RESORT PRIVATE LIMITED",
  address: "House 265, Socal Wado, Mapusa, Assagao, Goa",
  gstin: "30AACCH9933Q1Z5",
  fssai: "20622001000002",
};

const OrderSummaryedit = () => {
  const data = {
    items: [
      { name: "Tiramisu Jar", quantity: 1, price: "Rs. 350" },
      { name: "Margherita Pizza", quantity: 1, price: "Rs. 500" },
    ],
    taxes: [
      { name: "Delivery Fee", value: "Rs. 25" },
      { name: "Taxes", value: "Rs. 45.28" },
      { name: "Restaurant Charges", value: "Rs. 45.28" },
      { name: "Platform Fee", value: "Rs. 45.28" },
    ],
    total: "Rs. 1000",
  };

  const options = [
    { text: "Return Order", icon: <IoReturnDownBackOutline size={24} /> },
    { text: "Cancel Order", icon: <AiOutlineClose size={24} /> },
    { text: "Help and Support", icon: <AiOutlineQuestionCircle size={24} /> },
  ];

  const members = [
    { id: "Name", name: "Abhijit Agarwal" },
    { id: "Xipper ID", name: "XC1234567890" },
  ];

  const contact = [
    { id: "Phone number", name: "+91 8979827477" },
    { id: "Email address", name: "ayushman.b.14@gamil.com" },
  ];

  const address = [
    {
      name: "G-307, Pulak city, Silicon city, Rau, Indore Madhya Pradesh 452012",
    },
  ];
  const payment = [
    { id: "Payment Mode", name: "Online" },
    {
      id: "UPI Id",
      name: "ayushman.b.14@okicici",
    },
    {
      id: "Platform",
      name: "Google Pay",
    },
  ];

  return (
    <div className="h-screen overflow-y-auto flex flex-col font-poppins bg-[#F3F2F7]">
      <div className="flex items-center font-semibold text-3xl m-10">
        <IoChevronBackOutline className="mr-4" />
        <h1>Order Summary</h1>
      </div>
      <div className="flex flex-col md:flex-row mx-6 md:mx-12 gap-14">
        <div className="flex flex-col w-full md:w-2/5 gap-6">
          <h1 className=" font-semibold text-xl ">Order Summary</h1>
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            <div className="flex items-center gap-3">
              <img
                src={restaurantData.photo}
                alt="Restaurant"
                className="w-32 h-32 object-cover rounded-full"
              />
              <div className="flex flex-col gap-5">
                <div className="ml-4">
                  <h2 className="text-base font-medium mb-1">
                    Restaurant Name
                  </h2>
                  <p className="text-sm font-regular">{restaurantData.name}</p>
                </div>
                <div className="ml-4">
                  <h2 className="text-base font-medium mb-1">
                    Legal Entity name
                  </h2>
                  <p className="text-sm font-regular">
                    {restaurantData.legalEntity}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div className="ml-4">
                <h2 className="text-base font-medium mb-1">
                  Restaurant address
                </h2>
                <p className="text-sm font-regular">{restaurantData.address}</p>
              </div>
              <div className="ml-4">
                <h2 className="text-base font-medium mb-1">Restaurant GSTIN</h2>
                <p className="text-sm font-regular">{restaurantData.gstin}</p>
              </div>
              <div className="ml-4">
                <h2 className="text-base font-medium mb-1">Restaurant FSSAI</h2>
                <p className="text-sm font-regular">{restaurantData.fssai}</p>
              </div>
            </div>
          </div>
          <h1 className=" font-semibold text-xl ">Pay Summary</h1>
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full flex flex-col">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#6D38C3] bg-opacity-50 border border-[#6D38C3] text-white rounded-full mr-2">
                    {item.quantity}
                  </div>
                  <span className="font-medium text-base mx-2">X</span>
                  <span className="font-medium text-base">{item.name}</span>
                </div>
                <span className="font-medium text-base">{item.price}</span>
              </div>
            ))}
            {data.taxes.map((tax, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <span className="font-medium text-base">{tax.name}</span>
                <span className="font-medium text-base">{tax.value}</span>
              </div>
            ))}
            <div className="my-3 py-2 border-t border-b border-black border-opacity-10">
              <div className="flex items-center justify-between py-2 font-semibold text-base text-[#6D38C3]">
                <span>Amount To Pay</span>
                <span>{data.total}</span>
              </div>
            </div>
            <div className="pt-4 flex justify-center">
              <button className=" text-[#6D38C3] text-2xl font-semibold">
                Download Invoice
              </button>
            </div>
          </div>
          <h1 className=" font-semibold text-xl  ">Help and Support</h1>
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full flex flex-col mb-10">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border border-opacity-10 rounded-lg mb-3 px-4"
              >
                <div className="flex items-center font-medium text-black text-opacity-60">
                  <div className="mr-3">{option.icon}</div>
                  <span>{option.text}</span>
                </div>
                <AiOutlineArrowRight
                  className="text-black text-opacity-60"
                  size={20}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full md:w-3/5 gap-6">
          <h1 className=" font-semibold text-xl ">Customer</h1>
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            {members.map((member) => (
              <div
                key={member.id}
                className=" p-2  rounded-lg flex items-center"
              >
                <div className="text-base font-semibold">{member.id}</div>
                <div>: </div>
                <div className="text-base font-semibold">{member.name}</div>
              </div>
            ))}
          </div>
          <h1 className=" font-semibold text-xl ">Contact information</h1>
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            {contact.map((member) => (
              <div
                key={member.id}
                className=" p-2  rounded-lg flex items-center"
              >
                <div className="text-base font-semibold">{member.id}</div>
                <div>: </div>
                <div className="text-base font-semibold">{member.name}</div>
              </div>
            ))}
          </div>
          <h1 className=" font-semibold text-xl ">Shipping details</h1>
          <div className="p-6 bg-white shadow-lg rounded-2xl w-full">
            <div className="mb-2">
              <button className="bg-black bg-opacity-10 text-black text-opacity-40 font-semibold py-1 px-4 rounded">
                Work
              </button>
            </div>
            {address.map((member) => (
              <div
                key={member.id}
                className=" p-2  rounded-lg flex items-center"
              >
                <div className="text-base font-semibold">{member.name}</div>
              </div>
            ))}
          </div>
          <h1 className=" font-semibold text-xl ">
            Transaction detail emplyee
          </h1>

          <div className="p-6 bg-white shadow-lg rounded-2xl w-full flex flex-col ">
            <div className="items-center justify-between flex ">
              <p className="text-[#FE830C] font-semibold text-xl">
                Payment not reimbursed yet by the comapny
              </p>
              <button className="bg-[#6D38C3] text-white font-semibold text-base px-4 py-2 rounded-lg">Pay now</button>
            </div>
          </div>
          <h1 className=" font-semibold text-xl ">
            Reimbursement detail Company
          </h1>

          <div className="px-6 py-2 bg-white shadow-lg rounded-2xl w-full flex flex-col ">
            <div className="flex items-center justify-between">
              <div className="p-4 text-xl font-semibold text-[#6D38C3]">
                Payment Reimbursement
              </div>
              <button className="bg-[#03D603] py-1 px-4 rounded-lg text-white font-semibold text-base">
                Completed
              </button>
            </div>
            {payment.map((option, index) => (
              <div
                key={option.name}
                className={`p-4 ${
                  index < payment.length - 1
                    ? "border-b border-black border-opacity-10"
                    : ""
                } flex items-center justify-between text-black text-opacity-60 text-base font-semibold`}
              >
                <div className="text-base font-semibold">{option.id}</div>
                <div className="text-base font-semibold">{option.name}</div>
              </div>
            ))}
          </div>
          <h1 className=" font-semibold text-xl ">Rate your Order</h1>

          <div className="p-6 bg-white shadow-lg rounded-2xl w-full flex flex-col mb-10">
            <div className="flex items-center mb-4 gap-2">
              {[...Array(5)].map((_, index) => (
                <CiStar key={index} className="w-8 h-8" />
              ))}
            </div>
            <div className="mb-6">
              <p className="text-sm font-medium mb-2 text-black , text-opacity-60 pb-2">
                Upload photos/videos related to the product like Unboxing,
                Installation, Product usage, etc.
              </p>
              <div className="flex space-x-4 ">
                <button className="flex items-center space-x-3  text-[#6D38C3] font-medium py-2 px-4 rounded-md border border-black border-opacity-10">
                  <span>Add Photo</span>
                  <FaImage className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-3  text-[#6D38C3] font-medium py-2 px-4 rounded-md border border-black border-opacity-10">
                  <span>Add Video</span>
                  <FaVideo className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-3  text-[#6D38C3] font-medium py-2 px-4 rounded-md border border-black border-opacity-10">
                  <span>Add Audio</span>
                  <FaMicrophone className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-base font-medium mb-3">Write a Review</p>
              <textarea
                rows="4"
                className="w-full p-3 border border-black border-opacity-10 rounded-lg text-sm"
                placeholder="How is this product ? What do you like ? What do you hate ?"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryedit;
