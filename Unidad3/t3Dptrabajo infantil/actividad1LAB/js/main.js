
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
$("#botonmensaje").hide();

//-------------------------------------------------------------------------------
	rutaImgenFondo="imagenes/fondos/paisaje.png";
	escenario = new createjs.Stage('canvas');

	keyManager=new KeyboardManager();

	imagenFondo(rutaImgenFondo);

//----------------------------- ANIMACIONES ------------------------------------------

	detalleAnimacion1 = {
		images: ["imagenes/personajes/lapiz.png"],
		frames: { width:59, height:66, count:30, regX: 29, regY: 42},
		animations: {izquierda:[4,11,"izquierda"],derecha:[13,20,"derecha"],arriva:[22,29,"arriva"],abajo:[1,2,"abajo"] }

	};

	clipAnimacion1 = new createjs.SpriteSheet(detalleAnimacion1);

	ferla = new createjs.Sprite(clipAnimacion1,"abajo");
	ferla.x = 400;
	ferla.y = 444;


	//------------triangulo---------------------------*/









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
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	linea2 =new createjs.Bitmap("imagenes/laberintos/laberintoFacil/l2.png");
	linea2.x = 0;
	linea2.y = -2;
	linea2.cursor='pointer';
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	linea3 =new createjs.Bitmap("imagenes/laberintos/laberintoFacil/l3.png");
	linea3.x = 800;
	linea3.y = 0;
	linea3.cursor='pointer';
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	linea4 =new createjs.Bitmap("imagenes/laberintos/laberintoFacil/l4.png");
	linea4.x = -2;
	linea4.y = 0;
	linea4.cursor='pointer';
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	linea5 =new createjs.Bitmap("imagenes/laberintos/laberintoFacil/l5.png");
	linea5.x = 0;
	linea5.y = 470;
	linea5.cursor='pointer';
	
//------------------------------------------------------------------------------------	
//--------------------------------malo1----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	malo1 =new createjs.Bitmap("imagenes/personajes/malo.png");
	malo1.x = 400;
	malo1.y = 70;
	malo1.cursor='pointer';
//--------------------------------malo1----------------------------------------------------	
//--------------------------------malo2----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	malo2 =new createjs.Bitmap("imagenes/personajes/malo2.png");
	malo2.x = 0;
	malo2.y = 140;
	malo2.cursor='pointer';
//--------------------------------malo2----------------------------------------------------	
//--------------------------------malo3----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	malo3 =new createjs.Bitmap("imagenes/personajes/malo.png");
	malo3.x = 800;
	malo3.y = 210;
	malo3.cursor='pointer';
//--------------------------------malo3----------------------------------------------------
//--------------------------------malo4----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	malo4 =new createjs.Bitmap("imagenes/personajes/malo2.png");
	malo4.x = 600;
	malo4.y = 280;
	malo4.cursor='pointer';
//--------------------------------malo4----------------------------------------------------	
//--------------------------------escuela----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	escuela =new createjs.Bitmap("imagenes/personajes/escuela.png");
	escuela.x = 320;
	escuela.y = 54;
	escuela.cursor='pointer';
//--------------------------------malo4----------------------------------------------------		






	 escenario.enableMouseOver();



//------------------------------------------------------------------------------------

    escenario.addChild(fondo,escuela,ferla,linea2,linea3,linea4,linea5,malo1,malo2,malo3,malo4);
    createjs.Ticker.addEventListener("tick", enterFrame);

});






//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------



function enterFrame(event) {




	var labe1 = ndgmr.checkRectCollision(linea2,ferla);
	var labe2 = ndgmr.checkRectCollision(linea3,ferla);
	var labe3 = ndgmr.checkRectCollision(linea4,ferla);
	var labe4 = ndgmr.checkRectCollision(linea5,ferla);

	var coli1 = ndgmr.checkRectCollision(malo1,ferla);
	var colision4 = ndgmr.checkRectCollision(malo2,ferla);
	var colision5 = ndgmr.checkRectCollision(malo3,ferla);
	var colision6 = ndgmr.checkRectCollision(malo4,ferla);
	var coliescuela = ndgmr.checkRectCollision(escuela,ferla);










	escenario.update(event);

///////////////////////////////////////////////////////////

if (keyManager.isKeyPressed(KeyboardManager.RIGHT_KEY))
{
ferla.gotoAndPlay("derecha");

ferla.x+=3;

}
if (keyManager.isKeyPressed(KeyboardManager.LEFT_KEY))
{
ferla.gotoAndPlay("izquierda");
ferla.scaleX = 1;
ferla.x-=3;

}

if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{

ferla.y+=3;
ferla.gotoAndPlay("abajo");
}

if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{

ferla.y-=3;
ferla.gotoAndPlay("arriva");
}
///////////////////////////////////////////////////////////



malo1.x-=8;
malo2.x+=8;
malo3.x-=8;
malo4.x+=8;

///////////////////lineas////////////////////////
if(labe1){
	
if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{

ferla.y+=3;
ferla.gotoAndPlay("arriva");
}
}

if(labe2){
	
if (keyManager.isKeyPressed(KeyboardManager.RIGHT_KEY))
{
ferla.gotoAndPlay("derecha");
ferla.scaleX = -1;
ferla.x-=3;

}
}

if(labe3){
	
if (keyManager.isKeyPressed(KeyboardManager.LEFT_KEY))
{
ferla.gotoAndPlay("izquierda");
ferla.scaleX = 1;
ferla.x+=3;

}
}
if(labe4){
	
if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{

ferla.y-=3;
ferla.gotoAndPlay("abajo");
}
}
////////////////////lineas//////////////////////

	if(coli1){
location.reload("index.html");

}


if(colision4){

location.reload("index.html");
}


if(colision5){
location.reload("index.html");

}
if(colision6){

location.reload("index.html");
}
if(coliescuela){

$("#botonmensaje").show();
$("#botonayuda").hide();
escenario.addChild(bien);
malo1.y-=600;
malo2.y+=600;
malo3.y-=600;
malo4.y+=600;
}


if (malo1.x==-88) {
	malo1.x=800;
}
if (malo2.x==800) {
	malo2.x=-88;
}
if (malo3.x==-88) {
	malo3.x=800;
}
if (malo4.x==800) {
	malo4.x=-88;
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