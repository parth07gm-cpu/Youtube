import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.myApp.isMenuOpen);

  return (
    <div className="flex min-h-[calc(100vh-80px)] overflow-hidden">
      {isMenuOpen ? <Sidebar /> : <></>}
      <main className="flex-1 overflow-hidden bg-white">
        <MainContainer />
      </main>
    </div>
  );
};

export default Body;
