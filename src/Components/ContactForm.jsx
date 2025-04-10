import React from "react";
import HrLine from "./HrLine";
import { TiArrowBack } from "react-icons/ti";
import { ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";

const ContactForm = () => {
  return (
    <div id="contact" className="wrapper pt-[5rem]">
      <div className="grid md:grid-cols-[55%_auto] gap-7">
        <div data-aos="fade-up" data-aos-offset="-800">
          <div className="space-y-4 text-start">
            <p className="uppercase text-black">request a quote</p>
            <h3 className="section-heading">
              Looking for Expert IT Solutions? Get a Free Quote Today
            </h3>
            <HrLine />
          </div>
          <div className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-5">
            <div className="">
              <TiArrowBack size={25} className="inline -mt-2 text-black" />
              <span className="font-bold ml-2">Reply within 24 hours</span>
            </div>
            <div className="">
              <ImPhone size={20} className="inline -mt-2 text-black" />
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
          className="bg-primary p-7 space-y-3"
        >
          <div>
            <input
              type="text"
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Full Name*"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Email*"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Subject*"
            />
          </div>
          <div>
            <textarea
              rows="5"
              className="w-full p-2 bg-primary-5 outline-none"
              placeholder="Message*"
            />
          </div>
          <button type="button" className="secondary-btn w-full">
            Request A Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
