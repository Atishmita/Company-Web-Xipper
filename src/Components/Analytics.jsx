import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCart, BsLightning } from "react-icons/bs";
import { MdFlight } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { TbCategory2 } from "react-icons/tb";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { BarChart } from "@mui/x-charts/BarChart";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Analytics() {
  const [type, setType] = React.useState("Monthly");
  const [type2, setType2] = React.useState("Monthly");
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const nowMonth = new Date().getMonth();

  const days =
    nowMonth == 1
      ? [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
        ]
      : nowMonth == 3 || nowMonth == 5 || nowMonth == 8 || nowMonth == 10
      ? [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
        ]
      : [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
        ];

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleDateChange = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  };
  const [paymentMode, setPaymentMode] = React.useState("Mode of Payment");
  const [showPaymentDropdown, setShowPaymentDropdown] = React.useState(false);

  const paymentModes = [
    "Credit / Debit Card",
    "UPI Payment",
    "Pay Later",
    "Gift Cards",
    "Reward points",
    "Net Banking",
    "Wallet",
    "Company wallet",
    "Pay at destination",
  ];

  const [DepartmentChoice, setDepartmentChoice] = React.useState("Tech Department");
  const [showDepartmentDropdown, setShowDepartmentDropdown] = React.useState(false);

  const DepartmentModes = [
    "All Departments",
    "Tech Department",
    "Design Department",
    "Marketing Department",
    "Human Resource Department",
    "Sales Department",
    "Accounting Department",
    "Research Department",
 
  ];
  const [EmployeeChoice, setEmployeeChoice] = React.useState(
    "Abhijeet Agarwal - X1234567890"
  );
  const [showEmployeeDropdown, setShowEmployeeDropdown] = React.useState(false);

  const EmployeeModes = [
    "All Employees",
    "Abhijeet Agarwal - X1234567890",
    "Ayushman Bhar - X5678934569",
    "Chris Evans - X2345678912",
    "Chris Evans - X2345678912",
    "Chris Evans - X2345678912",
    "Chris Evans - X2345678912",
    "Chris Evans - X2345678912",
  ];

  return (
    <div className="h-screen overflow-y-hidden flex flex-col">
      <div
        className="w-full relative h-full flex-grow overflow-y-auto"
        style={{ backgroundColor: "#F5F6FA" }}
      >
        <div className="p-4 pl-16">
          <h1 className="font-bold text-3xl" style={{ fontWeight: "600" }}>
            Analytics
          </h1>
          <div className="flex items-center gap-40 ">
            <div
              style={{
                backgroundColor: "#6D38C3",
                width: "368px",
                height: "360px",
              }}
              className="mt-8 p-4 rounded-2xl shadow-md w-80"
            >
              <div
                className="p-1 text-white flex justify-between"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                <span>Total Spend</span>
                <span>Rs 15000</span>
              </div>

              <div className="flex flex-col gap-1 mt-4 ml-2">
                <div
                  className="flex bg-white rounded-lg items-center justify-between"
                  style={{ width: "316px", height: "34px" }}
                >
                  <div className="flex items-center">
                    <BsCart
                      className="mr-4 ml-2 text-black"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Abhijit Agarwal
                    </span>
                  </div>
                  <span
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Rs 1555.500
                  </span>
                </div>

                <div
                  className="flex bg-white rounded-lg items-center justify-between"
                  style={{ width: "316px", height: "34px" }}
                >
                  <div className="flex items-center">
                    <MdFlight
                      className="mr-4 ml-2 text-black"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Abhijit Agarwal
                    </span>
                  </div>
                  <span
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Rs 1555.500
                  </span>
                </div>

                <div
                  className="flex bg-white rounded-lg items-center justify-between"
                  style={{ width: "316px", height: "34px" }}
                >
                  <div className="flex items-center">
                    <ImSpoonKnife
                      className="mr-4 ml-2 text-black"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Abhijit Agarwal
                    </span>
                  </div>
                  <span
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Rs 1555.500
                  </span>
                </div>

                <div
                  className="flex bg-white rounded-lg items-center justify-between"
                  style={{ width: "316px", height: "34px" }}
                >
                  <div className="flex items-center">
                    <LiaHeartbeatSolid
                      className="mr-4 ml-2 text-black"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Abhijit Agarwal
                    </span>
                  </div>
                  <span
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Rs 1555.500
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-2 mt-4">
                <span
                  onClick={() => setShowPaymentDropdown(!showPaymentDropdown)}
                  className="relative p-2 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none "
                >
                  <BsLightning
                    className="mr-2 text-white"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  />
                  <span
                    className="pt-0.5 text-white"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {paymentMode}
                  </span>
                  {showPaymentDropdown && (
                    <div className="absolute z-20 border rounded-xl shadow-xl bg-white mt-2 w-50">
                      <div className="p-4 whitespace-nowrap text-sm font-medium">
                        {paymentModes.map((mode) => (
                          <label
                            key={mode}
                            className="flex items-center cursor-pointer mt-3"
                          >
                            <input
                              type="radio"
                              name="paymentMode"
                              value={mode}
                              checked={paymentMode === mode}
                              onChange={() => setPaymentMode(mode)}
                              className="mr-2"
                            />
                            {mode}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </span>
                <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none bg-white">
                  <TbCategory2
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6D38C3",
                    }}
                  />
                  <span
                    className="pt-0.5"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      color: "#6D38C3",
                    }}
                  >
                    Category
                  </span>
                </span>
                <span className="relative p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg cursor-pointer focus:outline-none">
                  <FaCalendarAlt
                    className="mr-2 text-white"
                    style={{ fontSize: "12px" }}
                  />
                  <span
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="pt-0.5 text-white"
                    style={{ fontWeight: "600", fontSize: "12px" }}
                  >
                    Date
                  </span>
                  <div
                    className={`absolute z-50 border rounded-xl shadow-xl left-24 ${
                      showCalendar ? "" : "hidden"
                    }`}
                  >
                    <DateRangePicker
                      rangeColors={["#6D38C3"]}
                      ranges={[selectionRange]}
                      onChange={handleDateChange}
                    />
                  </div>
                </span>
              </div>
              <div className="flex justify-between gap-2 mt-4">
                <span
                  onClick={() => setShowEmployeeDropdown(!showEmployeeDropdown)}
                  className="relative p-2 pl-2 pr-2 flex items-center justify-center bg-white rounded-lg focus:outline-none w-1/2"
                >
                  <span
                    className="text-[#6D38C3]"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {EmployeeChoice}
                  </span>
                  {showEmployeeDropdown && (
                    <div className="absolute z-20 border rounded-xl shadow-xl bg-white mt-2 w-50">
                      <div className="p-4 whitespace-nowrap text-sm font-medium">
                        {EmployeeModes.map((mode) => (
                          <label
                            key={mode}
                            className="flex items-center cursor-pointer mt-3"
                          >
                            <input
                              type="radio"
                              name="EmployeeChoice"
                              value={mode}
                              checked={EmployeeChoice === mode}
                              onChange={() => setEmployeeChoice(mode)}
                              className="mr-2"
                            />
                            {mode}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </span>

                <span
                  onClick={() =>
                    setShowDepartmentDropdown(!showDepartmentDropdown)
                  }
                  className="relative p-2 pl-2 pr-2 flex items-center justify-center flex-grow bg-white rounded-lg focus:outline-none"
                >
                  <span
                    className="text-[#6D38C3]"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      height: "100%", // Ensure height matches the parent for centering
                    }}
                  >
                    {DepartmentChoice}
                  </span>
                  {showDepartmentDropdown && (
                    <div className="absolute z-20 border rounded-xl shadow-xl bg-white mt-2 w-50">
                      <div className="p-4 whitespace-nowrap text-sm font-medium">
                        {DepartmentModes.map((mode) => (
                          <label
                            key={mode}
                            className="flex items-center cursor-pointer mt-3"
                          >
                            <input
                              type="radio"
                              name="DepartmentChoice"
                              value={mode}
                              checked={DepartmentChoice === mode}
                              onChange={() => setDepartmentChoice(mode)}
                              className="mr-2"
                            />
                            {mode}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </span>
              </div>
            </div>
            <div className="w-full relative bg-white flex justify-center rounded-lg">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="absolute top-4 right-4 z-20 border rounded-lg"
                name=""
                id=""
              >
                <option value="Monthly">Monthly</option>
                <option value="Daily">Daily</option>
              </select>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: type == "Monthly" ? months : days,
                  },
                ]}
                series={[
                  {
                    data:
                      type == "Monthly"
                        ? [
                            21237, 18732, 22145, 12980, 27409, 11472, 25321,
                            19284, 14856, 28102, 20421, 26999,
                          ]
                        : [
                            14529, 22410, 19937, 21078, 10513, 26291, 28034,
                            13426, 18192, 20867, 27740, 12614, 24323, 11097,
                            21212, 22145, 12980, 27409, 11472, 25321, 19284,
                            14856, 28102, 20421, 26999, 12121, 21212, 22145,
                            12980, 27409, 8988,
                          ],
                  },
                ]}
                colors={["#6D38C3"]}
                width={1000}
                height={300}
              />
            </div>
          </div>
          <div className="flex items-center gap-40 ">
            <div
              style={{
                backgroundColor: "#6D38C3",
                width: "368px",
                height: "360px",
              }}
              className="mt-8 p-4 rounded-2xl shadow-md w-80"
            >
              <div
                className="p-1 text-white flex justify-between"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                <span>Total Spend</span>
                <span>Rs 15000</span>
              </div>

              <div className="flex flex-col gap-1 mt-4 ml-2">
                <div
                  className="flex bg-white rounded-lg items-center justify-between"
                  style={{ width: "316px", height: "34px" }}
                >
                  <div className="flex items-center">
                    <BsCart
                      className="mr-4 ml-2 text-black"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Abhijit Agarwal
                    </span>
                  </div>
                  <span
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Rs 1555.500
                  </span>
                </div>

                <div
                  className="flex bg-white rounded-lg items-center justify-between"
                  style={{ width: "316px", height: "34px" }}
                >
                  <div className="flex items-center">
                    <MdFlight
                      className="mr-4 ml-2 text-black"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Abhijit Agarwal
                    </span>
                  </div>
                  <span
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Rs 1555.500
                  </span>
                </div>

                <div
                  className="flex bg-white rounded-lg items-center justify-between"
                  style={{ width: "316px", height: "34px" }}
                >
                  <div className="flex items-center">
                    <ImSpoonKnife
                      className="mr-4 ml-2 text-black"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Abhijit Agarwal
                    </span>
                  </div>
                  <span
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Rs 1555.500
                  </span>
                </div>

                <div
                  className="flex bg-white rounded-lg items-center justify-between"
                  style={{ width: "316px", height: "34px" }}
                >
                  <div className="flex items-center">
                    <LiaHeartbeatSolid
                      className="mr-4 ml-2 text-black"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,0.5)" }}
                    />
                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                      Abhijit Agarwal
                    </span>
                  </div>
                  <span
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Rs 1555.500
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-2 mt-4">
                <span className="p-2 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none">
                  <BsLightning
                    className="mr-2 text-white"
                    style={{ fontSize: "12px" }}
                  />
                  <span
                    className="whitespace-nowrap pt-0.5 text-white"
                    style={{ fontWeight: "600", fontSize: "12px" }}
                  >
                    Mode of Payment
                  </span>
                </span>
                <span className="p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg focus:outline-none bg-white">
                  <TbCategory2
                    className="mr-2"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6D38C3",
                    }}
                  />
                  <span
                    className="pt-0.5"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      color: "#6D38C3",
                    }}
                  >
                    Category
                  </span>
                </span>
                <span className="relative p-1 pl-2 pr-2 flex items-center flex-grow border-white border rounded-lg cursor-pointer focus:outline-none">
                  <FaCalendarAlt
                    className="mr-2 text-white"
                    style={{ fontSize: "12px" }}
                  />
                  <span
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="pt-0.5 text-white"
                    style={{ fontWeight: "600", fontSize: "12px" }}
                  >
                    Date
                  </span>
                  <div
                    className={`absolute z-50 border rounded-xl shadow-xl left-24 ${
                      showCalendar ? "" : "hidden"
                    }`}
                  >
                    <DateRangePicker
                      rangeColors={["#6D38C3"]}
                      ranges={[selectionRange]}
                      onChange={handleDateChange}
                    />
                  </div>
                </span>
              </div>
              <div className="flex justify-between gap-2 mt-4">
                <span className="p-1 pl-2 pr-2 flex flex-col items-center flex-grow border-white border rounded-lg focus:outline-none bg-white w-1/2">
                  <span
                    className="pt-0.5"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      color: "#6D38C3",
                    }}
                  >
                    Abhijeet Agarwal
                  </span>
                  <span
                    className="pt-0.5"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      color: "#6D38C3",
                    }}
                  >
                    X1234567890
                  </span>
                </span>
                <span className="p-1 pl-2 pr-2 flex items-center justify-center border-white border rounded-lg focus:outline-none bg-white w-1/2">
                  <span
                    className="pt-0.5"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      color: "#6D38C3",
                    }}
                  >
                    Tech Department
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full relative bg-white flex justify-center rounded-lg">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="absolute top-4 right-4 z-20 border rounded-lg"
                name=""
                id=""
              >
                <option value="Monthly">Monthly</option>
                <option value="Daily">Daily</option>
              </select>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: type == "Monthly" ? months : days,
                  },
                ]}
                series={[
                  {
                    data:
                      type == "Monthly"
                        ? [
                            21237, 18732, 22145, 12980, 27409, 11472, 25321,
                            19284, 14856, 28102, 20421, 26999,
                          ]
                        : [
                            14529, 22410, 19937, 21078, 10513, 26291, 28034,
                            13426, 18192, 20867, 27740, 12614, 24323, 11097,
                            21212, 22145, 12980, 27409, 11472, 25321, 19284,
                            14856, 28102, 20421, 26999, 12121, 21212, 22145,
                            12980, 27409, 8988,
                          ],
                  },
                ]}
                colors={["#6D38C3"]}
                width={1000}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
