"use client";

import { editUserData } from "@/Redux/Slice/userSlice";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "@/app/Components/isAuth";
import { ImHome } from "react-icons/im";
import Link from "next/link";
import LogoutButton from "../../Components/LogoutButton"

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { editUser } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    setName(editUser.user?.name);
    setEmail(editUser.user?.email);
    setContact(editUser.user?.contact);
  }, [editUser.isUpdate]);

  const handleUpdateData = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      contact: contact,
    };
    const userInfo = {
      data: data,
      id: id,
    };
    dispatch(editUserData(userInfo));
    toast.success("User Updated Successfully",{duration:1000});
    router.push("/user-data");
  };

  return (
    <>
    <div>
      <nav className="flex space-x-4 ">
        <p className="w-full ml-[36%] mt-5 font-bold flex flex-row text-center"> 
          <span className="w-8"> <ImHome size={20} /> </span>
          <span><Link href="/user-form">/ User From  </Link></span>
          <span className="ml-2"> <Link href="/user-data">/ User List </Link> </span>
          <span className="ml-2">/ Update User </span>
          <span className="ml-[47%]">
          <LogoutButton/>
          {/* <button 
            className="text-white bg-red-700 hover:bg-red-800 
            focus:ring-2 focus:ring-red-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 h-10 dark:bg-red-600 dark:hover:bg-blue-700 
            focus:outline-none"
            onClick={()=>{
              localStorage.clear()
              router.push("/")
            }}>Logout</button> */}
          </span>
        </p>
      </nav>
    </div>
    <div className="flex flex-col items-center justify-center w-full ">
      <div
        className="flex flex-col items-center justify-center mt-5 w-96 h-80 border
         border-gray-400 rounded-lg"
      >
        <h1 className="font-bold ">Edit User</h1>
        <form className="mt-5">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 w-64 m-3"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 w-64 m-3"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
          dark:focus:border-blue-500 w-64 m-3"
            type="text"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 
          focus:ring-2 focus:ring-blue-300 font-medium rounded-lg 
          text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 
          focus:outline-none ml-20"
            onClick={handleUpdateData}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditUser;
