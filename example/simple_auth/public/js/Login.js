
console.log("js/Login.js");
//
const Login ={
  /**
  * startProc
  * @param
  *
  * @return
  */   
  afterPostForm1: function()  {
    try{
      console.log("#startProc: Login");
      const resulte_form1 = document.querySelector('#resulte_form1');
//      console.log(resulte_form1.innerHTML);
      if(!resulte_form1){
        return;
      }
      const htm = resulte_form1.innerHTML;
      const obj = JSON.parse(htm);
      console.log(obj);
      if(obj.resulte_code) {
        console.log("resulte_code=", obj.resulte_code);
        if(obj.resulte_code === 200) {
          const key = obj.appName + "_auth";
          localStorage.setItem(key, '1');
          location.href = '/';
          // alert("Success, Login");
        }else{
          alert("Error, Login");
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
