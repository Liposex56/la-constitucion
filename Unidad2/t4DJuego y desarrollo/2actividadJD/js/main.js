$(function(){

	var a1=0;
	var a2=0;
	var a3=0;
	var a4=0;
	var a5=0;
	var a6=0;
	
$("#superado").hide();
$("#fondo").hide();
$("#incorrecto").hide();
$("#continuar").hide();
$("#imagen2m").hide();
$("#imagen3m").hide();
$("#imagen4m").hide();
$("#imagen2b").hide();
$("#imagen3b").hide();
$("#imagen4b").hide();
$("#botonayuda").hide();



////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#botonmensaje").hide();
	$("#fondo").show();
	$("#botonayuda").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){

	$("#continuar").hide();
	$("#incorrecto").hide();
	
	
});
/////////////////////////////////////////////////////////////////////
$("#imagen1m").on("tap",function(){

	$("#incorrecto").show();
	$("#continuar").show();
	$(".audioM")[0].play();
});
/////////////////////////////////////////////////////////////////////
$("#imagen2m").on("tap",function(){

	$("#incorrecto").show();
	$("#continuar").show();
	$(".audioM")[0].play();
});
/////////////////////////////////////////////////////////////////////
$("#imagen3m").on("tap",function(){

	$("#incorrecto").show();
	$("#continuar").show();
	$(".audioM")[0].play();
});
/////////////////////////////////////////////////////////////////////
$("#imagen4m").on("tap",function(){

	$("#incorrecto").show();
	$("#continuar").show();
	$(".audioM")[0].play();
});
/////////////////////////////////////////////////////////////////////
$("#imagen1b").on("tap",function(){

	$("#imagen1b").hide();
	$("#imagen1m").hide();
	$("#imagen2b").show();
	$("#imagen2m").show();
	$(".audioB")[0].play();
	
});
/////////////////////////////////////////////////////////////////////
$("#imagen2b").on("tap",function(){

	$("#imagen2b").hide();
	$("#imagen2m").hide();
	$("#imagen3b").show();
	$("#imagen3m").show();
	$(".audioB")[0].play();
	
});
/////////////////////////////////////////////////////////////////////
$("#imagen3b").on("tap",function(){

	$("#imagen3b").hide();
	$("#imagen3m").hide();
	$("#imagen4b").show();
	$("#imagen4m").show();
	$(".audioB")[0].play();
	
});
/////////////////////////////////////////////////////////////////////
$("#imagen4b").on("tap",function(){

	$("#superado").show();
	$("#fondo").hide();
	$("#botonayuda").hide();
	$(".audioB")[0].play();
	
});
/////////////////////////////////////////////////////////////////////









});