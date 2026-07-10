
var escenario;
var rutaImgenFondo;
var fondo;

var detalleAnimacion1;
var clipAnimacion1;
var ferla;



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


var keyManager=null;
var celebrar;
var rodar;


var buenas=0;
var buenas2=0;
var buenas3=0;
var buenas4=0;
var buenas5=0;

var total=0;


var cara=0;
var cara2=0;
var cara3=0;
var cara4=0;
var cara5=0;
var car=0;

var bien;


$(function() {


//-------------------------------------------------------------------------------
	rutaImgenFondo="imagenes/fondos/paisaje.png";
	escenario = new createjs.Stage('canvas');

	keyManager=new KeyboardManager();

	imagenFondo(rutaImgenFondo);

//----------------------------- ANIMACIONES ------------------------------------------

	detalleAnimacion1 = {
		images: ["imagenes/personajes/lapiz.png"],
		frames: { width:86, height:141, count:47, regX: 29, regY: 42},
		animations: {izquierda:[26,46,"izquierda"],espalda:[7,8,"espalda"],frente:[1,2,"frente"] }

	};

	clipAnimacion1 = new createjs.SpriteSheet(detalleAnimacion1);

	ferla = new createjs.Sprite(clipAnimacion1,"izquierda");
	ferla.x = 740;
	ferla.y = 380;


	//------------triangulo---------------------------*/







	//-----------------------------celebrar ------------------------------------------

	detalleAnimacion2 = {
		images: ["imagenes/personajes/celebra.png"],
		frames: { width:550, height:500, count:66, regX: 29, regY: 42},
		animations: {todo:[1,65,"todo"] }

	};

	clipAnimacion2 = new createjs.SpriteSheet(detalleAnimacion2);

	celebrar = new createjs.Sprite(clipAnimacion2,"todo");
	celebrar.x = 250;
	celebrar.y = 170;
	//-----------------------------celebrar ------------------------------------------



	//-----------------------------explosion ------------------------------------------

	detalleAnimacion4 = {
		images: ["imagenes/personajes/explosion.png"],
		frames: { width:177, height:177, count:7, regX: 29, regY: 42},
		animations: {todo:[1,7,"todo"] }

	};

	clipAnimacion4 = new createjs.SpriteSheet(detalleAnimacion4);

	explosion = new createjs.Sprite(clipAnimacion4,"todo");
	explosion.x = 440;
	explosion.y = 350;
	//-----------------------------explosion ------------------------------------------














	//------------cuadro---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro= new createjs.Bitmap("imagenes/personajes/escribir.png");
cuadro.x = 650;
cuadro.y = -279;
cuadro.cursor='pointer';

//------------cuadro---------------------------*/
	//------------cuadro2---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro2= new createjs.Bitmap("imagenes/personajes/cama.png");
cuadro2.x = 50;
cuadro2.y = 7;
cuadro2.cursor='pointer';

//------------cuadro---------------------------*/
//------------cuadro3---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro3= new createjs.Bitmap("imagenes/personajes/libro.png");
cuadro3.x = 550;
cuadro3.y = -1800;
cuadro3.cursor='pointer';

//------------cuadro3---------------------------*/
//------------cuadro4---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro4= new createjs.Bitmap("imagenes/personajes/perro.png");
cuadro4.x = 250;
cuadro4.y = -379;
cuadro4.cursor='pointer';

//------------cuadro4---------------------------*/
//------------cuadro5---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro5= new createjs.Bitmap("imagenes/personajes/regla.png");
cuadro5.x = 350;
cuadro5.y = -479;
cuadro5.cursor='pointer';

//------------cuadro5---------------------------*/
//------------cuadro6---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro6= new createjs.Bitmap("imagenes/personajes/tv.png");
cuadro6.x = 450;
cuadro6.y = -1200;
cuadro6.cursor='pointer';

//------------cuadro6---------------------------*/
//------------cuadro7---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro7= new createjs.Bitmap("imagenes/personajes/borrador.png");
cuadro7.x = 150;
cuadro7.y = -1079;
cuadro7.cursor='pointer';

//------------cuadro7---------------------------*/
//------------cuadro8---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro8= new createjs.Bitmap("imagenes/personajes/silla.png");
cuadro8.x = 650;
cuadro8.y = -1000;
cuadro8.cursor='pointer';

//------------ferla---------------------------*/
//------------cuadro9---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro9= new createjs.Bitmap("imagenes/personajes/sacapuntas.png");
cuadro9.x = 50;
cuadro9.y = -1300;
cuadro9.cursor='pointer';

//------------cuadro9---------------------------*/
//------------cuadro10---------------------------*/
escenario = new createjs.Stage('canvas');

cuadro10= new createjs.Bitmap("imagenes/personajes/control.png");
cuadro10.x = 3750;
cuadro10.y = 279;
cuadro10.cursor='pointer';

//------------cuadro10---------------------------*/
//------------bien---------------------------*/
escenario = new createjs.Stage('canvas');

bien= new createjs.Bitmap("imagenes/personajes/BIEN.png");
bien.x = 0;
bien.y = 0;
bien.cursor='pointer';

//------------ferla---------------------------*/
//------------bien---------------------------*/
escenario = new createjs.Stage('canvas');

perdio= new createjs.Bitmap("imagenes/fondos/perdio.png");
perdio.x = 0;
perdio.y = 0;
perdio.cursor='pointer';

//------------cuadro10---------------------------*/
//------------bien---------------------------*/
escenario = new createjs.Stage('canvas');

linea= new createjs.Bitmap("imagenes/linea.png");
linea.x = 0;
linea.y = 480;
linea.cursor='pointer';

//------------cuadro10---------------------------*/





	 escenario.enableMouseOver();



//------------------------------------------------------------------------------------

    escenario.addChild(fondo,ferla,cuadro,cuadro2,cuadro3,
    	cuadro4,cuadro5,cuadro6,cuadro7,cuadro8,cuadro9,cuadro10,linea);
    createjs.Ticker.addEventListener("tick", enterFrame);

});






