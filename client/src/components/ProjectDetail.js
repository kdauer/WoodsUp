import React, { Component } from 'react';
import ReactPlayer from "react-player"
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
        {project.video ? (
          <div className="video-container">
          <ReactPlayer className='player'
     url={project.video} width='100%'
    height='100%' /></div>
        ) : (
          <div></div>
        )}
        {project.presslink ? (
          <a href={project.presslink}>"Presse"</a>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}
