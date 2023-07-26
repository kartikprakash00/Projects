var now = new Date();
var day = now.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hours = now.getHours();
var minutes = now.getMinutes();
console.log(`Current time is ${hours}:${minutes}`);
var dd = now.getDate();
var mm = now.getMonth() + 1;
var yyyy = now.getFullYear();

console.log(`Date: ${dd}/${mm}/${yyyy}`);