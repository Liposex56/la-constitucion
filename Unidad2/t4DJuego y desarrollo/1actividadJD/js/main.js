$(function(){

	var conteobienr=0;
	var conteobiene=0;
	var conteobienc=0;
	var conteobieno=0;
	var conteomal=0;
	
$("#superado").hide();
$("#fondo").hide();
$("#incorrecto").hide();
$("#continuar").hide();
$("#v1").hide();
$("#v2").hide();
$("#v3").hide();
$("#v4").hide();
$("#v5").hide();
$("#v6").hide();
$("#v7").hide();
$("#blancor").hide();
$("#blancoe").hide();
$("#blancoc").hide();
$("#blancor2").hide();
$("#blancoe2").hide();
$("#blancoo").hide();
$("#botonayuda").hide();
$("#botonmensaje").hide();


////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#fondo").show();
	$("#botonayuda").show();
	
});

/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){

	$("#continuar").hide();
	$("#gusto1").hide();
	$("#gusto2").hide();
	
});

/////////////////////////////////////////////////////////////////////
$("#letraa").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrab").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrac").on("tap",function(){

	conteobienc++;
	if (conteobienc>0) {
		$("#blancoc").show();
	}
	if (conteobienr>0&&conteobiene>0&&conteobienc>0&&conteobieno>0) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonmensaje").show();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrad").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrae").on("tap",function(){

	conteobiene++;
	if (conteobiene>0) {
		$("#blancoe").show();
		$("#blancoe2").show();
	}
	if (conteobienr>0&&conteobiene>0&&conteobienc>0&&conteobieno>0) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonmensaje").show();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letraf").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrag").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrah").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrai").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letraj").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrak").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letral").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letram").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letran").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrañ").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrao").on("tap",function(){

	conteobieno++;
	if (conteobieno>0) {
		$("#blancoo").show();
		
	}
	if (conteobienr>0&&conteobiene>0&&conteobienc>0&&conteobieno>0) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonmensaje").show();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrap").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letraq").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrar").on("tap",function(){

	conteobienr++;
	if (conteobienr>0) {
		$("#blancor").show();
		$("#blancor2").show();
	}
	if (conteobienr>0&&conteobiene>0&&conteobienc>0&&conteobieno>0) {
		$("#superado").show();
		$("#fondo").hide();
		$("#botonmensaje").show();
		$("#botonayuda").hide();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letras").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrat").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrau").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrav").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letraw").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letrax").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letray").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////
$("#letraz").on("tap",function(){

	conteomal++;
	if (conteomal==1) {
		$("#v1").show();
	}
	if (conteomal==2) {
		$("#v2").show();
	}
	if (conteomal==3) {
		$("#v3").show();
	}
	if (conteomal==4) {
		$("#v4").show();
	}
	if (conteomal==5) {
		$("#v5").show();
	}
	if (conteomal==6) {
		$("#v6").show();
	}
	if (conteomal==7) {
		$("#v7").show();
		$("#incorrecto").show();
	}
	
});
/////////////////////////////////////////////////////////////////////









});