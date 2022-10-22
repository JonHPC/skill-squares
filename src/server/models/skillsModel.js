import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MONGO_URI = 'mongodb+srv://skill-squares:ImproveSkills1234@cluster0.uhu1iyu.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => console.log('Connected to MongoDB'))

const skillsSchema = new Schema({
    text: String,
    green: Boolean
})

const Skills = mongoose.model('Skills', skillsSchema)

export default Skills



