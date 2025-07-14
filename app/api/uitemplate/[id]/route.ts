import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import UiTemplate from '@/lib/database/models/uitemplate.model';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    const uitemplate = await UiTemplate.findById(id);
    
    if (!uitemplate) {
      return NextResponse.json(
        { message: "uitemplate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(uitemplate);
  } catch (error: unknown) {
    console.error('Error fetching uitemplate:', error);
    return NextResponse.json(
      { status: 500 }
    );
  }
}

// export async function PATCH(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectToDatabase()
//     const { id } = params
//     const updates = await req.json()

//     if (!id) {
//       return NextResponse.json({ message: 'ID parameter is required' }, { status: 400 })
//     }

//     const updatedTemplate = await UiTemplate.findByIdAndUpdate(id, updates, {
//       new: true, // return the updated document
//       runValidators: true,
//     })

//     if (!updatedTemplate) {
//       return NextResponse.json({ message: 'UiTemplate not found' }, { status: 404 })
//     }

//     return NextResponse.json(updatedTemplate)
//   } catch (error) {
//     console.error('Error updating uitemplate:', error)
//     return NextResponse.json({ message: 'Server error' }, { status: 500 })
//   }
// }

// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectToDatabase()
//     const { id } = params

//     const deleted = await UiTemplate.findByIdAndDelete(id)

//     if (!deleted) {
//       return NextResponse.json({ message: 'UiTemplate not found' }, { status: 404 })
//     }

//     return NextResponse.json({ message: 'Deleted successfully' }, { status: 200 })
//   } catch (error) {
//     console.error('Error deleting uitemplate:', error)
//     return NextResponse.json({ message: 'Server error' }, { status: 500 })
//   }
// }