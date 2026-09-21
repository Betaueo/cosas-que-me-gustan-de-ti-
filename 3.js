// ARRAYS DE MENSAJES ORIGINALES
const loveMessages = [
    "Tu sonrisa ilumina mi día",
    "Amo tu forma de ver el mundo",
    "Tu risa es mi sonido favorito",
    "Me encanta cómo me haces sentir",
    "Amo tu determinación y fuerza",
    "Amo cada momento contigo",
    "Tu inteligencia me asombra",
    "Amo cómo me apoyas en todo",
    "Amo tu nariz, es una de las características que me gusta",
    "Amo cómo nuestra conexión va más allá de las palabras.", 
    "Amo cómo nunca temes ser tú misma, incluso en las situaciones más difíciles.",
    "Amo cómo eres tímida a veces.", 
    "Amo cómo haces que cualquier lugar se sienta como el mejor lugar del mundo.",
    "Amo cómo tomas las decisiones con seguridad, siempre sabiendo lo que es mejor para ti y para los demás.", 
    "Amo cómo siempre tienes algo inteligente que decir como lo de los magos y manga.", 
    "Tus pies pequeños me gustan, como tus manos. Yo digo que si te las (chuparia).",
    "Tus pensamientos siempre me sorprenden, eres mucho más profunda de lo que cualquiera podría imaginar. ", 
   "Amo disfrutar del silencio, contigo, incluso los momentos en silencio son significativos. ",
   "Tu risa, aunque la escucho mil veces, siempre me parece la mejor", 
   "Amo cómo usas tu sentido de la moda pero todo te queda bien, mi amor. ",
   "Me encanta cuando haces esa mueca divertida justo antes de contarme algo gracioso", 
   "Amo cómo te expresas aunq te cuesta un poquito", 
   "Amo cómo puedes ser seria y graciosa en cuestión de segundos.", 
   "Amo cómo puedes ser tan fuerte sin dejar de ser delicada. ", 
  "Cada vez que cantas sin darte cuenta me quedo viéndote", 
  "Amo cómo puedes hablar con seguridad de cualquier tema, me encanta escucharte.",
  "Me fascina cómo a veces te ríes de tus propios chistes antes de terminarlos. ", 
  "Amo cómo siempre encuentras algo nuevo que enseñarme, cada día contigo aprendo más de algo cielo JAJAJA.", 
  "Sabes. Tus hombros, aunque pequeños, cargan con la fuerza de alguien que sabe lo que quiere. ", 
  "Tu manera de escucharme, de verdad escucharme, es algo que nunca había experimentado antes. ", 
  "Amo la manera en que miras las estrellas, siempre tan llena de curiosidad. ", 
  "Tu forma de ser tan genuina me hace sentir afortunado de tenerte en mi vida. ", 
  "Amo cómo tienes una historia interesante detrás de cada cosa que haces ", 
  "Amo tus historias. ", 
  "Tu lealtad es una de tus cualidades más hermosas espero nunca cambie.",
  "Amo cómo disfrutas de las cosas sencillas sin complicarte. ", 
  "Amo tus berrinches qué a veces haces. ", 
  "Tu forma de pensar es algo que siempre me gustara. ", 
  "Tu capacidad de perdonar y seguir adelante es admirable siento que aprendes. ", 
  "Amo cómo aprecias la naturaleza", 
  "Amo cómo logras encontrar siempre una Razón JAJAJA para decirme que eso pienso yo"
];

