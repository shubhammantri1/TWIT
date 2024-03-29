const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const posts = require('./routes/posts')
const cors = require('cors')
const passport = require('passport')

//setup environment
dotenv.config()

//mongodb connect
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true ,  useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err))

const app = express() 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false} ))
app.use(cors())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use('/api/users', users)
app.use('/api/posts', posts)
// run app
const PORT = process.env.PORT||5000
app.listen(PORT, ()=>console.log(`Sever is running on port ${PORT}`))