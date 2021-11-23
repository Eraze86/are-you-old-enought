//koppla in input id så att js kan samla data
const number = document.getElementById("number");
const button = document.getElementById("button");
// få edn att samla dator och jämföra och skicka tillbaka en text
//få den att samla ihop info om rätt ålder. 
button.addEventListener("click", function(){

if(number>18)  {
   console.log("du är för ung")
}else if (number<65){
    console.log("du är för gammal")
}else{
    console.log("du är i rätt ålder")
}
});
