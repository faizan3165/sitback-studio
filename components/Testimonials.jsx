import React from "react";

const Testimonials = () => {
  const testData = [
    {
      id: 1,
      img: "/assets/testimonials/test_1.PNG",
    },

    {
      id: 2,
      img: "/assets/testimonials/test_2.PNG",
    },

    {
      id: 3,
      img: "/assets/testimonials/test_3.PNG",
    },

    {
      id: 4,
      img: "/assets/testimonials/test_4.PNG",
    },

    {
      id: 5,
      img: "/assets/testimonials/test_5.PNG",
    },

    {
      id: 6,
      img: "/assets/testimonials/test_6.PNG",
    },

    {
      id: 7,
      img: "/assets/testimonials/test_7.PNG",
    },

    {
      id: 8,
      img: "/assets/testimonials/test_8.PNG",
    },
  ];

  return (
    <section className="mt-5 flex items-center justify-center p-5 flex-col">
      <h1 className="my-4">Client Testimonials</h1>

      <div>
        <div className="grid grid-cols-1 gap-y-16">
          {testData.map((item) => (
            <div
              key={item.id}
              className=" h-full w-full rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl flex items-center justify-center"
            >
              <img
                src={item.img}
                alt="Testimonial"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
