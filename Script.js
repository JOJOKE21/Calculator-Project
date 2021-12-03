// This function clear all the values
function clearScreen() {
    document.getElementById("display").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("display").value += value;
 
   }

   
   
   // This function evaluates the expression and return result
   function calculate() {
    const p = document.getElementById("display").value;
    const q = eval(p);
    document.getElementById("display").value = q;
   }