// 05.10 JavasScript code

function calculateCosts() {
  
  var Km = document.getElementById("kilometers").value;
  var FuelConsumption = document.getElementById("consumption").value;
  var Price = document.getElementById("price").value;
  var Participants = document.getElementById("participants").value;

  var X = (FuelConsumption/100)* Price*Km/Participants; 

  document.getElementById("divAnswer").innerHTML= "Fuel costs per participants is "+ X.toFixed(2) + " euros.";



}