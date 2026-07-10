$(function(){

	var conteo=0;
	
$("#superado").hide();
$("#fondo").hide();
$("#gusto1").hide();
$("#gusto2").hide();
$("#gusto3").hide();
$("#gusto4").hide();
$("#gusto5").hide();
$("#continuar").hide();
$("#botonlibro1").hide();
$("#botonlibro2").hide();
$("#botonlibro3").hide();
$("#botonlibro4").hide();
$("#botonlibro5").hide();



////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#fondo").show();
	$("#botonayuda").hide();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){

	$("#continuar").hide();
	$("#gusto1").hide();
	$("#gusto2").hide();
	$("#gusto3").hide();
	$("#gusto4").hide();
	$("#gusto5").hide();
	$("#botonlibro1").hide();
	$("#botonlibro2").hide();
	$("#botonlibro3").hide();
	$("#botonlibro4").hide();
	$("#botonlibro5").hide();
	
});
/////////////////////////////////////////////////////////////////////
$("#libro1").on("tap",function(){

	conteo++;
	$("#gusto1").show();
	$("#continuar").show();
	$("#libro1").hide();
	$("#botonlibro1").show();
	if (conteo==5) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#gusto5").hide();
		$("#continuar").hide();
		$("#fondo").hide();
		$("#botonlibro1").hide();
		$("#botonlibro2").hide();
		$("#botonlibro3").hide();
		$("#botonlibro4").hide();
		$("#botonlibro5").hide();
	}
	var audio = document.getElementById("audioB");

audio.play();
});
/////////////////////////////////////////////////////////////////////
$("#libro2").on("tap",function(){

	conteo++;
	$("#gusto2").show();
	$("#continuar").show();
	$("#libro2").hide();
	$("#botonlibro2").show();
	if (conteo==5) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#gusto5").hide();
		$("#continuar").hide();
		$("#fondo").hide();
		$("#botonlibro1").hide();
		$("#botonlibro2").hide();
		$("#botonlibro3").hide();
		$("#botonlibro4").hide();
		$("#botonlibro5").hide();
	}
	var audio = document.getElementById("audioB");

audio.play();
});
/////////////////////////////////////////////////////////////////////
$("#libro3").on("tap",function(){

	conteo++;
	$("#gusto3").show();
	$("#continuar").show();
	$("#libro3").hide();
	$("#botonlibro3").show();
	if (conteo==5) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#gusto5").hide();
		$("#continuar").hide();
		$("#fondo").hide();
		$("#botonlibro1").hide();
		$("#botonlibro2").hide();
		$("#botonlibro3").hide();
		$("#botonlibro4").hide();
		$("#botonlibro5").hide();
	}
	var audio = document.getElementById("audioB");

audio.play();
});
/////////////////////////////////////////////////////////////////////
$("#libro4").on("tap",function(){

	conteo++;
	$("#gusto4").show();
	$("#continuar").show();
	$("#libro4").hide();
	$("#botonlibro4").show();
	if (conteo==5) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#gusto5").hide();
		$("#continuar").hide();
		$("#fondo").hide();
		$("#botonlibro1").hide();
		$("#botonlibro2").hide();
		$("#botonlibro3").hide();
		$("#botonlibro4").hide();
		$("#botonlibro5").hide();
		
	}
var audio = document.getElementById("audioB");

audio.play();
});
/////////////////////////////////////////////////////////////////////
$("#libro5").on("tap",function(){

	conteo++;
	$("#gusto5").show();
	$("#continuar").show();
	$("#libro5").hide();
	$("#botonlibro5").show();
	if (conteo==5) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#gusto5").hide();
		$("#continuar").hide();
		$("#fondo").hide();
		$("#botonlibro1").hide();
		$("#botonlibro2").hide();
		$("#botonlibro3").hide();
		$("#botonlibro4").hide();
		$("#botonlibro5").hide();
	}
var audio = document.getElementById("audioB");

audio.play();
});

////////////////////////////////////////////////////////////////








});