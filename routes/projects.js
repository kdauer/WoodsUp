/* Here we'll write the routes for the posts */
const router = require('express').Router();
const Project = require('../models/Project');
const User = require('../models/User');
/* Here we'll write the routes for the posts */

router.get('/projects', (req, res) => {
  let sort = {};
  // if (req.query.sortBy) {
  //   sort[req.query.sortBy] = -1;
  // } else {
  //   sort.upvote_count = -1;
  // }
  if (req.query.sortBy) {
    sort = { [req.query.sortBy]: -1 };
  } else {
    sort = { created_at: -1 };
  }

  Project.find()
    .sort(sort)
    .limit(10)
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.get('/projects/:id', (req, res) => {
  const projectId = req.params.id;

  Project.findById(projectId)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.post('/projects', (req, res) => {
  // Todo: add a middleware to protect this route from non-logged in users

  // const title = req.body.title;
  // const type = req.body.type;
  // const content = req.body.content
  const { title, type, content, description, tags } = req.body;

  Post.create({
    title: title,
    type: type,
    content: content,
    desription: description,
    tags: tags,
    _author: req.user._id
  })
    .then(projectDocument => {
      res.json(projectDocument);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

// router.post("/posts/:id/upvote", (req, res) => {
//   const postId = req.params.id;

//   const isUpvoted = req.user._upvotes.find(id => {
//     return id.toString() === postId;
//   });

//   let incr = 1;
//   if (isUpvoted) {
//     incr = -1;
//     User.updateOne(
//       { _id: req.user._id },
//       { $pull: { _upvotes: postId } }
//     ).exec();
//   } else {
//     User.updateOne(
//       { _id: req.user._id },
//       { $addToSet: { _upvotes: postId } }
//     ).exec();
//   }

//   Post.findByIdAndUpdate(
//     postId,
//     { $inc: { upvote_count: incr } },
//     { new: true }
//   )
//     .then(post => {
//       res.json(post);
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: err.message
//       });
//     });
// });

// router.delete("/posts/:id/upvote", (req, res) => {
//   const postId = req.params.id;

//   Post.findByIdAndUpdate(postId, { $inc: { upvote_count: -1 } }, { new: true })
//     .then(post => {
//       res.json(post);
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: err.message
//       });
//     });
// });

module.exports = router;
