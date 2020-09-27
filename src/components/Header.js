import React from 'react';
import { CgMathPlus } from 'react-icons/cg';
const Header = () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1 mt-5 mb-2">
        <div className="flex flex-col">
          <h2 className="w-full text-taskDo-backGray text-5xl font-semiBold leading-normal">
            hello Marjan
          </h2>
          <h6 className="w-full text-gray-500 text-2xl">
            Welcome to your task management desktop
          </h6>
        </div>
        <div className="flex mt-6 justify-between">
          <div className="flex">
            <div className="flex overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profile"
              />
              <img
                className="-ml-3 inline-block h-10 w-10 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profile"
              />
              <img
                className="-ml-3 inline-block h-10 w-10 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="profile"
              />
              <img
                className="-ml-3 inline-block h-10 w-10 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="profile"
              />
              <div className="-ml-3 flex items-center justify-center content-center inline-block h-10 w-10 rounded-full text-center text-white shadow-solid bg-indigo-500">
                <span>Me</span>
              </div>
            </div>

            <button
              href="#"
              className="flex ml-10 mr-1 items-center justify-between p-1 bg-indigo-200 rounded-large"
            >
              <span className="text-gray-800 text-base mx-3">
                Invite people
              </span>
              <CgMathPlus className="w-8 h-8 text-indigo-500 mx-1" />
            </button>
          </div>

          <div className="flex items-center space-x-6 mr-10">
            <div className="flex items-center">
              <span className="rounded-full w-2 h-2 bg-indigo-500"></span>
              <span className="ml-2 text-sm">High</span>
            </div>
            <div className="flex items-center">
              <span className="rounded-full w-2 h-2 bg-yellow-500"></span>
              <span className="ml-2 text-sm">Medium</span>
            </div>
            <div className="flex items-center">
              <span className="rounded-full w-2 h-2 bg-teal-400"></span>
              <span className="ml-2 text-sm">Less</span>
            </div>
            <div className="flex items-center">
              <span className="rounded-full w-2 h-2 bg-pink-400"></span>
              <span className="ml-2 text-sm">Default</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
