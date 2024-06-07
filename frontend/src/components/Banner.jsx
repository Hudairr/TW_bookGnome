import React from 'react'
import banner from "../../public/bookGnome.png"

function Banner() {
    return (
      <>
        <div className="max-w-screen-2x1 container mx-auto mx:pd-20 px-4 flex flex-col md:flex-row space-10">
          <div className="w-full order-2 md:order-1 md:w-1/2 mt:12 md:mt-24">
            <div className="space-y-12">
              <h1 className="text-4x1 font-bold">
                Guiding You Through a World of
                <span className="text-green-700"> Stories!</span>
              </h1>
              <p className="text-xl">
                Immerse yourself in a magical world where every book is a new
                adventure waiting to be uncovered. Our enchanted library is
                designed to captivate your imagination and satisfy your unique
                reading preferences.
              </p>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Join our newsletter"
                />
              </label>
            </div>
            <button className="btn mt-5 bg-green-500 hover:bg-green-800 text-white">Register Now</button>
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/2 col-md-3 ">
            <img
              src={banner}
              className="w-8/12 h-8/12 py-28 md:px-18"
              alt="Book Gnome"
            />
          </div>
        </div>
      </>
    );
}

export default Banner
