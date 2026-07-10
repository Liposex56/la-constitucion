//Recoger elemento arrastrable//
function mover_objeto(ev,el) { //ev= el evento, el=elemento arrastrado.
    cont1=el.parentNode; //guardamos el elemento padre del elemento en una variable.
    ev.dataTransfer.setData("text",ev.target.id);	//guardamos datos del elemento. 
	
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
   	mielem=ev.target.appendChild(document.getElementById(data)); //obtenemos el elemento arrastrado
    cont1.appendChild(mielem); //ponemos el elemento arrastrado en el mismo sitio donde estaba.
    mielem2=mielem.cloneNode(true); //creamos una copia del elemento arrastrado.
    mielem2.setAttribute("draggable","false"); //impedimos que el nuevo elemento pueda volver a arrastrarse
    el.appendChild(mielem2); //colocamos la copia en el receptor de soltado

}