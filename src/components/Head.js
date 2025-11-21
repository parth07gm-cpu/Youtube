import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleSideHanmburger = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex items-center justify-between gap-6 bg-white px-6 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSideHanmburger}
          className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <img
          className="h-6 w-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="YouTube logo"
        />
      </div>

      <div className="flex w-full max-w-xl items-center rounded-full border border-gray-200 bg-gray-50 px-4 shadow-inner">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
        />
        <button className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <circle cx="11" cy="11" r="7" strokeWidth="2" />
            <path d="m16.5 16.5 4 4" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200">
          Sign in
        </button>
        <img
          className="h-9 w-9 rounded-full border border-gray-200 object-cover shadow-sm"
          src="https://i.pinimg.com/736x/3f/9f/5b/3f9f5b8c9f31ce16c79d48b9eeda4de0.jpg"
          alt="Profile avatar"
        />
      </div>
    </header>
  );
};

export default Head;
