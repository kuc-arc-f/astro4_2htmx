import axios from 'axios';
//
const CrudIndex = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  getList: async function() : Promise<any>
  {
    try {
      const url = import.meta.env.VITE_API_URL; 
      const path = "/test/get_list";	
      console.log("path=", url + path);
      const item  = {
        "userId": 0,
      } 
      const response = await axios.post(url + path, item, 
        {headers: { 'Content-Type': 'application/json'}
      });
      const data = response.data;
//console.log(data.ret);
      //@ts-ignore
      return data.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error , getList');
    }
  },
}
export default CrudIndex;
