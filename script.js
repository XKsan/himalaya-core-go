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

document.getElementById("time").textContent=data.time;

document.getElementById("people").innerHTML=data.people_cn;


}


else{


const dateParts = data.date.split(".");
const englishDate = new Date(Date.UTC(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]))).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
document.getElementById("date-en").textContent=englishDate;

document.getElementById("theme-en").textContent=data.theme_en;

document.getElementById("route-en").textContent=data.route_en;

document.getElementById("time-en").textContent=data.time;

document.getElementById("people-en").textContent=data.people_en;


}



}catch(error){

console.log(error);

}


}



loadToday();