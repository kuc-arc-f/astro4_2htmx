import axios from 'axios';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const url =import.meta.env.VITE_API_URL; 
  /*
  const data = await request.formData();
  const api_url = data.get("api_url");
console.log("url=", url);
console.log("path=", url + api_url);
    const item = {
      api_url: api_url,
    };
    const response = await axios.post(url + path, item, 
    {headers: { 'Content-Type': 'application/json'}
    });
  */
  return new Response(JSON.stringify({ 
    success: true , name: ""
  }));
};

