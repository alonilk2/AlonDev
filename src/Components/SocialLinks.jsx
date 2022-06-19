import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export const SocialLinks = (
  <div className="social-links">
    <a href={"https://www.linkedin.com/in/alonbar1/"}>
      <FaLinkedinIn style={{ margin: "5px 0" }} />
    </a>
    <a href={"https://github.com/alonilk2"}>
      <FaGithub style={{ margin: "5px 0" }} />
    </a>
    <a href={"https://stackoverflow.com/users/9691776/alon-barenboim"}>
      <FaStackOverflow style={{ margin: "5px 0" }} />
    </a>
  </div>
);
