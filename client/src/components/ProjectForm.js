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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="column">
            <p>Title of Project</p>
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
            <p>Image URL:</p>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="https://www.facebook.com/Islacoffeeberlin"
              value={image}
              onChange={setImageHandler}
            />

            <p>Content</p>
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
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
