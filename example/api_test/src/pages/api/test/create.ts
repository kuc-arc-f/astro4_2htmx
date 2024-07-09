
//
import type { APIRoute } from 'astro';
import axios from 'axios';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const title = data.get("title");
  const api_url = data.get("api_url");
  const url =import.meta.env.VITE_API_URL;
console.log("path=", url + api_url);

  const item = {
    title: title,
    content: "c1",
  } 
  const response = await axios.post(url + api_url, item, 
    {headers: { 'Content-Type': 'application/json'}
  });
  const resData = response.data;
console.log(resData);

  return new Response(JSON.stringify({ 
    success: true , data: resData
  }));
};

