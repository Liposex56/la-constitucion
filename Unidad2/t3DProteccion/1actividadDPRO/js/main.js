$(function(){

	var conteo=0;

	
$("#superado").hide();
$("#fondo").hide();
$("#continuar").hide();
$("#instruccion").hide();
$("#botonayuda").hide();


////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#botonmensaje").hide();
	$("#continuar").show();
	$("#instruccion").show();
	$("#botonayuda").show();
	
});

/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){

	$("#continuar").hide();
	$("#instruccion").hide();
	$("#fondo").show();
	
});
/////////////////////////////////////////////////////////////////////


$("#palabra1").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#palabra2").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#palabra3").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#palabra4").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#palabra5").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#palabra6").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
////////////////////////////////////////////////////////////////
$("#piezan").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='palabra1') {
		   	$("#palabra1").hide();
		   	$("#piezan").hide();
		   	$(".audioB")[0].play();
		    conteo++;
		
		if (conteo==6) {
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

			
	if (ui.draggable.context.id=='palabra2') {
		   	$("#palabra2").hide();
		   	$("#pieza2n").hide();
		   		$(".audioB")[0].play();
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();
		}		    
	}
	}
});
//////////////////////////////////////////////////////////////////
$("#pieza3n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='palabra3') {
		   	$("#palabra3").hide();
		   	$("#pieza3n").hide();
		   		$(".audioB")[0].play();
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();
		}		    
	}
	}
});
//////////////////////////////////////////////////////////////////
$("#pieza4n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='palabra4') {
		   	$("#palabra4").hide();
		   	$("#pieza4n").hide();
		   		$(".audioB")[0].play();
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();
		}		    
	}
	}
});
//////////////////////////////////////////////////////////////////
$("#pieza5n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='palabra5') {
		   	$("#palabra5").hide();
		   	$("#pieza5n").hide();
		   		$(".audioB")[0].play();
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();
		}		    
	}
	}
});
//////////////////////////////////////////////////////////////////
$("#pieza6n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='palabra6') {
		   	$("#palabra6").hide();
		   	$("#pieza6n").hide();
		   		$(".audioB")[0].play();
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////







});