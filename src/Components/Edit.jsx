import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Edit() {

    const [id, setid] = useState(0)
    const [Name, setName] = useState("")
    const [Age, setAge] = useState("")
    const [Email, setEmail] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
       setid(localStorage.getItem("id"))
       setName(localStorage.getItem("name"))
       setAge(localStorage.getItem("age"))
       setEmail(localStorage.getItem("email"))
    },[])
    

    // NOTE: delete/ Update dono k case me Id k through kam krte hai 
    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`https://660a7651ccda4cbc75daee03.mockapi.io/Crud/${id}`,{
            name:Name,
            age:Age,
            email:Email
        })
        .then(()=>{
            alert("data updated successfully !!")
            navigate("/");
        })
    }

  return (
    <div className='overflow-hidden'>  

    <span className="flex justify-end relative top-14 right-16">
            <Link to={"/"} >
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back </button>
            </Link>
        </span>

    <h1 className='relative left-[45%] top-28 text-3xl font-bold '>Update Data</h1>
        <form className="max-w-sm mx-auto mt-36 border-2 rounded-lg p-10 shadow-lg" onSubmit={handleUpdate}>

        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name </label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={Name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={Age} onChange={(e)=>setAge(e.target.value)}/>
        </div>
        <div className="mb-8">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        {/* submit button  */}
       <div className='flex justify-center'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-32 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        </div>
        </form>

    </div>
  )
}

export default Edit
