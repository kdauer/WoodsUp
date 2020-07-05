import React, { Component } from 'react';
import axios from 'axios';

export default class ProjectDetail extends Component {
  state = {
    project: null
  };

  componentDidMount() {
    const id = this.props.match.params.projectId;

    axios.get(`/api/projects/${id}`).then(response => {
      this.setState({
        projects: response.data
      });
    });
  }

  render() {
    const project = this.state.project;

    if (!project) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h2>{project.title}</h2>
        {project.type === 'link' ? (
          <a href={project.content}>{project.content}</a>
        ) : (
          <p>{project.content}</p>
        )}
        <p>posted on {new Date(project.created_at).toDateString()}</p>
      </div>
    );
  }
}
