import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft } from "lucide-react";

const SellerPage = () => {
  const [isActive, setisActive] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown menu
  const [selectedOption, setSelectedOption] = useState(
    "Choose your respective type"
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setisActive(false);
  };
  const radioStyle = {
    accentColor: "#6D38C3", // Sets the color of the radio button when checked
    borderColor: "#6D38C3", // Border color of the radio button
    ringColor: "#6D38C3", // Focus ring color
    width: "18px", // Width of the radio button
    height: "18px", // Height of the radio button
    margin: "2px", // Optional margin around the radio button
  };
  return (
    <div className="flex gap-10">
      {/* Left panel  */}
      <div
        className="mt-10 ml-10  rounded-3xl   pt-5 pl-7 text-xl font-bold w-[23%]"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        Business Onboarding
        <div className="relative mt-7 space-y-9 pb-10">
          {/* Vertical lines */}
          <div
            className="w-1 h-9 rounded-full absolute top-6 left-2"
            style={{ backgroundColor: "#6D38C3" }}
          />
          <div className="flex items-center gap-3">
            <div
              className="rounded-full font-medium w-5 h-5 text-xs items-center flex text-white justify-center"
              style={{ backgroundColor: "#6D38C3" }}
            >
              1
            </div>
            <div className="font-semibold text-base">Type of Company</div>
          </div>
          {/* Vertical lines */}
          <div className="w-1 h-9 bg-gray-300 rounded-full absolute top-12 left-2" />
          <div className="flex items-center gap-3">
            <div className="rounded-full font-medium w-5 h-5 text-xs items-center flex text-gray-300 justify-center bg-gray-400">
              2
            </div>
            <div className="font-semibold text-base">Business CIN number</div>
          </div>
          {/* Vertical lines */}
          <div className="w-1 h-9 bg-gray-300 rounded-full absolute top-[109px] left-2" />
          <div className="flex items-center gap-3">
            <div className="rounded-full font-medium w-5 h-5 text-xs items-center flex text-gray-300 justify-center bg-gray-400">
              3
            </div>
            <div className="font-semibold text-base">Business TAN number</div>
          </div>
          {/* Vertical lines */}
          <div className="w-1 h-9 bg-gray-300 rounded-full absolute top-[169px] left-2" />
          <div className="flex items-center gap-3">
            <div className="rounded-full font-medium w-5 h-5 text-xs items-center flex text-gray-300 justify-center bg-gray-400">
              4
            </div>
            <div className="font-semibold text-base">
              Business GSTIN and PAN
            </div>
          </div>
          {/* Vertical lines */}
          <div className="w-1 h-9 bg-gray-300 rounded-full absolute top-[229px] left-2" />
          <div className="flex items-center gap-3">
            <div className="rounded-full font-medium w-5 h-5 text-xs items-center flex text-gray-300 justify-center bg-gray-400">
              5
            </div>
            <div className="font-semibold text-base">Business Udyog Aadhar</div>
          </div>
          {/* Vertical lines */}
          <div className="w-1 h-9 bg-gray-300 rounded-full absolute top-[289px] left-2" />
          <div className="flex items-center gap-3">
            <div className="rounded-full font-medium w-5 h-5 text-xs items-center flex text-gray-300 justify-center bg-gray-400">
              6
            </div>
            <div className="font-semibold text-base">Business Bank Details</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full font-medium w-5 h-5 text-xs items-center flex text-gray-300 justify-center bg-gray-400">
              7
            </div>
            <div className="font-semibold text-base">Business Domain</div>
          </div>
        </div>
      </div>

      {/* Right panel  */}
      <div
        className=" relative mt-10 ml-10  rounded-3xl w-[65%]   pt-5 pl-7 text-xl font-bold"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="flex gap-3 items-center cursor-pointer">
          <div>
            <ChevronLeft />
          </div>
          <div className="font-semibold text-lg">Back</div>
        </div>

        <div className="mt-10 space-y-1">
          <div className="font-bold text-xl">Type of your Company</div>
          <div className="text-gray-500 text-sm font-medium w-96">
            Entering your type of company is mandatory for setting up your
            account
          </div>
        </div>

        <div className="mt-7">
          <div className="text-base font-semibold">Company type</div>

          <div className="flex gap-2 mt-2">
            <div class="">
              <button
                type="button"
                class="inline-flex w-[350px] justify-between  items-center text-gray-400 gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold shadow-sm border-2 border-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isActive}
                aria-haspopup="true"
                onClick={() => setisActive(!isActive)}
              >
                {selectedOption}
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              {isActive && (
                <div
                  ref={dropdownRef}
                  className="mt-1 w-[350px] items-center gap-x-1.5 rounded-xl bg-white px-4 py-3 shadow-sm border-2 border-gray-300 space-y-2"
                >
                  <div class="flex gap-1">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700   dark:focus:ring-offset-gray-800"
                      id="sole-proprietor"
                      style={radioStyle}
                      onClick={() => handleOptionClick("Sole proprietor")}
                    />
                    <label for="hs-default-radio" class="text-sm ms-2">
                      Sole proprietor
                    </label>
                  </div>

                  <div class="flex gap-1">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700   dark:focus:ring-offset-gray-800"
                      id="private-limited"
                      style={radioStyle}
                      onClick={() => handleOptionClick("Private Limited")}
                    />
                    <label for="hs-checked-radio" class="text-sm ms-2">
                      Private Limited
                    </label>
                  </div>

                  <div class="flex gap-1">
                    <input
                      type="radio"
                      name="hs-default-radio"
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700   dark:focus:ring-offset-gray-800"
                      id="llp"
                      style={radioStyle}
                      onClick={() => handleOptionClick("LLP")}
                    />
                    <label for="hs-checked-radio" class="text-sm ms-2 ">
                      LLP
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                className="align-middle select-none font-sans font-semibold border-2 border-gray-300 text-center cursor-pointer text-sm py-2 px-4 rounded-lg  text-gray-400"
                type="button"
              >
                Verify
              </button>
            </div>
          </div>
        </div>

        <div className=" absolute bottom-7 right-7 ">
          <button
            class="align-middle select-none font-medium text-center text-sm py-3 px-6 rounded-2xl text-white"
            type="button"
            style={{ backgroundColor: "#6D38C3" }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
