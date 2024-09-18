let button=document.querySelector(".button");
let results=document.querySelector(".results");
let container = document.querySelector(".container");





let result={
    "tag": "",
    "free": true,
    "role": false,
    "user": "swarajsudheer",
    "email": "swarajsudheer@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }



button.addEventListener("click",async(e)=>{
   e.preventDefault();
    let email=document.getElementById("email").value;
    let key="ema_live_uVRwhz2ljMhjVwTfCbY5Ke9X4GeeG6LDj1JEf4P7";
    let URL=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res= await fetch(URL);
    let result=await res.json();
   let str=``
    for(key of Object.keys(result)){
        if(result[key]!==""&&result[key]!==" ")
        {
             str=str+`<div>${key}:${result[key]}</div>`
        }
     
      }
      results.innerHTML=str;
      container.classList.remove("hide");
})
