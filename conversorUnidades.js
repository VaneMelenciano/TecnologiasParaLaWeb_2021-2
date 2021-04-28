//PROFE
/*function cambiaValor(cambio){
    var valorInputLongitud_1 = document.getElementById("input_longitd_1");
    var valorInputLongitud_2 = document.getElementById("input_longitd_2");
    var valorSelectLongitud_1 = document.getElementById("select_longitud_1").value;
    var valorSelectLongitud_2 = document.getElementById("select_longitud_2").value;
    var formula = document.getElementById("formula");
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2=="Metro"){
        var calculo = valorInputLongitud_1.value*1000;
        valorInputLongitud_2.value=calculo;
        formula.innerHTML="Se multiplica el valor de la longitud por 1000";
    }
    if(valorSelectLongitud_1=="Kilometro" && valorSelectLongitud_2=="Centimentro"){
        var calculo = valorInputLongitud_1.value*1000;
        valorInputLongitud_2.value=calculo;
        formula.innerHTML="Se multiplica el valor de la longitud por 1000";
    }
}*/
//display.value= Texto;
//MÍO
function cambiaValorLongitud(){
    var formula = document.getElementById("formulaM");
        var valorInputLongitud_1 = document.getElementById("input_longitud_1");
        var valorInputLongitud_2 = document.getElementById("input_longitud_2");
        var valorSelectLongitud_1 = document.getElementById("select_longitud_1").value;
        var valorSelectLongitud_2 = document.getElementById("select_longitud_2").value;
    if(valorSelectLongitud_1=="Kilometro"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*100000;
                formula.innerHTML="Se multiplica el valor de la longitud por 100000";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000000";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000000000";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000000000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000000000000000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1.609;
                formula.innerHTML="Se divide el valor de la longitud entre 1.609";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1094;
                formula.innerHTML="Se multiplica el valor de la longitud por 1094";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value*3281;
                formula.innerHTML="Se multiplica el valor de la longitud por 3281";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value*39370;
                formula.innerHTML="Se multiplica el valor de la longitud por 39370";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1.852;
                formula.innerHTML="Se divide el valor de la longitud entre 1.852";
                break;
        }
    }
    if(valorSelectLongitud_1=="Metro"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*100;
                formula.innerHTML="Se multiplica el valor de la longitud por 100";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000000";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000000000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1609;
                formula.innerHTML="Se divide el valor de la longitud entre 1609";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1.094;
                formula.innerHTML="Se multiplica el valor de la longitud por 1.094";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value*3.281;
                formula.innerHTML="Se multiplica el valor de la longitud por 3.281";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value*39.370;
                formula.innerHTML="Se multiplica el valor de la longitud por 39.370";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1852;
                formula.innerHTML="Se divide el valor de la longitud entre 1000";
                break;
        }
    }
    if(valorSelectLongitud_1=="Centimentro"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/100;
                formula.innerHTML="Se divide el valor de la longitud entre 100";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/100000;
                formula.innerHTML="Se divide el valor de la longitud entre 100000";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*10;
                formula.innerHTML="Se multiplica el valor de la longitud por 10";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*10000;
                formula.innerHTML="Se multiplica el valor de la longitud por 10000";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*10000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 10000000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/160934;
                formula.innerHTML="Se divide el valor de la longitud entre 160934";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value/91.44;
                formula.innerHTML="Se divide el valor de la longitud entre 91.44";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value/30.48;
                formula.innerHTML="Se divide el valor de la longitud entre 30.48";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value/2.54;
                formula.innerHTML="Se divide el valor de la longitud entre 2.54";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/185200;
                formula.innerHTML="Se divide el valor de la longitud entre 185200";
                break;
        }
    }
    if(valorSelectLongitud_1=="Milimetro"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000000";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*10;
                formula.innerHTML="Se multiplica el valor de la longitud por 10";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1609000;
                formula.innerHTML="Se divide el valor de la longitud entre 1609000";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value/914;
                formula.innerHTML="Se divide el valor de la longitud entre 914";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value/305;
                formula.innerHTML="Se divide el valor de la longitud entre 305";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value/25.4;
                formula.innerHTML="Se divide el valor de la longitud entre 25.4";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1852000;
                formula.innerHTML="Se divide el valor de la longitud entre 185200";
                break;
        }
    }
    if(valorSelectLongitud_1=="Micromentro"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000000";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000000000";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/10000;
                formula.innerHTML="Se divide el valor de la longitud entre 10000";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1609000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1609000000";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value/914400;
                formula.innerHTML="Se divide el valor de la longitud entre 914400";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value/304800;
                formula.innerHTML="Se divide el valor de la longitud entre 304800";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value/25400;
                formula.innerHTML="Se divide el valor de la longitud entre 25400";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1852000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1852000000";
                break;
        }
    }
    if(valorSelectLongitud_1=="Nanometro"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000000000";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000000000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000000000000";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/10000000;
                formula.innerHTML="Se divide el valor de la longitud entre 10000000";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000000";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1000;
                formula.innerHTML="Se divide el valor de la longitud entre 1000";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1609000000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1609000000000";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value/914400000;
                formula.innerHTML="Se divide el valor de la longitud entre 914400000";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value/304800000;
                formula.innerHTML="Se divide el valor de la longitud entre 304800000";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value/25400000;
                formula.innerHTML="Se divide el valor de la longitud entre 25400000";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1852000000000;
                formula.innerHTML="Se divide el valor de la longitud entre 1852000000000";
                break;
        }
    }
    if(valorSelectLongitud_1=="Milla"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1609;
                formula.innerHTML="Se multiplica el valor de la longitud por 1609";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1.609;
                formula.innerHTML="Se multiplica el valor de la longitud por 1.609";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*160934;
                formula.innerHTML="Se multiplica el valor de la longitud por 160934";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1609000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1609000";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1609000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1609000000";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1609000000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1609000000000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1760;
                formula.innerHTML="Se multiplica el valor de la longitud por 1760";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value*5280;
                formula.innerHTML="Se multiplica el valor de la longitud por 5280";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value*63360;
                formula.innerHTML="Se multiplica el valor de la longitud por 63360";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1.151;
                formula.innerHTML="Se divide el valor de la longitud entre 1.151";
                break;
        }
    }
    if(valorSelectLongitud_1=="Yarda"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1.094;
                formula.innerHTML="Se divide el valor de la longitud entre 1.094";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1094;
                formula.innerHTML="Se divide el valor de la longitud entre 1094";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*91.44;
                formula.innerHTML="Se multiplica el valor de la longitud por 91.33";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*914;
                formula.innerHTML="Se multiplica el valor de la longitud por 914";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*914400;
                formula.innerHTML="Se multiplica el valor de la longitud por 914400";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*914400000;
                formula.innerHTML="Se multiplica el valor de la longitud por 914400000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/1760;
                formula.innerHTML="Se divide el valor de la longitud entre 1760";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value*3;
                formula.innerHTML="Se multiplica el valor de la longitud por 3";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value*36;
                formula.innerHTML="Se multiplica el valor de la longitud por 36";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/2025;
                formula.innerHTML="Se divide el valor de la longitud entre 2025";
                break;
        }
    }
    if(valorSelectLongitud_1=="Pie"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/3.281;
                formula.innerHTML="Se divide el valor de la longitud entre 3.281";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/3281;
                formula.innerHTML="Se divide el valor de la longitud entre 3281";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*30.48;
                formula.innerHTML="Se multiplica el valor de la longitud por 30.48";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*305;
                formula.innerHTML="Se multiplica el valor de la longitud por 305";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*304800;
                formula.innerHTML="Se multiplica el valor de la longitud por 304800";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*304800000;
                formula.innerHTML="Se multiplica el valor de la longitud por 304800000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/5280;
                formula.innerHTML="Se divide el valor de la longitud entre 5280";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value*3;
                formula.innerHTML="Se multiplica el valor de la longitud por 3";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value*12;
                formula.innerHTML="Se multiplica el valor de la longitud por 12";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/6076;
                formula.innerHTML="Se divide el valor de la longitud entre 6076";
                break;
        }
    }
    if(valorSelectLongitud_1=="Pulgada"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/39.37;
                formula.innerHTML="Se divide el valor de la longitud entre 39.37";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value/39370;
                formula.innerHTML="Se divide el valor de la longitud entre 39370";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*2.54;
                formula.innerHTML="Se multiplica el valor de la longitud por 2.54";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*25.4;
                formula.innerHTML="Se multiplica el valor de la longitud por 25.4";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*25400;
                formula.innerHTML="Se multiplica el valor de la longitud por 25400";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*2540000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 2540000000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value/63360;
                formula.innerHTML="Se divide el valor de la longitud entre 63360";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value/36;
                formula.innerHTML="Se divide el valor de la longitud entre 36";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value/12;
                formula.innerHTML="Se divide el valor de la longitud entre 12";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value/72913;
                formula.innerHTML="Se divide el valor de la longitud entre 72913";
                break;
        }
    }
    if(valorSelectLongitud_1=="MillaNautica"){
        switch(valorSelectLongitud_2){
            case "Metro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1852;
                formula.innerHTML="Se multiplica el valor de la longitud por 1852";
            break;
            case "Kilometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1.852;
                formula.innerHTML="Se multiplica el valor de la longitud por 1.852";
            break;
            case "Centimentro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*185200;
                formula.innerHTML="Se multiplica el valor de la longitud por 185200";
            break;
            case "Milimetro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1852000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1852000";
            break;
            case "Micrometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1852000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1852000000";
            break;
            case "Nanometro":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1852000000000;
                formula.innerHTML="Se multiplica el valor de la longitud por 1852000000000";
            break;
            case "Milla":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1.151;
                formula.innerHTML="Se multiplica el valor de la longitud por 1.151";
            break;
            case "Yarda":
                valorInputLongitud_2.value=valorInputLongitud_1.value*2025;
                formula.innerHTML="Se multiplica el valor de la longitud por 2025";
            break;
            case "Pie":
                valorInputLongitud_2.value=valorInputLongitud_1.value*6076;
                formula.innerHTML="Se multiplica el valor de la longitud por 6076";
            break;
            case "Pulgada":
                valorInputLongitud_2.value=valorInputLongitud_1.value*72913;
                formula.innerHTML="Se multiplica el valor de la longitud por 72913";
            break;
            case "MillaNautica":
                valorInputLongitud_2.value=valorInputLongitud_1.value*1;
                formula.innerHTML="Se multiplica el valor de la longitud por 1";
                break;
        }
    }
}

