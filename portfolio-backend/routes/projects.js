import express from "express";
import { body, validationResult } from "express-validator";
import { getProjects, createProject, getProjectById } from "../controller/projectController.js"
import { deleteProject, updateProject } from "../controller/projectController.js";
import upload from "../middleware/upload.js";
import Project from "../models/project.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const router = express.Router();

router.get("/", getProjects);

router.get("/:id", getProjectById)

router.post(
    "/",
    verifyAdmin,
    upload.single("image"),
    [
        body("title").trim().notEmpty().withMessage("Title is required"),
        body("desc").trim().optional(),
        body("image").trim().optional(),
        body("tech").optional(),
        body("repoUrl").trim().optional(),
    ],
    createProject,
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array() });
            }

            const {title, desc, tech, repoUrl} = req.body;
            const image = req.file ? req.file.path : null; //cloudinary url here

            const project = new Project({title, desc, tech, repoUrl, image}); 
            await project.save();
            res.status(201).json(project);
        }
        catch(err) {
            next (err);
        }
    }
);

router.put("/:id", verifyAdmin, updateProject);

router.delete("/:id", verifyAdmin, deleteProject);

export default router;
