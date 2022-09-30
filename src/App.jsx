import React from "react";
import ReactDOM from "react-dom";
import Suggestion from "ads/Suggestion";
import Adv from "ads/Adv";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "host/Layout"


function TestEnviroment() {
  return (
    <>
      <div className="flex">
        <Suggestion></Suggestion>
        <Adv></Adv>
      </div>
      <div className="flex w-full justify-center mt-10">
        <button
          type="button"
           className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Genarate Script Test
        </button>
        <button
          type="button"
           className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Script Test
        </button>
        <button
          type="button"
           className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Create Object For Testing
        </button>
      </div>
    </>
  );
}

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<TestEnviroment />}></Route>
      {/* <Route path="/" element={<Layout />}></Route> */}
    </Routes>
  </HashRouter>
  // <Layout></Layout>
);

ReactDOM.render(<App/>,document.getElementById('app'));
