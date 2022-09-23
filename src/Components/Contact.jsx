import "../App.css";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import useWindowSize from "../Hooks/useWindowSize";
import { Zoom } from "react-reveal";

const ContactWaysRow = () => {
  return (
    <div className="bubble-row">
      <a href="tel:0587897938" className="col bubble-col">
        <div className="contact-bubble hover-animate-bubble">
          <AiFillPhone />
        </div>
        058-789-7938
      </a>
      <a className="col bubble-col">
        <div className="contact-bubble hover-animate-bubble">
          <GiPositionMarker />
        </div>
        Nof Hagalil, Israel
      </a>
      <a href="mailto:alonilk2@gmail.com" className="col bubble-col">
        <div className="contact-bubble hover-animate-bubble">
          <AiFillMail />
        </div>
        alonilk2@gmail.com
      </a>
    </div>
  );
};

const Map = (size) => {
  return (
    <div className="div" style={{ padding: size.width <= 980 ? "4%" : 0 }}>
      {size.width > 980 ? (
        <img
          src="https://maps.googleapis.com/maps/api/staticmap?markers=color:purple%7Clabel:A%7CNof%20Hagalil,%20Israel&zoom=8&size=450x400&scale=2&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=edd7e6c59663c968"
          alt="Map"
        />
      ) : (
        <img
          src="https://maps.googleapis.com/maps/api/staticmap?markers=color:purple%7Clabel:A%7CNof%20Hagalil,%20Israel&zoom=9&size=550x600&scale=1&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=edd7e6c59663c968"
          style={{ width: "100%" }}
          alt="Map"
        />
      )}
    </div>
  );
};

const Contact = (props) => {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);
  const size = useWindowSize();
  const handleSubmit = () => {
    setLoading(true);
    window.emailjs
      .send("service_rh4fcch", "template_w3ffrb8", {
        fullname: fullName,
        email: email,
        subject: subject,
        content: content,
      })
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        () => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };
  return (
    <>
      <section
        className={props.className}
        style={{ zIndex: props.state ? 4 : 0, margin: "0px" }}
      >
        <Zoom when={props.state} cascade>
          <div
            className="content-body-project"
            style={{
              justifyContent: "center",
              margin: size.width > 980 ? "0" : "3%",
            }}
          >
            <div className="contact-container">
              <div className="contact-col">
                {success && (
                  <div className="success">
                    Your message has been sent successfully. Thank you!
                  </div>
                )}
                <>
                  <h5 style={styles.subtitle}>CONTACT</h5>

                  <h1
                    className="content-title-project hover-animate"
                    style={styles.title}
                  >
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t </span> <span> m</span>
                    <span>e</span>
                  </h1>
                </>
                {ContactWaysRow()}

                <div style={styles.flexRow}>
                  <TextField
                    id="filled-basic"
                    label="Full Name"
                    variant="filled"
                    onChange={(e) => setFullName(e.target.value)}
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={styles.loading}>
                    {loading && <CircularProgress />}
                  </div>

                  <div class="module-border-wrap">
                    <button className="module" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {Map(size)}
            </div>
          </div>
        </Zoom>
      </section>
    </>
  );
};
const styles = {
  subtitle: { margin: "0 5px 0 0", color: "#ff4b2b" },
  flexRow: { display: "flex", flexDirection: "row" },
  title: { margin: "1% 0 4% 0", zIndex: 6 },
  loading: { margin: "2% 2% 0% 0%" },
};
export default Contact;
