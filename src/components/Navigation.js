import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

const Navigation = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-5/12 flex items-center relative flex-wrap items-stretch mb-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-large p-2 bg-white placeholder-gray-500 p-4 text-lg focus:outline-none leading-normal"
        />
        <span className="flex bg-indigo-200 absolute text-center text-indigo-500 rounded-lg items-center justify-center right-0 p-2 cursor-pointer m-1">
          <FiSearch className="w-8 h-8" />
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="flex bg-indigo-200 text-center text-indigo-500 rounded-large items-center justify-center p-2 cursor-pointer m-1">
          <IoMdNotificationsOutline className="w-8 h-8" />
        </button>
        <button className="flex bg-indigo-200 text-center text-indigo-500 rounded-large items-center justify-center p-2 cursor-pointer m-1">
          <AiOutlineMail className="w-8 h-8" />
        </button>
        <div className="flex bg-indigo-200 text-center text-indigo-500 rounded-large items-center justify-center cursor-pointer m-1">
          <RiArrowDownSLine className="w-8 h-8 mx-1" />
          <img
            src="https://randomuser.me/api/portraits/women/57.jpg"
            alt="profile"
            className="rounded-lg w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
