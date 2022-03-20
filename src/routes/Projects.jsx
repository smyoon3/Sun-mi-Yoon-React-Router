// import css
import './../assets/css/App.css';
// import nav
import Header from "./../components/Header";
// import image
import webImage from './../assets/images/web.jpeg';

import { Outlet, Link } from "react-router-dom";
import { getProjects } from "../data";

export default function Projects() {
  let project = getProjects();
  return (
    <div>
      <Header/>
      <nav class="projectNav">
      {project.map((projects) => (
          <Link class="projectLink"
            to={`/project/${projects.name}`}
          >
            {projects.name}
          </Link>
        ))}
        </nav>
      <Outlet />
      <img class="homeImage webImage" src={webImage} alt="projectsImage"/>
    </div>
  );
}

