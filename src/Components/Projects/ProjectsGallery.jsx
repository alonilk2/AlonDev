import { Fade, Zoom } from "react-reveal";
import "../../App.css";
import useWindowSize from "../../Hooks/useWindowSize";
import ProjectBox from "./ProjectBox";
import { ProjectsList } from "./ProjectsList";

function ProjectsGallery(props) {
  const size = useWindowSize();

  return (
    <>
      <section
        className={props.className}
        style={{
          zIndex: props.state ? 4 : 0,
          padding: size.width < 980 && "0% 3%",
          flexDirection: size.width < 980 && "column",
          justifyContent: "space-evenly",
        }}
      >
        {size.width > 980 ? (
          <>
            <ProjectBox {...ProjectsList.Torgate} />
            <ProjectBox {...ProjectsList.IMBarber} />
            <ProjectBox {...ProjectsList.Cellu} />
            <ProjectBox {...ProjectsList.Fiberlocator} />
            <ProjectBox {...ProjectsList.Simonsays} />
            <ProjectBox {...ProjectsList.Compound} />
          </>
        ) : (
          <Fade bottom fraction={0.5}>
            <ProjectBox {...ProjectsList.Torgate} />
            <ProjectBox {...ProjectsList.IMBarber} />
            <ProjectBox {...ProjectsList.Cellu} />
            <ProjectBox {...ProjectsList.Fiberlocator} />
            <ProjectBox {...ProjectsList.Simonsays} />
            <ProjectBox {...ProjectsList.Compound} />
          </Fade>
        )}
      </section>
    </>
  );
}
export default ProjectsGallery;
