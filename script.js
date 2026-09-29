async function loadToday(){

try{

const response =
await fetch("data/today.json");


const data =
await response.json();



const lang =
document.documentElement.lang;



if(lang==="zh-CN"){


document.getElementById("date").innerHTML=data.date;

document.getElementById("theme").innerHTML=data.theme_cn;

document.getElementById("route").innerHTML=data.route_cn;

document.getElementById("time").innerHTML=data.time;

document.getElementById("people").innerHTML=data.people_cn;


}


else{


document.getElementById("date-en").innerHTML=data.date;

document.getElementById("theme-en").innerHTML=data.theme_en;

document.getElementById("route-en").innerHTML=data.route_en;

document.getElementById("time-en").innerHTML=data.time;

document.getElementById("people-en").innerHTML=data.people_en;


}



}catch(error){

console.log(error);

}


}



loadToday();