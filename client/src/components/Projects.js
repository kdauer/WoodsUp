import React, { Component } from 'react';
import axios from 'axios';
import ProjectsList from './ProjectsList';

export default class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('/api/projects').then(response => {
      this.setState({
        projects: response.data
      });
    });
  };

  render() {
    return (
      <div className="overview-container">
        <ProjectsList projects={this.state.projects} />
      </div>
    );
  }
}
