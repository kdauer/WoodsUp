import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = props => {
  return props.projects.map(project => {
    return (
      <div key={project._id}>
        {project.image ? (
          <div className="box">
            <img
              className="projectImg"
              src={project.image}
              alt="Projectpicture"
            />
            <div className="mask">
              <Link
                to={`/projects/${project._id}`}
                props={project.image}
                className="link"
              >
                <p className="project_title">{project.title}</p>
              </Link>
            </div>
          </div>
        ) : (
          <div className="project-heading">
            <Link
              to={`/projects/${project._id}`}
              props={project.image}
              className="link-without-image"
            >
              <p>• {project.title}</p>
            </Link>
          </div>
        )}
      </div>
    );
  });
};

export default ProjectsList;

{
  /* <div key={project._id} className="project-container">
        <Link to={`/projects/${project._id}`}>
          <img src={project.image} alt="Projectpic" />{' '}
        </Link>
      </div> */
}
