$(function(){

	var a1=0;
	var a2=0;
	var a3=0;
	var a4=0;
	var a5=0;
	var a6=0;
	
$("#piezac").hide();
$("#pieza2c").hide();
$("#pieza3c").hide();
$("#pieza4c").hide();
$("#pieza5c").hide();
$("#pieza6c").hide();
$("#superado").hide();
$("#fondo").hide();
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


$("#amarillo").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#azul").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#rojo").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#verde").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#naranja").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#mora").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#cafe").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#negro").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
////////////////////////////////////////////////////////////////
$("#piezan").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='amarillo') {
		   	$("#amarillo").hide();
		   	$("#piezan").hide();
		   	$(".audioB")[0].play();
		    a1=1;
		    $("#piezac").show();
		if (a1==1 && a2==1 && a3==1) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();	
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza2n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='azul') {
		   	$("#azul").hide();
		   	$("#pieza2n").hide();
		   	$(".audioB")[0].play();
		    a2=1;
		    $("#pieza2c").show();
		    if (a1==1 && a2==1 && a3==1) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();	
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza3n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='rojo') {
		   	$("#rojo").hide();
		   	$("#pieza3n").hide();
		   	$(".audioB")[0].play();
		    a3=1;	
		    $("#pieza3c").show();
		    if (a1==1 && a2==1 && a3==1) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();	
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////









});