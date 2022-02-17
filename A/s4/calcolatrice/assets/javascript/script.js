

function tasto(dato){ 
    document.getElementById("operazioni").value +=dato;
 }
 
 function operazione() { 
 document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value); 
 }
 
 function resetcalcolatrice() { 
  document.getElementById("operazioni").value=""; 
 }

function Symbol(s){
    if(s == '+' || s == '-' || s == '*' || s == '/' ){
    return true}
    else{
        return false}
}


