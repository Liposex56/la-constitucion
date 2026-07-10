
var escenario; 
var rutaImgenFondo;
var fondo;

var detalleAnimacion1;
var clipAnimacion1;
var ferla;

var detalleAnimacion3;
var clipAnimacion3;

var detalleAnimacion4;
var clipAnimacion4;
var explosion;


var cuadro;
var cuadro2;
var cuadro3;
var cuadro4;
var cuadro5;
var cuadro6;
var cuadro7;
var cuadro8;
var cuadro9;
var cuadro10;
var completado;
var incorrecto;


var keyManager=null;


var rodar;
var laberinto1;
var laberinto2;
var laberinto3;


var buenas=0;
var buenas2=0;
var buenas3=0;
var buenas4=0;
var buenas5=0;

var total=0;


$(function() {
	var canvas = document.getElementById('canvas');
canvas.style.width = "1085px";
canvas.style.height = "510px";

$("#botonmensaje").hide();

//-------------------------------------------------------------------------------   
	rutaImgenFondo="imagenes/fondos/ciudad.png";   
	escenario = new createjs.Stage('canvas');

	keyManager=new KeyboardManager();

	imagenFondo(rutaImgenFondo);

//----------------------------- ANIMACIONES ------------------------------------------
	
	detalleAnimacion1 = {
		images: ["imagenes/personajes/personaje.png"],
		frames: { width:86, height:141, count:22, regX: 150, regY: 42},
		animations: {frente:[3,18,"frente"] }
	
	};
		
	clipAnimacion1 = new createjs.SpriteSheet(detalleAnimacion1);
	
	ferla = new createjs.Sprite(clipAnimacion1,"frente");
	ferla.x = 500;  
	ferla.y = 380;


	//------------animacion---------------------------*/





	//------------cuadro---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro= new createjs.Bitmap("imagenes/personajes/bien1.png");
cuadro.x = 950; 
cuadro.y = 179;
cuadro.cursor='pointer';

//------------cuadro---------------------------*/	
	//------------cuadro2---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro2= new createjs.Bitmap("imagenes/personajes/mal1.png");
cuadro2.x = 1350; 
cuadro2.y = 279;
cuadro2.cursor='pointer';

//------------cuadro---------------------------*/	
//------------cuadro3---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro3= new createjs.Bitmap("imagenes/personajes/bien2.png");
cuadro3.x = 1650; 
cuadro3.y = 179;
cuadro3.cursor='pointer';

//------------cuadro3---------------------------*/
//------------cuadro4---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro4= new createjs.Bitmap("imagenes/personajes/mal2.png");
cuadro4.x = 1950; 
cuadro4.y = 379;
cuadro4.cursor='pointer';

//------------cuadro4---------------------------*/	
//------------cuadro5---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro5= new createjs.Bitmap("imagenes/personajes/bien3.png");
cuadro5.x = 2250; 
cuadro5.y = 279;
cuadro5.cursor='pointer';

//------------cuadro5---------------------------*/	
//------------cuadro6---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro6= new createjs.Bitmap("imagenes/personajes/mal3.png");
cuadro6.x = 2550; 
cuadro6.y = 59;
cuadro6.cursor='pointer';

//------------cuadro6---------------------------*/	
//------------cuadro7---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro7= new createjs.Bitmap("imagenes/personajes/bien4.png");
cuadro7.x = 2850; 
cuadro7.y = 379;
cuadro7.cursor='pointer';

//------------cuadro7---------------------------*/	
//------------cuadro8---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro8= new createjs.Bitmap("imagenes/personajes/mal4.png");
cuadro8.x = 3150; 
cuadro8.y = 179;
cuadro8.cursor='pointer';

//------------cuadro8---------------------------*/	
//------------cuadro9---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro9= new createjs.Bitmap("imagenes/personajes/bien5.png");
cuadro9.x = 3450; 
cuadro9.y = 100;
cuadro9.cursor='pointer';

//------------cuadro9---------------------------*/	
//------------cuadro10---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro10= new createjs.Bitmap("imagenes/personajes/mal5.png");
cuadro10.x = 3750; 
cuadro10.y = 79;
cuadro10.cursor='pointer';

//------------cuadro10---------------------------*/	
//------------completado---------------------------*/
escenario = new createjs.Stage('canvas');

completado= new createjs.Bitmap("imagenes/fondos/completado.png");
completado.x = 0; 
completado.y = 0;
completado.cursor='pointer';

//------------completado---------------------------*/	
//------------completado---------------------------*/
escenario = new createjs.Stage('canvas');

incorrecto= new createjs.Bitmap("imagenes/fondos/incorrecto.png");
incorrecto.x = 0; 
incorrecto.y = 0;
incorrecto.cursor='pointer';

//------------completado---------------------------*/
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	linea1 =new createjs.Bitmap("imagenes/linea1.png");
	linea1.x = 455;
	linea1.y = 0;
	linea1.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	linea2 =new createjs.Bitmap("imagenes/linea2.png");
	linea2.x = 455;
	linea2.y = 470;
	linea2.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	


	


	 escenario.enableMouseOver();
	


//------------------------------------------------------------------------------------
	
    escenario.addChild(fondo,ferla,cuadro,cuadro2,cuadro3,
   	cuadro4,cuadro5,cuadro6,cuadro7,cuadro8,cuadro9,cuadro10,linea1,linea2);

    createjs.Ticker.addEventListener("tick", enterFrame);

});






