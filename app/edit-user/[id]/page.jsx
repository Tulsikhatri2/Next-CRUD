"use client";

import { editUserData } from "@/Redux/Slice/userSlice";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

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
    toast.success("User Updated Successfully");
    router.push("/user-data");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <button
        className="mr-60 mt-12 text-white bg-blue-700 hover:bg-blue-800 
          focus:ring-2 focus:ring-blue-300 font-medium rounded-lg 
          text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 
          focus:outline-none "
        onClick={() => router.push("/user-data")}
      >
        Back
      </button>
      <div
        className="flex flex-col items-center justify-center mt-5 w-80 h-80 border
         border-gray-400 rounded-lg"
      >
        <h1 className="font-bold ">Edit User</h1>
        <form>
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
          focus:outline-none ml-24"
            onClick={handleUpdateData}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
