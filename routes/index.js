/* We'll centralize our routes imports to this file to keep our code clean */

const router = require('express').Router();
const usersRoutes = require('./users');
const projectsRoutes = require('./projects');

router.use('/api/auth', usersRoutes);
router.use('/api', projectsRoutes);

module.exports = router;