const randomLoveMessages = [
    "Mi amor, como te explico que tú eres el centro de mesa y yo soy la señora que te quiere llevar.",
    "Contigo, hasta las mañanas de lunes se sienten como domingos.",
    "Eres mi notificación favorita, siempre quiero saber más de ti si miras esto al menos una?.",
    "Quisiera ser ladron,lo por la acción ni la emoción sino para robarte tu hermoso corazón","la vida es bella,pero es más bella porque tú estás en ella contigo todo es genial y sin ti nada sería igual para mí. tu eres en verdad especial para mí y eso no se puede negar", 
    "EN LA VIDA SE VE EL AMOR ,EN LA TIERRA SE VE LA VERDAD Y EN TI MIRO MI FELICIDAD Y LA QUE AMO Y  NO PODRE OLVIDAR", 
    "El mar es mar,la botella es botella y tu por dentro y por fuera sigues estando igual de bella (te amo muchito mi amor hermoso) ", 
    "El cielo puede ser azul,la tierra marron pero yo solamente quiero ser una parte de tu hermoso corazón", 
  "No es amanecer, no es atardecer, eres tú qué me ilusiona con tu forma de ser", 
  "te busco en mi sombra pero no te encuentro, será que es porq ya te tengo a mi lado?", 
  "Cuando mires las estrellas acuerdate de mi, por q en cada  una de ellas hay un beso para ti", 
  "Me gustaría ser mariposa y volar de flor a flor y llegar a tu casa y decirte [Hola Mi Amor] 🦋", 
  "Con tu mirada me enamore , de tus ojos me ilusione,y desde el fondo de mi corazón siempre te amaré tu me gustas mucho pher 💝", 
  "En el jardin de mi corazón, florecen palabras llenas de amor. Eres la mujer en la cual si estoy interesado , la luz que ilumina mis ojos de tanto amor tt: de mí para ti mi cielo ", 
  "Aun te acuerdas de: Tú me gustas mucho como a ti te gustan las gomitas "
];

const meEncantanMessages = [
    "Me encantan tus ojos - por el simple hecho de que en ellos encuentro mi paz y el reflejo de todo lo que amo.",
    "Me encanta ómo me  mias  porque en tu mirada encuentro tranquilidad y confianza.", 
    "Me encanta tu risa,porque es genuina y contagiosa, llena de vida", 
    "Me encantan tus abrazos,porque siempre me hacen sentir que estoy en el lugar correcto", 
    "Me encanta la manera en  que hablas,porque siempre tienes algo interesante o sincero que decir", 
    "Me encanta tu forma de pensar,porque siempre tienes una perspectiva que me hace reflexionar",
    "Me encanta cómo eres tan auténtica,porque nunca intentas ser alguien más",
    "Me encanta tu fuerza,porque a pesar de todo, siempre encuentras la manera de seguir adelante",
    "Me encanta tu sentido del humor,porque siempre sabes cómo hacerme reír tienes una personalidad q me gusta ",
    "Me encantan tus pequeños detalles,porque demuestran lo mucho que te importa nuestra relación aunq tus detalles sean más verbales",
    "Me encanta tu sinceridad,porque no importa lo que pase, siempre dices lo que piensas",
    "Me encanta cómo me haces sentir,porque contigo siempre siento que soy la mejor versión de mí",
    "Me encanta tu curiosidad,porque siempre estás buscando aprender algo nuevo, pero no hay que probar cosas oíste", 
    "Me encanta cómo disfrutas de las cosas simples,porque me enseñas a apreciaraunq momentos pequeños",
    "Me encanta tu pasión por lo que haces,porque siempre das lo mejor de ti en todo aunq a veces te molestes", 
    "Me encanta cómo cuidas de los demás por ejemplo tu hermano,porque siempre te preocupas por el bienestar ( bueno más o menos)",
    "Me encanta tu paciencia,porque sabes esperar y entender cuando las cosas se complican",
    "Me encanta tu determinación,porque siempre vas tras lo que quieres sin dudar", 
    "Me encanta cómo valoras la honestidad,porque me haces sentir seguro de ser siempre yo mismo y de tratarte de decir las cosas",
    "Me encanta tu creatividad,porque siempre encuentras formas únicas de ver el mundo",
    "aunque pienses que no eres buena en algo en más de alguna cosa lo eres, solo falta que te des cuenta mi amor, (te amo)", 
    "Me encanta cómo manejas los problemas, porque enfrentas todo con calma y madurez",
    "Me encanta tu independencia,porque demuestras que eres fuerte por ti misma",
    "Sé que sonara egoísta y todo pero no quiera q te fueras a otro lugar en el cual no estés cerca de mí", 
    "Me encanta la confianza que me transmites,porque sé que puedo contar contigo en todo momento",
    "Me encanta tu inteligencia,porque siempre tienes algo interesante que aportar",
    "Me encanta tu capacidad de mostrar afecto,porque siempre haces que me sienta amado de una manera única",
    "Me encanta cómo eres mi mejor amiga y mi pareja,porque en ti encuentro amor y compañía en igual medida", 
    "Me encanta cómo me motivas a no rendirme,porque siempre sabes cómo darme fuerzas cuando lo necesito", 
    "Me encanta cómo valoras el respeto mutuo,porque entiendes lo importante que es en una relación sana",
    "Mee encanta tu dulzura,porque sin perder tu fortaleza, siempre tienes un gesto amable para mí",
    "Me encanta cómo compartes tus sueños conmigo,porque me haces parte de lo que más te apasiona", 
    "Me encanta cómo nunca dejas que los malos momentos nos definan,porque siempre buscas superar los retos",
    "Me encanta cómo me haces sentir que soy suficiente,porque contigo nunca siento que deba ser alguien más", 
    "Me encanta cómo cuidas nuestros planes a futuro,porque demuestras que nuestra relación siempre está en tus pensamientos",  
    "Me encanta cómo, a pesar de los años, seguimos descubriendo cosas nuevas juntos,porque a tu lado, la vida siempre es una aventura"
];

