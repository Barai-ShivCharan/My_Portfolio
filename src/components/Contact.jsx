import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/zbzkmeda", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contacts"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20   my-16"
      ></div>

      <h1 className="text-3xl font-bold mb-4 px-20 ">Contact Me</h1>
      <span className="px-20">
        Please fill out the form below to contact me.
      </span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // action="https://getform.io/f/zbzkmeda"
          // method="POST"
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message.</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Enter Your Full Name.</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:out-of-range:"
              type="text"
              name="name"
              id=""
              placeholder="Enter your Full Name Here..."
            />
            {errors.name && <span>This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">
              Enter Your E-mail Address.
            </label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:out-of-range:"
              type="text"
              name="email"
              id=""
              placeholder="Enter your E-mail Address Here..."
            />
            {errors.email && <span>This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message.</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:out-of-range:"
              type="text"
              name="message"
              id=""
              placeholder="Enter Your Query Here..."
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-sky-700 duration-500"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
