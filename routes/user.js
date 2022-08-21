const express = require('express')

const routes = express.Router()

const users = [];

routes.get('/', (req, res) => {
    res.render('index', { docTitle: 'Add User Page', path: '/'});
})

routes.post('/add-user', (req, res) => {
    const { userName } = req.body;
    users.push(userName)
    console.log('users', users);
    res.redirect('/admin/users');
})

module.exports = {routes, users}