// VARIABLES PRINCIPALES
const today = new Date().toISOString().split('T')[0];
let lastShownDate = localStorage.getItem('lastShownDate');
let lastShownMessage = localStorage.getItem('lastShownMessage');

// EL TEXTO DE LA CARTA
const cartaEspecial = "Hola cómo has estado. Sigues igual de hermosa como siempre, no te he visto en un buen tiempo pero supongo que si. No dejes de cuidarte, de arreglarte, de salir, de vivir, supongo que estas aquí porq te acuerdas de este pequeño detalle que te hice. Recuerda que aquí esta el inicio de todas las cosas lindas que pienso de ti, y honestamente, aún lo sigo haciendo, no sé pero no dejo de pesnar en ti, en tu olor, en tu sonrisa, en tus hermosas pestañas, en tu piel, en lo delgada, en lo lista, en lo fuerte emocionalmente, en lo sarcastica, en lo loca, en lo amorosa, en todo, solo quiero que sepas que espero que logres todas tus metas. Y espero sigas siendo esa mujer tan dedicada que fuiste. Te amo y aun lo seguire haciendo. Ódiame todo lo que quieras pero, siempre recuerda q mi corazón esta para ti, suerte y que Dios te bendiga, mi hermosa mujer de ojos brillantes.";


// LÓGICA DE MENSAJES DIARIOS (Original mejorada)
function selectMessageCategory() {
    const randomValue = Math.random();
    let selectedCategory = '';

    if (randomValue < 0.50) {
        selectedCategory = 'Cosas que Amo de Ti';
    } else if (randomValue < 0.85) {
        selectedCategory = 'Cosas Random de Amor';
    } else {
        selectedCategory = 'Cosas que Me Encantan de Ti';
    }

    localStorage.setItem('selectedCategory', selectedCategory);
    return selectedCategory;
}

function displayDailyMessage() {
    const selectedCategory = localStorage.getItem('selectedCategory') || selectMessageCategory();
    const titleElement = document.getElementById('section-title');
    const messageElement = document.getElementById('love-message');

    titleElement.textContent = selectedCategory;

    if (lastShownDate !== today || !lastShownMessage) {
        let message = '';
        if (selectedCategory === 'Cosas que Amo de Ti') {
            message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        } else if (selectedCategory === 'Cosas Random de Amor') {
            message = randomLoveMessages[Math.floor(Math.random() * randomLoveMessages.length)];
        } else {
            message = meEncantanMessages[Math.floor(Math.random() * meEncantanMessages.length)];
        }
        
        localStorage.setItem('lastShownMessage', message);
        lastShownMessage = message;
    }

    messageElement.textContent = lastShownMessage;
}

