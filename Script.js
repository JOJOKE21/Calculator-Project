// This function clear all the values
function clearScreen() {
    document.getElementById("display").value = "";
   }
   
//    function backSpace(value){
//     document.getElementsById("delete").value = value.slice(0,-1);
// }

   

   // This function display values
   function display(value) {

       
    document.getElementById("display").value += value;
 
    // document.getElementsById("display")
    //   .value = (value/100)*value

   }
  

  
   // This function evaluates the expression and return result
   function calculate() {
    const p = document.getElementById("display").value;
    const q = eval(p);
    document.getElementById("display").value = q;
   }


   

   
