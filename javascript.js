function insert(num){
   var numero = document.getElementById('Resultado').innerHTML
   document.getElementById('Resultado').innerHTML = numero + num;
}

function clean()
        {
            document.getElementById('Resultado').innerHTML = "";
        }


function back(){
    var resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


function igual(){
    var resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = eval(resultado);


}