// SECUENCIA DE INTRODUCCIÓN (Video -> Pantalla Negra Tipo Escritura)
function iniciarSecuenciaIntro() {
    const videoOverlay = document.getElementById('video-overlay');
    const video = document.getElementById('confetti-video');
    
    // Mostramos el video
    videoOverlay.classList.remove('hidden');
    video.play().catch(e => {
        // Si el navegador bloquea el autoplay, saltamos a la carta
        iniciarTypewriter();
    });

    video.onended = () => {
        videoOverlay.classList.add('hidden');
        iniciarTypewriter();
    };
}

// EFECTO MAQUINA DE ESCRIBIR
let isTyping = false;
let typeTimer;
function iniciarTypewriter() {
    const overlay = document.getElementById('intro-overlay');
    const textElement = document.getElementById('typewriter-text');
    const btnEntrar = document.getElementById('btn-entrar-app');
    
    overlay.classList.remove('hidden');
    textElement.textContent = '';
    
    let i = 0;
    isTyping = true;
    
    // Limpiamos intervalos anteriores por seguridad
    if(typeTimer) clearInterval(typeTimer);

    typeTimer = setInterval(() => {
        if (i < cartaEspecial.length) {
            textElement.textContent += cartaEspecial.charAt(i);
            i++;
            
            // Mostrar el botón a la mitad del texto por si no quiere esperar todo
            if(i === Math.floor(cartaEspecial.length / 2)) {
                btnEntrar.classList.remove('hidden');
            }
        } else {
            clearInterval(typeTimer);
            isTyping = false;
            btnEntrar.classList.remove('hidden');
        }
    }, 45); // Velocidad: 45ms por letra
}

function cerrarIntro() {
    if(typeTimer) clearInterval(typeTimer);
    document.getElementById('intro-overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('intro-overlay').classList.add('hidden');
    }, 1500); // Da tiempo a que se desvanezca suavemente
}

// LOGICA DEL MODAL DE RECUERDOS Y BUZÓN
function configurarBuzon() {
    const btnRecuerdos = document.getElementById('btn-recuerdos');
    const modal = document.getElementById('modal-recuerdos');
    const closeModal = document.getElementById('close-modal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const btnEnviar = document.getElementById('btn-enviar-mensaje');
    const notifDot = document.getElementById('notif-dot');

    // Revisar si ya mandó un mensaje antes para mostrar el punto
    if(localStorage.getItem('mensajePendiente') === 'true') {
        notifDot.classList.remove('hidden');
    }

    // Abrir modal
    btnRecuerdos.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Cambio de pestañas (Carta / Buzón)
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Quitar activo a todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.add('hidden'));

            // Poner activo al clickeado
            e.target.classList.add('active');
            const targetId = e.target.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Simular envío de mensaje
    btnEnviar.addEventListener('click', () => {
        const input = document.getElementById('mensaje-input').value;
        const status = document.getElementById('mensaje-status');
        
        if(input.trim() === '') {
            status.textContent = 'Por favor escribe algo primero.';
            status.style.color = 'red';
            status.classList.remove('hidden');
            return;
        }

        // Guardar simulado localmente
        localStorage.setItem('mensajePendiente', 'true');
        notifDot.classList.remove('hidden'); // Enciende la notificación

        status.textContent = '¡Mensaje guardado en el buzón!';
        status.style.color = 'green';
        status.classList.remove('hidden');
        
        setTimeout(() => {
            document.getElementById('mensaje-input').value = '';
            status.classList.add('hidden');
        }, 3000);
    });
}

// RESTO DE FUNCIONES ORIGINALES
function addEmoji() {
    const selectedEmoji = document.getElementById('emoji-selector').value;
    const currentMessage = document.getElementById('love-message').textContent;
    const selectedCategory = localStorage.getItem('selectedCategory');

    if (selectedEmoji && currentMessage) {
        let reactionHistory = JSON.parse(localStorage.getItem('reactionHistory')) || {};
        if (!reactionHistory[selectedCategory]) {
            reactionHistory[selectedCategory] = [];
        }

        const hasReacted = reactionHistory[selectedCategory].some(entry => entry.message === currentMessage);
        if (hasReacted) {
            alert("¡Ya has reaccionado a este mensaje!");
            return;
        }

        reactionHistory[selectedCategory].push({ message: currentMessage, emoji: selectedEmoji });
        localStorage.setItem('reactionHistory', JSON.stringify(reactionHistory));
        displayReactionHistory();
    }
}

