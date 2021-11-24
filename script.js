//koppla button till js, och koppla till eventlistener

const button = document.getElementById("button");

button.addEventListener("click", function(){


// koppla input. få något att hända bid de olika åldarna med if. 

const number = document.getElementById("number")
if(number.value < 18)  {
   alert("du är för ung")
} else if (number.value > 65){
    alert("du är för gammal")
} else {
    alert("du är i rätt ålder")
}
});
//varför ger den ut för gammal fast man skriver in mindre än 18?