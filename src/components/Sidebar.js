import React from 'react';
import { VscHome } from 'react-icons/vsc';
import { RiDashboardLine } from 'react-icons/ri';
import { HiOutlineCalendar } from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';
import { CgSignal } from 'react-icons/cg';
import { CgMathPlus } from 'react-icons/cg';

const Sidebar = () => {
  return (
    <div className="flex-none w-64 flex flex-col px-2 py-2 hidden md:block bg-white">
      <div className="overflow-y-auto overflow-hidden">
        <ul className="text-center">
          <li className="mt-4 mb-4 border-dashed border border-taskDo-deepPink rounded-large">
            <a
              href="#"
              className="flex items-center justify-between bg-taskDo-pink p-2 rounded-large"
            >
              <span className="text-gray-800 text-base">New Project</span>
              <CgMathPlus className="w-8 h-8 text-taskDo-deepPink" />
            </a>
          </li>
          <li className="mt-10 mb-4 border-dashed bg-indigo-200 rounded-large">
            <a href="#" className="flex items-center p-1">
              <span className="p-1 bg-indigo-500 rounded-lg">
                <VscHome className="w-8 h-8 text-white" />
              </span>
              <span className="text-indigo-700 text-sm ml-4 font-semibold">
                Home
              </span>
            </a>
          </li>
          <li className="mt-4 mb-4 rounded-large hover:bg-indigo-200">
            <a href="#" className="flex items-center p-1">
              <span className="p-1">
                <RiDashboardLine className="w-6 h-6 text-indigo-500" />
              </span>
              <span className="text-indigo-500 text-sm ml-4 font-semibold">
                Dashboard
              </span>
            </a>
          </li>
          <li className="mt-4 mb-4 rounded-large hover:bg-indigo-200">
            <a href="#" className="flex items-center p-1">
              <span className="p-1">
                <HiOutlineCalendar className="w-6 h-6 text-indigo-500" />
              </span>
              <span className="text-indigo-500 text-sm ml-4 font-semibold">
                Calender
              </span>
            </a>
          </li>
          <li className="mt-4 mb-4 rounded-large hover:bg-indigo-200">
            <a href="#" className="flex items-center p-1">
              <span className="p-1">
                <CgSignal className="w-6 h-6 text-indigo-500" />
              </span>
              <span className="text-indigo-500 text-sm ml-4 font-semibold">
                Activity
              </span>
            </a>
          </li>
          <li className="mt-4 mb-4 rounded-large hover:bg-indigo-200">
            <a href="#" className="flex items-center p-1">
              <span className="p-1">
                <AiOutlineSetting className="w-6 h-6 text-indigo-500" />
              </span>
              <span className="text-indigo-500 text-sm ml-4 font-semibold">
                Setting
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
