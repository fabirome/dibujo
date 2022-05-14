let texto = document.getElementById("caja_texto");
let botoncito= document.getElementById("boton");

botoncito.addEventListener("click",dibujoPorClick);

let d = document.getElementById("dibujo");
let lienzo =  d.getContext("2d");
let ancho = d.width;






function dibujandoLinea (color,x1,y1,x2,y2)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(x1, y1);
lienzo.lineTo(x2, y2);
lienzo.stroke();
lienzo.closePath();
}


function dibujoPorClick()
{
    let lineas=parseInt(texto.value);
    let l= 0
    let colorcito="red";
    let espacio = ancho /lineas;


for (l = 0 ; l< lineas ; l++)
{
 xi=l*espacio;
 yi=espacio*(l+1);
 dibujandoLinea (colorcito,xi,0,300,yi);
 console.log("Dibujar",l);

}

dibujandoLinea(colorcito,1,1,300,0);
dibujandoLinea(colorcito,300,1,300,300);
}























































