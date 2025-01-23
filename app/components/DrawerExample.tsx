"use client"
import React, { useState } from "react";

const DrawerExample: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="text-center">
      {/* Drawer Toggle Button */}
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsDrawerOpen(true)}
      >
        Show right drawer
      </button>

      {/* Drawer Component */}
      {isDrawerOpen && (
        <div
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 "
          role="dialog"
          aria-labelledby="drawer-right-label"
        >
          <h5
            id="drawer-right-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
           
            Right drawer
          </h5>
          <button
            type="button"
            aria-controls="drawer-right-example"
            onClick={() => setIsDrawerOpen(false)}
            className=" text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
         
        </div>
      )}
    </div>
  );
};

export default DrawerExample;
