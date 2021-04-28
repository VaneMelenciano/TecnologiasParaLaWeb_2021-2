

function holaMundo(){
    alert("Hola mundo1");
    alert("Hola mundo2");

}
function sumaNumeros(){
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);
    var resultado = n1 + n2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function restaNumeros(){ 
    var resultado =document.getElementById("numero1").value - document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}

function multiplicaNumeros(){
    var resultado =document.getElementById("numero1").value * document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function divideNumeros(){
    var resultado =document.getElementById("numero1").value / document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}