//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------



function enterFrame(event) { 
if (cuadro.y == 179) {

cuadro.x-=7;
cuadro2.x-=7;
cuadro3.x-=7;
cuadro4.x-=7;
cuadro5.x-=7;
cuadro6.x-=7;
cuadro7.x-=7;
cuadro8.x-=7;
cuadro9.x-=7;
cuadro10.x-=7;
}
	

	var colision1 = ndgmr.checkRectCollision(cuadro,ferla);
	var colision4 = ndgmr.checkRectCollision(cuadro2,ferla);
	var colision5 = ndgmr.checkRectCollision(cuadro3,ferla);
	var colision6 = ndgmr.checkRectCollision(cuadro4,ferla);
	var colision7 = ndgmr.checkRectCollision(cuadro5,ferla);
	var colision8 = ndgmr.checkRectCollision(cuadro6,ferla);
	var colision9 = ndgmr.checkRectCollision(cuadro7,ferla);
	var colision10 = ndgmr.checkRectCollision(cuadro8,ferla);
	var colision11 = ndgmr.checkRectCollision(cuadro9,ferla);
	var colision12 = ndgmr.checkRectCollision(cuadro10,ferla);

	var colision13 = ndgmr.checkRectCollision(linea1,ferla);
	var colision14 = ndgmr.checkRectCollision(linea2,ferla);





	escenario.update(event);

///////////////////////////////////////////////////////////
if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{
ferla.y-=7;
ferla.gotoAndPlay("frente");

}
if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{	
ferla.y+=7;
ferla.gotoAndPlay("frente");
}
///////////////////////////////////////////////////////////


	if(colision1){

	escenario.removeChild(cuadro);
	
buenas=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);

}


if(colision4){

	escenario.removeChild(ferla);
	escenario.addChild(incorrecto);
$(".audio")[0].play();
}


if(colision5){

	escenario.removeChild(cuadro3);
	buenas2=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);

}
if(colision6){

	escenario.removeChild(ferla);
	escenario.addChild(incorrecto);
$(".audio")[0].play();
}
if(colision7){

	escenario.removeChild(cuadro5);
	
buenas3=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);
}
if(colision8){

	escenario.removeChild(ferla);
	escenario.addChild(incorrecto);
$(".audio")[0].play();
}
if(colision9){

	escenario.removeChild(cuadro7);
	
buenas4=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);
}
if(colision10){

	escenario.removeChild(ferla);
	escenario.addChild(incorrecto);
$(".audio")[0].play();
}
if(colision11){

	escenario.removeChild(cuadro9);
	
buenas5=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);
}
if(colision12){

	escenario.removeChild(ferla);
	escenario.addChild(incorrecto);
	$(".audio")[0].play();
}var dd=0;

if (total==5) {
escenario.addChild(completado);
$("#botonmensaje").show();
$("#botonayuda").hide();
$(".audioB")[0].play();
}

if(colision13){
	
if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{

ferla.y+=7;
ferla.gotoAndPlay("arriva");
}
}

if(colision14){
	
if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{

ferla.y-=7;
ferla.gotoAndPlay("abajo");
}
}




////////////////colision/////////////////////////
}



//------
function imagenFondo(rutaImge) 
{
	escenario.removeChild(fondo);
	
	fondo = new createjs.Bitmap(rutaImge);


	escenario.addChild(fondo);
	
	
}
