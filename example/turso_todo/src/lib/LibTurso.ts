
import { createClient } from "@libsql/client";
//
const  LibTurso = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  getClient: function(){
    try{
//console.log("=", process.env.TORSO_URL);
      const client = createClient({
        url: import.meta.env.VITE_TURSO_URL,
        authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN,
      });
      return client;      
    } catch (err) {
      console.log(err);
      throw new Error('Error, getClient');
    }
  },       
}
export default LibTurso;
