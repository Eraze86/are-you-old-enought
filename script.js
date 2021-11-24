//koppla button till js, och koppla till eventlistener

const button = document.getElementById("button");

button.addEventListener("click", function(){

// koppla input. få något att hända bid de olika åldarna med if. 

const number = document.getElementById("number")
if(number <= 18)  {
   console.log("du är för ung")
} else if (number >= 65){
    console.log("du är för gammal")
} else {
    console.log("du är i rätt ålder")
}
});
//varför ger den ut för gammal fast man skriver in mindre än 18?