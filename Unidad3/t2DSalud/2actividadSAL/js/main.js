
var escenario; 
var rutaImgenFondo;
var fondo;

var detalleAnimacion1;
var clipAnimacion1;
var munecos2;


var detalleBoton;
var clipBoton;

var nuevo_2=0;


var fondoBoton;
var keyManager=null;

var laberinto1;
var laberinto2;
var laberinto3;
var laberinto4;
var laberinto5;
var laberinto6;
var laberinto7;
var laberinto8;
var laberinto9;
var laberinto10;
var laberinto11;
var laberinto12;
var laberinto13;
var laberinto14;


var ganaste;
var perdiste;
var mover=true;

var dialogo="";
var txt_usuario="";

var verde;
var morado;
var rojo;
var cafe;
var azul;
var meta;
$("#botonmensaje").hide();



$(function() {
	//-----------------------------------------------------------------------
	
	formulario=null;
	
	dialogo = $( "#registro" ).dialog({
		autoOpen: false,
		height: 250,
		width: 450,
		modal: true,
		open: function(event, ui) {
        $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
    }

	});
	
	dialogo.dialog( "open" );
//-----------------------------------------------------------------------

	$("#iniciar").on("click",guardar);	

//-----------------------------------------------------------------------	

 $("#registrar").on("click",function(){
			dialogo.dialog("open");
		
		$("#registrar").effect("");
		
		});
		$("#out").on("click",function(){
			dialogo.dialog("close");
		
		$("#out").effect("pulsate");
		
		});
		$("#guardar").on("click",function(){ //LISTENER
	    saveDates();
	    
		});

		$(function saveDates(){
//-------------------------------------------------------------------------------   
	rutaImgenFondo="imagenes/fondos/negro.png";   
	escenario = new createjs.Stage('canvas');
	keyManager =new KeyboardManager();
	imagenFondo(rutaImgenFondo);

//----------------------------- tuPersonaje ------------------------------------------
	
	detalleAnimacion1 = {
		images: ["imagenes/personajes/personaje.png"],
		frames: { width:28, height:32, count:30, regX: 29, regY: 42},
		animations: {izquierda:[4,11,"izquierda"],derecha:[13,20,"derecha"],arriva:[22,29,"arriva"],abajo:[1,2,"abajo"] }

	};
		
	clipAnimacion1 = new createjs.SpriteSheet(detalleAnimacion1);
	
	munecos2 = new createjs.Sprite(clipAnimacion1,"izquierda");
	munecos2.x = 50;  
	munecos2.y = 156; 



//----------------------------- letras ------------------------------------------
  txt_usuario = new createjs.Text('usuario...', "20px Arial", "red"); 
 	txt_usuario.name = 'txt_usuario';
	txt_usuario.textAlign = 'left';
	
    txt_usuario.x = 100;
    txt_usuario.y = 15;	
//----------------------------- letras ------------------------------------------

//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto1 =new createjs.Bitmap("imagenes/laberinto/li1.png");
	laberinto1.x = 8;
	laberinto1.y = 95;
	laberinto1.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	

//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto2 =new createjs.Bitmap("imagenes/laberinto/li4.png");
	laberinto2.x = 790;
	laberinto2.y = 97;
	laberinto2.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	

//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto3 =new createjs.Bitmap("imagenes/laberinto/li6.png");
	laberinto3.x = 8;
	laberinto3.y = 176;
	laberinto3.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto4 =new createjs.Bitmap("imagenes/laberinto/li2.png");
	laberinto4.x = 8;
	laberinto4.y = 97;
	laberinto4.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto5 =new createjs.Bitmap("imagenes/laberinto/li3.png");
	laberinto5.x = 8;
	laberinto5.y = 184;
	laberinto5.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto6 =new createjs.Bitmap("imagenes/laberinto/li5.png");
	laberinto6.x = 716;
	laberinto6.y = 177;
	laberinto6.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto7 =new createjs.Bitmap("imagenes/laberinto/li7.png");
	laberinto7.x = 8;
	laberinto7.y = 187;
	laberinto7.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto8 =new createjs.Bitmap("imagenes/laberinto/li8.png");
	laberinto8.x = 91;
	laberinto8.y = 265;
	laberinto8.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto9 =new createjs.Bitmap("imagenes/laberinto/li9.png");
	laberinto9.x = 90;
	laberinto9.y = 267;
	laberinto9.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto10 =new createjs.Bitmap("imagenes/laberinto/li10.png");
	laberinto10.x = 92;
	laberinto10.y = 275;
	laberinto10.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto11 =new createjs.Bitmap("imagenes/laberinto/li11.png");
	laberinto11.x = 8;
	laberinto11.y = 358;
	laberinto11.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto12 =new createjs.Bitmap("imagenes/laberinto/li12.png");
	laberinto12.x = 715;
	laberinto12.y = 360;
	laberinto12.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto13 =new createjs.Bitmap("imagenes/laberinto/li13.png");
	laberinto13.x = 790;
	laberinto13.y = 277;
	laberinto13.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	laberinto14 =new createjs.Bitmap("imagenes/laberinto/li14.png");
	laberinto14.x = 717;
	laberinto14.y = 428;
	laberinto14.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	

//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	verde =new createjs.Bitmap("imagenes/preguntas/bacteria.png");
	verde.x = 250;
	verde.y = 142;
	verde.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	morado =new createjs.Bitmap("imagenes/preguntas/bacteria.png");
	morado.x = 350;
	morado.y = 232;
	morado.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	rojo =new createjs.Bitmap("imagenes/preguntas/bacteria.png");
	rojo.x = 70;
	rojo.y = 282;
	rojo.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	cafe =new createjs.Bitmap("imagenes/preguntas/bacteria.png");
	cafe.x = 320;
	cafe.y = 325;
	cafe.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	azul =new createjs.Bitmap("imagenes/preguntas/bacteria.png");
	azul.x = 620;
	azul.y = 285;
	azul.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//-----------laberintoFacil----------------------------------------------------------//
	escenario = new createjs.Stage('canvas');
	meta =new createjs.Bitmap("imagenes/preguntas/meta.png");
	meta.x = 727;
	meta.y = 380;
	meta.cursor='pointer';escenario = new createjs.Stage('canvas');
	
//------------------------------------------------------------------------------------	
//------------bien---------------------------*/
escenario = new createjs.Stage('canvas');

bien= new createjs.Bitmap("imagenes/fondos/bien.png");
bien.x = 0;
bien.y = 0;
bien.cursor='pointer';

//------------ferla---------------------------*/	
//------------------------------------------------------------------------------------		
	 escenario.enableMouseOver();
//------------------------------------------------------------------------------------
    escenario.addChild(fondo,munecos2,laberinto1,laberinto2,laberinto3,laberinto4,laberinto5,
    	laberinto6,laberinto7,laberinto8,laberinto9,laberinto10,laberinto11,laberinto12,
    	laberinto13,laberinto14,laberinto14,
    	verde,morado,rojo,azul,cafe,meta);
    createjs.Ticker.addEventListener("tick", enterFrame);

});

//------------------------------------------------------------------------------------

function enterFrame(event) { 

var colisionOne = ndgmr.checkRectCollision(laberinto1,munecos2);
var colision2 = ndgmr.checkRectCollision(laberinto2,munecos2);
var colision3 = ndgmr.checkRectCollision(laberinto3,munecos2);
var colision4 = ndgmr.checkRectCollision(laberinto4,munecos2);
var colision5 = ndgmr.checkRectCollision(laberinto5,munecos2);
var colision6 = ndgmr.checkRectCollision(laberinto6,munecos2);
var colision7 = ndgmr.checkRectCollision(laberinto7,munecos2);
var colision8 = ndgmr.checkRectCollision(laberinto8,munecos2);
var colision9 = ndgmr.checkRectCollision(laberinto9,munecos2);
var colision10 = ndgmr.checkRectCollision(laberinto10,munecos2);
var colision11 = ndgmr.checkRectCollision(laberinto11,munecos2);
var colision12 = ndgmr.checkRectCollision(laberinto12,munecos2);
var colision13 = ndgmr.checkRectCollision(laberinto13,munecos2);
var colision14 = ndgmr.checkRectCollision(laberinto14,munecos2);

var colision20 = ndgmr.checkRectCollision(verde,munecos2);
var colision21 = ndgmr.checkRectCollision(morado,munecos2);
var colision22 = ndgmr.checkRectCollision(rojo,munecos2);
var colision23 = ndgmr.checkRectCollision(cafe,munecos2);
var colision24 = ndgmr.checkRectCollision(azul,munecos2);
var colision25 = ndgmr.checkRectCollision(meta,munecos2);







	escenario.update(event);
if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{

munecos2.y+=3;
munecos2.gotoAndPlay("abajo");
}

if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{

munecos2.y-=3;
munecos2.gotoAndPlay("arriva");
}
if (keyManager.isKeyPressed(KeyboardManager.RIGHT_KEY))
{
munecos2.gotoAndPlay("derecha");

munecos2.x+=3;

}
if (keyManager.isKeyPressed(KeyboardManager.LEFT_KEY))
{
munecos2.gotoAndPlay("izquierda");
munecos2.scaleX = 1;
munecos2.x-=3;

}

	

//------------------------------------------------------------------------------------
if(colisionOne){
	
if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{

munecos2.x = 50;  
munecos2.y = 156;

}
}



if(colision2){
	
if (keyManager.isKeyPressed(KeyboardManager.RIGHT_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;

}
}


if(colision3){
	
if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{

munecos2.x = 50;  
munecos2.y = 156;

}
}
if(colision4){
	
if (keyManager.isKeyPressed(KeyboardManager.LEFT_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;
	
}
}

if(colision5){
	
if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;

}
}
if(colision6){
	
if (keyManager.isKeyPressed(KeyboardManager.LEFT_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;
	
}
}
if(colision7){
	
if (keyManager.isKeyPressed(KeyboardManager.LEFT_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;
	
}
}
if(colision8){
	
if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{

munecos2.x = 50;  
munecos2.y = 156;

}
}
if(colision9){
	
if (keyManager.isKeyPressed(KeyboardManager.RIGHT_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;

}
}
if(colision10){
	
if (keyManager.isKeyPressed(KeyboardManager.UP_KEY))
{

munecos2.x = 50;  
munecos2.y = 156;

}
}
if(colision11){
	
if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;

}
}
if(colision12){
	
if (keyManager.isKeyPressed(KeyboardManager.LEFT_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;
	
}
}
if(colision13){
	
if (keyManager.isKeyPressed(KeyboardManager.RIGHT_KEY))
{
munecos2.x = 50;  
munecos2.y = 156;

}
}
if(colision14){
	
if (keyManager.isKeyPressed(KeyboardManager.DOWN_KEY))
{

munecos2.x = 50;  
munecos2.y = 156;

}
}

if(colision20){

munecos2.x = 50;  
munecos2.y = 156; 

}
if(colision21){

munecos2.x = 50;  
munecos2.y = 156; 

}
if(colision22){

munecos2.x = 50;  
munecos2.y = 156; 

}
if(colision23){

munecos2.x = 50;  
munecos2.y = 156; 

}
if(colision24){

munecos2.x = 50;  
munecos2.y = 156; 

}
if(colision25){

escenario.removeChild(meta);
escenario.addChild(bien);
$("#botonmensaje").show();
$("#botonayuda").hide();

}

}



//------



function imagenFondo(rutaImge) 
{
	escenario.removeChild(fondo);
	
	fondo = new createjs.Bitmap(rutaImge);
	
	escenario.addChild(fondo);
	
	
}

//-------------------------------------------------

function validar(obj){

	if ( obj.val().length >= 5 && obj.val().length  <= 30 ) {
        return true;
      } else {
      	obj.addClass( "ui-state-error" );
        $("#mensaje").text("Longitud de usuario entre 5 y 30 caracteres" );
        return false;
      }

}

//-------------------------------------------------
	//-------------------------------------------------

function guardar(e){
	elemento = $("#usuario");	
	var valida = false;
	valida = validar(elemento);
 dialogo.dialog( "close" );

		txt_usuario.text=$("#usuario").val();
		dialogo.dialog( "close" );
	
}	

//---------------------------------------------------	
});

