import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import classNames from 'classnames';

const TasksContainer = ({ title, titleBorder = false, tasks = [] }) => {
  const titleClass = classNames('p-1', 'rounded-sm', {
    'border-b-4': titleBorder,
    'border-indigo-500': titleBorder,
  });

  return (
    <div className="flex mt-10 mx-4 flex-col">
      <div className="flex items-center">
        <h4 className={titleClass}>{title}</h4>
        <span className="p-1 text-gray-500">({tasks.length})</span>
      </div>
      <div className="p-2 overflow-y-auto tasks--scrollbar">
        <div className="flex flex-col mx-2 p-1">
          {tasks.map((task, i) => (
            <Task key={i} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

TasksContainer.propTypes = {
  title: PropTypes.string,
  titleBorder: PropTypes.bool,
  tasks: PropTypes.array,
};
export default TasksContainer;
