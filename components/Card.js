import React, { useState } from 'react';
import shortid from 'shortid';
export default function Card(props) {
  const colorClass = {
    do: 'bg-[#00D08A40]',
    schedule: 'bg-[#EAC31C40]',
    delegate: 'bg-[#008AA240]',
    delete: 'bg-[#D02C0040]',
  };

  const [task, setTask] = useState('');

  const addTask = (e, type) => {
    e.preventDefault();
    props.addTask(type, task);
    setTask('');
  };
  return (
    <div
      className={`h-aut flex flex-col shadow-xl rounded-xl m-3 p-5 relative ${
        colorClass[props.title]
      }`}
    >
      <div
        className={`flex flex-col justify-center items-center absolute z-0 w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none ${
          props.tasks.length !== 0 && 'hidden'
        }`}
      >
        <h3 className="text-2xl font-bold opacity-30 capitalize">
          {props.title}
        </h3>
        <p className="opacity-30">{props.text}</p>
      </div>
      <div>
        <ul>
          {props.tasks.map((task) => {
            return (
              <li className="flex items-center" key={shortid.generate()}>
                <input
                  id="task"
                  name="task"
                  type="checkbox"
                  checked={task.isCompleted}
                  className={`focus:shadow-transparent h-4 w-4 text-[${props.color}] border-gray-300 rounded`}
                />
                <p
                  className={`font-bold ml-2 ${
                    task.isCompleted && 'line-through'
                  }`}
                >
                  {task.task}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={(e) => addTask(e, props.title)} className="z-10">
        <div className="col-span-6 sm:col-span-3">
          <input
            type="text"
            autoComplete="off"
            className="mt-1 focus:border-none block w-full border-none bg-transparent outline-none focus:shadow-transparent font-bold"
            placeholder="Enter Task..."
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </div>
      </form>
    </div>
  );
}
