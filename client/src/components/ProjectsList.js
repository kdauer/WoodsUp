import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = props => {
  return props.projects.map(project => {
    console.log('project here', project);
    return (
      <div key={project._id} className="project-container">
        <Link to={`/projects/${project._id}`}>
          <img src={project.image} alt="Projectpic" />{' '}
        </Link>
      </div>
    );
  });
};

export default ProjectsList;
