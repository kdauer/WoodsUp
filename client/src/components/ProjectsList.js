import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = props => {
  return props.projects.map(project => {
    return (
      <p key={project._id}>
        <b>
          <Link to={`/projects/${project._id}`}> {project.title} </Link>
        </b>
      </p>
    );
  });
};

export default ProjectsList;
