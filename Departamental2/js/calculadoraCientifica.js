var Texto="";
var raiz = new Boolean(false);
var parentesis2 = new Boolean(false); // si es verdadera, se necesita cerrar un parentesis
var log = new Boolean(false);
var ln = new Boolean(false);
var inicio = new Boolean(true); //si se va a iniciar
var calcularFac;

function clickDigito(digito){
    var display = document.getElementById("display");
    if(digito=='='){
        parentesis();
        alert(Texto);
        Texto = eval(Texto);
        display.value= Texto;
        
    }else if(digito=='AC'){
        display.value="";
        Texto="";
        inicio=true;
    }else if(digito=='**'){
        Texto+=digito;
        display.value+="^";
        error();
    }else if(digito=="/"){
        Texto+=digito;
        display.value+="÷";
        error();
    }else if(digito=="-"){
        Texto+=digito;
        display.value+="-";
        error();
    }else if(digito=="por"){
        borrarUltimo();
        digito=calcularFac/100;
        Texto+=digito;
        display.value+="%";
        error();
    }else if(digito=="*"){
        Texto+=digito;
        display.value+="×";
        error();
    }else if(digito=="*"){
        Texto+=digito;
        display.value+="×";
        error();
    }else if(digito=="!"){ ///////
        borrarUltimo();
        Texto+=factorial(calcularFac);
        display.value+="!";
        error();
    }else if(digito=="raiz"){
        var lastDigit = Texto.toString().slice(-1);
        if((!isNaN(lastDigit) || lastDigit==")" )&& inicio==false){
            Texto+="*";
        display.value+="×";
        }
        Texto+="(Math.sqrt(";
        display.value+="√(";
        raiz=true;
        inicio=false;
    }else if(digito=="log"){
        var lastDigit = Texto.toString().slice(-1);
        if((!isNaN(lastDigit) || lastDigit==")" ) && inicio==false){
            Texto+="*";
            display.value+="×";
        }
        Texto+="(Math.log10(";
        display.value+="log(";
        log=true;
        inicio=false;
    }else if(digito=="ln"){
        var lastDigit = Texto.toString().slice(-1);
        if((!isNaN(lastDigit) || lastDigit==")" )&& inicio==false){
            Texto+="*";
            display.value+="×";
        }
        Texto+="(Math.log(";
        display.value+="ln(";
        ln=true;
        inicio=false;
    }else if(digito=="("){
            var lastDigit = Texto.toString().slice(-1);
            if((!isNaN(lastDigit) || lastDigit==")" )&& inicio==false){
                Texto+="*";
                display.value+="×";
            }
            Texto+=digito;
            display.value+="(";
            parentesis2 = true;
            inicio=false;
    }else{
        if(digito==")"){
            if(raiz==true){
                raiz=false;
                Texto+=")";
            }else if(parentesis2==true){
                parentesis2=false;
            }else if(log==true){
                log=false;
                Texto+=")";
            }else if(ln==true){
                ln=false;
                Texto+=")";
            }
        }
        Texto+=digito;
        display.value+=digito;
        inicio=false;
    }
}

function parentesis(){
    if(raiz==true){
        Texto+=")";
        Texto+=")";
        display.value+=")";
        raiz=false;
    }
    if(parentesis2==true){
        Texto+=")";
        display.value+=")";
        raiz=false;
    }
    if(log==true){
        Texto+=")";
        Texto+=")";
        display.value+=")";
        log=false;
    }
    if(ln==true){
        Texto+=")";
        Texto+=")";
        display.value+=")";
        ln=false;
    }
}

function error(){
    if(inicio==true){
        alert("ERROR");
        Texto="";
        display.value="";
    }
}

function borrarUltimo(){
    var fac = 0;
    if(!isNaN(Texto)){
        calcularFac = Texto;
        Texto="";
    }else{
        var lastDigit = Texto.toString().slice(-1);
        var k = -1;
        while(!isNaN(lastDigit)){ //mientras sea número
            k--;
            lastDigit = Texto.toString().slice(k);
        }
        k++;
        calcularFac = Texto.toString().slice(k);
        Texto = Texto.substring(0, Texto.length + k); 
    }
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
