$(function(){

	var conteo=0;

	
$("#superado").hide();
$("#fondo").hide();
$("#incorrecto").hide();
$("#correcto").hide();
$("#continuar").hide();
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
	$("#correcto").hide();
});
$("#verdadero1").on("tap",function(){

	$("#verdadero1").hide();
	$("#falso1m").hide();
	$("#correcto").show();
	$("#continuar").show();
	$(".audioB")[0].play();
	conteo++;
	if (conteo==6) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#verdadero2").on("tap",function(){

	$("#verdadero2").hide();
	$("#falso2m").hide();
	$("#correcto").show();
	$("#continuar").show();
		$(".audioB")[0].play();
	conteo++;
	if (conteo==6) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#verdadero3").on("tap",function(){

	$("#verdadero3").hide();
	$("#falso3m").hide();
	$("#correcto").show();
	$("#continuar").show();
		$(".audioB")[0].play();
	conteo++;
	if (conteo==6) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#falso1").on("tap",function(){

	$("#falso1").hide();
	$("#verdadero1m").hide();
	$("#correcto").show();
	$("#continuar").show();
		$(".audioB")[0].play();
	conteo++;
	if (conteo==6) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#falso2").on("tap",function(){

	$("#falso2").hide();
	$("#verdadero2m").hide();
	$("#correcto").show();
	$("#continuar").show();
		$(".audioB")[0].play();
	conteo++;
	if (conteo==6) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#falso3").on("tap",function(){

	$("#falso3").hide();
	$("#verdadero3m").hide();
	$("#correcto").show();
	$("#continuar").show();
		$(".audioB")[0].play();
	conteo++;
	if (conteo==6) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#verdadero1m").on("tap",function(){

	
	$("#incorrecto").show();
	$("#continuar").show();
		$(".audioM")[0].play();
	
});
/////////////////////////////////////////////////////////////////////
$("#verdadero2m").on("tap",function(){

	
	$("#incorrecto").show();
	$("#continuar").show();
		$(".audioM")[0].play();
	
});
/////////////////////////////////////////////////////////////////////
$("#verdadero3m").on("tap",function(){

	
	$("#incorrecto").show();
	$("#continuar").show();
		$(".audioM")[0].play();
	
});
/////////////////////////////////////////////////////////////////////
$("#falso1m").on("tap",function(){

	
	$("#incorrecto").show();
	$("#continuar").show();
		$(".audioM")[0].play();
	
});
/////////////////////////////////////////////////////////////////////
$("#falso2m").on("tap",function(){

	
	$("#incorrecto").show();
	$("#continuar").show();
		$(".audioM")[0].play();
	
});
/////////////////////////////////////////////////////////////////////
$("#falso3m").on("tap",function(){

	
	$("#incorrecto").show();
	$("#continuar").show();
		$(".audioM")[0].play();
	
});
/////////////////////////////////////////////////////////////////////








});