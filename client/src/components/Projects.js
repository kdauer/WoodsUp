import React, { Component } from 'react';
import axios from 'axios';
// import ProjectForm from "./ProjectForm";
import ProjectsList from './ProjectsList';

export default class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // console.log("getData()");
    axios.get('/api/projects').then(response => {
      this.setState({
        projects: response.data
      });
    });
  };

  // getNewestPosts = () => {
  //   axios.get("/api/posts?sortBy=created_at").then(response => {
  //     this.setState({
  //       posts: response.data
  //     });
  //   });
  // };

  render() {
    // console.log("<Posts/> RENDER");
    return (
      <div className="overview-container">
        {/* {this.props.user && <ProjectsForm refresh={this.getData} />} */}
        <ProjectsList projects={this.state.projects} />
        {/* <button onClick={this.getNewestPosts}>sort by new</button> */}
      </div>
    );
  }
}