function displayReactionHistory() {
    const reactionHistory = JSON.parse(localStorage.getItem('reactionHistory')) || {};
    const reactionsContainer = document.getElementById('reactions-container');
    reactionsContainer.innerHTML = '';

    Object.keys(reactionHistory).forEach(category => {
        reactionHistory[category].forEach((entry, index) => {
            const entryElement = document.createElement('div');
            entryElement.textContent = `${index + 1}. [${category}] ${entry.message} - ${entry.emoji}`;
            reactionsContainer.appendChild(entryElement);
        });
    });
}

function updateThemeColor() {
    const color = document.getElementById('theme-color').value;
    document.querySelector('h2').style.color = color;
    document.querySelector('.widget > button').style.backgroundColor = color;
    document.getElementById('toggle-history').style.backgroundColor = color;
    document.getElementById('btn-recuerdos').style.backgroundColor = color; // Sincroniza el botón nuevo
    localStorage.setItem('themeColor', color);
}

function updateBackground() {
    const background = document.getElementById('background-selector').value;
    document.body.className = background;
    localStorage.setItem('background', background);
    activateDarkMode(); // Refrescar por si rompe la clase
}

function activateDarkMode() {
    const hour = new Date().getHours();
    if (hour >= 19 || hour < 7) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    
    // Configuración Inicial UI
    displayDailyMessage();
    displayReactionHistory();
    configurarBuzon();

    // Event Listeners UI Original
    document.getElementById('next-message').addEventListener('click', () => alert("Solo puedes ver un mensaje por día. ¡Vuelve mañana para ver el próximo MI AMOR 😘!"));
    document.getElementById('add-reaction').addEventListener('click', addEmoji);
    document.getElementById('theme-color').addEventListener('input', updateThemeColor);
    document.getElementById('background-selector').addEventListener('change', updateBackground);
    
    // Botón de saltar Intro
    document.getElementById('btn-entrar-app').addEventListener('click', cerrarIntro);
    
    // Historial Toggle
    document.getElementById('toggle-history').addEventListener('click', function() {
        const history = document.getElementById('reaction-history');
        history.style.display = (history.style.display === "none" || !history.style.display) ? "block" : "none";
    });

    // Cargar Preferencias
    const savedThemeColor = localStorage.getItem('themeColor');
    if (savedThemeColor) {
        document.getElementById('theme-color').value = savedThemeColor;
        updateThemeColor();
    }

    const savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.getElementById('background-selector').value = savedBackground;
        document.body.className = savedBackground;
    }
    activateDarkMode();

    // LÓGICA DE ENTRADA DIARIA Y ANIMACIÓN
    if (!lastShownDate || lastShownDate !== today) {
        selectMessageCategory();
        localStorage.setItem('lastShownDate', today);
        // Si es el primer ingreso del día, ejecuta la secuencia completa
        iniciarSecuenciaIntro();
    } else {
        // Si ya entró hoy, no la obligamos a ver la animación gigante otra vez
        document.getElementById('intro-overlay').classList.add('hidden');
    }
});
  "Amo cómo disfrutas de las cosas sencillas sin complicarte. ", 
  "Amo tus berrinches qué a veces haces. ", 
  "Tu forma de pensar es algo que siempre me gustara. ", 
  "Tu capacidad de perdonar y seguir adelante es admirable siento que aprendes. ", 
  "Amo cómo aprecias la naturaleza", 
  "Amo cómo logras encontrar siempre una Razón JAJAJA para decirme que eso pienso yo"
 
    
     
];

