// 05.09 JavasScript code 
  
function calculateRent(){

var Rent= Number(document.getElementById("rent").value);
var Participants= Number(document.getElementById("participants").value);

var x= Rent/Participants;

document.getElementById("divAnswer").innerHTML= "Rent per participants is "+ x.toFixed(2); 

  
}