function cambiarValorTemperatura(){
    var formula = document.getElementById("formulaT");
        var valorInputTemperatura_1 = document.getElementById("input_temperatura_1");
        var valorInputTemperatura_2 = document.getElementById("input_temperatura_2");
        var valorSelectTemperatura_1 = document.getElementById("select_temperatura_1").value;
        var valorSelectTemperatura_2 = document.getElementById("select_temperatura_2").value;
        //alert("[" + valorInputTemperatura_1 +"] [" + valorInputTemperatura_2 +"] [" + valorSelectTemperatura_1 +"] [" + valorSelectTemperatura_2 + "]");
    if(valorSelectTemperatura_1=="Celsius"){
        switch(valorSelectTemperatura_2){
            case "Celsius":
                valorInputTemperatura_2.value=valorInputTemperatura_1.value*1;
                formula.innerHTML="Se multiplica el valor de la Temperatura por 1";
                //alert("hola");
            break;
            case "Fahrenheit":
                valorInputTemperatura_2.value=valorInputTemperatura_1.value*(9/5); //(1 °C × 9/5)
                formula.innerHTML="(" + valorInputTemperatura_1.value + " °C × 9/5)";
            break;
            case "Kelvin":
                valorInputTemperatura_2.value=valorInputTemperatura_1.value+273.15; //1 °C + 273.15
                formula.innerHTML="(" + valorInputTemperatura_1.value + " °C + 273.15)";
            break;
        }
    }
    if(valorSelectTemperatura_1=="Fahrenheit"){
        
        switch(valorSelectTemperatura_2){
            case "Celsius":
                valorInputTemperatura_2.value=valorInputTemperatura_1.value*(5/9); //(1 °F − 32) × 5/9 
                formula.innerHTML="(" + valorInputTemperatura_1.value + " °F − 32) × 5/9";
            break;
            case "Fahrenheit":
                valorInputTemperatura_2.value=valorInputTemperatura_1.value*1;
                formula.innerHTML="Se multiplica el valor de la Temperatura por 1";
            break;
            case "Kelvin":
                valorInputTemperatura_2.value=(valorInputTemperatura_1.value-32)*(5/9)+273.15; //(1 °F − 32) × 5/9 + 273.15
                formula.innerHTML="(" + valorInputTemperatura_1.value + " °F − 32) × 5/9 + 273.15";
            break;
        }
    }
    if(valorSelectTemperatura_1=="Kelvin"){
        switch(valorSelectTemperatura_2){
            case "Celsius":
                valorInputTemperatura_2.value=valorInputTemperatura_1.value-273.15; //1 K − 273.15
                formula.innerHTML=valorInputTemperatura_1.value + " °K − 273.15";
            break;
            case "Fahrenheit":
                valorInputTemperatura_2.value=(valorInputTemperatura_1.value-273.15)*(9/5)+32; //(1 K − 273.15) × 9/5 + 32
                formula.innerHTML="(" + valorInputTemperatura_1.value + " °K − 273.15) × 9/5 + 32";
            break;
            case "Kelvin":
                valorInputTemperatura_2.value=valorInputTemperatura_1.value*1;
                formula.innerHTML="Se multiplica el valor de la Temperatura por 1";
            break;
        }
    }
}