const randomLoveMessages = [
    "Mi amor, como te explico que tú eres el centro de mesa y yo soy la señora que te quiere llevar.",
    "Contigo, hasta las mañanas de lunes se sienten como domingos.",
    "Eres mi notificación favorita, siempre quiero saber más de ti si miras esto al menos una?.",
    "Quisiera ser ladron,lo por la acción ni la emoción sino para robarte tu hermoso corazón","la vida es bella,pero es más bella porque tú estás en ella contigo todo es genial y sin ti nada sería igual para mí. tu eres en verdad especial para mí y eso no se puede negar", 
    "EN LA VIDA SE VE EL AMOR ,EN LA TIERRA SE VE LA VERDAD Y EN TI MIRO MI FELICIDAD Y LA QUE AMO Y  NO PODRE OLVIDAR", 
    "El mar es mar,la botella es botella y tu por dentro y por fuera sigues estando igual de bella (te amo muchito mi amor hermoso) ", 
    "El cielo puede ser azul,la tierra marron pero yo solamente quiero ser una parte de tu hermoso corazón", 
  "No es amanecer, no es atardecer, eres tú qué me ilusiona con tu forma de ser", 
  "te busco en mi sombra pero no te encuentro, será que es porq ya te tengo a mi lado?", 
  "Cuando mires las estrellas acuerdate de mi, por q en cada  una de ellas hay un beso para ti", 
  "Me gustaría ser mariposa y volar de flor a flor y llegar a tu casa y decirte [Hola Mi Amor] 🦋", 
  "Con tu mirada me enamore , de tus ojos me ilusione,y desde el fondo de mi corazón siempre te amaré tu me gustas mucho pher 💝", 
  "En el jardin de mi corazón, florecen palabras llenas de amor. Eres la mujer en la cual si estoy interesado , la luz que ilumina mis ojos de tanto amor tt: de mí para ti mi cielo ", 
  "Aun te acuerdas de: Tú me gustas mucho como a ti te gustan las gomitas "
  
    
    
    
];



const meEncantanMessages = [
"Me encantan tus ojos - por el simple hecho de que en ellos encuentro mi paz y el reflejo de todo lo que amo.",

"Me encanta ómo me  mias  porque en tu mirada encuentro tranquilidad y confianza.", 

"Me encanta tu risa,porque es genuina y contagiosa, llena de vida", 

"Me encantan tus abrazos,porque siempre me hacen sentir que estoy en el lugar correcto", 

"Me encanta la manera en  que hablas,porque siempre tienes algo interesante o sincero que decir", 

"Me encanta tu forma de pensar,porque siempre tienes una perspectiva que me hace reflexionar",

"Me encanta cómo eres tan auténtica,porque nunca intentas ser alguien más",

"Me encanta tu fuerza,porque a pesar de todo, siempre encuentras la manera de seguir adelante",

"Me encanta tu sentido del humor,porque siempre sabes cómo hacerme reír tienes una personalidad q me gusta ",

"Me encantan tus pequeños detalles,porque demuestran lo mucho que te importa nuestra relación aunq tus detalles sean más verbales",

"Me encanta tu sinceridad,porque no importa lo que pase, siempre dices lo que piensas",

"Me encanta cómo me haces sentir,porque contigo siempre siento que soy la mejor versión de mí",

"Me encanta tu curiosidad,porque siempre estás buscando aprender algo nuevo, pero no hay que probar cosas oíste", 

"Me encanta cómo disfrutas de las cosas simples,porque me enseñas a apreciaraunq momentos pequeños",

"Me encanta tu pasión por lo que haces,porque siempre das lo mejor de ti en todo aunq a veces te molestes", 

"Me encanta cómo cuidas de los demás por ejemplo tu hermano,porque siempre te preocupas por el bienestar ( bueno más o menos)",

"Me encanta tu paciencia,porque sabes esperar y entender cuando las cosas se complican",

"Me encanta tu determinación,porque siempre vas tras lo que quieres sin dudar", 

"Me encanta cómo valoras la honestidad,porque me haces sentir seguro de ser siempre yo mismo y de tratarte de decir las cosas",

"Me encanta tu creatividad,porque siempre encuentras formas únicas de ver el mundo",

"aunque pienses que no eres buena en algo en más de alguna cosa lo eres, solo falta que te des cuenta mi amor, (te amo)", 

"Me encanta cómo manejas los problemas, porque enfrentas todo con calma y madurez",

"Me encanta tu independencia,porque demuestras que eres fuerte por ti misma",

"Sé que sonara egoísta y todo pero no quiera q te fueras a otro lugar en el cual no estés cerca de mí", 

"Me encanta la confianza que me transmites,porque sé que puedo contar contigo en todo momento",

"Me encanta tu inteligencia,porque siempre tienes algo interesante que aportar",

"Me encanta tu capacidad de mostrar afecto,porque siempre haces que me sienta amado de una manera única",

"Me encanta cómo eres mi mejor amiga y mi pareja,porque en ti encuentro amor y compañía en igual medida", 

"Me encanta cómo me motivas a no rendirme,porque siempre sabes cómo darme fuerzas cuando lo necesito", 

"Me encanta cómo valoras el respeto mutuo,porque entiendes lo importante que es en una relación sana",

"Mee encanta tu dulzura,porque sin perder tu fortaleza, siempre tienes un gesto amable para mí",

"Me encanta cómo compartes tus sueños conmigo,porque me haces parte de lo que más te apasiona", 

"Me encanta cómo nunca dejas que los malos momentos nos definan,porque siempre buscas superar los retos",
"Me encanta cómo me haces sentir que soy suficiente,porque contigo nunca siento que deba ser alguien más", 

"Me encanta cómo cuidas nuestros planes a futuro,porque demuestras que nuestra relación siempre está en tus pensamientos",  

"Me encanta cómo, a pesar de los años, seguimos descubriendo cosas nuevas juntos,porque a tu lado, la vida siempre es una aventura"

];

