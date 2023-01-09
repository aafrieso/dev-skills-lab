import mongoose from "mongoose";

const Schema = mongoose.Schema 

const todoSchema = new Schema({
    text: String,
    skills: Boolean
})

// Compile the schema into a model and export it
const Skills = mongoose.model('Skills', skillsSchema)

export {
    Skills
}