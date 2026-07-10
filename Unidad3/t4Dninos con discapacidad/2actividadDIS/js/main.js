$(function(){

	var conteo=0;
	
$("#superado").hide();
$("#fondo").hide();
$("#gusto1").hide();
$("#gusto2").hide();
$("#gusto3").hide();
$("#gusto4").hide();
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
	$("#gusto1").hide();
	$("#gusto2").hide();
	$("#gusto3").hide();
	$("#gusto4").hide();
	
	
});
/////////////////////////////////////////////////////////////////////
$("#conductor").on("tap",function(){

	conteo++;
	$("#gusto1").show();
	$("#continuar").show();
	$("#conductor").hide();
	if (conteo==4) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#botonayuda").hide();
		$("#continuar").hide();
		$("#fondo").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#risas").on("tap",function(){

	conteo++;
	$("#gusto2").show();
	$("#continuar").show();
	$("#risas").hide();
	if (conteo==4) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#botonayuda").hide();
		$("#continuar").hide();
		$("#fondo").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#ignorar").on("tap",function(){

	conteo++;
	$("#gusto3").show();
	$("#continuar").show();
	$("#ignorar").hide();
	if (conteo==4) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#botonayuda").hide();
		$("#continuar").hide();
		$("#fondo").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#stop").on("tap",function(){

	conteo++;
	$("#gusto4").show();
	$("#continuar").show();
	$("#stop").hide();
	if (conteo==4) {
		$("#superado").show();
		$("#gusto1").hide();
		$("#gusto2").hide();
		$("#gusto3").hide();
		$("#gusto4").hide();
		$("#botonayuda").hide();
		$("#continuar").hide();
		$("#fondo").hide();
	}

});
/////////////////////////////////////////////////////////////////////









});