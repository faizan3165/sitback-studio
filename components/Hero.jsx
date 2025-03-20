"use client";

import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <section className="min-w-screen py-[0.5rem] px-[1rem] flex items-center justify-center">
      <div className="w-[100vw] h-auto flex flex-col items-center justify-start  p-15 rounded-xl">
        <h1 className="text-xs bg-yellow-300 p-1 rounded-full -rotate-1">
          Frustrated With Your Youtube Journey?
        </h1>

        <h2 className="text-4xl text-center mt-2">
          Turn Your Underperforming Videos <br /> to Viral Bangers
        </h2>

        <p className="text-xs mt-3 w-96 text-center">
          We ideate, research & write your Youtube scripts to help you get more
          views & tell stories that matter.
        </p>

        <div className="w-auto h-auto bg-black mt-2">
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=FTH6Dn3AyIQ&ab_channel=JavaScriptMastery"
            }
            light
            controls
            pip
            stopOnUnmount={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
