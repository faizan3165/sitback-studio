"use client";

import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player";

const OurWork = () => {
  return (
    <section className="mt-5 flex flex-col items-center justify-center p-5">
      <h1>Our Work</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-5 p-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Link href="#" key={i}>
            <div className="p-5 rounded-xl shadow-md hover:shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <div className="relative w-full h-56">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=FTH6Dn3AyIQ&ab_channel=JavaScriptMastery"
                  width="100%"
                  height="100%"
                  controls
                />
              </div>

              <div className="mt-2">
                <p className="text-wrap text-base">
                  This is some long long video title title tielt title
                  titletitle{" "}
                </p>

                <p className="mt-2 text-sm text-gray-400">@ChannelName</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
