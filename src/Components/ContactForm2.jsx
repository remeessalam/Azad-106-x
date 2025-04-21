import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { companyDetails } from "../data/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactForm2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const handleFormSubmit = async (values) => {
    if (spinner) {
      return;
    }
    setSpinner(true);

    var emailBody = "Full Name: " + values.fullName + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message: " + values.message + "\n\n";

    // Construct the request payload
    var payload = {
      // to: "remeesreme4u@gmail.com",
      to: companyDetails.email,
      name: "Brainways",
      subject: "New Lead Form Submission",
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <form
      data-aos="fade-up"
      className="grid grid-cols-1 gap-5 text-white"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName", { required: true })}
            className="p-2 outline-none bg-primary/10 rounded w-full"
          />
          {errors.fullName && (
            <span className="text-sm text-red-600">Full Name is required</span>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
            className="p-2 outline-none bg-primary/10 rounded w-full"
          />
          {errors.email && (
            <span className="text-sm text-red-600">Email is required</span>
          )}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
          className="p-2 outline-none bg-primary/10 rounded w-full"
        />
        {errors.subject && (
          <span className="text-sm text-red-600">Subject is required</span>
        )}
      </div>
      <div>
        <textarea
          rows="5"
          placeholder="Message"
          {...register("message", { required: true })}
          className="p-2 outline-none bg-primary/10 rounded w-full"
        />
        {errors.message && (
          <span className="text-sm text-red-600">Message is required</span>
        )}
      </div>
      <button type="submit" className="primary-btn">
        {spinner ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm2;
