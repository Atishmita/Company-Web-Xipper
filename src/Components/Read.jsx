import React, { useEffect, useState } from "react";
import { Trash2, SquarePen } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [ApiData, setApiData] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);

  const getApiData = () => {
    axios
      .get("https://660a7651ccda4cbc75daee03.mockapi.io/Crud")
      .then((res) => {
        setApiData(res.data);
      });
  };
 // deleting functionality into api 
  const DeleteRow = (id) => {
    axios
      .delete(`https://660a7651ccda4cbc75daee03.mockapi.io/Crud/${id}`)
      .then(() => {
        getApiData();
        setItemToDelete(null); // Reset itemToDelete after deletion
      });
  };

  const setItemstoStorage = (id,name,age,email) =>{
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('age',age)
    localStorage.setItem('email',email)
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <span className="flex justify-end relative top-14 right-16">
        <h1 className="font-bold text-2xl items-center relative right-[35%]">CRUD Application</h1>
        <Link to={"/create"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            +Add
          </button>
        </Link>
      </span>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-20">
        <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-24">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-14 py-3">
                Email
              </th>
              <th scope="col" className="px-5 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {ApiData.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >  
                  <th
                    scope="row"
                    className="px-7 py-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  > 
                    {item.id} 
                  </th>
                  <td className="px-7 py-4">{item.name}</td>
                  <td className="px-7 py-4">{item.age}</td>
                  <td className="px-7 py-4">{item.email}</td>
                  <td className="px-7 py-4">
                    <div className="flex gap-3 items-center hover:cursor-pointer">
                    <Link to={"/edit"}>
                      <SquarePen
                        className="text-gray-500 hover:text-gray-700"
                        size={20}
                        onClick={()=>setItemstoStorage(item.id,item.name,item.age,item.email)}
                      />
                    </Link>
                      <Trash2
                        className="text-red-600 hover:text-red-700"
                        size={20}
                        onClick={() => setItemToDelete(item)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {itemToDelete && (
        <div
          id="popup-modal"
          className="fixed inset-0 flex justify-center items-center z-50 bg-gray-700 bg-opacity-50"
          onClick={() => setItemToDelete(null)} // Close modal when clicking outside
        >
          <div className="relative bg-white rounded-lg shadow-lg w-96">
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12.121 7.121a.5.5 0 01.707.707L10.707 10l2.121 2.121a.5.5 0 01-.707.707L10 10.707 7.879 12.828a.5.5 0 01-.707-.707L9.293 10 7.172 7.879a.5.5 0 01.707-.707L10 9.293l2.121-2.122z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this item?
              </h3>
              <button
                type="button"
                onClick={() => DeleteRow(itemToDelete.id)}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => setItemToDelete(null)}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Read;
