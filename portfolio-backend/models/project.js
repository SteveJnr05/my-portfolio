import mongoose from "mongoose";

//entries for portfolio projects
const ProjectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, default: ""},
    image: {type: String, default: ""},
    demoUrl: {type: String, default: ""},
    repoUrl: {type: String, default: ""}
},
{
    timestamps: true
}
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;