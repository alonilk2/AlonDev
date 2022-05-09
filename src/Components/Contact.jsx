import "../App.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Flip from "react-reveal/Flip";

export default function Contact(props) {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState();
  const handleSubmit = () => {
    window.emailjs
      .send("service_rh4fcch", "template_w3ffrb8", {
        fullname: fullName,
        email: email,
        subject: subject,
        content: content,
      })
      .then(
        function (response) {
          setSuccess(true)
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          setSuccess(false)
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <section
        className={props.className}
        style={{ marginTop: 0, zIndex: props.state ? 4 : 0 }}
      >
        <div
          className="content-body-project"
          style={{ justifyContent: "center", margin: "2%" }}
        >
          <div className="contact-container">
            <div className="contact-col">
              {success && <div className="success">
                Your message has been sent successfully. Thank you!
              </div>}
              <h1
                className="content-title-project delay-1 hover-animate"
                style={{ position: "unset", height: "unset" }}
              >
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t </span>{' '}
                <span> m</span>
                <span>e</span>
              </h1>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  id="filled-basic"
                  label="Full Name"
                  variant="filled"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFullName(e.target.value);
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <TextField
                id="filled-basic"
                label="Subject"
                variant="filled"
                onChange={(e) => setSubject(e.target.value)}
              />
              <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                variant="filled"
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                className="contact-submit-btn button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className="div">
              <img
                src={
                  "https://maps.googleapis.com/maps/api/staticmap?center=Nof%20Hagalil,Israel&zoom=8&size=450x400&scale=2&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=edd7e6c59663c968"
                }
                alt="Map"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
