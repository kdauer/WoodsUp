import React, { Component } from 'react';
import axios from 'axios';

export default class ProjectDetail extends Component {
  state = {
    project: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/api/projects/${id}`).then(response => {
      console.log('single project here', response.data);
      this.setState({
        project: response.data
      });
    });
  }

  render() {
    const project = this.state.project;

    if (!project) {
      return <div>Loading</div>;
    }
    return (
      <div className="detail-container">
        <h2>{project.title}</h2>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div></div>
        )}
        <p>{project.content}</p>
      </div>
    );
  }
}
