import React from 'react';

export default function Card(props) {
  //   const [todos, setTodos] = useState([]);
  return (
    <div
      className={`w-1/2 h-aut flex flex-col shadow-xl rounded-xl m-3 p-5 relative bg-[${props.color}40]`}
    >
      <div className="flex flex-col justify-center items-center absolute z-0 w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none ">
        <h3 className="text-2xl font-bold opacity-30">{props.title}</h3>
        <p className="opacity-30">{props.text}</p>
      </div>
      <div>
        <ul>
          <li className="flex items-center">
            <input
              id="task"
              checked
              name="task"
              type="checkbox"
              className={`focus:shadow-transparent h-4 w-4 text-[${props.color}] border-gray-300 rounded`}
            />
            <p className="font-bold ml-2 line-through">Pay Electricity bills</p>
          </li>
          <li className="flex items-center">
            <input
              id="task"
              name="task"
              type="checkbox"
              className={`focus:shadow-transparent h-4 w-4 text-[${props.color}] border-gray-300 rounded`}
            />
            <p className="font-bold ml-2">Task2</p>
          </li>
          <li className="flex items-center">
            <input
              id="task"
              name="task"
              type="checkbox"
              className={`focus:shadow-transparent h-4 w-4 text-[${props.color}] border-gray-300 rounded`}
            />
            <p className="font-bold ml-2">Task3</p>
          </li>
          <li className="flex items-center">
            <input
              id="task"
              name="task"
              type="checkbox"
              className={`focus:shadow-transparent h-4 w-4 text-[${props.color}] border-gray-300 rounded`}
            />
            <p className="font-bold ml-2">Task4</p>
          </li>
        </ul>
      </div>
      <form action="#" method="POST" className="z-10">
        <div className="col-span-6 sm:col-span-3">
          <input
            type="text"
            name="task"
            id="task"
            autoComplete="off"
            className="mt-1 focus:border-none block w-full border-none bg-transparent outline-none focus:shadow-transparent font-bold"
            placeholder="Enter Task Here..."
          />
        </div>
      </form>
    </div>
  );
}
