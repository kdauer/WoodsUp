/* We'll write the schema and register our model for the posts here */
const mongoose = require('mongoose');

// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: 'https://source.unsplash.com/random'
    },
    content: String,
    _author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    links: String,
    gallery: String
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
