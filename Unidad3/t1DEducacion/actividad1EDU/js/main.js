var conteo=0;

$(function(){
var n=1;

$("#pregunta1").hide();
$("#pregunta2").hide();
$("#pregunta3").hide();
$("#flecha1m").hide();
$("#flecha2b").hide();
$("#flecha3b").hide();
$("#flecha4m").hide();
$("#flecha5b").hide();
$("#flecha6m").hide();
$("#incorrecto1").hide();
$("#incorrecto2").hide();
$("#incorrecto3").hide();
$("#correcto1").hide();
$("#correcto2").hide();
$("#correcto3").hide();
$("#continuar2").hide();
$("#continuar3").hide();
$("#botonayuda").hide();

	
/////////////////////////////////////////////////////
$("#continuar").on("click",function(){
	$("#video").hide();
	$("#continuar").hide();
	$("#pregunta1").show();
	$("#flecha1m").show();
	$("#flecha2b").show();
	$("#incorrecto1").hide();
	$("#correcto1").hide();
});
/////////////////////////////////////////////////////////
$("#flecha1m").on("click",function(){
	$("#incorrecto1").show();
	$("#continuar").show();
	$("#flecha1m").hide();
	$("#flecha2b").hide();
	
});
/////////////////////////////////////////////////////////
$("#flecha2b").on("click",function(){
	$("#correcto1").show();
	$("#continuar2").show();
	$("#flecha1m").hide();
	$("#flecha2b").hide();
	
});
/////////////////////////////////////////////////////////
$("#continuar2").on("click",function(){
	$("#pregunta1").hide();
	$("#pregunta2").show();
	$("#correcto1").hide();
	$("#correcto2").hide();
	$("#incorrecto2").hide();
	$("#continuar2").hide();
	$("#flecha3b").show();
	$("#flecha4m").show();
	
});
/////////////////////////////////////////////////////////
$("#flecha3b").on("click",function(){
	$("#correcto2").show();
	$("#continuar3").show();
	$("#flecha4m").hide();
	$("#flecha3b").hide();
	
});
/////////////////////////////////////////////////////////
$("#flecha4m").on("click",function(){
	$("#incorrecto2").show();
	$("#continuar2").show();
	$("#flecha4m").hide();
	$("#flecha3b").hide();
	$("#continuar2").show();
	
});
/////////////////////////////////////////////////////////
$("#continuar3").on("click",function(){
	$("#pregunta2").hide();
	$("#pregunta3").show();
	$("#correcto2").hide();
	$("#correcto3").hide();
	$("#incorrecto3").hide();
	$("#continuar3").hide();
	$("#flecha5b").show();
	$("#flecha6m").show();
	
});
/////////////////////////////////////////////////////////
$("#flecha5b").on("click",function(){
	$("#correcto3").show();
	
});
/////////////////////////////////////////////////////////
$("#flecha6m").on("click",function(){
	$("#incorrecto3").show();
	$("#continuar3").show();
	$("#flecha5b").hide();
	$("#flecha6m").hide();
	
});
/////////////////////////////////////////////////////////
$("#continuar4").on("click",function(){
	$("#mensaje").hide();
	$("#continuar4").hide();
	$("#botonmensaje").hide();
	$("#botonayuda").show();
	$("#educacion").hide();
});
/////////////////////////////////////////////////////////



});