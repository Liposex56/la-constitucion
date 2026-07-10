$(function(){

	var a1=0;
	var a2=0;
	var a3=0;
	var a4=0;
	var a5=0;
	var a6=0;
	
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



$("#ayudaciego").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#ayudasordo").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#ayudasilla").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
$("#ayudamuletas").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){

	}
});
////////////////////////////////////////////////////////////////

$("#silla").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='ayudasilla') {
		   	$("#ayudasilla").hide();
		   	
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
$("#ciego").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='ayudaciego') {
		   	$("#ayudaciego").hide();
		   
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
$("#sordo").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='ayudasordo') {
		   	$("#ayudasordo").hide();
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
$("#muletas").droppable({
	drop: function(event, ui){

			
	if (ui.draggable.context.id=='ayudamuletas') {
		   	$("#ayudamuletas").hide();
		   	
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