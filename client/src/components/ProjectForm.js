import React, { Component } from 'react';
import axios from 'axios';

export default class ProjectForm extends Component {
  state = {
    title: '',
    image: '',
    content: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log('Form submitted');

    axios
      .post('/api/projects', {
        title: this.state.title,
        image: this.state.image,
        content: this.state.content
      })
      .then(() => {
        console.log('Response received, calling getData in <Projects/>');
        this.setState({
          title: '',
          image: '',
          content: ''
        });
      });
  };

  render() {
    return (
      <form className="create-project" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          placeholder="e.g. Woods"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          name="image"
          placeholder="https://www.facebook.com/Islacoffeeberlin"
          value={this.state.image}
          onChange={this.handleChange}
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          className="paragraph-input"
          rows="4"
          cols="80"
          placeholder="What is the project about?"
          value={this.state.content}
          onChange={this.handleChange}
        ></textarea>
        <button className="create-btn">New Project</button>
      </form>
    );
  }
}

// import React, { useState } from 'react';
// import axios from 'axios';

// const ProjectForm = props => {
//   const [title, setTitle] = useState('');
//   const setTitleHandler = event => {
//     setTitle(event.target.value);
//   };

//   const [image, setImage] = useState('');
//   const setImageHandler = event => {
//     setImage(event.target.value);
//   };

//   const [content, setContent] = useState('');
//   const setContentHandler = event => {
//     setContent(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     axios
//       .post('/api/projects', {
//         title,
//         image,
//         content
//       })
//       .then(() => {
//         console.log('Need to figure out how to redirect');
//       })
//       .catch(err => {
//         console.log(err);
//       })
//       .then(
//         setTimeout(() => {
//           props.history.push('/');
//         }, 800)
//       );
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <div className="form">
//           <div className="column">
//             <label htmlFor="title">Title of Project</label>
//             <input
//               type="text"
//               name="title"
//               id="tilte"
//               placeholder="e.g. Wood"
//               value={title}
//               onChange={setTitleHandler}
//             />
//           </div>

//           <div className="column">
//             <label htmlFor="image">Image URL:</label>
//             <input
//               type="text"
//               name="image"
//               id="image"
//               placeholder="https://www.facebook.com/Islacoffeeberlin"
//               value={image}
//               onChange={setImageHandler}
//             />

//             <label htmlFor="content">Content</label>
//             <textarea
//               name="content"
//               id="content"
//               className="paragraph-input"
//               rows="4"
//               cols="80"
//               placeholder="What is the project about?"
//               value={content}
//               onChange={setContentHandler}
//             ></textarea>
//           </div>
//         </div>
//         <div className="form-end">
//           <button>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProjectForm;
