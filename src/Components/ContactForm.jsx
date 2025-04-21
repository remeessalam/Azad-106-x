import React, { useState } from "react";
import HrLine from "./HrLine";
import { TiArrowBack } from "react-icons/ti";
import { ImPhone } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { companyDetails } from "../data/constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
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
      name: "A z a d 1 0 6 x",
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
    <div id="contact" className="wrapper pt-[5rem]">
      <div className="grid md:grid-cols-[55%_auto] gap-7">
        <div data-aos="fade-up" data-aos-offset="-800">
          <div className="space-y-4 text-start">
            <p className="uppercase ">request a quote</p>
            <h3 className="section-heading">
              Looking for Expert IT Solutions? Get a Free Quote Today
            </h3>
            <HrLine />
          </div>
          <div className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-5">
            <div className="">
              <TiArrowBack size={25} className="inline -mt-2 " />
              <span className="font-bold ml-2">Reply within 24 hours</span>
            </div>
            <div className="">
              <ImPhone size={20} className="inline -mt-2 " />
              <span className="font-bold ml-2">24/7 telephone support</span>
            </div>
          </div>
          <p className="mt-5">
            Ready to take your business to the next level? Share your project
            details with us and receive a customized, no-obligation quote
            tailored to your needs. Whether it's web development, AI
            integration, mobile apps, or digital strategy—our team is here to
            help you innovate and grow with confidence.
          </p>
          <div className="mt-7 flex gap-3 sm:justify-center sm:w-fit w-full">
            <div className="bg-primary h-full aspect-square flex justify-center items-center p-3">
              <ImPhone size={25} className="text-black" />
            </div>
            <div className="flex flex-col capitalize">
              <p className="">Call to ask any question</p>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="font-semibold"
              >
                {companyDetails.phone}
              </Link>
            </div>
          </div>
        </div>

        <form
          data-aos="fade-up"
          data-aos-offset="-800"
          className="bg-primary p-7 space-y-3 text-black"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Full Name*"
            />
            {errors.fullName && (
              <span className="text-red-600 text-sm">
                Full Name is required
              </span>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Email*"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">Email is required</span>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("subject", { required: true })}
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Subject*"
            />
            {errors.subject && (
              <span className="text-red-600 text-sm">Subject is required</span>
            )}
          </div>
          <div>
            <textarea
              rows="5"
              {...register("message", { required: true })}
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Message*"
            />
            {errors.message && (
              <span className="text-red-600 text-sm">Message is required</span>
            )}
          </div>
          <button type="submit" className="secondary-btn w-full">
            {spinner ? "Sending..." : "Request A Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
