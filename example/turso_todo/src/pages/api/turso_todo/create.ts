
//
import type { APIRoute } from 'astro';
import axios from 'axios';
import LibTurso from '../../../lib/LibTurso';
//
export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const title = data.get("title");
  const content = data.get("content");
    const sql = `
    INSERT INTO todos (title, content, userId) VALUES(
    '${title}' , '${content}' , 0
    )
    `;
    console.log("sql=", sql);
    const client = await LibTurso.getClient();
    const resulte = await client.execute(sql);
console.log(resulte.rows);

/*
console.log(resData);
*/

  return new Response(JSON.stringify({ 
    success: true , data: []
  }));
};

