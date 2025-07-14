import { connectToDatabase } from '@/lib/database';
import { handleError } from '@/lib/utils';
import UiTemplate from '@/lib/database/models/uitemplate.model';

export async function GET() {
  try {
    await connectToDatabase();
    const uiTemplate = await UiTemplate.find();

    if (!uiTemplate || uiTemplate.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No uiTemplate found' }), 
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(uiTemplate), { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}