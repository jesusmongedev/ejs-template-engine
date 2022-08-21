const express = require('express')
const morgan = require('morgan')

const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')

const app = express()

app.set('PORT', 5000)

app.use(morgan('dev'))
app.use(express.static('public'))

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: false})); // to support URL-encoded bodies

// Template engine
app.set('view engine', 'ejs')

app.use(userRoutes.routes)
app.use('/admin', adminRoutes)

app.use((req, res) => {
    res.render('404', { docTitle: 'Not found' })
})


module.exports = app
