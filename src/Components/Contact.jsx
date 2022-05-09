import "../App.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Flip from "react-reveal/Flip";

export default function Contact(props) {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

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
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
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
              <Flip top when={props.state} cascade>
                <h1
                  className="content-title-project delay-1"
                  style={{ position: "unset", height: "unset" }}
                >
                  Contact Me
                </h1>
              </Flip>{" "}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  id="filled-basic"
                  label="Full Name"
                  variant="filled"
                  onChange={(val) => setFullName(val)}
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  onChange={(val) => setEmail(val)}
                />
              </div>
              <TextField
                id="filled-basic"
                label="Subject"
                variant="filled"
                onChange={(val) => setSubject(val)}
              />
              <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                variant="filled"
                onChange={(val) => setContent(val)}
              />
              <button className="contact-submit-btn" onClick={handleSubmit}>Submit</button>
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
