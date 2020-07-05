import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = props => {
  const [title, setTitle] = useState();
  const setTitleHandler = event => {
    setTitle(event.target.value);
  };

  const [image, setImage] = useState();
  const setImageHandler = event => {
    setImage(event.target.value);
  };

  const [content, setContent] = useState();
  const setContentHandler = event => {
    setContent(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post('/api/projects', {
        title,
        image,
        content
      })
      .then(() => {
        console.log('Need to figure out how to redirect');
      })
      .catch(err => {
        console.log(err);
      })
      .then(
        setTimeout(() => {
          props.history.push('/');
        }, 800)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="column">
          <label htmlFor="name">*Title of Project:</label>
          <input
            type="text"
            name="title"
            id="tilte"
            placeholder="e.g. Wood"
            value={title}
            onChange={setTitleHandler}
          />
        </div>

        <div className="column">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="https://www.facebook.com/Islacoffeeberlin"
            value={image}
            onChange={setImageHandler}
          />

          <label htmlFor="content">*Content:</label>
          <textarea
            name="content"
            id="content"
            className="paragraph-input"
            rows="4"
            cols="80"
            placeholder="What is the project about?"
            value={content}
            onChange={setContentHandler}
          ></textarea>
        </div>
      </div>
      <div className="form-end">
        <button>Submit request</button>
      </div>
    </form>
  );
};

export default ProjectForm;
