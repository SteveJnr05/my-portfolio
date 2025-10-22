import cloudinary from "../config/cloudinary.js";
// import upload from "../middleware/upload.js";
import Project from "../models/project.js"
import { validationResult } from "express-validator";


// function to return all projects

export const getProjects = async (req, res, next) => {
    try{
        const projects = await Project.find().sort({createdAt: -1});
        res.json(projects);
    }
    catch(err) {
        next(err);
    }
};
// return by id
export const getProjectById = async (req, res, next) => {
    try{
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
    }
    catch(err) {
        next(err);
    }
};

// to create a new project
export const createProject = async (req, res, next) => {
     try{
        const errors = validationResult (req);
        if (!errors.isEmpty()) return res.status(400).json({errors: errors.array() });

        const {title, desc, image, tech, demoUrl, repoUrl} = req.body;
        const project = new Project ({title, desc, image, tech, demoUrl, repoUrl});
        await project.save();
        res.status(201).json(project);
    }
    catch(err) {
        next(err);
    }
    const uploadResult = await cloudinary.uploader(req.file.path, {
    folder: "projects",
    })
    console.log("Cloudinary upload success:", uploadResult);
};

// function to update project
export const updateProject = async (req, res, next) => {
    try{
        const updates = {...req.body};

        if(req.file) {
            const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                folder: "projects"
            });
        updates.image = uploadResult.secure_url;
        }

        const updatedProject = await Project.findByIdAndUpdate(req.params.id, updates, {new: true});
        res.status(201).json(updatedProject);
    }
    catch(err) {
            next(err);
    }
};

// delete project function
export const deleteProject = async (req, res, next) => {
    try{
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Project deleted successfully"});
    }
    catch(err) {
        next(err);
    }
};
