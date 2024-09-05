import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BsChat } from "react-icons/bs";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../App";
import { validateEmail, validateName } from "../ValidationFunctions";

export const NeedAssistance = ({ setIsOpen }) => {
  const { baseUrl } = useContext(UserContext);
  const [guidanceChecked, setGuidanceChecked] = useState(true);

  function validateTelephone(value, id, error) {
    const element = document.querySelector(`#${id} + .error_1`);
    if (!value.trim()) {
      element.textContent = ``;
    } else if (isNaN(value) || value.length < 10) {
      element.textContent = `Please Enter a Valid ${error}`;
    } else {
      element.textContent = "";
    }
  }

  function handleDashboardValidation() {
    const nameValue = document.getElementById("input_first_name").value;
    const lastValue = document.getElementById("input_last_name").value;
    const emailValue = document.getElementById("input_email").value;
    const phoneNumber = document.getElementById("input_phone").value;


    validateName(nameValue, "input_first_name", "First Name");
    validateName(lastValue, "input_last_name", "Last Name");
    validateEmail(emailValue, "input_email", "Email Address");

    if (!document.getElementById("input_phone") != "") {
      validateTelephone(
        document.getElementById("input_phone").value,
        "input_phone",
        "Phone Number"
      );
    }

    const formData = {
      email: document.getElementById("input_email")?.value,
      first_name: document.getElementById("input_first_name")?.value,

      last_name: document.getElementById("input_last_name")?.value,

      message: document.getElementById("input_message")?.value,
      phone: document.getElementById("input_phone")?.value,
    };
    // const productData = {
    //   ringId: ringId,
    //   productColor: color,
    //   [diamond?.gem_type != null ? "gemstoneId" : "diamondId"]: diamondId,
    // };

    if (
      nameValue != "" &&
      lastValue != "" &&
      emailValue != "" &&
      (!phoneNumber || phoneNumber.length === 10)
    ) {
      const URL = `${baseUrl}/contact?first_name=${
        formData.first_name
      }&last_name=${formData.last_name}&email=${formData.email}&message=${
        formData.message ? formData.message : null
      }
      &phone=${formData?.phone}&send_updates=${guidanceChecked}&type=help`;
      axios
        .get(
          URL,

          {
            headers: {
              "Content-Type": "application/json",
              // "X-CSRF-TOKEN": shapeData,
              // Add other headers if needed
            },
          }
        )

        .then((response) => {
          if (response.status === 200) {
            setIsOpen(false);
            toast.success(response?.data?.msg, {
              position: "top-right",
            });
          } else {
            console.error("Error Status:", response);
          }
        })

        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      const popupContent = document.querySelector(".popup__content");
      if (popupContent && !popupContent.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  // function handleHelpValidations(color, ringId, diamondId) {
  //   const recipientEmail = document.getElementById("help-email").value;
  //   const yourName = document.getElementById("help-name").value;
  //   const yourLastName = document.getElementById("help-last").value;
  //   const phoneNumber = document.getElementById("help-phone").value;

  //   validateName(yourName, "help-name", "First Name");
  //   validateName(yourLastName, "help-last", "Last Name");
  //   validateEmail(recipientEmail, "help-email", "Email Address");

  // }
  return (
    <>
      <section className="popup-need-assis">
        <div className="popup__content">
          <div className="need-ass-popup">
            <div className="close-popup-icon">
              <h3 className="modal-title">Need Assistance?</h3>
              <Link to="#" onClick={() => setIsOpen(false)}>
                <IoMdClose />
              </Link>
            </div>
            <div className="need-form-row">
              <div className="ass-form-left">
                <div className="assistance-form">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      id="input_first_name"
                      placeholder="First Name"
                      name="first_name"
                      maxLength="32"
                      onChange={(e) =>
                        validateName(
                          e.target.value,
                          "input_first_name",
                          "First Name"
                        )
                      }
                    />
                    <div className="error_1"></div>
                    <input
                      type="text"
                      className="form-control"
                      id="input_last_name"
                      placeholder="Last Name"
                      name="last_name"
                      maxLength="32"
                      onChange={(e) =>
                        validateName(
                          e.target.value,
                          "input_last_name",
                          "Last Name"
                        )
                      }
                    />
                    <div className="error_1"></div>

                    <input
                      type="text"
                      className="form-control"
                      id="input_email"
                      placeholder="Email Address"
                      name="email"
                      maxLength="75"
                      onChange={(e) =>
                        validateEmail(
                          e.target.value,
                          "input_email",
                          "Email Address"
                        )
                      }
                    />
                    <div className="error_1"></div>
                    <input
                      type="text"
                      maxLength={10}
                      className="form-control"
                      id="input_phone"
                      placeholder="Phone (Optional)"
                      name="phone"
                      onChange={(e) =>
                        validateTelephone(
                          e.target.value,
                          "input_phone",
                          "Phone Number"
                        )
                      }
                    />
                    <div className="error_1"></div>
                    <textarea
                      className="form-control"
                      id="input_message"
                      placeholder="Message"
                      style={{ height: "6em" }}
                      name="message"
                      maxLength="300"
                    ></textarea>
                    <label className="check-box">
                      <input
                        type="checkbox"
                        checked={guidanceChecked}
                        onClick={() => setGuidanceChecked(!guidanceChecked)}
                      />
                      Send me updates on new styles and special offers.
                    </label>
                    <Link
                      className="btn"
                      data-category="Form Submit"
                      onClick={() => handleDashboardValidation()}
                    >
                      REQUEST GUIDANCE
                    </Link>
                  </form>
                </div>
              </div>

              <div className="ass-detail-right">
                <div className="get-ass">
                  <ul>
                   
                    <li>
                      <Link to="tel:609-507-0003">
                        <span>
                          {" "}
                          <FaPhoneAlt />
                        </span>
                        Call Us 609-507-0003
                      </Link>
                    </li>
                  </ul>
                  <p className="mt-20 mb-20">
                    Customer Service Hours:
                    <br />
                    Our jewelry specialists are available 24/7.
                  </p>
                  <p className="text-66">
                    <span>
                      <Link
                        onClick={() =>
                          document.body.classList.remove("email-popup-open")
                        }
                        to="/faqs"
                        className="mr10 td-u"
                      >
                        View FAQs
                      </Link>{" "}
                    </span>
                    <span>
                      <Link to="#" className="td-u">
                        View Customer Service
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center">
              Your privacy is important to us.{" "}
              <span>
                <Link
                  onClick={() =>
                    document.body.classList.remove("email-popup-open")
                  }
                  to="/privacy-policy"
                  className="td-u"
                >
                  View Privacy Policy
                </Link>
                .
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
