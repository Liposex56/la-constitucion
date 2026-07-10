$(function(){

	var conteo=0;
	
$("#superado").hide();
$("#fondo").hide();
$("#correcto1").hide();
$("#correcto2").hide();
$("#correcto3").hide();
$("#incorrecto1").hide();
$("#incorrecto2").hide();
$("#incorrecto3").hide();
$("#incorrecto4").hide();
$("#incorrecto5").hide();
$("#incorrecto6").hide();
$("#incorrecto7").hide();
$("#incorrecto8").hide();
$("#incorrecto9").hide();
$("#continuar").hide();
$("#continuar2").hide();
$("#continuar3").hide();
$("#continuar4").hide();
$("#cuadro5c").hide();
$("#cuadro6").hide();
$("#cuadro7").hide();
$("#cuadro8").hide();
$("#cuadro9c").hide();
$("#cuadro10").hide();
$("#cuadro11").hide();
$("#cuadro12").hide();
$("#mensaje").hide();
$("#fondo2").hide();
$("#fondo3").hide();
$("#botonmensaje").hide();



////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#fondo").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){

	$("#continuar").hide();
	$("#correcto1").hide();
	$("#incorrecto1").hide();
	$("#incorrecto2").hide();
	$("#incorrecto3").hide();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar2").on("tap",function(){

	$("#continuar2").hide();
	$("#cuadro1c").hide();
	$("#cuadro2").hide();
	$("#cuadro3").hide();
	$("#cuadro4").hide();
	$("#correcto1").hide();
	$("#incorrecto4").hide();
	$("#incorrecto5").hide();
	$("#incorrecto6").hide();
	$("#cuadro5c").show();
	$("#cuadro6").show();
	$("#cuadro7").show();
	$("#cuadro8").show();
	$("#fondo").hide();
	$("#fondo2").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar3").on("tap",function(){

	$("#continuar3").hide();
	$("#cuadro5c").hide();
	$("#cuadro6").hide();
	$("#cuadro7").hide();
	$("#cuadro8").hide();
	$("#correcto2").hide();
	$("#incorrecto7").hide();
	$("#incorrecto8").hide();
	$("#incorrecto9").hide();
	$("#cuadro9c").show();
	$("#cuadro10").show();
	$("#cuadro11").show();
	$("#cuadro12").show();
	$("#fondo2").hide();
	$("#fondo3").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar4").on("tap",function(){

	$("#continuar4").hide();
	$("#botonayuda").hide();
	$("#mensaje").show();
	$("#botonmensaje").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#cuadro1c").on("tap",function(){
	
	$("#correcto1").show();
	$("#continuar2").show();
	
	
});
/////////////////////////////////////////////////////////////////////
$("#cuadro2").on("tap",function(){

	$("#incorrecto1").show();
	$("#continuar").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#cuadro3").on("tap",function(){

	$("#incorrecto2").show();
	$("#continuar").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#cuadro4").on("tap",function(){

	$("#incorrecto3").show();
	$("#continuar").show();

});
////////////////////////////////////////////////////////////////
$("#cuadro5c").on("tap",function(){

	$("#correcto2").show();
	$("#continuar3").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#cuadro6").on("tap",function(){

	$("#incorrecto4").show();
	$("#continuar2").show();

});
////////////////////////////////////////////////////////////////
$("#cuadro7").on("tap",function(){

	$("#incorrecto5").show();
	$("#continuar2").show();

});
////////////////////////////////////////////////////////////////
$("#cuadro8").on("tap",function(){

	$("#incorrecto6").show();
	$("#continuar2").show();

});
////////////////////////////////////////////////////////////////
$("#cuadro9c").on("tap",function(){

	$("#correcto3").show();
	$("#continuar4").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#cuadro10").on("tap",function(){

	$("#incorrecto7").show();
	$("#continuar3").show();

});
////////////////////////////////////////////////////////////////
$("#cuadro11").on("tap",function(){

	$("#incorrecto8").show();
	$("#continuar3").show();

});
////////////////////////////////////////////////////////////////
$("#cuadro12").on("tap",function(){

	$("#incorrecto9").show();
	$("#continuar3").show();

});
////////////////////////////////////////////////////////////////






});