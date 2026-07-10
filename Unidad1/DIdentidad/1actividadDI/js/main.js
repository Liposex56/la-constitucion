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

$("#pieza").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#pieza2").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#pieza3").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#pieza4").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#pieza5").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#pieza6").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
////////////////////////////////////////////////////////////////
$("#piezan").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza') {
		   	$("#pieza").hide();
		   	$("#piezan").hide();
		   	$(".audioB")[0].play();
		    a1=1;
		    $("#piezac").show();
		if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();
			$("#fondo").hide();	
			$("#botonayuda").hide();	

		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza2n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza2') {
		   	$("#pieza2").hide();
		   	$("#pieza2n").hide();
		   	$(".audioB")[0].play();
		    a2=1;
		    $("#pieza2c").show();
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();
			$("#fondo").hide();	
			$("#botonayuda").hide();	
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza3n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza3') {
		   	$("#pieza3").hide();
		   	$("#pieza3n").hide();
		   	$(".audioB")[0].play();
		    a3=1;	
		    $("#pieza3c").show();
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();
			$("#fondo").hide();	
			$("#botonayuda").hide();	
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza4n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza4') {
		   	$("#pieza4").hide();
		   	$("#pieza4n").hide();
		   	$(".audioB")[0].play();
		    a4=1;	
		    $("#pieza4c").show();	
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();
			$("#fondo").hide();		
			$("#botonayuda").hide();
		}	    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza5n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza5') {
		   	$("#pieza5").hide();
		   	$("#pieza5n").hide();
		   	$(".audioB")[0].play();
		    a5=1;
		    $("#pieza5c").show();	
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();	
			$("#fondo").hide();	
			$("#botonayuda").hide();
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza6n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza6') {
		   	$("#pieza6").hide();
		   	$("#pieza6n").hide();
		   	$(".audioB")[0].play();
		    a6=1;
		    $("#pieza6c").show();	
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();	
			$("#fondo").hide();	
			$("#botonayuda").hide();
		}		    
	}
	}
});









});