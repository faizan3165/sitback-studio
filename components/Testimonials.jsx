import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Testimonials = () => {
  const testData = [
    { id: 1, img: "/assets/testimonials/test_1.PNG" },
    { id: 2, img: "/assets/testimonials/test_2.PNG" },
    { id: 3, img: "/assets/testimonials/test_3.PNG" },
    { id: 4, img: "/assets/testimonials/test_4.PNG" },
    { id: 5, img: "/assets/testimonials/test_5.PNG" },
    { id: 6, img: "/assets/testimonials/test_6.PNG" },
    { id: 7, img: "/assets/testimonials/test_7.PNG" },
    { id: 8, img: "/assets/testimonials/test_8.PNG" },
  ];

  return (
    <section className="mt-5 flex items-center justify-center p-5 flex-col">
      <h1 className="my-4 text-xl font-semibold">Client Testimonials</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testData.map((item) => (
          <div
            key={item.id}
            className="h-full w-full rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl flex items-center justify-center"
          >
            <Zoom>
              <img
                src={item.img}
                alt="Testimonial"
                className="object-cover w-full h-full rounded-xl"
              />
            </Zoom>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
