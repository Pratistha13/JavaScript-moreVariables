// 05.06 JavasScript code 

function calculateUnitFine() {
  
var txtNetIncome = document.getElementById("txtNetIncome").value;

var x= (txtNetIncome-255)/60;

document.getElementById("divAnswer").innerHTML= "Unit fine is "+ x.toFixed(2);

  
}
