import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import { handleError } from '@/lib/utils';
import Project from '@/lib/database/models/project.model';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const projects = await req.json();
    const createdProjects = await Project.create(projects);
    return NextResponse.json(createdProjects, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const project = await Project.find();

    if (!project || project.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No project found' }), 
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}

export async function DELETE() {
  try {
    await connectToDatabase();

    await Project.deleteMany({});

    return new Response(JSON.stringify({ message: 'All projects deleted successfully' }), { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
