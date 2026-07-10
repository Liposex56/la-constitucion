$(function(){

	var conteo=0;

	
$("#superado").hide();
$("#fondo").hide();
$("#gusto1").hide();
$("#gusto2").hide();
$("#gusto3").hide();
$("#gusto4").hide();
$("#completo1").hide();
$("#completo2").hide();
$("#completo3").hide();
$("#completo4").hide();
$("#completo5").hide();
$("#completo6").hide();
$("#botonayuda").hide();


////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#botonmensaje").hide();
	$("#fondo").show();
	$("#botonayuda").show();
	
});
$("#letra1").on("tap",function(){

	$("#gusto1").show();
	
});

/////////////////////////////////////////////////////////////////////

$("#letra1").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#letra2").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#letra3").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#letra4").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#letra5").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#letra6").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});

////////////////////////////////////////////////////////////////

$("#piezan").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='letra1') {
		   	$("#letra1").hide();
		   	$("#piezan").hide();
		   	$("#completo1").show();
		   	
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#completo1").hide();
			$("#completo2").hide();
			$("#completo3").hide();
			$("#completo4").hide();
			$("#completo5").hide();
			$("#completo6").hide();
			$("#botonayuda").hide();
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza2n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='letra2') {
		   	$("#letra2").hide();
		   	$("#pieza2n").hide();
		   	$("#completo2").show();
		   	
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#completo1").hide();
			$("#completo2").hide();
			$("#completo3").hide();
			$("#completo4").hide();
			$("#completo5").hide();
			$("#completo6").hide();
			$("#botonayuda").hide();
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza3n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='letra3') {
		   	$("#letra3").hide();
		   	$("#pieza3n").hide();
		   	$("#completo3").show();
		   	
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#completo1").hide();
			$("#completo2").hide();
			$("#completo3").hide();
			$("#completo4").hide();
			$("#completo5").hide();
			$("#completo6").hide();
			$("#botonayuda").hide();
		}		    
	}
	}
});
//////////////////////////////////////////////////////////////////////
$("#pieza4n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='letra4') {
		   	$("#letra4").hide();
		   	$("#pieza4n").hide();
		   	$("#completo4").show();
		   	
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#completo1").hide();
			$("#completo2").hide();
			$("#completo3").hide();
			$("#completo4").hide();
			$("#completo5").hide();
			$("#completo6").hide();
			$("#botonayuda").hide();
		}		    
	}
	}
});
//////////////////////////////////////////////////////////////////////
$("#pieza5n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='letra5') {
		   	$("#letra5").hide();
		   	$("#pieza5n").hide();
		   	$("#completo5").show();
		   	
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#completo1").hide();
			$("#completo2").hide();
			$("#completo3").hide();
			$("#completo4").hide();
			$("#completo5").hide();
			$("#completo6").hide();
			$("#botonayuda").hide();
		}		    
	}
	}
});
//////////////////////////////////////////////////////////////////////
$("#pieza6n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='letra6') {
		   	$("#letra6").hide();
		   	$("#pieza6n").hide();
		   	$("#completo6").show();
		   	
		    conteo++;
		
		if (conteo==6) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#completo1").hide();
			$("#completo2").hide();
			$("#completo3").hide();
			$("#completo4").hide();
			$("#completo5").hide();
			$("#completo6").hide();
			$("#botonayuda").hide();
		}		    
	}
	}
});
//////////////////////////////////////////////////////////////////////





});