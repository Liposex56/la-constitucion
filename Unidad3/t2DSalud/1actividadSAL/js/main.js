$(function(){

var feliz=0;

var triste=0;

var molesto=0;

var conteo=0;
var conteo2=0;



$("#fondo2").hide();
$("#historia1").hide();
$("#historia2").hide();
$("#historia3").hide();
$("#historia4").hide();
$("#continuar").hide();
$("#pregunta1").hide();
$("#pregunta2").hide();
$("#pregunta3").hide();
$("#pregunta4").hide();
$("#feliz").hide();
$("#feliz1").hide();
$("#feliz2").hide();
$("#feliz3").hide();
$("#feliz4").hide();
$("#triste").hide();
$("#triste1").hide();
$("#triste2").hide();
$("#triste3").hide();
$("#triste4").hide();
$("#molesto").hide();
$("#molesto1").hide();
$("#molesto2").hide();
$("#molesto3").hide();
$("#molesto4").hide();

$("#resultado1").hide();
$("#resultado2").hide();
$("#resultado3").hide();
$("#resultado4").hide();
$("#resultado5").hide();
$("#resultado6").hide();
$("#resultado7").hide();
$("#resultado8").hide();
$("#resultado9").hide();
$("#resultado10").hide();
$("#resultado11").hide();
$("#resultado12").hide();
$("#resultado13").hide();
$("#resultado14").hide();
$("#resultado15").hide();
$("#botonayuda").hide();


////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#fondo").hide();
	$("#iniciar").hide();
	$("#botonmensaje").hide();
	$("#historia1").show();
	$("#continuar").show();
	$("#botonayuda").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){


	conteo2++;
	if (conteo2==1) {
		$("#pregunta1").show();
			$("#historia1").hide();
			$("#continuar").hide();
			$("#feliz").show();
			$("#triste").show();
			$("#molesto").show();
	}
	if (conteo2==2) {
		$("#pregunta1").hide();
		$("#pregunta2").show();
			$("#historia2").hide();
			$("#continuar").hide();
			$("#feliz").show();
			$("#triste").show();
			$("#molesto").show();
	}
	if (conteo2==3) {
		$("#pregunta2").hide();
		$("#pregunta3").show();
			$("#historia3").hide();
			$("#continuar").hide();
			$("#feliz").show();
			$("#triste").show();
			$("#molesto").show();
	}
	if (conteo2==4) {
		$("#pregunta3").hide();
		$("#pregunta4").show();
			$("#historia4").hide();
			$("#continuar").hide();
			$("#feliz").show();
			$("#triste").show();
			$("#molesto").show();
	}

});
/////////////////////////////////////////////////////////////////////
$("#feliz").on("tap",function(){

	$("#feliz").hide();
	$("#triste").hide();
	$("#molesto").hide();
	$("#pregunta1").hide();
	
	conteo++;
	feliz ++;
	if (conteo==1) {
		$("#historia1").hide();
		$("#historia2").show();
		$("#historia3").hide();
		$("#historia4").hide();
		$("#continuar").show();
		
	}
	if (conteo==2) {
		$("#pregunta2").hide();
		$("#historia1").hide();
		$("#historia2").hide();
		$("#historia3").show();
		$("#historia4").hide();
		$("#continuar").show();
		
	}
	if (conteo==3) {
		$("#pregunta3").hide();
		$("#historia1").hide();
		$("#historia2").hide();
		$("#historia3").hide();
		$("#historia4").show();
		$("#continuar").show();
		
	}
	if (conteo==4) {
		$("#feliz").hide();
		$("#triste").hide();
		$("#molesto").hide();
		$("#pregunta4").hide();		

	}
	if (feliz==4&&triste==0&&molesto==0) {
				$("#resultado1").show();
				
	}
	if (feliz==3&&triste==1&&molesto==0) {
				$("#resultado4").show();
				
	}
	if (feliz==3&&triste==0&&molesto==1) {
				$("#resultado5").show();
				
	}
	if (feliz==1&&triste==3&&molesto==0) {
				$("#resultado6").show();
				
	}
	if (feliz==1&&triste==0&&molesto==3) {
				$("#resultado9").show();
				
	}
	if (feliz==2&&triste==2&&molesto==0) {
				$("#resultado10").show();
				
	}
	if (feliz==2&&triste==0&&molesto==2) {
				$("#resultado11").show();
				
	}
	if (feliz==2&&triste==1&&molesto==1) {
				$("#resultado12").show();
				
	}
	if (feliz==1&&triste==2&&molesto==1) {
				$("#resultado14").show();
				
	}
	if (feliz==1&&triste==1&&molesto==2) {
				$("#resultado15").show();
				
	}


});
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
$("#triste").on("tap",function(){

	$("#feliz").hide();
	$("#triste").hide();
	$("#molesto").hide();
	$("#pregunta1").hide();
	
	conteo++;
	triste++;
	if (conteo==1) {
		$("#historia1").hide();
		$("#historia2").show();
		$("#historia3").hide();
		$("#historia4").hide();
		$("#continuar").show();
		
	}
	if (conteo==2) {
		$("#pregunta2").hide();
		$("#historia1").hide();
		$("#historia2").hide();
		$("#historia3").show();
		$("#historia4").hide();
		$("#continuar").show();
		
	}
	if (conteo==3) {
		$("#pregunta3").hide();
		$("#historia1").hide();
		$("#historia2").hide();
		$("#historia3").hide();
		$("#historia4").show();
		$("#continuar").show();
		
	}
	if (conteo==4) {
		$("#feliz").hide();
		$("#triste").hide();
		$("#molesto").hide();
		$("#pregunta4").hide();		

	}
	if (feliz==0&&triste==4&&molesto==0) {
				$("#resultado2").show();
				
	}
	if (feliz==3&&triste==1&&molesto==0) {
				$("#resultado4").show();
				
	}
	if (feliz==1&&triste==3&&molesto==0) {
				$("#resultado6").show();
				
	}
	if (feliz==0&&triste==3&&molesto==1) {
				$("#resultado7").show();
				
	}
	if (feliz==0&&triste==1&&molesto==3) {
				$("#resultado8").show();
				
	}
	if (feliz==2&&triste==2&&molesto==0) {
				$("#resultado10").show();
				
	}
	if (feliz==2&&triste==1&&molesto==1) {
				$("#resultado12").show();
				
	}
	if (feliz==0&&triste==2&&molesto==2) {
				$("#resultado13").show();
				
	}
	if (feliz==1&&triste==2&&molesto==1) {
				$("#resultado14").show();
				
	}
	if (feliz==1&&triste==1&&molesto==2) {
				$("#resultado15").show();
				
	}


});
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
$("#molesto").on("tap",function(){

	$("#feliz").hide();
	$("#triste").hide();
	$("#molesto").hide();
	$("#pregunta1").hide();
	
	conteo++;
	molesto ++;
	if (conteo==1) {
		$("#historia1").hide();
		$("#historia2").show();
		$("#historia3").hide();
		$("#historia4").hide();
		$("#continuar").show();
		
	}
	if (conteo==2) {
		$("#pregunta2").hide();
		$("#historia1").hide();
		$("#historia2").hide();
		$("#historia3").show();
		$("#historia4").hide();
		$("#continuar").show();
		
	}
	if (conteo==3) {
		$("#pregunta3").hide();
		$("#historia1").hide();
		$("#historia2").hide();
		$("#historia3").hide();
		$("#historia4").show();
		$("#continuar").show();
		
	}
	if (conteo==4) {
		$("#feliz").hide();
		$("#triste").hide();
		$("#molesto").hide();
		$("#pregunta4").hide();	

	}
	if (feliz==0&&triste==0&&molesto==4) {
				$("#resultado3").show();
				
	}
	if (feliz==3&&triste==0&&molesto==1) {
				$("#resultado5").show();
				
	}
	if (feliz==0&&triste==3&&molesto==1) {
				$("#resultado7").show();
				
	}
	if (feliz==0&&triste==1&&molesto==3) {
				$("#resultado8").show();
				
	}
	if (feliz==1&&triste==0&&molesto==3) {
				$("#resultado9").show();
				
	}
	if (feliz==2&&triste==0&&molesto==2) {
				$("#resultado11").show();
				
	}
	if (feliz==2&&triste==1&&molesto==1) {
				$("#resultado12").show();
				
	}
	if (feliz==0&&triste==2&&molesto==2) {
				$("#resultado13").show();
				
	}
	if (feliz==1&&triste==2&&molesto==1) {
				$("#resultado14").show();
				
	}
	if (feliz==1&&triste==1&&molesto==2) {
				$("#resultado15").show();
				
	}


});
/////////////////////////////////////////////////////////////////////

});