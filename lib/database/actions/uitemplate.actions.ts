'use server'
import { connectToDatabase } from "@/lib/database"
import UiTemplate from "../models/uitemplate.model";

export async function getUiTemplateById(id : string) {
  try {
    await connectToDatabase()
    
    const uitemplate = await UiTemplate.findById(id);
    if (!uitemplate) {
      return {
        data: null,
        message: "uitemplate not found",
      };
    }

    return JSON.parse(JSON.stringify(uitemplate));
  } catch (error) {
    console.error('Error fetching uitemplate by ID:', error);
  }
}

export async function getUiTemplatesByCategory(cat: string) {
  try {
    await connectToDatabase()

    const templates = await UiTemplate.find({ cat })

    if (!templates || templates.length === 0) {
      return {
        data: [],
        message: `No templates found for category "${cat}"`,
      }
    }

    return JSON.parse(JSON.stringify(templates))
  } catch (error) {
    console.error('Error fetching templates by category:', error)
    return {
      data: [],
      message: "Server error",
    }
  }
}