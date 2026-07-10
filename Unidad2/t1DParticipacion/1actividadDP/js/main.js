$(function(){

	var a1=0;
	var a2=0;
	var a3=0;
	var a4=0;
	var a5=0;
	var a6=0;
	
$("#superado").hide();
$("#fondo").hide();
$("#gusto1").hide();
$("#gusto2").hide();
$("#gusto3").hide();
$("#gusto4").hide();
$("#continuar").hide();
$("#botonmensaje").hide();


$("#paisaje").hide();
	$("#iniciar").hide();
	$("#fondo").show();
////////////////////////////////////////////////////////////////////
$("#iniciar").on("tap",function(){

	$("#paisaje").hide();
	$("#iniciar").hide();
	$("#fondo").show();
	
});
$("#niño1").on("tap",function(){

	$("#gusto1").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#continuar").on("tap",function(){

	$("#continuar").hide();
	$("#gusto1").hide();
	$("#gusto2").hide();
	$("#gusto3").hide();
	$("#gusto4").hide();
	
});
$("#niño1").on("tap",function(){

	$("#gusto1").show();
	$("#continuar").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#niño2").on("tap",function(){

	$("#gusto2").show();
	$("#continuar").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#niño3").on("tap",function(){

	$("#gusto3").show();
	$("#continuar").show();
	
});
/////////////////////////////////////////////////////////////////////
$("#niño4").on("tap",function(){

	$("#gusto4").show();
	$("#continuar").show();
	
});
/////////////////////////////////////////////////////////////////////


$("#niño1").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#niño2").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#niño3").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#niño4").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
////////////////////////////////////////////////////////////////

$("#piezan").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='niño3') {
		   	$("#niño3").hide();
		   	var audio = document.getElementById("audioB");

audio.play();
		    a2=1;
		
		if (a1==1 && a2==1 && a3==1 && a4==1) {
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

			
	if (ui.draggable.context.id=='niño4') {
		   	$("#niño4").hide();
		   	var audio = document.getElementById("audioB");

audio.play();
		    a3=1;
		  
		    if (a1==1 && a2==1 && a3==1 && a4==1) {
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

			
	if (ui.draggable.context.id=='niño2') {
		   	$("#niño2").hide();
		   		var audio = document.getElementById("audioB");

audio.play();

		    a4=1;	
		 
		    if (a1==1 && a2==1 && a3==1 && a4==1) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);		
			$("#botonayuda").hide();
			  
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////
$("#pieza4n").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='niño1') {
		   	$("#niño1").hide();
		   		var audio = document.getElementById("audioB");

audio.play();
		   	
		    a1=1;
		
		if (a1==1 && a2==1 && a3==1 && a4==1) {
			$("#superado").show(2000);
			$("#fondo").hide(2000);	
			$("#botonayuda").hide();
			  
		}		    
	}
	}
});
////////////////////////////////////////////////////////////////








});