        chapters = [];

        <!-- Chapter 1 -->
        chapter = {};
        chapter.title = "Introducci&oacute;n"
        chapter.video = "655908131?h=ec591b5fee"
        chapter.description = 
            "En el capítulo de introducción, vamos a ver cómo manejar la vista, cómo manejar el interface, creando distintas ventanas o cambiando el editor o abriendo otra ventana, veremos cómo rotar los objetos cambiarles la escala o añadir un nuevo objeto a la escena.<BR>Ese objeto lo podemos situar, cambiándolo de escala y poniéndolo en el sitio deseado y con esto ya podemos crear una escena que como en este ejemplo, a partir de un escenario ampliamos la base, añadimos nuevos edificios, en este caso, como copia de los anteriores, añadimos los objetos que van a aparecer en el escenario, el jeep, el tanque, este tanque lo duplicamos, orientamos los objetos en la posición que deseamos y podemos ver la escena final."
        chapters[1] = chapter;
        
        <!-- Chapter 2 -->
        chapter = {};
        chapter.title = "Creaci&oacute;n de terrenos"
        chapter.video = "655908109?h=f111fd7877"
        chapter.description = 
            "En este capítulo veremos cómo podemos variar una superficie, para que parezca un terreno. Podemos mover alguno de los puntos y los que les rodean. Esto si lo hacemos para simular un terreno, vemos cómo podemos levantar alguno de los puntos y que tiene influencia en los de alrededor para simular la creación de colinas, y también lo podemos utilizar para realizar un valle. En este caso seleccionamos unos puntos en la esquina y los vamos bajando para que hagan la forma de un río. Creamos un plano, que va a ser la superficie del agua, lo ponemos en azul, ponemos el color del terreno, y bajando este plano vemos que determina el nivel del agua. Lo ajustamos para que sea más o menos grande el río y tenemos una aproximación del primer terreno. También podemos hacerlo con el generador de terrenos, en el que podemos elegir diferentes parámetros, en este caso, elegimos para crear un valle y en este valle después podemos crear las modificaciones que queramos. Como antes podemos tener un plano, que determine un río para que tenga más o menos cauce y aquí vemos modificaciones sobre este terreno generado con el asistente."
        chapters[2] = chapter;

        <!-- Chapter 3 -->
        chapter = {};
        chapter.title = "Modelos"
        chapter.video = "655876742?h=060a074e5c"
        chapter.description = 
            "En este capítulo veremos cómo importar y crear modelos para nuestras escenas. Comenzaremos importando ficheros del repositorio de Sketchfab desde nuestra aplicación. Para ello, primero instalamos el importador, a continuación realizamos una búsqueda en la web de Sketchfab y lo importamos bien directamente desde nuestra aplicación con el importador o exportando desde la Web en un formato en que lo podemos importar. Por último se muestra cómo crear un objeto, en este caso una fuente, modelándola desde el inicio y que sirve de ejemplo para crear otros objetos de nuestro escenario."
        chapters[3] = chapter;

        <!-- Chapter 4 -->
        chapter = {};
        chapter.title = "Escena Betsey"
        chapter.video = "655877228?h=82f40fd5b2"
        chapter.description = 
            "En este capítulo crearemos una escena partiendo de distintos objetos. Comenzamos importando los objetos y organizándolos de forma que luego se puedan manipular de forma más sencilla. A continuación iremos situando los objetos en la escena: el edificio, el suelo, el Jeep y los carros Sherman."
        chapters[4] = chapter;
        
        <!-- Chapter 5 -->
        chapter = {};
        chapter.title = "Materiales"
        chapter.video = "655877252?h=4088dd1371"
        chapter.description = 
            "En este capítulo veremos cómo aplicar color a un objeto o a diferentes partes del objeto. A continuación veremos cómo aplicar una textura a un objeto, es decir, aplicar una imagen a la superficie del objeto y controlar cómo se realiza esta aplicación. También cómo se definen materiales con más características mediante el editor de nodos, que permite definir estas propiedades de forma visual. Veremos en concreto el nodo BSDF creado por Disney para crear un sombreado con propiedades físicas, integrando los colores y las imágenes. Finalmente veremos cómo utilizar texturas disponibles en internet con distintos mapas de propiedades y cómo aplicarlas a nuestros objetos con utilidades que nos facilitan el proceso. Como caso particular, veremos cómo crear la textura de la superficie del agua."
        chapters[5] = chapter;
        
        <!-- Chapter 6 -->
        chapter = {};
        chapter.title = "Vegetación"
        chapter.video = "655877262?h=42bd1b0b02"
        chapter.description = 
            "En este capítulo veremos cómo crear distintos tipos de vegetación para nuestros escenarios. Comenzaremos creando un campo de hierba y definiendo en qué sitios hay hierba y con qué densidad. La hierba se representa primeramente como hilos y a continuación con objetos en forma de hoja con su textura y las propiedades de tamaño, orientación y variación deseada lo que logra una representación realista de la hierba. A continuación vemos cómo crear árboles con dos generadores de árboles y las distintas propiedades del tronco, los distintos niveles de ramas y las hojas. En especial veremos cómo seleccionar las texturas de las hojas y cómo aplicarlas a los objetos que representan estas hojas, tanto con texturas opacas como con texturas transparentes que permiten una representación detallada del borde de las hojas. En el último vídeo creamos una escena con un terreno en el que añadimos la textura del terreno y también añadiremos hierba, árboles, una construcción y un carro de combate y lo visualizaremos desde distintos puntos de vista."
        chapters[6] = chapter;
        
        <!-- Chapter 7 -->
        chapter = {};
        chapter.title = "Personajes"
        chapter.video = "655877286?h=fc189b4900"
        chapter.description = 
            "En este capítulo veremos cómo importar y situar personajes en nuestro escenario con las animaciones que tiene definido. Veremos también cómo tratar el personaje como un objeto más y cómo modificar la pose del personaje mediante la manipulación de la armadura que define sus movimientos. Podremos utilizar personajes ya definidos con sus articulaciones o veremos cómo articular un personaje que hemos importado de otro repositorio de objetos. Por último veremos cómo manipular el movimiento de las extremidades mediante la definición de restricciones que nos permiten mover todo el brazo moviendo sólo la mano, o la pierna moviendo sólo el pie."
        chapters[7] = chapter;
        
        <!-- Chapter 8 -->
        chapter = {};
        chapter.title = "Luces, cámara, acción"
        chapter.video = "655877303?h=f8bb18f526"
        chapter.description = 
            "Comenzaremos viendo el efecto de los distintos tipos de luces en un objeto y las propiedades de estas luces incluyendo una luz de área y su efecto en la escena. Veremos también cómo iluminar con una imagen de entorno envolvente que produce una iluminación más realista y su efecto en distintos materiales como el mármol o un metal. A continuación veremos cómo animar los objetos con las herramientas de animación de la aplicación, controlando el movimiento de sus propiedades a lo largo del tiempo de la animación. Finalmente se unen las luces y la iluminación creando unas luces de foco que se mueven con el vehículo durante la animación del mismo."
        chapters[8] = chapter;
        
        <!-- Chapter 9 -->
        chapter = {};
        chapter.title = "Escena de Kurtz"
        chapter.video = "655877321?h=27610813cb"
        chapter.description = 
            "En este capítulo final veremos la construcción de una escena que reproduce la fotografía de unos vehículos blindados en la batalla de Kurtz. Se comienza con el posicionamiento de la fotografía en el entorno 3D y la situación de la cámara desde la que se verá la misma perspectiva que el contenido de la fotografía. A diferencia de otras escenas en que primero se sitúa el escenario y después los vehículos y personajes, en este se comienza con los vehículos, al ser más sencillo situarlos en el espacio 3D para que se proyecten en el plano con el mismo tamaño y orientación que tienen en la fotografía. Se completa la escena con los personajes y el terreno y obtenemos una escena que corresponde con la foto de referencia."
        chapters[9] = chapter;
        
        function setChapter(chapterNumber) {
            document.getElementById("chapterTitle").innerHTML = chapters[chapterNumber].title;
            document.getElementById("chapterSrc").src = "https://player.vimeo.com/video/" + chapters[chapterNumber].video + "&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" ;
            document.getElementById("chapterDescription").innerHTML = chapters[chapterNumber].description;
        }
