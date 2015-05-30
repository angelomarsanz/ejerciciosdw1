function mostraralerta()
	{

	/* Esta función lo único que hace es mostrar
		una ventana con el mensaje "Hizo click" */ 

	alert('Hizo click!');
	}
function hacerclic()
	{
	/* Esta función declara una variable local "elemento". Es 
		una variable local, porque se crea con la instrucción
		"var" y solo se puede usar en esta función. Además
		de declarar la variable "elemento", le asigna a esta
		una referencia al elemento 'p' que se encuentra en 
		la posición cero en el documento HTML */

	var elemento=document.getElementsByTagName('p')[0];

	/* Ahora, se "Agrega un escucha al evento click", es decir,
		cuando el usuario hace click sobre "elemento", se llama
		a la función "mostraralerta" */ 

	elemento.addEventListener('click', mostraralerta, false);
	}

/* Esta es la primera línea que se ejecuta
	cuando se llama al programa Javascript y hace
	lo siguiente: "Agrega un escucha al evento load", 
	es decir cuando se carga el formulario, se 
	llama a la función "hacer clic". Por ahora
	colocaremos "false" en el tercer atributo de 
	"addEventListener" */

window.addEventListener('load', hacerclic, false);


