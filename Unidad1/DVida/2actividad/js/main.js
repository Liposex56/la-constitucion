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

////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#fondo").show();
	
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
		    a1=1;
		    $("#piezac").show();
		if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();
			$("#fondo").hide();	
			$(".audio")[0].play();
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza2n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza2') {
		   	$("#pieza2").hide();
		    a2=1;
		    $("#pieza2c").show();
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();
			$("#fondo").hide();		
			$(".audio")[0].play();
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza3n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza3') {
		   	$("#pieza3").hide();
		    a3=1;	
		    $("#pieza3c").show();
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();
			$("#fondo").hide();	
			$(".audio")[0].play();	
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza4n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza4') {
		   	$("#pieza4").hide();
		    a4=1;	
		    $("#pieza4c").show();	
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();
			$("#fondo").hide();	
			$(".audio")[0].play();	
		}	    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza5n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza5') {
		   	$("#pieza5").hide();
		    a5=1;
		    $("#pieza5c").show();	
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();	
			$("#fondo").hide();	
			$(".audio")[0].play();
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza6n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='pieza6') {
		   	$("#pieza6").hide();
		    a6=1;
		    $("#pieza6c").show();	
		    if (a1==1 && a2==1 && a3==1 && a4==1 && a5==1 && a6==1) {
			$("#superado").show();	
			$("#fondo").hide();	
			$(".audio")[0].play();
		}		    
	}
	}
});









});