// Variables para manejar el mensaje del día
const today = new Date().toISOString().split('T')[0];  // Obtener la fecha actual (YYYY-MM-DD)
let lastShownDate = localStorage.getItem('lastShownDate');
let lastShownMessage = localStorage.getItem('lastShownMessage');

// Función para seleccionar la categoría del día basado en probabilidades
function selectMessageCategory() {
    const randomValue = Math.random();
    let selectedCategory = '';

    if (randomValue < 0.50) {
        selectedCategory = 'Cosas que Amo de Ti';  // 50% de probabilidad
    } else if (randomValue < 0.85) {
        selectedCategory = 'Cosas Random de Amor';  // 35% de probabilidad
    } else {
        selectedCategory = 'Cosas que Me Encantan de Ti';  // 15% de probabilidad
    }

    localStorage.setItem('selectedCategory', selectedCategory);
    return selectedCategory;
}

// Mostrar el mensaje correspondiente al día
function displayDailyMessage() {
    const selectedCategory = localStorage.getItem('selectedCategory') || selectMessageCategory();
    const titleElement = document.getElementById('section-title');
    const messageElement = document.getElementById('love-message');

    titleElement.textContent = selectedCategory;

    // Si es un nuevo día o no hay mensaje almacenado, seleccionamos uno nuevo
    if (lastShownDate !== today || !lastShownMessage) {
        let message = '';
        if (selectedCategory === 'Cosas que Amo de Ti') {
            const messageIndex = Math.floor(Math.random() * loveMessages.length);
            message = loveMessages[messageIndex];
        } else if (selectedCategory === 'Cosas Random de Amor') {
            const messageIndex = Math.floor(Math.random() * randomLoveMessages.length);
            message = randomLoveMessages[messageIndex];
        } else if (selectedCategory === 'Cosas que Me Encantan de Ti') {
            const messageIndex = Math.floor(Math.random() * meEncantanMessages.length);
            message = meEncantanMessages[messageIndex];
        }

        // Guardar el mensaje y la fecha en localStorage
        localStorage.setItem('lastShownDate', today);
        localStorage.setItem('lastShownMessage', message);
        lastShownMessage = message;
    }

    // Mostrar el mensaje guardado
    messageElement.textContent = lastShownMessage;
}

// Manejo del clic en "Siguiente mensaje"
function nextMessage() {
    alert("Solo puedes ver un mensaje por día. ¡Vuelve mañana para ver el próximo MI AMOR 😘!");
}

// Mostrar/ocultar el historial de reacciones al presionar el botón "Historial"
document.getElementById('toggle-history').addEventListener('click', function() {
    const history = document.getElementById('reaction-history');
    if (history.style.display === "none" || !history.style.display) {
        history.style.display = "block";
    } else {
        history.style.display = "none";
    }
});

