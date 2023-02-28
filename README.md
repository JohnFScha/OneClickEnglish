# EntregaFinalJS

Simulador interactivo de una Academia de ingles online, en parte el proyecto lo hice con assets de la pagina de la amiga a la que le propuse ayudar con este proyecto
(https://oneclickenglish.com/).

La pagina cuenta con un buscador que busca coincidencias entre los cursos, basandose en la duracion, nombre o tipo de curso, las cuales se imprimen en la cabecera de la pagina, ocultando los demas contenidos hasta que se borre la busqueda. Al lado esta el boton que abre el carrito.
A su vez, debajo de la seccion de cursos,hay un formulario donde el usuario puede dejar un mensaje al administrador de la pagina.

Cada curso tiene su boton de añadir al carrito, el cual al presionar, dispara un cuadro de dialogo pidiendo confirmacion, para añadirlo al carrito. En dicho carrito,
se van impimiendo los datos del curso y un acumulador de cantidad, por si el usuario desea sumar mas de un tipo de curso. Una vez sumado, tambien se puede ver la cantidad total de productos debajo del boton del carrito.
En en carrito hay tambien dos botones, uno para borrar el carrito, para lo cual debe haber al menos un producto, y otro de ir al checkout, tambien debe haber al menos
un producto en el carrito para ello. Una vez presionado se dispara un contador, que el usuario podria desactivar tocando por fuera, que al finalizar envia al formulario
de checkout

Este formulario tiene su html a parte a fin de poder programar la parte funcional mas organizadamente en su archivo .js asociado. Los campos obligatorios son solo los de informacion personal, no hice obligatorios los campos de datos de tarjeta por obvias razones. En esta seccion tambien hice un breve resumen de la compra al lado del formulario con los datos de los productos agregados y un subtotal. El boton de finalizar compra chequea primero que esten los campos obligatorios llenos, sino reenvia el viewport al top de la pagina para que lo haga. Una vez llenos esos campos y presionado el boton, se dispara un contador que al terminar imprime en la misma pagina un recibo con los datos ingresados, asi como con un resumen de la compra y el total.

Cada codigo esta comentado para entender mas facilmente que funcion cumple, asi como las secciones del html tienen comentarios para ver donde se imprime cada cosa desde el .js

La pagina esta diseñada para escritorio, no es responsiva, con lo que no funciona fuera de pantallas grandes. Mas adelante podria adaptarla, pero al no ser obligatorio para la correccion, no lo inclui.

La pagina consume informacion de tres fuentes: los cursos son traidos de manera asincronica de un .json creado con la informacion de los cursos. Por otra parte se usa informacion de dos APIs externas: Sweet Alert para todas las alertas contextuales, y Luxon para crear la fecha del dia para integrarla en el recibo final de la pagina de checkout.
