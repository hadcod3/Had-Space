'use server'
import { connectToDatabase } from "@/lib/database"
import Project from "../models/project.model";

export async function getProject() {
  try {
    await connectToDatabase()
    
    const project = await Project.find();
    if (!project) {
      return {
        data: null,
        message: "project not found",
      };
    }

    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.error('Error fetching project:', error);
  }
}

export async function getProjectById(id : string) {
  try {
    await connectToDatabase()
    
    const project = await Project.findById(id);
    if (!project) {
      return {
        data: null,
        message: "project not found",
      };
    }

    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.error('Error fetching project by ID:', error);
  }
}