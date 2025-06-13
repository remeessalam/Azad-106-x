import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Popupform = ({ setShowPopup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [spinner, setSpinner] = useState(false);

  const handleFormSubmit = async (values) => {
    if (spinner) return;
    setSpinner(true);

    const emailBody = `Email: ${values.email}\n\nMobile Number: ${values.phone}`;

    const payload = {
      to: "remeesreme4u@gmail.com", // Replace with actual companyDetails.email
      name: "Popup Form Submission",
      subject: "User Interested in Services",
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
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Thank you! We'll contact you soon.");
          sessionStorage.setItem("popupShown", "true");

          reset();
          setShowPopup(false);
        }
      })
      .catch((err) => {
        toast.error("Something went wrong.");
        console.error(err);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div className="fixed inset-0 bg-black text-blacks bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">
            Want a Service from Us?
          </h3>
          <button
            onClick={() => setShowPopup(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <p className="mt-2 text-gray-600">
          Enter your Mobile number and Email. Our team will reach you shortly.
        </p>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mt-4 space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">Email is required</span>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block  text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: true })}
              className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.phone && (
              <span className="text-red-600 text-sm">
                Mobile number is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-secondary font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition"
          >
            {spinner ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popupform;
