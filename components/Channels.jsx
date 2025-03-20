import Link from "next/link";
import React from "react";

const Channels = () => {
  return (
    <section
      className="flex justify-center items-center flex-col p-10"
      id="our-work"
    >
      <h1>Channels We Have Worked With</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-16 mt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Link
            href={"/"}
            key={i}
            className="flex flex-row items-center justify-center gap-3 bg-[#EEEEFF] rounded-full p-3 transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-100"
          >
            <div>
              <img
                src="/favicon.ico"
                alt="channel"
                className="w-10 h-10 cover"
              />
            </div>

            <div>
              <h4>Channel Name</h4>
              <p className="text-xs text-gray-500">@Channel name</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Channels;
