import React from "react";
import banner from "../assets/images/banners/aboutus.webp";
import PageBanner from "../Components/Website/PageBanner";
import HrLine from "../Components/HrLine";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";
import visionImg from "../assets/images/vision.webp";
import missionImg from "../assets/images/mission.webp";
import { ImPhone } from "react-icons/im";
import Testimonials from "../Components/Testimonials";

const AboutUs = () => {
  return (
    <>
      <PageBanner banner={banner} title="About Us" />
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase  text-start">Our Vision</p>
          <h3 className="section-heading">
            Shaping the Future Through Technology & Innovation
          </h3>
          <HrLine />
          <p>
            Our vision is to be the trusted global partner for digital
            transformation, driving impact through innovative technologies. We
            strive to empower businesses with tailored IT solutions that inspire
            growth, efficiency, and sustainability. By embracing emerging
            technologies like AI, Blockchain, and Data Science, we envision a
            world where technology simplifies challenges and amplifies human
            potential.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Request A Quote
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
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
        </div>
        <div data-aos="fade-up" className="w-full h-full">
          <img
            src={visionImg}
            className="w-full h-full object-cover object-bottom rounded-lg"
            alt="Our Vision"
          />
        </div>
      </section>

      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="md:block hidden w-full h-full">
          <img
            src={missionImg}
            className="w-full h-full object-cover rounded-lg"
            alt="Our Mission"
          />
        </div>
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase  text-center">Our Mission</p>
          <h3 className="section-heading">
            Delivering Future-Ready Solutions with Integrity & Innovation
          </h3>
          <HrLine />
          <div
            data-aos="fade-up"
            className="block md:hidden w-full aspect-square"
          >
            <img
              src={missionImg}
              className="w-full h-full object-cover rounded-lg"
              alt="Our Mission"
            />
          </div>
          <p>
            Our mission is to provide tailored digital solutions that empower
            businesses to scale, innovate, and lead. We are committed to
            delivering cutting-edge services in AI, Blockchain, Data Science,
            App and Web Development, and UI/UX Design. Through close
            collaboration, end-to-end support, and a deep understanding of
            client needs, we aim to turn complex challenges into meaningful
            solutions while upholding excellence, transparency, and integrity.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Request A Quote
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
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
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default AboutUs;
