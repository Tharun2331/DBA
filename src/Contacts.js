import emailjs from "emailjs-com";
import React from "react";

import "./Contacts.css";

// sk_test_51HD4EoIwAVryXs1mzyOPqPAwuLVy7zKNXEqXRCczQK3KMckT7enqEflVrE3QcoYPEZu40ezi2nmzsqSqP1T9FGC600jqG3AwjN

import CustomButton from "./Custom-Button";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_00it3kc",
        "template_9yjnagn",
        e.target,
        "user_7EV5ZVrZzP2a4cLHtWL26"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="row contact-row">
      <div className="col-6 contact-form">
        <form onSubmit={sendEmail} className="forms">
          <div className="main">
            <h1 className="letUsKnow">Let Us Know What's Up!</h1>
            <div className="sub">

              
            
           

              </div>

            <div className="send_button" onClick={() => alert("We have recieved your message!! Thank you")}>
              <CustomButton>SEND</CustomButton>
            </div>
          </div>
        </form>
      </div>
      <div className="col-6 ">
        <img src="/images/Rectangle2.png" alt="" className="contact-img" />
      </div>
    </div>
  );
}
