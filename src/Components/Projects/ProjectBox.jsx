import { Divider } from "@mui/material";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectBox(props) {
  const [open, setOpen] = useState(false)
  const handleDetails = () => setOpen(true)
  const handleGit = () => window.location.href = props.git
  return (
    <div className="project-container">
      <ProjectModal open={open} setOpen={setOpen} project={props} />
      <div
        className="project-image-head"
        style={{
          backgroundImage:
            `url(${props.images[0]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="project-name-date">
          <h6>{props.date}</h6>
          <h1>{props.name}</h1>
          <Divider />
          <div className="tech-stack">{props.stack.split(', ').map((tech)=>{
            return <div className="tech-bubble">{tech}</div>
          })}</div>
        </div>

        <div className="darken"></div>
      </div>
      <div className="btns-row">
        <button className="button-git-box btn-git" onClick={handleGit}>Github Repository</button>
        <button className="button-red-box btn-enter" onClick={handleDetails}>Details</button>
      </div>
    </div>

  );
}
