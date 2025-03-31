import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email, // Corrected from "Email" to "email"
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/adrnmvga", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <span>Please fill out the form to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-grey-700">Full Name</label>
            <input
              className="shadow rounded-lg appearance-none border py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("name", { required: true })}
              id="name"
              type="text"
              placeholder="Enter Your Full Name"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-grey-700">Email Address</label>
            <input
              className="shadow rounded-lg appearance-none border py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Your Email Address"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-grey-700">Message</label>
            <textarea
              className="shadow rounded-lg appearance-none border py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              {...register("message", { required: true })}
              placeholder="Type your message here"
            />
            {errors.message && <span className="text-red-500">Message is required</span>}
          </div>

          <button type="submit" className="bg-black text-white rounded-3xl px-3 py-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
