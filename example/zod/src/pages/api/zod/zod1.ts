
//
import type { APIRoute } from 'astro';
import { z } from 'zod';
//
const FormData = z.object({
title: z
    .string()
    .min(1, { message: '1文字以上入力してください。' }),
content: z
    .string()
    .min(1, { message: '1文字以上入力してください。' }),
});
//
export const POST: APIRoute = async ({ request }) => {
  const retObj ={success: false, data:{}, errors: {}}
  try{
    const data = await request.formData();
    const title = data.get("title");
    const content = data.get("content");
    const item = {
      title: title,
      content: content,
    }
    FormData.parse(item);
    //
    retObj.success = true;
    retObj.data = item;
    return new Response(JSON.stringify(retObj));
  } catch (e: any) {
    console.error(e.flatten().fieldErrors);
    retObj.errors = e.flatten().fieldErrors;
    return new Response(JSON.stringify(retObj));
  }
//  const email = data.get("email");

};

