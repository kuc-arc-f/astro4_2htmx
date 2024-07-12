
//
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
//  const email = data.get("email");

  return new Response(JSON.stringify({ 
    success: true , name: name
  }));
};

