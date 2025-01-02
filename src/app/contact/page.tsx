"use client"
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 px-8 ">

      <div className="max-w-md text-center md:text-left">
        <h2 className="text-4xl font-bold  mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Need to get in touch with us? Either fill out the form with your inquiry or find the{" "}
          <a
            href="mailto:department@example.com"
            className="text-black underline"
          >
            Abc email
          </a>{" "}
          you like to contact below.
        </p>
      </div>

      <form
        className="bg-white shadow-sm rounded-lg p-6 w-full max-w-md"
        onSubmit={(e) => e.preventDefault()} 
      >
        <div className="flex flex-col gap-4">
          
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <label htmlFor="firstName" className="block font-medium  text-black">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name... "
                required
                className="mt-1 block w-full h-10 rounded-sm border-b-2  outline-none shadow-sm border-black bg-white text-sm"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block font-medium text-black">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name... "
                className="mt-1 block w-full h-10 rounded-sm border-b-2  outline-none shadow-sm border-black bg-white text-sm"
                />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium text-black">
              Email <span className="text-red-800"> * </span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email..."
              required
              className="mt-1 block w-full h-10 rounded-sm border-b-2  outline-none shadow-sm border-black bg-white text-sm"
              />
          </div>

          <div>
            <label htmlFor="message" className="block  font-medium text-black">
              How can we assist you?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="write your message here..."
              className="mt-1 block w-full rounded-sm border-b-2 shadow-sm border-black outline-none sm:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-32 align-middle bg-[#733eed] text-white hover:text-black  font-bold py-2 px-4 rounded-md hover:bg-white hover:border-2 hover:border-[#733eed]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
