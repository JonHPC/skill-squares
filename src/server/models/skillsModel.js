import mongoose from 'mongoose'
import { isDepsOptimizerEnabled } from 'vite'
const Schema = mongoose.Schema
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uhu1iyu.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => console.log('Connected to MongoDB'))

const skillsSchema = new Schema({
    text: String,
    green: Boolean
})

const Skills = mongoose.model('Skills', skillsSchema)

export default Skills



