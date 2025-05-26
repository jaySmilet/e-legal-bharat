import React, { useState } from "react";
import { ServiceType, UserContact } from "../models/models";
import { initialUserContact } from "../static/static-data";
import { toast, ToastContainer } from "react-toastify";
import { getServiceContactTxt } from "../utils/utils";

const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const apiUrl = import.meta.env.VITE_TELEGRAM_API_URL;

interface ContactProps {
  serviceType?: ServiceType;
}

const Contact = ({ serviceType }: ContactProps) => {
  const [userContact, setUserContact] =
    useState<UserContact>(initialUserContact);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (name === "mobile") {
      // Allow only digits and max 10 characters
      if (!/^\d*$/.test(value) || value.length > 10) {
        return;
      }
    }

    setUserContact({
      ...userContact,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!userContact.name || userContact.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!/^\d{10}$/.test(userContact.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    }
    if (
      !userContact.location ||
      userContact.location.trim().length < 0 ||
      /\s/.test(userContact.location)
    ) {
      newErrors.location = "Enter your city or area.";
    }
    if (
      !userContact.businessName ||
      userContact.businessName.trim().length < 0 ||
      /\s/.test(userContact.businessName)
    ) {
      newErrors.businessName = "Enter your business name.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(userContact);

    const message = `
👤 Name: ${userContact.name}
📱 City: ${userContact.location}
💼 Mobile: ${userContact.mobile}
💼 Message: ${userContact.message}
💼 Have GSTIN: ${userContact.haveGstNumber}`;

    try {
      const response = await fetch(`${apiUrl}bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        toast.success(
          "Data sent successfully! Our team will contact you soon.",
          { theme: "colored" }
        );
        setUserContact(initialUserContact);
      } else {
        toast.warning(
          "Unable to send message to Admin. Please try again later.",
          {
            theme: "colored",
          }
        );
        console.error("Telegram API error:", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again later.", {
        theme: "colored",
      });
    }
  };
  return (
    <>
      <div
        className={`d-flex flex-column gap-4 ${
          !serviceType ? "shadow rounded mx-2 mx-md-5 my-5 p-5" : ""
        }`}
      >
        <h3 className="fs-4 fw-bold text-center">
          {serviceType ? getServiceContactTxt(serviceType) : `Contact Us`}
        </h3>

        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 718 669"
                >
                  <path
                    fill="currentColor"
                    d="M646 516c47 26 74 70 71 115c-3 28-3 29-39 33c-23 3-163 5-307 5c-163 0-333-2-346-5c-48-13-22-102 43-143c50-33 152-82 179-88c38-8 43-31 1-106c-10-17-22-68-23-122c-2-86 16-145 91-173c14-5 30-8 45-8c50 0 97 28 116 69c27 55 16 199-13 251c-32 60-29 78 8 88c24 6 99 43 174 84z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className={`form-control${errors.name ? " is-invalid" : ""}`}
                id="validationServerName"
                placeholder="Name*"
                aria-label="name"
                aria-describedby="basic-addon1 validationServerNameFeedback"
                value={userContact.name}
                onChange={handleChange}
                name="name"
              />
              {errors.name && (
                <small
                  id="validationServerNameFeedback"
                  className="invalid-feedback validation-fs"
                >
                  {errors.name}
                </small>
              )}
            </div>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className={`form-control${errors.mobile ? " is-invalid" : ""}`}
                placeholder="Mobile Number*"
                aria-label="MobileNumber"
                aria-describedby="basic-addon2 validationServerMobileFeedback"
                value={userContact.mobile}
                onChange={handleChange}
                name="mobile"
              />
              {errors.mobile && (
                <small
                  id="validationServerMobileFeedback"
                  className="invalid-feedback validation-fs"
                >
                  {errors.mobile}
                </small>
              )}
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 0a5 5 0 0 0-5 5c0 5 5 11 5 11s5-6 5-11a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className={`form-control${
                  errors.location ? " is-invalid" : ""
                }`}
                placeholder="City / Area*"
                aria-label="City/Area"
                aria-describedby="basic-addon3 validationServerLocationFeedback"
                value={userContact.location}
                onChange={handleChange}
                name="location"
              />
              {errors.location && (
                <small
                  id="validationServerLocationFeedback"
                  className="invalid-feedback validation-fs"
                >
                  {errors.location}
                </small>
              )}
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2ZM2 20v-6H1v-2l1-5h15l1 5v2h-1v3h-2v-3h-4v6H2Zm2-2h5v-4H4v4ZM2 6V4h15v2H2Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className={`form-control${
                  errors.businessName ? " is-invalid" : ""
                }`}
                placeholder="Your Business Name*"
                aria-label="BusinessName"
                aria-describedby="basic-addon4 validationServerBusinessNameFeedback"
                value={userContact.businessName}
                onChange={handleChange}
                name="businessName"
              />
              {errors.businessName && (
                <small
                  id="validationServerBusinessNameFeedback"
                  className="invalid-feedback validation-fs"
                >
                  {errors.businessName}
                </small>
              )}
            </div>
          </div>
          <div className="col-12 mb-3">
            <textarea
              className="form-control"
              placeholder="Tell Us More About Your Business"
              aria-label="With textarea"
              value={userContact.message}
              onChange={handleChange}
              name="message"
            ></textarea>
          </div>
          <div className="col-12 mb-3">
            <div className="form-check">
              <input
                className="form-check-input cursor-pointer"
                type="checkbox"
                id="gridCheck"
                checked={userContact.haveGstNumber}
                onChange={handleChange}
                name="haveGstNumber"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                <small className="cursor-pointer">
                  Do you have GST Number?{" "}
                  <span className="fst-italic">(Optional)</span>
                </small>
              </label>
            </div>
          </div>
          <div
            className={`d-grid mx-auto mt-2 ${
              !serviceType ? "col-6" : "col-12 "
            }`}
          >
            <button type="submit" className="btn btn-outline-dark">
              Connect
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>

      {!serviceType && (
        <div className={`shadow rounded row mx-2 mx-md-5 my-5 p-5`}>
          {/* Contact Details */}
          <div className="col-md-6 d-flex flex-column gap-2">
            <span className="fs-5 fw-bold">Office Address</span>
            <p className="mb-4">
              Rapti Nagar Phase 3,
              <br />
              Near Arogya Mandir,
              <br />
              Gorakhpur, Uttar Pradesh
              <br />
              India, 273003
            </p>
          </div>

          <div className="col-md-6 d-flex flex-column gap-2">
            <div className="d-flex align-items-center gap-1">
              <span className="fs-5 fw-bold">Email: </span>
              <a
                href="mailto:elegalbharat@gmail.com"
                className="text-secondary"
              >
                elegalbharat@gmail.com
              </a>
            </div>

            <div className="d-flex align-items-center gap-1">
              <span className="fs-5 fw-bold">Mobile: </span>
              <a href="tel:+916388232984" className="text-secondary">
                +91-6388232984
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
