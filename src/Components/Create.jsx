import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "../index.css"
import { useNavigate,Link } from 'react-router-dom'

function Create() {

    const [Name, setName] = useState("")
    const [Age, setAge] = useState("")
    const [Email, setEmail] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const navigate = useNavigate(); // eska use hum tab krte hai..jab hume ek page es dusre page me jana hota h

    const handleSubmit = (e) =>{
        e.preventDefault();
        // hum data post kr re hai mtlb add kr re hai..eslei post method use kro 
        axios.post("https://660a7651ccda4cbc75daee03.mockapi.io/Crud",{
            name : Name,
            age : Age,
            email : Email
        })
        .then((res)=>{
            alert("data created !!")
            navigate('/')
            setName("")
            setEmail("")
            setAge("")
            setIsChecked(false)
        })
    }
  return (
    <div className='overflow-hidden'>  

    <span className="flex justify-end relative top-14 right-16">
            <Link to={"/"} >
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back </button>
            </Link>
        </span>

    <h1 className='relative left-[45%] top-28 text-3xl font-bold '>Create Data</h1>
        <form className="max-w-sm mx-auto mt-36 border-2 rounded-lg p-10 shadow-lg" onSubmit={handleSubmit}>

        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name </label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" value={Name} onChange={(e)=>setName(e.target.value)} required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your age' value={Age} onChange={(e)=>setAge(e.target.value)} required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='name@gmail.com' value={Email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>

        {/* checkbox  */}
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  checked={isChecked}
            onChange={() => setIsChecked(!isChecked)} required />
            </div>
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        {/* submit button  */}
       <div className='flex justify-center'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-32 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        </form>

    </div>
  )
}

export default Create
