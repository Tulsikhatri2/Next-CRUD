"use client";

import { deleteUser, updateUser } from "@/Redux/Slice/userSlice";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const { userData } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch()

  const handleEditUser = (item, index) => {
    dispatch(updateUser(item))
    router.push(`/edit-user/${index}`)
  }

  const handleDeleteUser = (index) => {
    dispatch(deleteUser(index))
    toast.error('User Deleted Successfully');
  }

  return (
    <div className="border mt-5 border-gray-400 flex flex-col pt-8 items-center ml-48 rounded-lg w-2/3 mr-10">
      <h1 className="font-bold underline">User Data</h1>
      <div className="flex flex-col items-center m-5 w-full h-auto">
        {userData.length > 0 ? (
          <>
            <table className="text-sm text-left  text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="mx-3 px-6 py-3">S No.</th>
                  <th className="mx-3 px-6 py-3">Name</th>
                  <th className="mx-3 px-6 py-3">Email</th>
                  <th className="mx-3 px-6 py-3">Contact</th>
                  <th className="mx-3 px-6 py-3">Update</th>
                  <th className="mx-3 px-6 py-3">Delete</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item, index) => {
                  return (
                    <>
                      <tr
                        className="bg-white border-b dark:bg-gray-800 h-10 py-3 dark:border-gray-700"
                        key={index}
                      >
                        <td className="text-center">{index+1}</td>
                        <td className="text-center">{item?.name}</td>
                        <td className="text-center">{item?.email}</td>
                        <td className="text-center">{item?.contact}</td>
                        <td className="text-center ">
                          <button
                            className="bg-yellow-600 h-8 text-black rounded-full w-3/4
                            hover:ring-2 hover:ring-blue-300"
                            onClick={()=>handleEditUser(item, index)}
                          >
                            Update
                          </button>
                        </td>
                        <td className="text-center ">
                          <button
                            className="bg-red-700 h-8 text-white rounded-full w-3/4
                            hover:ring-2 hover:ring-blue-300 "
                            onClick={() =>handleDeleteUser(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <button
              className="bg-blue-700 h-8 mt-12 text-white rounded-full w-24
              hover:ring-2 hover:ring-blue-300"
              onClick={() => router.push("/user-form")}
            >
              Add Data
            </button>
          </>
        ) : (
          <>
            <p className="font-bold">[No Data Yet]</p>
            <button
              className="bg-blue-700 h-8 mt-12 text-white rounded-full w-24
            hover:ring-2 hover:ring-blue-300"
              onClick={() => router.push("/user-form")}
            >
              Add Data
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserList;