//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------



function enterFrame(event) {





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

	var linea1 = ndgmr.checkRectCollision(cuadro,linea);
	var linea2 = ndgmr.checkRectCollision(cuadro3,linea);
	var linea3 = ndgmr.checkRectCollision(cuadro5,linea);
	var linea4 = ndgmr.checkRectCollision(cuadro7,linea);
	var linea5 = ndgmr.checkRectCollision(cuadro9,linea);









	escenario.update(event);

///////////////////////////////////////////////////////////

if (keyManager.isKeyPressed(KeyboardManager.RIGHT_KEY))
{
ferla.scaleX = -1;
ferla.x+=7;
ferla.gotoAndPlay("izquierda");

}
if (keyManager.isKeyPressed(KeyboardManager.LEFT_KEY))
{

ferla.x-=7;
ferla.scaleX = 1;
ferla.gotoAndPlay("izquierda");
}

if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{
location.reload("index.html");
}
///////////////////////////////////////////////////////////



cuadro.y+=4;
cuadro2.y+=4;
cuadro3.y+=4;
cuadro4.y+=4;
cuadro5.y+=4;
cuadro6.y+=4;
cuadro7.y+=4;
cuadro8.y+=4;
cuadro9.y+=4;





	if(colision1){
cuadro.x+=1000;
buenas=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);
//escenario.removeChild(cuadro);

}


if(colision4){

	escenario.removeChild(ferla);
	escenario.addChild(explosion);
	explosion.x = 150;
	explosion.y = 279;

location.reload("index.html");
}


if(colision5){
	cuadro3.x-=1000;
	buenas2=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);
//escenario.removeChild(cuadro3);

}
if(colision6){

	escenario.removeChild(ferla);
	escenario.addChild(explosion);
	explosion.x = 350;
	explosion.y = 279;
location.reload("index.html");
}
if(colision7){

cuadro5.x-=1000;
buenas3=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);
//escenario.removeChild(cuadro5);
}
if(colision8){

	escenario.removeChild(ferla);
	escenario.addChild(explosion);
	explosion.x = 550;
	explosion.y = 279;
location.reload("index.html");
}
if(colision9){


cuadro7.x-=1000;
buenas4=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);
//escenario.removeChild(cuadro7);
}
if(colision10){

	escenario.removeChild(ferla);
	escenario.addChild(explosion);
	explosion.x = 750;
	explosion.y = 279;
location.reload("index.html");
}
if(colision11){


cuadro9.x-=1000;
buenas5=1;
total=buenas2+buenas+buenas3+buenas4+buenas5;
console.log("buenas");
$("#buenas").text(total);
//escenario.removeChild(cuadro9);
}
if(colision12){

	escenario.removeChild(ferla);
	escenario.addChild(explosion);
	location.reload("index.html");
}
if (linea1) {
	escenario.addChild(perdio);
	cuadro.x=1000;
	cuadro2.x=1000;
	cuadro3.x=1000;
	cuadro4.x=1000;
	cuadro5.x=1000;
	cuadro6.x=1000;
	cuadro7.x=1000;
	cuadro8.x=1000;
	cuadro9.x=1000;
	cuadro10.x=1000;
}
if (linea2) {
	escenario.addChild(perdio);
	cuadro.x=1000;
	cuadro2.x=1000;
	cuadro3.x=1000;
	cuadro4.x=1000;
	cuadro5.x=1000;
	cuadro6.x=1000;
	cuadro7.x=1000;
	cuadro8.x=1000;
	cuadro9.x=1000;
	cuadro10.x=1000;
}
if (linea3) {
	escenario.addChild(perdio);
	cuadro.x=1000;
	cuadro2.x=1000;
	cuadro3.x=1000;
	cuadro4.x=1000;
	cuadro5.x=1000;
	cuadro6.x=1000;
	cuadro7.x=1000;
	cuadro8.x=1000;
	cuadro9.x=1000;
	cuadro10.x=1000;
}
if (linea4) {
	escenario.addChild(perdio);
	cuadro.x=1000;
	cuadro2.x=1000;
	cuadro3.x=1000;
	cuadro4.x=1000;
	cuadro5.x=1000;
	cuadro6.x=1000;
	cuadro7.x=1000;
	cuadro8.x=1000;
	cuadro9.x=1000;
	cuadro10.x=1000;
}
if (linea5) {
	escenario.addChild(perdio);
	cuadro.x=1000;
	cuadro2.x=1000;
	cuadro3.x=1000;
	cuadro4.x=1000;
	cuadro5.x=1000;
	cuadro6.x=1000;
	cuadro7.x=1000;
	cuadro8.x=1000;
	cuadro9.x=1000;
	cuadro10.x=1000;
}


if (total==5) {
escenario.addChild(bien);
Mostrar();

}

	//escenario.removeChild(positivo);


	// escenario.addChild(celebrar);



}



//------
function imagenFondo(rutaImge)
{
	escenario.removeChild(fondo);

	fondo = new createjs.Bitmap(rutaImge);


	escenario.addChild(fondo);


}
function Mostrar(){

	document.getElementById("muñeco").style.display="none";
	document.getElementById("siguiente").style.display="block";
}