function cambiarValorMasa(){ 
    var formula = document.getElementById("formulaM");
        var valorInputMasa_1 = document.getElementById("input_masa_1");
        var valorInputMasa_2 = document.getElementById("input_masa_2");
        var valorSelectMasa_1 = document.getElementById("select_masa_1").value;
        var valorSelectMasa_2 = document.getElementById("select_masa_2").value;
        if(valorSelectMasa_1=="Tonelada"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000000";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000000000";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000000000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000000000000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/1.016;
                    formula.innerHTML="Se divide el valor de la Masa entre 1.016";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value*1.102;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1.102";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value*157;
                    formula.innerHTML="Se multiplica el valor de la Masa por 157";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value*2205;
                    formula.innerHTML="Se multiplica el valor de la Masa por 2205";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value*35274;
                    formula.innerHTML="Se multiplica el valor de la Masa por 35274";
                break;
            }
        }
        if(valorSelectMasa_1=="Kilogramo"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000000";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000000000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value/907;
                    formula.innerHTML="Se divide el valor de la Masa entre 907";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value/6.35;
                    formula.innerHTML="Se divide el valor de la Masa entre 6.35";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value*2.205;
                    formula.innerHTML="Se multiplica el valor de la Masa por 2.205";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value*35.274;
                    formula.innerHTML="Se multiplica el valor de la Masa por 35.274";
                break;
            }
        }
        if(valorSelectMasa_1=="Gramo"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000000";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/1016000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1016000";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value/1102300;
                    formula.innerHTML="Se divide el valor de la Masa entre 1102300";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value/0.0001517273;
                    formula.innerHTML="Se divide el valor de la Masa entre 0.0001517273";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value/454;
                    formula.innerHTML="Se divide el valor de la Masa entre 454";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value/28.35;
                    formula.innerHTML="Se divide el valor de la Masa entre 28.35";
                break;
            }
        }
        if(valorSelectMasa_1=="Miligramo"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000000000";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000000";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/1016000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1016000000";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value/907200000;
                    formula.innerHTML="Se divide el valor de la Masa entre 907200000";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value/6350000;
                    formula.innerHTML="Se divide el valor de la Masa entre 6350000";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value/453592;
                    formula.innerHTML="Se divide el valor de la Masa entre 453592";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value/28350;
                    formula.innerHTML="Se divide el valor de la Masa entre 28350";
                break;
            }
        }
        if(valorSelectMasa_1=="Microgramo"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000000000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000000000000";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000000000";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1000000";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value/1000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1000";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/1016000000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 1016000000000";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value/907200000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 907200000000";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value/6350000000;
                    formula.innerHTML="Se divide el valor de la Masa entre 6350000000";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value/453600000;
                    formula.innerHTML="Se divide el valor de la Masa entre 453600000";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value/28350000;
                    formula.innerHTML="Se divide el valor de la Masa entre 28350000";
                break;
            }
        }
        if(valorSelectMasa_1=="ToneladaLarga"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value*1.016;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1.016";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1016;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1016";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1016000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1016000";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1016000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1016000000";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*1016000000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1016000000000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value*1.12;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1.12";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value*160;
                    formula.innerHTML="Se multiplica el valor de la Masa por 160";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value*2240;
                    formula.innerHTML="Se multiplica el valor de la Masa por 2240";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value*35840;
                    formula.innerHTML="Se multiplica el valor de la Masa por 35840";
                break;
            }
        }
        if(valorSelectMasa_1=="Toneladacorta"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value/1.102;
                    formula.innerHTML="Se divide el valor de la Masa entre 1.102";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*907;
                    formula.innerHTML="Se multiplica el valor de la Masa por 907";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*907185;
                    formula.innerHTML="Se multiplica el valor de la Masa por 907185";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*907200000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 907200000";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*9072000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 9072000000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/1.12;
                    formula.innerHTML="Se divide el valor de la Masa entre 1.12";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value*143;
                    formula.innerHTML="Se multiplica el valor de la Masa por 143";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value*2000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 2000";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value*32000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 32000";
                break;
            }
        }
        if(valorSelectMasa_1=="Stone"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value/157;
                    formula.innerHTML="Se divide el valor de la Masa entre 157";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*6.35;
                    formula.innerHTML="Se multiplica el valor de la Masa por 6.35";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*6350;
                    formula.innerHTML="Se multiplica el valor de la Masa por 6350";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*6350000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 6350000";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*6350000000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 6350000000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/160;
                    formula.innerHTML="Se divide el valor de la Masa entre 160";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value/143;
                    formula.innerHTML="Se divide el valor de la Masa entre 143";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value*14;
                    formula.innerHTML="Se multiplica el valor de la Masa por 14";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value*224;
                    formula.innerHTML="Se multiplica el valor de la Masa por 224";
                break;
            }
        }
        if(valorSelectMasa_1=="Libra"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value/2205;
                    formula.innerHTML="Se divide el valor de la Masa entre 2205";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value/2.205;
                    formula.innerHTML="Se divide el valor de la Masa entre 2.205";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*454;
                    formula.innerHTML="Se multiplica el valor de la Masa por 454";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*453592;
                    formula.innerHTML="Se multiplica el valor de la Masa por 453592";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*45360000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 45360000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/2240;
                    formula.innerHTML="Se divide el valor de la Masa entre 2240";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value/2000;
                    formula.innerHTML="Se divide el valor de la Masa entre 2000";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value/14;
                    formula.innerHTML="Se divide el valor de la Masa entre 14";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value*16;
                    formula.innerHTML="Se multiplica el valor de la Masa por 16";
                break;
            }
        }
        if(valorSelectMasa_1=="Onza"){
            switch(valorSelectMasa_2){
                case "Tonelada":
                    valorInputMasa_2.value=valorInputMasa_1.value/35274;
                    formula.innerHTML="Se divide el valor de la Masa entre 35274";
                break;
                case "Kilogramo":
                    valorInputMasa_2.value=valorInputMasa_1.value/35.274;
                    formula.innerHTML="Se divide el valor de la Masa entre 35.274";
                break;
                case "Gramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*28.35;
                    formula.innerHTML="Se multiplica el valor de la Masa por 28.35";
                break;
                case "Miligramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*28350;
                    formula.innerHTML="Se multiplica el valor de la Masa por 28350";
                break;
                case "Microgramo":
                    valorInputMasa_2.value=valorInputMasa_1.value*28350000;
                    formula.innerHTML="Se multiplica el valor de la Masa por 28350000";
                break;
                case "ToneladaLarga":
                    valorInputMasa_2.value=valorInputMasa_1.value/35840;
                    formula.innerHTML="Se divide el valor de la Masa entre 35840";
                break;
                case "Toneladacorta":
                    valorInputMasa_2.value=valorInputMasa_1.value/32000;
                    formula.innerHTML="Se divide el valor de la Masa entre 32000";
                break;
                case "Stone":
                    valorInputMasa_2.value=valorInputMasa_1.value/224;
                    formula.innerHTML="Se divide el valor de la Masa entre 224";
                break;
                case "Libra":
                    valorInputMasa_2.value=valorInputMasa_1.value/16;
                    formula.innerHTML="Se divide el valor de la Masa entre 16";
                break;
                case "Onza":
                    valorInputMasa_2.value=valorInputMasa_1.value*1;
                    formula.innerHTML="Se multiplica el valor de la Masa por 1";
                break;
            }
        }
}