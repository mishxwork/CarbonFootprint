import * as React from "react";
import BasicTabs from "../components/Demo/demo";


export default function CloudComputingDashboard() {
  const [input, setInput] = React.useState({
    count: "",
    load: "",
    duration: "",
  });
  const [loading, setLoading] = React.useState(true);

  const handleChange = (e) => {
    setLoading(true);
    const value = e.target.value;
    setInput({ ...input, [e.target.name]: Number(value) });
  };

  const reset = (e) => {
    setLoading(true);
    e.preventDefault();
    setInput({
      count: "",
      load: "",
      duration: "",
    });
  };

  const loadData = (e) => {
    e.preventDefault();
    // console.log(input);
    setLoading(false);
  };

  return (
    <div className="gradient__bg h-screen w-screen overflow-auto">
      {/* <SideBar /> */}
      <div className="text-indigo-900 flex flex-1 ml-12 -mt-16">
        <h1 className="gradient__head text-3xl mt-32 ml-4 font-extrabold">
          Cloud Computing (CPU)
        </h1>
      </div>
      <div>
        <div className="items-center justify-center w-full my-4 ml-12">
          <label className="block text-gray-600 text-sm font-normal">
            CPU Count
          </label>
          <input
            type="number"
            name="count"
            value={input.count}
            onChange={(e) => handleChange(e)}
            className="h-6 w-96 border mt-2 px-2 py-2 text-black rounded-lg"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 ml-12">
          <label className="block text-gray-600 text-sm font-normal">
            CPU LOAD (MIN VALUE = 0, MAX VALUE = 1)
          </label>
          <input
            type="number"
            name="load"
            value={input.load}
            min="0"
            max="1"
            onChange={(e) => handleChange(e)}
            className="h-6 w-96 border mt-2 px-2 py-2 text-black rounded-lg"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 ml-12">
          <label className="block text-gray-600 text-sm font-normal">
            DURATION (in days)
          </label>
          <input
            type="number"
            name="duration"
            value={input.duration}
            onChange={(e) => handleChange(e)}
            className="h-6 w-96 border mt-2 px-2 py-2 text-black rounded-lg"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4">
          <button
            // onClick={console.log(input)}
            onClick={loadData}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2 ml-12"
          >
            Get Co2e
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2"
          >
            Clear
          </button>
        </div>
      </div>
      {!loading && <BasicTabs data={input} />}
    </div>
  );
}
