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
        <ProjectBox {...ProjectsList.Torgate} />
        <ProjectBox {...ProjectsList.IMBarber} />
        <ProjectBox {...ProjectsList.Cellu} />
        <ProjectBox {...ProjectsList.Fiberlocator} />
        <ProjectBox {...ProjectsList.Simonsays} />
        <ProjectBox {...ProjectsList.Compound} />
      </section>
    </>
  );
}
export default ProjectsGallery;
