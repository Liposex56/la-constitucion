
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
$("#infounidad1").hide();
$("#infounidad2").hide();
$("#infounidad3").hide();
$("#continuar").hide();
$("#continuar2").hide();
$("#pregunta1").hide();
$("#opcion1p1").hide();
$("#opcion2p1").hide();
$("#opcion3p1").hide();

$("#pregunta2").hide();
$("#opcion1p2").hide();
$("#opcion2p2").hide();
$("#opcion3p2").hide();

$("#pregunta3").hide();
$("#opcion1p3").hide();
$("#opcion2p3").hide();
$("#opcion3p3").hide();

$("#pregunta4").hide();
$("#opcion1p4").hide();
$("#opcion2p4").hide();
$("#opcion3p4").hide();
$("#incorrecto").hide();
$("#bien").hide();

////////////////////////////////////////////////////////////////////
$("#unidad1").on("tap",function(){

	$("#infounidad1").show();
	$("#continuar").show();
	$("#iniciar").hide();
});
/////////////////////////////////////////////////////////////////////
$("#unidad2").on("tap",function(){

	$("#infounidad2").show();
	$("#continuar").show();
	$("#iniciar").hide();
});
/////////////////////////////////////////////////////////////////////
$("#unidad3").on("tap",function(){

	$("#infounidad3").show();
	$("#continuar").show();
	$("#iniciar").hide();
});
/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){

	$("#infounidad1").hide();
	$("#infounidad2").hide();
	$("#infounidad3").hide();
	$("#continuar").hide();
	$("#iniciar").show();
	$("#continuar2").hide();
});
/////////////////////////////////////////////////////////////////////
$("#continuar2").on("tap",function(){

	$("#continuar2").hide();
	$("#incorrecto").hide();
});
/////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#unidad1").hide();
	$("#unidad2").hide();
	$("#unidad3").hide();
	$("#fondo").hide();
	$("#iniciar").hide();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion1p1").on("tap",function(){
	$("#incorrecto").show();
	$("#continuar2").show();
});
/////////////////////////////////////////////////////////////////////
$("#opcion2p1").on("tap",function(){
	$("#opcion1p1").hide();
	$("#opcion2p1").hide();
	$("#opcion3p1").hide();
	$("#pregunta1").hide();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion3p1").on("tap",function(){
	$("#incorrecto").show();
	$("#continuar2").show();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////pregunta2//////////////////////////////////////
$("#opcion1p2").on("tap",function(){
	$("#incorrecto").show();
	$("#continuar2").show();
});
/////////////////////////////////////////////////////////////////////
$("#opcion2p2").on("tap",function(){
	$("#incorrecto").show();
	$("#continuar2").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#opcion3p2").on("tap",function(){
	$("#opcion1p2").hide();
	$("#opcion2p2").hide();
	$("#opcion3p2").hide();
	$("#pregunta2").hide();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////pregunta3/////////////////////////////////////
$("#opcion1p3").on("tap",function(){
	$("#opcion1p3").hide();
	$("#opcion2p3").hide();
	$("#opcion3p3").hide();
	$("#pregunta3").hide();
});
/////////////////////////////////////////////////////////////////////
$("#opcion2p3").on("tap",function(){
	
	$("#incorrecto").show();
	$("#continuar2").show();
});
/////////////////////////////////////////////////////////////////////
$("#opcion3p3").on("tap",function(){
	$("#incorrecto").show();
	$("#continuar2").show();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////pregunta4//////////////////////////////////////
$("#opcion1p4").on("tap",function(){
	$("#incorrecto").show();
	$("#continuar2").show();
});
/////////////////////////////////////////////////////////////////////
$("#opcion2p4").on("tap",function(){

	$("#incorrecto").show();
	$("#continuar2").show();
});
/////////////////////////////////////////////////////////////////////
$("#opcion3p4").on("tap",function(){
	
	$("#opcion1p4").hide();
	$("#opcion2p4").hide();
	$("#opcion3p4").hide();
	$("#pregunta4").hide();
	$("#bien").show();
});
/////////////////////////////////////////////////////////////////////
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

	ferla = new createjs.Sprite(clipAnimacion1,"derecha");
	ferla.x = 30;
	ferla.y = 370;


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

//--------------------------------malo1----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	malo1 =new createjs.Bitmap("imagenes/personajes/malo.png");
	malo1.x = 100;
	malo1.y = 300;
	malo1.cursor='pointer';
//--------------------------------malo1----------------------------------------------------	
//--------------------------------malo2----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	malo2 =new createjs.Bitmap("imagenes/personajes/malo.png");
	malo2.x = 300;
	malo2.y = 300;
	malo2.cursor='pointer';
//--------------------------------malo2----------------------------------------------------	
//--------------------------------malo3----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	malo3 =new createjs.Bitmap("imagenes/personajes/malo.png");
	malo3.x = 500;
	malo3.y = 300;
	malo3.cursor='pointer';
//--------------------------------malo3----------------------------------------------------
//--------------------------------malo4----------------------------------------------------	
	escenario = new createjs.Stage('canvas');
	malo4 =new createjs.Bitmap("imagenes/personajes/malo.png");
	malo4.x = 700;
	malo4.y = 300;
	malo4.cursor='pointer';
//--------------------------------malo4----------------------------------------------------	

	






	 escenario.enableMouseOver();



//------------------------------------------------------------------------------------

    escenario.addChild(fondo,ferla,linea3,linea4,malo1,malo2,malo3,malo4);
    createjs.Ticker.addEventListener("tick", enterFrame);

});






//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------



function enterFrame(event) {




	
	var labe2 = ndgmr.checkRectCollision(linea3,ferla);
	var labe3 = ndgmr.checkRectCollision(linea4,ferla);
	

	var coli1 = ndgmr.checkRectCollision(malo1,ferla);
	var colision4 = ndgmr.checkRectCollision(malo2,ferla);
	var colision5 = ndgmr.checkRectCollision(malo3,ferla);
	var colision6 = ndgmr.checkRectCollision(malo4,ferla);










	escenario.update(event);

///////////////////////////////////////////////////////////

if (keyManager.isKeyPressed(KeyboardManager.RIGHT_KEY))
{
ferla.gotoAndPlay("derecha");

ferla.x+=3;

}


///////////////////////////////////////////////////////////



///////////////////lineas////////////////////////


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

////////////////////lineas//////////////////////

	if(coli1){
$("#pregunta1").show();
$("#opcion1p1").show();
$("#opcion2p1").show();
$("#opcion3p1").show();
ferla.x = 230;
}


if(colision4){
ferla.x = 430;
$("#pregunta2").show();
$("#opcion1p2").show();
$("#opcion2p2").show();
$("#opcion3p2").show();
//escenario.addChild(pregunta2);
}


if(colision5){
$("#pregunta3").show();
$("#opcion1p3").show();
$("#opcion2p3").show();
$("#opcion3p3").show();
ferla.x = 630;
//escenario.addChild(pregunta3);

}
if(colision6){
ferla.y = -50;
ferla.x = 0;
$("#pregunta4").show();
$("#opcion1p4").show();
$("#opcion2p4").show();
$("#opcion3p4").show();
//escenario.addChild(pregunta4);
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