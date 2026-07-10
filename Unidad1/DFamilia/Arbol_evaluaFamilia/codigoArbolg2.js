//Recoger elemento arrastrable// 
var correctas=0;
var incorrectas=0;

var elemento= new String();
function mover_objeto(ev,el) { //ev= el evento, el=elemento arrastrado.
    cont1=el.parentNode; //guardamos el elemento padre del elemento en una variable.
    ev.dataTransfer.setData("text",ev.target.id);	//guardamos datos del elemento. 
    if(ev.target.id=="elemento1"){
        elemento="num1"; 
             
    }
    if(ev.target.id=="elemento2"){
        elemento="num2";
         
    }
    if(ev.target.id=="elemento3"){
        elemento="num3";
         
    }
    if(ev.target.id=="elemento4"){
        elemento="num4";
        
    }
    if(ev.target.id=="elemento5"){
        elemento="num5";
        
    }
    if(ev.target.id=="elemento6"){
        elemento="num6";
     
    }
    if(ev.target.id=="elemento7"){
        elemento="num7";
       
    }
    if(ev.target.id=="elemento8"){
        elemento="num8";
     
    }
    if(ev.target.id=="elemento9"){
        elemento="num9";
      
    }
    
}
//mientras se arrastra:
function mientras_arrastra (ev) { //ev=el evento.
    ev.preventDefault(); //quitar comportamiento por defecto.
}
//Al soltar el elemento arrastrado
function soltar_objeto(ev,el) { //ev=el evento; el=receptor de soltado
    ev.stopPropagation(); //impedir otras acciones 
    ev.preventDefault(); //quitar comportamiento por defecto
    var data=ev.dataTransfer.getData("text"); //recogemos datos del elemento

    retroalimentacion=document.getElementById("textoNumero");
  
   if((elemento=="num1" && ev.target.id=="cuadro1") || (elemento=="num2" && ev.target.id=="cuadro2") 
   	|| (elemento=="num3" && ev.target.id=="cuadro3" || (elemento=="num4" && ev.target.id=="cuadro4")
   	|| (elemento=="num5" && ev.target.id=="cuadro5") || (elemento=="num6" && ev.target.id=="cuadro6")
   	|| (elemento=="num7" && ev.target.id=="cuadro7")|| (elemento=="num8" && ev.target.id=="cuadro8")
   	|| (elemento=="num9" && ev.target.id=="cuadro9")) ){
    var audio = document.getElementById("audioB");

audio.play(); 
   	mielem=ev.target.appendChild(document.getElementById(data)); //obtenemos el elemento arrastrado
    mielem.setAttribute("draggable","false"); //impedimos que el nuevo elemento pueda volver a arrastrarse
    el.appendChild(mielem); //colocamos la copia en el receptor de soltado
    correctas++;
buenas=document.getElementById("buenasTxt");
buenas.innerHTML=correctas;
    retroalimentacion.innerHTML="Muy bien";
    }else{
        incorrectas++;
        malas=document.getElementById("malasTxt");
        malas.innerHTML=incorrectas;
        var audio1 = document.getElementById("audioM");

audio1.play(); 
    }

   
   
}
