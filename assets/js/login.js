const data =   {
    "serviceName": "MobileLoginSP.login",
       "requestBody": {
            "NOMUSU": {
                "$": "felipe.snk"
            },
            "INTERNO":{
               "$":"snk2308"
            },
           "KEEPCONNECTED": {
               "$": "S"
           }
       }
   }


fetch("http://sankhya.snk.ativy.com:40144/mge/service.sbr?serviceName=MobileLoginSP.login&outputType=json", {
  method: "POST", mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });