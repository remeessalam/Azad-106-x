import React, { useState, useEffect } from "react";
import Header from "./Components/Website/Header";
import Footer from "./Components/Website/Footer";
import { Outlet, useLocation } from "react-router-dom";
import LandingHeader from "./Components/LandingPage/LandingHeader";
import LandingFooter from "./Components/LandingPage/LandingFooter";
import Popupform from "./Components/Popupform";
import StickyCTA from "./Components/StickyCTA";

export const MainLayout = () => {
  const [showPopuptwo, setShowPopuptwo] = useState(false);
  const location = useLocation(); // Import from 'react-router-dom'

  useEffect(() => {
    // Only trigger on homepage
    if (location.pathname !== "/") return;

    // Check if popup has been shown in this session
    const hasPopupShown = sessionStorage.getItem("popupShown");
    if (hasPopupShown) return;

    // Time-based trigger (5 seconds)
    const timer = setTimeout(() => {
      triggerPopup();
    }, 5000);

    // Scroll-based trigger (50% of page)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= pageHeight * 0.5) {
        triggerPopup();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // Add dependency

  const triggerPopup = () => {
    setShowPopuptwo(true);
    sessionStorage.setItem("popupShown", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("User data:", data);
    setShowPopuptwo(false);
  };

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <StickyCTA /> {/* Added sticky CTA */}
      <Footer />
      {/* Only show popup on homepage */}
      {showPopuptwo && location.pathname === "/" && (
        <Popupform setShowPopup={setShowPopuptwo} handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export const LandingPageLayout = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasPopupShown = sessionStorage.getItem("popupShown");
    if (hasPopupShown) return;

    // Time-based trigger (5 seconds)
    const timer = setTimeout(() => {
      triggerPopup();
    }, 5000);

    // Scroll-based trigger (50% of page)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= pageHeight * 0.5) {
        triggerPopup();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const triggerPopup = () => {
    setShowPopup(true);
    sessionStorage.setItem("popupShown", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("User data:", data);
    setShowPopup(false);
  };

  return (
    <>
      <LandingHeader />
      <main>
        <Outlet />
      </main>
      <StickyCTA /> {/* Added sticky CTA */}
      <LandingFooter />
      {showPopup && (
        <Popupform setShowPopup={setShowPopup} handleSubmit={handleSubmit} />
      )}
    </>
  );
};
