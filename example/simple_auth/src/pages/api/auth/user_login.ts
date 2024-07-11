
//
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const appName = import.meta.env.VITE_APP_NAME;
  const retObj = {ret: false, resulte_code: 500, data: {}, appName: appName}

  const data = await request.formData();
  const email = import.meta.env.VITE_AUTH_USER;
  const password = import.meta.env.VITE_AUTH_PASSWORD;
console.log("email=", email);
console.log("password=", password);
  const inEmail = data.get("email");
  const inPassword = data.get("password");
console.log("inEmail=", inEmail);
console.log("inPassword=", inPassword);
  if(
    (inEmail === email) && (inPassword === password)
  ){
    retObj.ret = true;
    retObj.resulte_code = 200;
  }else{
    retObj.resulte_code = 400; //BAD
  }

  return new Response(JSON.stringify(retObj));
};


