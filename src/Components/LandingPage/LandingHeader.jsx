import React, { useState } from "react";
import { Link } from "react-router-dom";
import { companyDetails, logo } from "../../data/constant";
import { Divide as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoClose, IoMail } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImPhone } from "react-icons/im";
import { Link as Scroll } from "react-scroll";

export const websiteLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "about" },
  { id: 3, name: "Services", path: "services" },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full max-w-[100vw] z-[999]">
      <div className="py-3 hidden sm:flex bg-white text-secondary">
        <div className="wrapper w-full flex items-center justify-between gap-4 md:gap-10">
          <div className="flex flex-row items-center gap-7">
            <div className="flex items-center gap-2">
              <IoMail size={20} className="fill-secondary text-secondary" />
              <Link to={`mailto:${companyDetails.email}`}>
                {companyDetails.email}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ImPhone size={18} className="fill-secondary text-secondary" />
              <Link to={`tel:${companyDetails.phone}`}>
                {companyDetails.phone}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={companyDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-secondary"
            >
              <FaLinkedinIn
                className="fill-secondary"
                size={16}
                strokeWidth={1}
              />
            </Link>
            <Link
              to={companyDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-secondary"
            >
              <FaInstagram
                className="fill-secondary text-secondary"
                size={16}
                strokeWidth={1}
              />
            </Link>
            <Link
              to={companyDetails.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-secondary"
            >
              <FaFacebookF
                className="fill-secondary"
                size={16}
                strokeWidth={1}
              />
            </Link>
            <Link
              to={companyDetails.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex hover:bg-primary transition-all duration-200 justify-center items-center rounded-full border border-secondary"
            >
              <FaXTwitter
                className="fill-secondary"
                size={16}
                strokeWidth={1}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 bg-secondary">
        <div className="wrapper flex items-center justify-between gap-10">
          <Scroll smooth spy to="banner">
            <img
              src={logo}
              alt="logo"
              className="w-[7rem] scale-110 object-contain cursor-pointer"
            />
          </Scroll>
          <div className="hidden md:flex items-center gap-7">
            {websiteLinks.map((link) =>
              link.path.includes("/") ? (
                <Link key={link.id} to={link.path} className="link">
                  {link.name}
                </Link>
              ) : (
                <Scroll
                  smooth
                  spy
                  offset={-90}
                  key={link.id}
                  to={link.path}
                  className="link"
                  // activeClass="font-bold text-primary"
                >
                  {link.name}
                </Scroll>
              )
            )}
            <Scroll
              smooth
              spy
              offset={-100}
              to="contact"
              className="primary-btn"
            >
              Contact Us
            </Scroll>
          </div>
          <div
            className="block md:hidden justify-self-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger
              color="#ffffff"
              size="26"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2 bg-secondary"
      >
        <div className="mb-6 flex items-center justify-end px-[.7rem] py-[.4rem] ">
          {/* <img
            src={logo}
            width="auto"
            height="auto"
            alt="logo"
            className="h-[2.5rem] object-contain"
          /> */}
          <button onClick={() => setIsOpen(false)}>
            <IoClose size={28} className="fill-black" />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4 text-black">
          {websiteLinks.map((link) =>
            link.path.includes("/") ? (
              <Link
                key={link.id}
                to={link.path}
                className="text-2xl font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <Scroll
                smooth
                spy
                offset={-20}
                onClick={() => setIsOpen(false)}
                key={link.name}
                to={link.path}
                className="text-2xl font-medium"
              >
                {link.name}
              </Scroll>
            )
          )}
          <Scroll
            smooth
            spy
            offset={-20}
            onClick={() => setIsOpen(false)}
            to="contact"
            className="text-2xl font-medium"
          >
            Contact Us
          </Scroll>
        </div>
      </Drawer>
    </div>
  );
};

export default LandingHeader;
