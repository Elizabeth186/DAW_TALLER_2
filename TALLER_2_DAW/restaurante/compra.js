
function sumar(){
    obj = document.miform['id'];
    totalChecks = obj.length;
    totalSumado = 0;
    for( i=0; i<totalChecks; i++){ 
        if( obj[i].checked == true ){
            valor = obj[i].value.split('-');        
            totalSumado = totalSumado + parseFloat(valor[0],10);
        }
    }
    document.getElementById('informacion').innerHTML = '<h1>'+'Total:'+ totalSumado+'</h1>'; 
}

  document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'e') {
    event.preventDefault()
    document.getElementById('camp_text').removeAttribute("disabled")
    var escribir = document.getElementById('camp_text')
    escribir.focus()
  }
});
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault()
      document.getElementById('camp_text').disabled="true";
      
     
 }});

 