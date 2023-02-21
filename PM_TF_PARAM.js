var k= document.getElementById("input_k");
var b= document.getElementById("input_b");
var a=document.getElementById("input_a");


var boton=document.getElementById("boton");
var botonayuda=document.getElementById("botonayuda");

var r=document.getElementById("resultado");
var r2=document.getElementById("ayuda");
var p_discreto=0.0;
var i_discreto=0.0;
var d_discreto=0.0;

var Tao=0;
var Ganancia=0.0;
var Ts=0;

var aux=0;

function calcular(){

    k.value=parseFloat(k.value);
    b.value=parseFloat(b.value);
    a.value=parseFloat(a.value);


    if (k.value > 0 && a.value>0 && b.value>0)
    {
        Tao=1/ (a.value/ b.value);
        Ganancia=k.value/a.value;
        Ts=4*Tao;
        r.innerHTML="Los parámetros del sistema de primer orden son: "+"<br/>"+"Tao= "+ Tao.toFixed(3) + "<br/>"+"  Ganancia= "+ Ganancia.toFixed(3) + "<br/>"+"Tiempo de estabilizacion en segundos= "+ Ts.toFixed(3); 
    }
    else
    {   
        r.innerHTML="Error de parametros";
    }
}
function ayuda()
{
    if(aux==1)
    {
        aux=0;
        r2.innerHTML="";

    }
    else
    {
        aux=aux+1;
        r2.innerHTML="Este programa calcula el valor de la constante de tiempo de un sistema de primer orden, su ganancia, y tiempo de estabilización, a partir de su función de transferencia";
    }
    
}
botonayuda.addEventListener("click",ayuda);
boton.addEventListener("click",calcular);