// Agregar emoji a un mensaje y guardarlo en el historial
function addEmoji() {
    const selectedEmoji = document.getElementById('emoji-selector').value;
    const currentMessage = document.getElementById('love-message').textContent;
    const selectedCategory = localStorage.getItem('selectedCategory');

    if (selectedEmoji && currentMessage) {
        let reactionHistory = JSON.parse(localStorage.getItem('reactionHistory')) || {};
        if (!reactionHistory[selectedCategory]) {
            reactionHistory[selectedCategory] = [];
        }

        // Verificar si ya se reaccionó a este mensaje
        const hasReacted = reactionHistory[selectedCategory].some(entry => entry.message === currentMessage);
        if (hasReacted) {
            alert("¡Ya has reaccionado a este mensaje!");
            return;
        }

        // Guardar la nueva reacción
        reactionHistory[selectedCategory].push({ message: currentMessage, emoji: selectedEmoji });
        localStorage.setItem('reactionHistory', JSON.stringify(reactionHistory));
        displayReactionHistory();
    }
}

// Mostrar el historial de mensajes reaccionados con numeración y categoría
function displayReactionHistory() {
    const reactionHistory = JSON.parse(localStorage.getItem('reactionHistory')) || {};
    const reactionsContainer = document.getElementById('reactions-container');
    reactionsContainer.innerHTML = '';

    Object.keys(reactionHistory).forEach(category => {
        reactionHistory[category].forEach((entry, index) => {
            const entryElement = document.createElement('div');
            entryElement.textContent = `${index + 1}. [${category}] ${entry.message} - ${entry.emoji}`;
            reactionsContainer.appendChild(entryElement);
        });
    });
}

// Actualizar el color del tema y guardar la preferencia
function updateThemeColor() {
    const color = document.getElementById('theme-color').value;
    document.querySelector('h2').style.color = color;
    document.querySelector('button').style.backgroundColor = color;
    localStorage.setItem('themeColor', color);
}

// Actualizar el fondo y guardar la preferencia
function updateBackground() {
    const background = document.getElementById('background-selector').value;
    document.body.className = background;
    localStorage.setItem('background', background);
}

// Mostrar el video de confeti
function showConfettiVideo() {
    const videoOverlay = document.getElementById('video-overlay');
    videoOverlay.classList.remove('hidden');

    const video = document.getElementById('confetti-video');
    video.play();

    video.onended = () => {
        videoOverlay.classList.add('hidden');
    };
}

// Activar Modo Oscuro basado en la hora
function activateDarkMode() {
    const hour = new Date().getHours();
    if (hour >= 19 || hour < 7) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Ajustar el brillo del personaje en el fondo
function adjustCharacterBrightness() {
    const background = document.body.className;
    const widget = document.querySelector('.widget');

    if (background === 'snoopycor' || background === 'snoopyflo' || background === 'snoopylov') {
        widget.setAttribute('data-background', background);
    }
}

// Restaurar preferencias guardadas y configurar eventos
document.addEventListener('DOMContentLoaded', () => {
    if (!lastShownDate || lastShownDate !== today) {
        selectMessageCategory();
        localStorage.setItem('lastShownDate', today);
        showConfettiVideo();
    }

    displayDailyMessage();
    displayReactionHistory();

    document.getElementById('next-message').addEventListener('click', nextMessage);
    document.getElementById('add-reaction').addEventListener('click', addEmoji);
    document.getElementById('theme-color').addEventListener('input', updateThemeColor);
    document.getElementById('background-selector').addEventListener('change', updateBackground);

    const savedThemeColor = localStorage.getItem('themeColor');
    if (savedThemeColor) {
        document.getElementById('theme-color').value = savedThemeColor;
        document.querySelector('h2').style.color = savedThemeColor;
        document.querySelector('button').style.backgroundColor = savedThemeColor;
    }

    const savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.getElementById('background-selector').value = savedBackground;
        document.body.className = savedBackground;
    }

    activateDarkMode();
    adjustCharacterBrightness();
});
