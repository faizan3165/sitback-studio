"use client";

import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <section className="max-w-screen py-2 px-4 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-3xl h-auto flex flex-col items-center justify-start p-4 rounded-xl">
        <h1 className="text-xs bg-yellow-300 p-1 rounded-full -rotate-1">
          Frustrated With Your Youtube Journey?
        </h1>

        <h2 className="text-4xl text-center mt-2">
          Turn Your Underperforming Videos <br /> to Viral Bangers
        </h2>

        <p className="text-xs mt-3 max-w-sm text-center">
          We ideate, research & write your Youtube scripts to help you get more
          views & tell stories that matter.
        </p>

        {/* Video Wrapper */}
        <div className="w-full max-w-xl h-100 mt-2 overflow-hidden rounded-lg">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=FTH6Dn3AyIQ&ab_channel=JavaScriptMastery"
            light
            controls
            pip
            stopOnUnmount={false}
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
