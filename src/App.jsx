import React, { useEffect } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./Navbar";
import Hero from "./Hero";
const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      {/* <div className="w-full relative min-h-screen">
        {data[0].map((details, index) => (
          <div key={index}>
            <Canvas key={index} details={details} />
          </div>
        ))}
      </div> */}
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
