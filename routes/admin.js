const express = require('express');

const router = express.Router();
const userRoutes = require('./user')

router.get('/users', (req, res) => {
    const users = userRoutes.users
    res.render('users', { docTitle: 'Users page', users, path: '/admin/users' })
})

module.exports = router;