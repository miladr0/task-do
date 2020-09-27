import React from 'react';
import TasksContainer from './TasksContainer';
import Navigation from './Navigation';
import Header from './Header';
import CustomCalender from '../lib/CustomCalender';
import { TO_DO, DOING, DONE } from '../constants/fakeData';

const Main = () => {
  return (
    <div className="flex flex-1 flex-col bg-taskDo-gray p-5">
      <Navigation />
      <div className="flex flex-1 h-screen min-h-screen bg-taskDo-gray">
        <div className="flex flex-col  overflow-y-hidden">
          <Header />

          <div className="flex mb-5 overflow-y-hidden">
            <TasksContainer title="To Do" titleBorder tasks={TO_DO} />
            <TasksContainer title="Doing" tasks={DOING} />
            <TasksContainer title="Done" tasks={DONE} />
          </div>
        </div>
        <div className="flex flex-col">
          <CustomCalender />
        </div>
      </div>
    </div>
  );
};

export default Main;
