import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import { handleError } from '@/lib/utils';
import UiTemplate from '@/lib/database/models/uitemplate.model';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const uiTemplate = await req.json();
    const createdUiTemplate = await UiTemplate.create(uiTemplate);
    return NextResponse.json(createdUiTemplate, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}

export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");

    if (!cat) {
      return NextResponse.json({ message: "Category is required" }, { status: 400 });
    }

    const templates = await UiTemplate.find({ cat });

    return new Response(JSON.stringify(templates), { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}


export async function DELETE() {
  try {
    await connectToDatabase();

    await UiTemplate.deleteMany({});

    return new Response(JSON.stringify({ message: 'All UI Template deleted successfully' }), { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
