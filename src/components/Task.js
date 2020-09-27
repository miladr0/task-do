import React from 'react';
import PropTypes from 'prop-types';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import colorLabel from '../lib/colorLabel';
import progressWidth from '../lib/progressWidth';
import ImageProfile from './ImageProfile';

const Task = ({ title, label, users, progress }) => {
  return (
    <div className="flex flex-none flex-col p-2 mt-4 mb-4 rounded-large bg-white overflow-hidden w-64">
      <div className="flex items-center">
        <span
          className={`rounded-full w-2 h-2 bg-yellow-500 ${colorLabel(label)}`}
        ></span>
        <span className="ml-2 text-sm">{label}</span>
      </div>
      <div className="mt-2">
        <p className="text-sm">{title}</p>
        <div className="h-1 relative max-w-xl rounded-full overflow-hidden mt-4">
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div
            className={`h-full rounded-full absolute ${progressWidth(
              progress,
            )} ${colorLabel(label)}`}
          ></div>
        </div>
      </div>
      <div className="flex mt-3 justify-between">
        <div className="flex ml-3">
          <ImageProfile users={users} />
        </div>

        <span className="flex text-gray-800 items-center">
          <BiDotsHorizontalRounded className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  users: PropTypes.array,
  progress: PropTypes.number,
};
export default Task;
