"use strict";

const STORAGE_KEY = "constitucion-libro-v1";
const CONSTITUTION_URL = "https://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html";

const icons = {
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 11.5 12 4l9 7.5v8a1 1 0 0 1-1 1h-5.4v-6h-5.2v6H4a1 1 0 0 1-1-1v-8Zm2 1v6h2.4v-6h9.2v6H19v-6.1l-7-5.8-7 5.9Z"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 4.5c2.4 0 4.3.5 6 1.6v13.1c-1.7-.9-3.6-1.3-6-1.3H3.5V4.5H5Zm15.5 0v13.4H19c-2.4 0-4.3.4-6 1.3V6.1c1.7-1.1 3.6-1.6 6-1.6h1.5ZM5.5 6.4v9.6c1.3 0 2.5.1 3.6.4V7c-1-.4-2.2-.6-3.6-.6Zm13 0c-1.4 0-2.6.2-3.6.6v9.4c1.1-.3 2.3-.4 3.6-.4V6.4Z"/></svg>',
  pillar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 20h14v2H5v-2Zm1-3h12v2H6v-2Zm2-9h2v8H8V8Zm3 0h2v8h-2V8Zm3 0h2v8h-2V8ZM4 6l8-4 8 4v1H4V6Z"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 2h6l1 2h3v18H5V4h3l1-2Zm1.2 4-.4-1H7v15h10V5h-2.8l-.4 1h-3.6ZM8 10h8v2H8v-2Zm0 4h8v2H8v-2Z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 4h10v2h3v3a5 5 0 0 1-4.2 4.9A5.8 5.8 0 0 1 13 16.5V19h4v2H7v-2h4v-2.5a5.8 5.8 0 0 1-2.8-2.6A5 5 0 0 1 4 9V6h3V4Zm10 4v3.7A3 3 0 0 0 18 9V8h-1ZM6 8v1a3 3 0 0 0 1 2.7V8H6Zm3-2v5.2a3 3 0 1 0 6 0V6H9Z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 10V8a5 5 0 0 1 10 0v2h2v11H5V10h2Zm2 0h6V8a3 3 0 0 0-6 0v2Zm-2 2v7h10v-7H7Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m9.5 16.6-4.1-4.1L4 13.9l5.5 5.5L20.5 8.4 19.1 7 9.5 16.6Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m14 5 7 7-7 7-1.4-1.4 4.6-4.6H3v-2h14.2l-4.6-4.6L14 5Z"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10 5 3 12l7 7 1.4-1.4L6.8 13H21v-2H6.8l4.6-4.6L10 5Z"/></svg>',
  reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.1 7.1A8 8 0 1 1 4 15h2.1a6 6 0 1 0 .5-6.5L9 11H3V5l2.1 2.1Z"/></svg>'
};

function theory(config) {
  return { kind: "theory", ...config };
}

function activity(config) {
  return { kind: "activity", ...config };
}

const units = [
  {
    id: "u1",
    label: "Unidad 1",
    title: "Vida, desarrollo, identidad y familia",
    description: "Reconoce la red que protege a la niñez desde el nacimiento: vivir, crecer, tener identidad y recibir cuidado.",
    quote: "Los derechos de la niñez forman una red: cuando uno falla, los demás también se debilitan.",
    imageClass: "atlas-1",
    steps: [
      theory({
        id: "u1-t1",
        title: "Teoría 1",
        subtitle: "Vida y desarrollo integral",
        imageClass: "atlas-1",
        objective: "Comprender por qué vivir no basta: cada niño necesita condiciones reales para crecer con dignidad.",
        intro: "El derecho a la vida abre la puerta a todos los demás. El desarrollo integral agrega alimentación, salud, afecto, educación, juego y protección para que cada capacidad pueda florecer.",
        reflection: "¿Qué necesita un niño, además de estar vivo, para desarrollar plenamente sus capacidades?",
        concepts: [
          ["Vida", "Protección de la existencia y de la integridad física."],
          ["Desarrollo integral", "Crecimiento físico, emocional, social, cultural y cognitivo."],
          ["Corresponsabilidad", "Familia, sociedad y Estado actúan juntos para garantizar derechos."]
        ],
        article: ["Artículo 44", "Reconoce como fundamentales la vida, la salud, la alimentación, el cuidado, la educación, la recreación y la protección; además ordena garantizar el desarrollo armónico e integral."],
        examples: ["Atención médica oportuna", "Alimentación suficiente", "Ambientes sin violencia", "Tiempo para aprender y jugar"],
        diagram: [["Vida", "punto de partida"], ["Cuidado", "protección cotidiana"], ["Desarrollo", "capacidades y autonomía"]],
        caseStudy: {
          title: "El caso de Mateo",
          text: "Mateo asiste a clases, pero llega sin desayunar y una enfermedad no ha sido atendida. Se duerme durante las actividades y ha dejado de jugar.",
          question: "¿Cuál lectura reconoce mejor la red de derechos involucrada?",
          options: ["Solo tiene una dificultad académica.", "Se afectan salud, alimentación, educación y desarrollo.", "El problema desaparece si recibe una tarea más fácil."],
          answer: 1,
          feedback: "La situación no es únicamente escolar: varias condiciones necesarias para su desarrollo están fallando al mismo tiempo."
        },
        media: {
          type: "video",
          src: "videos/cuidado-y-derechos-ninez.mp4",
          title: "Cuidado y derechos de la niñez",
          caption: "Observa cómo el cuidado afectivo también sostiene la vida y el desarrollo.",
          transcript: "El cuidado, el afecto y la escucha crean un entorno seguro. Proteger la vida significa responder a las necesidades físicas y emocionales de cada niño."
        },
        check: {
          question: "El desarrollo integral depende únicamente de la salud física.",
          options: ["Verdadero", "Falso"],
          answer: 1,
          correct: "Correcto. También incluye dimensiones emocionales, sociales, culturales y educativas.",
          incorrect: "No exactamente. Piensa en todo lo que permite aprender, relacionarse, jugar y sentirse seguro."
        }
      }),
      activity({
        id: "u1-a1",
        title: "Actividad 1",
        subtitle: "La red de derechos",
        type: "drag",
        imageClass: "atlas-1",
        instructions: "Ubica cada situación en el derecho que protege principalmente. También puedes seleccionar una tarjeta y luego tocar su destino.",
        zones: [["vida", "Vida y desarrollo"], ["identidad", "Identidad"], ["familia", "Familia y cuidado"]],
        cards: [
          ["salud", "Recibir atención médica y alimentación suficiente.", "vida", "Estas condiciones permiten sobrevivir, crecer y aprender."],
          ["registro", "Tener nombre, nacionalidad y registro civil.", "identidad", "El reconocimiento legal hace visible a la persona ante la sociedad y el Estado."],
          ["afecto", "Crecer con afecto, orientación y protección.", "familia", "El cuidado familiar debe ofrecer seguridad y acompañamiento."],
          ["juego", "Contar con tiempo seguro para jugar y aprender.", "vida", "El juego y la educación hacen parte del desarrollo integral."]
        ],
        success: "Correcto. La vida y el desarrollo se conectan con identidad, familia y cuidado; ninguno funciona de manera aislada."
      }),
      theory({
        id: "u1-t2",
        title: "Teoría 2",
        subtitle: "Identidad, familia y cuidado",
        imageClass: "atlas-2",
        objective: "Relacionar nombre, nacionalidad, historia familiar y vínculos de cuidado con el reconocimiento de cada persona.",
        intro: "La identidad responde quién soy y cómo soy reconocido. Incluye nombre, nacionalidad, historia, cultura y relaciones familiares. La familia, en sus diversas formas, debe ser un entorno de respeto y protección.",
        reflection: "¿Qué dificultades tendría una persona si nadie reconociera su nombre, su historia o sus vínculos?",
        concepts: [
          ["Identidad", "Rasgos legales, familiares, culturales y personales que permiten reconocerse."],
          ["Familia", "Núcleo de vínculos y responsabilidades de cuidado, no un único modelo."],
          ["Cuidado", "Acciones concretas de protección, escucha, afecto y orientación."]
        ],
        article: ["Artículos 42 y 44", "La Constitución protege integralmente a la familia y reconoce el nombre, la nacionalidad, el cuidado, el amor y el derecho de los niños a tener una familia."],
        examples: ["Registro civil oportuno", "Respeto por el origen cultural", "Escucha sin violencia", "Activación de apoyo ante abandono"],
        diagram: [["Nombre", "reconocimiento legal"], ["Historia", "memoria y cultura"], ["Vínculos", "pertenencia y cuidado"]],
        caseStudy: {
          title: "La historia de Sara",
          text: "Sara vive con su abuela. En la escuela alguien afirma que no tiene una familia 'verdadera' y evita incluir a su abuela en una reunión importante.",
          question: "¿Qué respuesta protege mejor sus derechos?",
          options: ["Exigir que su familia sea igual a las demás.", "Reconocer su vínculo de cuidado e incluir a su abuela.", "Evitar hablar de familia en la escuela."],
          answer: 1,
          feedback: "La protección familiar reconoce vínculos responsables de cuidado y evita imponer un único modelo."
        },
        media: {
          type: "map",
          title: "Mapa de la identidad",
          caption: "Explora las partes que se conectan para construir identidad.",
          items: [["Nombre y documentos", "Permiten el reconocimiento jurídico y el acceso a servicios."], ["Familia y vínculos", "Aportan cuidado, memoria y pertenencia."], ["Cultura y territorio", "Conectan costumbres, lenguaje y comunidad."], ["Voz propia", "Cada persona participa en la construcción de quién es."]]
        },
        check: {
          question: "La identidad se limita al número del documento.",
          options: ["Verdadero", "Falso"],
          answer: 1,
          correct: "Correcto. Los documentos son importantes, pero la identidad también incluye historia, cultura, vínculos y voz propia.",
          incorrect: "Revisa el mapa: el registro es una parte, no la totalidad de la identidad."
        }
      }),
      activity({
        id: "u1-a2",
        title: "Actividad 2",
        subtitle: "¿Quién activa la protección?",
        type: "match",
        imageClass: "atlas-2",
        instructions: "Relaciona cada actor con una acción concreta de cuidado. Selecciona primero un elemento de la izquierda y luego su pareja.",
        left: [["familia", "Familia"], ["escuela", "Escuela"], ["estado", "Estado"]],
        right: [["ruta", "Escuchar y activar la ruta de apoyo"], ["servicios", "Garantizar salud, registro y protección"], ["cuidado", "Brindar afecto, orientación y seguridad"]],
        pairs: { familia: "cuidado", escuela: "ruta", estado: "servicios" },
        explanations: { familia: "La familia ofrece cuidado cotidiano y vínculos protectores.", escuela: "La escuela escucha, detecta barreras y conecta apoyos.", estado: "El Estado garantiza servicios y responde ante vulneraciones." },
        success: "Muy bien. La corresponsabilidad distribuye tareas, pero todos deben actuar de manera coordinada."
      }),
      activity({
        id: "u1-final",
        title: "Actividad final",
        subtitle: "Decisión de protección",
        type: "choice",
        final: true,
        imageClass: "atlas-2",
        instructions: "Analiza el caso y elige la primera respuesta más protectora.",
        context: "Un estudiante cuenta que permanece solo durante muchas horas, no tiene alimentación regular y teme volver a casa.",
        options: [
          ["Prometer guardar el secreto y no intervenir.", false, "Guardar silencio puede prolongar el riesgo. La confidencialidad no impide pedir ayuda responsablemente.", "Piensa en quién puede activar protección sin culpar al estudiante."],
          ["Escucharlo, informar al equipo responsable y activar una ruta de protección.", true, "Correcto. Escuchar, documentar y activar apoyo protege sin trasladar la responsabilidad al niño.", ""],
          ["Pedirle que resuelva el problema con su familia.", false, "Un niño no debe asumir solo una situación que compromete su cuidado y seguridad.", "La respuesta necesita adultos y entidades responsables."]
        ]
      })
    ]
  },
  {
    id: "u2",
    label: "Unidad 2",
    title: "Participación, igualdad, protección y juego",
    description: "Estudia cómo ser escuchado, convivir sin discriminación, jugar con inclusión y solicitar protección.",
    quote: "Participar no es hablar más fuerte: es ser escuchado con respeto y poder incidir en las decisiones.",
    imageClass: "atlas-3",
    steps: [
      theory({
        id: "u2-t1",
        title: "Teoría 1",
        subtitle: "Participación e igualdad",
        imageClass: "atlas-3",
        objective: "Distinguir participación real de participación aparente y reconocer la igualdad como eliminación de barreras.",
        intro: "Participar significa expresar opiniones, recibir información y ser tenido en cuenta. La igualdad impide discriminar y también exige apoyos diferentes cuando las barreras no afectan a todos por igual.",
        reflection: "¿Una decisión es participativa si todos pueden hablar, pero nadie escucha sus propuestas?",
        concepts: [
          ["Participación", "Intervenir de manera informada en decisiones que afectan la vida común."],
          ["Igualdad", "Recibir igual dignidad, protección y oportunidades sin discriminación."],
          ["Equidad", "Ajustar apoyos para que las oportunidades sean realmente accesibles."]
        ],
        article: ["Artículos 13, 40 y 41", "La igualdad prohíbe la discriminación; la participación permite intervenir en la vida ciudadana; y la escuela debe fomentar prácticas democráticas."],
        examples: ["Consejo estudiantil con decisiones reales", "Turnos de palabra accesibles", "Ajustes para participar", "Reglas contra burlas y exclusión"],
        diagram: [["Informarse", "comprender el asunto"], ["Expresarse", "presentar razones"], ["Incidir", "ser tenido en cuenta"]],
        caseStudy: {
          title: "La asamblea del curso",
          text: "El grupo debe elegir una actividad. La docente escucha tres propuestas, pero decide usar siempre la idea de los mismos estudiantes.",
          question: "¿Qué hace falta para que exista participación real?",
          options: ["Que todos hablen al mismo tiempo.", "Criterios claros y consideración efectiva de las propuestas.", "Que la docente deje de orientar por completo."],
          answer: 1,
          feedback: "Participar incluye voz, información y una posibilidad real de incidir, no solo hablar."
        },
        media: {
          type: "timeline",
          title: "Ruta de una decisión democrática",
          caption: "Selecciona cada momento de una decisión bien construida.",
          items: [["1. Comprender", "El grupo conoce el problema y la información necesaria."], ["2. Proponer", "Cada persona puede aportar alternativas con respeto."], ["3. Deliberar", "Se comparan razones, efectos y necesidades."], ["4. Decidir y evaluar", "Se acuerda una opción y después se revisan sus resultados."]]
        },
        check: {
          question: "Dar exactamente el mismo apoyo siempre garantiza igualdad real.",
          options: ["Verdadero", "Falso"],
          answer: 1,
          correct: "Correcto. Algunas personas necesitan ajustes para superar barreras y participar en igualdad de condiciones.",
          incorrect: "Piensa en una rampa: el trato idéntico no elimina una barrera que afecta de forma distinta."
        }
      }),
      activity({
        id: "u2-a1",
        title: "Actividad 1",
        subtitle: "Derechos en la vida cotidiana",
        type: "match",
        imageClass: "atlas-3",
        instructions: "Relaciona cada derecho con la situación que mejor lo representa.",
        left: [["participacion", "Participación"], ["igualdad", "Igualdad"], ["expresion", "Libre expresión"]],
        right: [["opinion", "Presentar una opinión sin sufrir represalias"], ["ajuste", "Recibir un ajuste para superar una barrera"], ["decision", "Intervenir en una decisión del curso"]],
        pairs: { participacion: "decision", igualdad: "ajuste", expresion: "opinion" },
        explanations: { participacion: "Participar permite incidir en asuntos comunes.", igualdad: "La igualdad real puede requerir ajustes razonables.", expresion: "Expresar una opinión debe ser posible sin intimidación." },
        success: "Correcto. Los tres derechos se relacionan, pero cada uno cumple una función específica."
      }),
      theory({
        id: "u2-t2",
        title: "Teoría 2",
        subtitle: "Protección, recreación y juego",
        imageClass: "atlas-4",
        objective: "Comprender el juego como derecho y diseñar entornos recreativos seguros, inclusivos y respetuosos.",
        intro: "Jugar favorece imaginación, movimiento, lenguaje, cooperación y bienestar. Para ser un derecho efectivo, el juego necesita tiempo, seguridad, reglas justas e inclusión.",
        reflection: "¿Sigue siendo juego si una regla excluye siempre a la misma persona?",
        concepts: [
          ["Recreación", "Tiempo y espacios para descanso, disfrute y exploración."],
          ["Juego inclusivo", "Actividad cuyas reglas y materiales permiten participar a todos."],
          ["Protección", "Prevención y respuesta frente a violencia, abuso, abandono o explotación."]
        ],
        article: ["Artículo 44", "Incluye la recreación y la libre expresión entre los derechos fundamentales de los niños y ordena protegerlos contra abandono, violencia y explotación."],
        examples: ["Reglas acordadas", "Materiales accesibles", "Acompañamiento adulto", "Pausa ante agresiones"],
        diagram: [["Seguridad", "sin violencia"], ["Inclusión", "sin barreras"], ["Disfrute", "decisión y creatividad"]],
        caseStudy: {
          title: "Un juego con una barrera",
          text: "En el recreo, el grupo inventa una carrera. Laura usa silla de ruedas y le dicen que puede mirar, pero no cambiarán ninguna regla.",
          question: "¿Qué transformación protege mejor su derecho al juego?",
          options: ["Darle un premio por observar.", "Rediseñar el recorrido y acordar reglas que permitan su participación.", "Crear siempre un juego separado para ella."],
          answer: 1,
          feedback: "La inclusión modifica el entorno común para que la participación sea real."
        },
        media: {
          type: "map",
          title: "Diseñador de juego justo",
          caption: "Explora los criterios antes de proponer una actividad.",
          items: [["Acceso", "¿Todas las personas pueden entrar, comprender y usar los materiales?"], ["Reglas", "¿Las reglas distribuyen oportunidades y evitan humillaciones?"], ["Seguridad", "¿Hay prevención y respuesta frente a riesgos?"], ["Voz", "¿El grupo puede proponer ajustes y expresar incomodidad?"]]
        },
        check: {
          question: "Invitar a una persona es suficiente, aunque las reglas le impidan participar.",
          options: ["Verdadero", "Falso"],
          answer: 1,
          correct: "Correcto. La inclusión exige retirar barreras, no únicamente extender una invitación.",
          incorrect: "Observa la diferencia entre estar presente y poder participar realmente."
        }
      }),
      activity({
        id: "u2-a2",
        title: "Actividad 2",
        subtitle: "Ruta para pedir protección",
        type: "order",
        imageClass: "atlas-4",
        instructions: "Ordena una respuesta responsable ante una vulneración. Usa las flechas para mover cada paso.",
        items: [["activar", "Activar la ruta o acudir a la autoridad responsable"], ["escuchar", "Escuchar sin culpar y reconocer el riesgo"], ["seguir", "Hacer seguimiento a las medidas adoptadas"], ["registrar", "Registrar la información necesaria con cuidado"]],
        correctOrder: ["escuchar", "registrar", "activar", "seguir"],
        success: "Correcto. Una ruta responsable escucha, registra lo indispensable, activa apoyo y verifica que la protección se cumpla.",
        hint: "La primera acción debe crear seguridad y confianza; la última comprueba que la ayuda sí funcionó."
      }),
      activity({
        id: "u2-final",
        title: "Actividad final",
        subtitle: "Igualdad o discriminación",
        type: "drag",
        final: true,
        imageClass: "atlas-4",
        instructions: "Clasifica las situaciones según construyan igualdad o produzcan discriminación.",
        zones: [["igualdad", "Construye igualdad"], ["discriminacion", "Produce discriminación"]],
        cards: [
          ["turnos", "Acordar turnos de palabra y apoyos para comunicarse.", "igualdad", "Distribuye oportunidades reales de participación."],
          ["burla", "Imitar la forma de hablar de un compañero para hacerlo reír.", "discriminacion", "La burla convierte una diferencia en motivo de exclusión."],
          ["rampa", "Cambiar el lugar de reunión para que sea accesible.", "igualdad", "Retirar una barrera material favorece igualdad real."],
          ["grupo", "Impedir entrar al equipo por el origen de la familia.", "discriminacion", "Excluir por origen familiar vulnera la igualdad."]
        ],
        success: "Muy bien. La igualdad se construye retirando barreras; la discriminación excluye o reduce oportunidades por una diferencia."
      })
    ]
  },
  {
    id: "u3",
    label: "Unidad 3",
    title: "Educación, salud, trabajo infantil e inclusión",
    description: "Relaciona educación, bienestar, protección contra explotación y accesibilidad como condiciones de una vida digna.",
    quote: "La inclusión no consiste en apartar a quien necesita apoyo, sino en transformar el entorno común.",
    imageClass: "atlas-5",
    steps: [
      theory({
        id: "u3-t1",
        title: "Teoría 1",
        subtitle: "Educación y salud",
        imageClass: "atlas-5",
        objective: "Explicar cómo salud y educación se sostienen mutuamente y permiten ejercer otros derechos.",
        intro: "La educación abre acceso al conocimiento y forma para la convivencia democrática. La salud aporta bienestar físico y mental. Cuando una falla, aprender y participar puede volverse más difícil.",
        reflection: "¿Puede garantizarse la educación si una necesidad de salud impide asistir, concentrarse o participar?",
        concepts: [
          ["Educación", "Derecho y servicio público con función social."],
          ["Salud", "Bienestar y atención integral, oportuna y sin barreras injustificadas."],
          ["Permanencia", "Condiciones para ingresar, continuar y aprender en la escuela."]
        ],
        article: ["Artículos 49, 67 y 44", "La Constitución organiza la atención en salud, reconoce la educación como derecho y servicio público, y protege especialmente ambos derechos en la niñez."],
        examples: ["Ajustes por tratamiento médico", "Orientación en salud mental", "Agua y alimentación escolar", "Ambientes de aprendizaje seguros"],
        diagram: [["Bienestar", "condición para aprender"], ["Educación", "conocimiento y ciudadanía"], ["Autonomía", "decisiones informadas"]],
        caseStudy: {
          title: "La asistencia de Valentina",
          text: "Valentina falta con frecuencia por un tratamiento. La escuela decide retirarla porque no cumple la asistencia mínima, sin ofrecer alternativas.",
          question: "¿Qué respuesta armoniza mejor salud y educación?",
          options: ["Mantener el retiro automático.", "Coordinar apoyos, flexibilizar y asegurar continuidad académica.", "Pedirle que repita todas las actividades sin acompañamiento."],
          answer: 1,
          feedback: "La respuesta debe reducir la barrera de salud y proteger la permanencia educativa."
        },
        media: {
          type: "video",
          src: "videos/educacion-salud-constitucion.mp4",
          title: "Educación, salud y Constitución",
          caption: "Relaciona escuela, salud y ciudadanía en una misma red de bienestar.",
          transcript: "La escuela y los servicios de salud deben coordinarse cuando una necesidad médica afecta el aprendizaje. Un ajuste oportuno permite cuidar sin excluir."
        },
        check: {
          question: "La educación constitucional se limita a memorizar normas.",
          options: ["Verdadero", "Falso"],
          answer: 1,
          correct: "Correcto. El artículo 67 la relaciona con derechos humanos, paz, democracia, trabajo, recreación, cultura, ciencia y ambiente.",
          incorrect: "Vuelve al propósito del artículo 67: formar para participar y convivir, no solo repetir información."
        }
      }),
      activity({
        id: "u3-a1",
        title: "Actividad 1",
        subtitle: "Respuesta coordinada",
        type: "order",
        imageClass: "atlas-5",
        instructions: "Ordena las acciones para acompañar a un estudiante cuya salud afecta su asistencia.",
        items: [["ajustar", "Acordar ajustes académicos y apoyos de acceso"], ["coordinar", "Coordinar familia, escuela y servicio de salud"], ["identificar", "Identificar la barrera y escuchar al estudiante"], ["evaluar", "Revisar si el apoyo permitió continuar aprendiendo"]],
        correctOrder: ["identificar", "coordinar", "ajustar", "evaluar"],
        success: "Correcto. El apoyo empieza por comprender la barrera, coordina responsables, aplica ajustes y evalúa resultados.",
        hint: "No se puede diseñar un ajuste antes de comprender qué está impidiendo participar."
      }),
      theory({
        id: "u3-t2",
        title: "Teoría 2",
        subtitle: "Trabajo infantil, discapacidad e inclusión",
        imageClass: "atlas-6",
        objective: "Reconocer explotación y barreras de discapacidad, y proponer ajustes que protejan educación, juego y autonomía.",
        intro: "La niñez debe estar protegida de explotación laboral y trabajos riesgosos. La discapacidad no está solo en una condición personal: aparece cuando el entorno crea barreras físicas, comunicativas o actitudinales.",
        reflection: "¿Qué debe cambiar primero cuando una persona no puede participar: la persona o la barrera del entorno?",
        concepts: [
          ["Explotación laboral", "Trabajo que vulnera derechos, aprovecha desigualdades o expone a riesgos."],
          ["Barrera", "Obstáculo físico, comunicativo, pedagógico o actitudinal."],
          ["Inclusión", "Participación conjunta con accesibilidad, apoyos y reconocimiento de autonomía."]
        ],
        article: ["Artículos 13, 44, 47 y 68", "La Constitución ordena protección especial, prohíbe la explotación laboral infantil y promueve integración, atención y educación para personas con discapacidad."],
        examples: ["Material en formatos accesibles", "Rutas y espacios sin obstáculos", "Protección del tiempo escolar", "Decisiones con la persona, no por ella"],
        diagram: [["Detectar", "nombrar la barrera"], ["Ajustar", "cambiar el entorno"], ["Participar", "ejercer autonomía"]],
        caseStudy: {
          title: "Dos barreras para Andrés",
          text: "Andrés ayuda largas jornadas en un negocio y llega tarde a clase. Además, un material digital no funciona con su lector de pantalla.",
          question: "¿Qué análisis es más completo?",
          options: ["Solo necesita organizar mejor su tiempo.", "Hay riesgo de explotación y una barrera de accesibilidad que deben corregirse.", "Debe abandonar la tecnología y estudiar únicamente en papel."],
          answer: 1,
          feedback: "La protección debe responder tanto a la posible explotación como a la falta de accesibilidad."
        },
        media: {
          type: "timeline",
          title: "Del obstáculo a la participación",
          caption: "Recorre una respuesta inclusiva paso a paso.",
          items: [["1. Escuchar", "La persona explica qué le impide participar y qué apoyo le sirve."], ["2. Identificar", "Se diferencia la condición personal de la barrera creada por el entorno."], ["3. Ajustar", "Se modifican materiales, espacios, tiempos o actitudes."], ["4. Evaluar", "Se comprueba con la persona si el ajuste garantiza participación real."]]
        },
        check: {
          question: "La inclusión consiste en crear siempre una actividad separada para quien necesita apoyo.",
          options: ["Verdadero", "Falso"],
          answer: 1,
          correct: "Correcto. La prioridad es transformar el entorno común y ofrecer apoyos para participar con los demás.",
          incorrect: "Separar puede mantener la exclusión. Busca una solución que cambie el entorno compartido."
        }
      }),
      activity({
        id: "u3-a2",
        title: "Actividad 2",
        subtitle: "Memoria de inclusión",
        type: "memory",
        imageClass: "atlas-6",
        instructions: "Encuentra las parejas entre cada barrera y el ajuste que la transforma.",
        pairs: [
          ["visual", "Texto no compatible con lector", "Material digital accesible", "La accesibilidad digital permite percibir y navegar el contenido."],
          ["fisica", "Escalera sin alternativa", "Ruta con acceso seguro", "Modificar el espacio elimina una barrera física."],
          ["actitud", "Decidir sin preguntar", "Escuchar y acordar apoyos", "La autonomía exige contar con la voz de la persona."]
        ],
        success: "Completaste todas las parejas. Incluir significa identificar la barrera y transformar el entorno con la persona."
      }),
      activity({
        id: "u3-final",
        title: "Actividad final",
        subtitle: "Caso integral de inclusión",
        type: "choice",
        final: true,
        imageClass: "atlas-6",
        instructions: "Elige la respuesta que protege más derechos al mismo tiempo.",
        context: "Una adolescente trabaja hasta tarde, falta a clases y no puede usar el laboratorio porque el acceso tiene escalones.",
        options: [
          ["Permitirle entregar menos trabajos y mantener todo lo demás igual.", false, "Reducir tareas no responde a la posible explotación ni elimina la barrera física.", "Busca una respuesta coordinada que actúe sobre ambas causas."],
          ["Activar protección frente al trabajo, apoyar su permanencia y adaptar el acceso al laboratorio.", true, "Correcto. La respuesta aborda protección, educación e inclusión de manera coordinada.", ""],
          ["Cambiarla a educación exclusivamente en casa.", false, "Separarla puede ocultar las causas y limitar su participación escolar.", "La inclusión procura conservar su acceso al entorno común." ]
        ]
      })
    ]
  }
];

const evaluationQuestions = [
  {
    question: "¿Por qué el desarrollo integral no se reduce a mantener a un niño con vida?",
    options: ["Porque también requiere salud, afecto, educación, juego y protección.", "Porque depende únicamente del rendimiento escolar.", "Porque solo la familia puede garantizarlo."],
    answer: 0,
    explanation: "El artículo 44 reúne condiciones físicas, emocionales, sociales y educativas, y distribuye responsabilidades entre familia, sociedad y Estado.",
    topic: "Vida y desarrollo integral"
  },
  {
    question: "Una escuela escucha propuestas, pero nunca permite que influyan en las decisiones. ¿Qué falta?",
    options: ["Más tareas escritas.", "Participación real e incidencia.", "Una votación sin información."],
    answer: 1,
    explanation: "La participación requiere información, expresión y una posibilidad efectiva de incidir.",
    topic: "Participación"
  },
  {
    question: "¿Cuál acción construye igualdad real?",
    options: ["Dar siempre el mismo apoyo, aunque exista una barrera.", "Separar a quien necesita un ajuste.", "Modificar el entorno para garantizar una oportunidad accesible."],
    answer: 2,
    explanation: "La igualdad real exige remover barreras y puede requerir apoyos distintos según la necesidad.",
    topic: "Igualdad e inclusión"
  },
  {
    question: "Ante una posible vulneración de derechos, ¿cuál es la ruta más responsable?",
    options: ["Escuchar, registrar lo necesario, activar apoyo y hacer seguimiento.", "Prometer secreto absoluto y esperar.", "Pedir al niño que resuelva la situación solo."],
    answer: 0,
    explanation: "La protección combina escucha segura, actuación responsable y verificación de resultados.",
    topic: "Rutas de protección"
  },
  {
    question: "¿Cómo se relacionan educación y salud?",
    options: ["No tienen relación constitucional.", "La salud puede condicionar acceso, permanencia y aprendizaje.", "La educación reemplaza la atención en salud."],
    answer: 1,
    explanation: "El bienestar permite participar y aprender; por eso los apoyos deben coordinarse cuando una necesidad de salud crea barreras.",
    topic: "Educación y salud"
  },
  {
    question: "¿Qué respuesta es inclusiva ante una barrera de accesibilidad?",
    options: ["Cambiar el entorno y acordar apoyos con la persona.", "Mantener la barrera y ofrecer que observe.", "Crear siempre una experiencia separada."],
    answer: 0,
    explanation: "La inclusión transforma el entorno común y reconoce la autonomía de la persona.",
    topic: "Discapacidad e inclusión"
  }
];

function loadSaved() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (Array.isArray(parsed)) return { completed: parsed };
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

const saved = loadSaved();
const state = {
  route: "cover",
  selectedUnit: null,
  selectedStep: null,
  mobilePage: "left",
  completed: new Set(saved.completed || []),
  theoryPages: saved.theoryPages || {},
  theoryVisits: saved.theoryVisits || {},
  theoryChecks: saved.theoryChecks || {},
  theoryCases: saved.theoryCases || {},
  mediaSelection: saved.mediaSelection || {},
  selectedAnswers: saved.selectedAnswers || {},
  activityData: saved.activityData || {},
  activityFeedback: {},
  matchSelection: {},
  dragSelection: {},
  evaluation: saved.evaluation || { answers: {}, index: 0, submitted: false }
};

const coverScreen = document.getElementById("coverScreen");
const closedBook = document.getElementById("closedBook");
const bookStage = document.getElementById("bookStage");
const book = document.getElementById("book");
const pageTurn = document.getElementById("pageTurn");
const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");
const mobilePageLabel = document.getElementById("mobilePageLabel");
const creditsDialog = document.getElementById("creditsDialog");
const confirmDialog = document.getElementById("confirmDialog");
const confirmMessage = document.getElementById("confirmMessage");
const resetDialog = document.getElementById("resetDialog");
let isTurning = false;
let draggedCardId = "";
let memoryBusy = false;

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completed: [...state.completed],
      theoryPages: state.theoryPages,
      theoryVisits: state.theoryVisits,
      theoryChecks: state.theoryChecks,
      theoryCases: state.theoryCases,
      mediaSelection: state.mediaSelection,
      selectedAnswers: state.selectedAnswers,
      activityData: state.activityData,
      evaluation: state.evaluation
    }));
  } catch (error) {
    // The book remains usable when storage is unavailable.
  }
}

function playTone(success = true) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = success ? "sine" : "triangle";
    oscillator.frequency.value = success ? 660 : 190;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.07, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.19);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
  } catch (error) {
    // Sound feedback is optional.
  }
}

function allSteps() {
  return units.flatMap((unit) => unit.steps.map((step) => ({ ...step, unitId: unit.id })));
}

function unitById(unitId) {
  return units.find((unit) => unit.id === unitId);
}

function stepById(unit, stepId) {
  return unit?.steps.find((step) => step.id === stepId);
}

function isCompleted(id) {
  return state.completed.has(id);
}

function unitComplete(unitId) {
  const unit = unitById(unitId);
  return Boolean(unit && unit.steps.every((step) => isCompleted(step.id)));
}

function unitUnlocked(unitId) {
  if (unitId === "u1") return true;
  if (unitId === "u2") return unitComplete("u1");
  if (unitId === "u3") return unitComplete("u2");
  return true;
}

function stepUnlocked(unit, stepIndex) {
  if (!unitUnlocked(unit.id)) return false;
  return unit.steps.slice(0, stepIndex).every((step) => isCompleted(step.id));
}

function evaluationUnlocked() {
  return units.every((unit) => unitComplete(unit.id));
}

function progressPercent(items) {
  if (!items.length) return 0;
  return Math.round((items.filter((item) => isCompleted(item.id)).length / items.length) * 100);
}

function globalProgress() {
  return progressPercent(allSteps());
}

function nextTarget() {
  for (const unit of units) {
    if (!unitUnlocked(unit.id)) return { type: "unit", unitId: unit.id };
    const step = unit.steps.find((item) => !isCompleted(item.id));
    if (step) return { type: "step", unitId: unit.id, stepId: step.id };
  }
  return { type: "evaluation" };
}

function renderIcon(name) {
  return icons[name] || icons.book;
}

function page(content, extra = "") {
  return `<div class="page-content ${extra}"><div class="page-safe">${content}</div></div>`;
}

function navStrip(label, context = "") {
  return `<div class="book-nav">
    <button class="nav-back" type="button" data-route="${context ? "unit" : "menu"}" ${context ? `data-unit="${context}"` : ""}>
      ${renderIcon("back")}<span>${label}</span>
    </button>
    <span class="nav-context">${context ? unitById(context).label : "Libro principal"}</span>
  </div>`;
}

function progressMarkup(label, percent, text) {
  return `<div class="progress-block">
    <div class="progress-heading"><span>${label}</span><strong>${text}</strong></div>
    <div class="progress-track" role="progressbar" aria-label="${label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}">
      <div class="progress-fill" style="width:${percent}%"></div>
    </div>
  </div>`;
}

function atlasIllustration(imageClass, label) {
  return `<figure class="atlas-frame"><div class="atlas-illustration ${imageClass}" role="img" aria-label="${label}"></div></figure>`;
}

function renderShell(left, right) {
  leftPage.innerHTML = left;
  rightPage.innerHTML = right;
  setMobilePage(state.mobilePage);
  window.requestAnimationFrame(drawMatchLines);
}

function setMobilePage(side) {
  state.mobilePage = side === "right" ? "right" : "left";
  book.dataset.mobilePage = state.mobilePage;
  mobilePageLabel.textContent = state.mobilePage === "left" ? "Página izquierda" : "Página derecha";
  document.querySelectorAll(".mobile-page-button[data-mobile-page]").forEach((button) => {
    const target = button.dataset.mobilePage;
    button.disabled = target === state.mobilePage;
  });
}

function turnPage(update, options = {}) {
  if (isTurning) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobileTarget = options.mobileTarget || "left";
  if (reduceMotion) {
    update();
    state.mobilePage = mobileTarget;
    render();
    return;
  }

  isTurning = true;
  book.classList.add("is-turning");
  pageTurn.className = `page-turn is-flipping ${options.direction === "back" ? "is-back" : ""}`;
  window.setTimeout(() => {
    update();
    state.mobilePage = mobileTarget;
    render();
  }, 285);
  window.setTimeout(() => {
    pageTurn.className = "page-turn";
    book.classList.remove("is-turning");
    isTurning = false;
  }, 610);
}

function openBook() {
  if (closedBook.classList.contains("is-opening")) return;
  closedBook.classList.add("is-opening");
  window.setTimeout(() => {
    bookStage.classList.remove("is-hidden");
    state.route = "menu";
    render();
  }, 420);
  window.setTimeout(() => {
    coverScreen.hidden = true;
  }, 900);
}

function navigate(route, options = {}) {
  const direction = options.direction || (route === "menu" || route === "unit" ? "back" : "forward");
  turnPage(() => {
    if (route === "unit") {
      if (!unitUnlocked(options.unitId)) return;
      state.selectedUnit = options.unitId;
    }
    if (route === "step") {
      const unit = unitById(options.unitId);
      const stepIndex = unit?.steps.findIndex((step) => step.id === options.stepId) ?? -1;
      if (!unit || stepIndex < 0 || !stepUnlocked(unit, stepIndex)) return;
      state.selectedUnit = options.unitId;
      state.selectedStep = options.stepId;
    }
    state.route = route;
  }, { direction, mobileTarget: options.mobileTarget || "left" });
}

function renderMenu() {
  const progress = globalProgress();
  const target = nextTarget();
  const continueLabel = target.type === "evaluation" ? "Ir a la evaluación" : "Continuar mi ruta";
  const items = [
    ["home", "Inicio", "Ruta, logros y avance", "home", true, ""],
    ["pillar", "Unidad 1", units[0].title, "unit", unitUnlocked("u1"), "u1"],
    ["pillar", "Unidad 2", units[1].title, "unit", unitUnlocked("u2"), "u2"],
    ["book", "Unidad 3", units[2].title, "unit", unitUnlocked("u3"), "u3"],
    ["clipboard", "Evaluación final", evaluationUnlocked() ? "Disponible" : "Completa las tres unidades", "evaluation", evaluationUnlocked(), ""]
  ];

  const left = page(`
    <div class="hero-mark">${renderIcon("book")}</div>
    <p class="unit-tag">Bienvenido a</p>
    <h1 class="page-title">Constitución Política y derechos humanos</h1>
    <div class="ornament" aria-hidden="true"></div>
    <p class="page-subtitle">Una ruta para comprender derechos, analizar situaciones cotidianas y tomar decisiones ciudadanas.</p>
    ${progressMarkup("Progreso general", progress, `${progress}%`)}
    <button class="primary-action" type="button" data-continue>${continueLabel}${renderIcon("arrow")}</button>
    <div class="menu-emblem" aria-hidden="true"><img src="imagenes/logo-ddhh.svg" alt="" /></div>
  `, "centered-page");

  const right = page(`
    <div class="menu-layout">
      <header class="menu-heading"><span>Índice</span><strong>${state.completed.size} de ${allSteps().length} contenidos</strong></header>
      <ul class="menu-list">
        ${items.map(([icon, title, note, route, unlocked, unitId]) => `<li>
          <button class="menu-item ${unlocked ? "" : "locked"}" type="button" data-route="${route}" ${unitId ? `data-unit="${unitId}"` : ""} ${unlocked ? "" : "disabled"}>
            <span class="menu-icon">${renderIcon(unlocked ? icon : "lock")}</span>
            <span class="menu-copy"><strong>${title}</strong><small>${note}</small></span>
            <span class="menu-state">${unlocked ? "›" : "Bloqueado"}</span>
          </button>
        </li>`).join("")}
      </ul>
      <div class="credits-row"><button class="small-button" type="button" data-credits>Créditos</button></div>
    </div>
  `, "fixed-page");
  renderShell(left, right);
}

function renderHome() {
  const badges = units.map((unit) => `<div class="achievement ${unitComplete(unit.id) ? "earned" : ""}">
    <span>${unitComplete(unit.id) ? renderIcon("trophy") : renderIcon(unitUnlocked(unit.id) ? "book" : "lock")}</span>
    <strong>${unit.label}</strong>
    <small>${unitComplete(unit.id) ? "Insignia obtenida" : unitUnlocked(unit.id) ? "En curso" : "Aún bloqueada"}</small>
  </div>`).join("");

  const left = page(`
    ${navStrip("Regresar al menú")}
    <div class="left-page-body centered-copy">
      <p class="unit-tag">Inicio</p>
      <h1 class="page-title">Tu ruta de aprendizaje</h1>
      <p class="page-subtitle">Cada contenido prepara el siguiente. Las unidades conservan su avance en este dispositivo y se desbloquean en orden.</p>
      ${progressMarkup("Libro completo", globalProgress(), `${globalProgress()}% completado`)}
      <div class="route-steps" aria-label="Ruta de avance"><span>Leer</span><i></i><span>Practicar</span><i></i><span>Evaluar</span></div>
    </div>
  `);

  const right = page(`
    <div class="home-layout">
      <header class="section-heading"><p class="unit-tag">Tus logros</p><h2>Avance por unidades</h2></header>
      <div class="achievement-grid">${badges}</div>
      <div class="principle-strip"><strong>Regla de avance</strong><span>Completa el contenido disponible para abrir el siguiente.</span></div>
      <div class="home-actions">
        <button class="primary-action" type="button" data-continue>Comenzar o continuar${renderIcon("arrow")}</button>
        <button class="icon-text-action" type="button" data-reset>${renderIcon("reset")}Reiniciar avance</button>
      </div>
    </div>
  `);
  renderShell(left, right);
}

function theoryProgress(step) {
  if (isCompleted(step.id)) return 100;
  const visits = new Set(state.theoryVisits[step.id] || []);
  return Math.min(80, visits.size * 20);
}

function renderUnit(unitId) {
  const unit = unitById(unitId);
  if (!unit) return renderMenu();
  const percent = progressPercent(unit.steps);
  const left = page(`
    ${navStrip("Regresar al menú")}
    <div class="left-page-body centered-copy">
      <div class="hero-mark compact">${renderIcon(unit.id === "u3" ? "book" : "pillar")}</div>
      <p class="unit-tag">${unit.label}</p>
      <h1 class="page-title">${unit.title}</h1>
      <p class="page-subtitle">${unit.description}</p>
      ${progressMarkup("Progreso de la unidad", percent, `${percent}%`)}
      ${atlasIllustration(unit.imageClass, `Ilustración de ${unit.title}`)}
      <p class="unit-quote">${unit.quote}</p>
    </div>
  `);

  const right = page(`
    <div class="unit-layout">
      <header class="section-heading compact-heading"><p class="unit-tag">Ruta de la unidad</p><h2>Contenidos</h2></header>
      <div class="content-grid">
        ${unit.steps.map((step, index) => {
          const unlocked = stepUnlocked(unit, index);
          const done = isCompleted(step.id);
          const percentStep = step.kind === "theory" ? theoryProgress(step) : done ? 100 : 0;
          const statusText = done ? "Completado" : unlocked ? percentStep ? "En progreso" : "Disponible" : "Bloqueado";
          const icon = done ? "check" : unlocked ? (step.kind === "theory" ? "book" : step.final ? "trophy" : "clipboard") : "lock";
          return `<button class="content-card ${step.final ? "wide" : ""} ${unlocked ? "unlocked" : "locked"}" type="button" data-route="step" data-unit="${unit.id}" data-step="${step.id}" ${unlocked ? "" : "disabled"}>
            <span class="card-icon">${renderIcon(icon)}</span>
            <span class="card-copy"><strong>${step.title}</strong><small>${step.subtitle}</small><span class="status ${done ? "done" : unlocked ? "current" : "locked"}">${statusText}</span></span>
            <span class="card-percent">${percentStep}%</span>
          </button>`;
        }).join("")}
      </div>
    </div>
  `);
  renderShell(left, right);
}

function markTheoryVisit(stepId, pageIndex) {
  const visits = new Set(state.theoryVisits[stepId] || []);
  visits.add(pageIndex);
  state.theoryVisits[stepId] = [...visits].sort();
  state.theoryPages[stepId] = pageIndex;
  save();
}

function theoryPageBody(step, pageIndex) {
  if (pageIndex === 0) {
    return `<div class="theory-section intro-section">
      <span class="chapter-number">01</span>
      <h2>Antes de comenzar</h2>
      <div class="learning-objective"><strong>Objetivo de aprendizaje</strong><p>${step.objective}</p></div>
      <p class="lead-copy">${step.intro}</p>
      <blockquote class="reflection"><span>Pregunta para pensar</span>${step.reflection}</blockquote>
    </div>`;
  }
  if (pageIndex === 1) {
    return `<div class="theory-section">
      <span class="chapter-number">02</span><h2>Conceptos y conexiones</h2>
      <div class="concept-list">${step.concepts.map(([term, text]) => `<div><strong>${term}</strong><p>${text}</p></div>`).join("")}</div>
      <div class="concept-flow">${step.diagram.map(([label, detail], index) => `<span><strong>${label}</strong><small>${detail}</small></span>${index < step.diagram.length - 1 ? "<i>→</i>" : ""}`).join("")}</div>
      <div class="article-note"><strong>${step.article[0]}</strong><p>${step.article[1]}</p><a href="${CONSTITUTION_URL}" target="_blank" rel="noopener noreferrer">Consultar Constitución oficial</a></div>
    </div>`;
  }
  if (pageIndex === 2) {
    const selected = state.theoryCases[step.id];
    return `<div class="theory-section case-section">
      <span class="chapter-number">03</span><h2>Caso aplicado</h2>
      <div class="case-story"><strong>${step.caseStudy.title}</strong><p>${step.caseStudy.text}</p></div>
      <h3>${step.caseStudy.question}</h3>
      <div class="compact-answers">${step.caseStudy.options.map((option, index) => `<button type="button" class="answer-button ${selected === index ? (index === step.caseStudy.answer ? "correct" : "wrong") : ""}" data-case-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join("")}</div>
      ${selected !== undefined ? `<div class="feedback ${selected === step.caseStudy.answer ? "ok" : "bad"}">${selected === step.caseStudy.answer ? "Correcto. " : "Revisa el caso. "}${step.caseStudy.feedback}</div>` : ""}
    </div>`;
  }
  if (pageIndex === 3) return renderTheoryMedia(step);

  const selected = state.theoryChecks[step.id];
  const correct = selected === step.check.answer;
  const visitedAll = new Set(state.theoryVisits[step.id] || []).size === 5;
  return `<div class="theory-section check-section">
    <span class="chapter-number">05</span><h2>Comprobación rápida</h2>
    <div class="question-box"><p class="unit-tag">Idea principal</p><h3>${step.check.question}</h3></div>
    <div class="answers">${step.check.options.map((option, index) => `<button type="button" class="answer-button ${selected === index ? (correct ? "correct" : "wrong") : ""}" data-theory-check="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join("")}</div>
    <div class="feedback ${selected === undefined ? "" : correct ? "ok" : "bad"}">${selected === undefined ? "Selecciona una respuesta para comprobar lo aprendido." : correct ? step.check.correct : step.check.incorrect}</div>
    <button class="primary-action complete-theory" type="button" data-complete-theory="${step.id}" ${correct && visitedAll || isCompleted(step.id) ? "" : "disabled"}>${isCompleted(step.id) ? `${renderIcon("check")} Teoría completada` : "Completar teoría"}</button>
    ${!visitedAll ? `<p class="completion-note">Visita las cinco páginas para habilitar la finalización.</p>` : ""}
  </div>`;
}

function renderTheoryMedia(step) {
  const media = step.media;
  if (media.type === "video") {
    return `<div class="theory-section media-section">
      <span class="chapter-number">04</span><h2>${media.title}</h2>
      <figure class="video-frame"><video src="${media.src}" controls preload="metadata" playsinline aria-label="${media.title}"></video><figcaption>${media.caption}</figcaption></figure>
      <details class="transcript"><summary>Leer transcripción</summary><p>${media.transcript}</p></details>
    </div>`;
  }
  const selected = Number(state.mediaSelection[step.id] ?? 0);
  return `<div class="theory-section media-section">
    <span class="chapter-number">04</span><h2>${media.title}</h2><p class="section-intro">${media.caption}</p>
    <div class="media-explorer ${media.type}">
      <div class="media-tabs">${media.items.map(([label], index) => `<button type="button" class="${selected === index ? "selected" : ""}" data-media-item="${index}">${label}</button>`).join("")}</div>
      <div class="media-detail" aria-live="polite"><strong>${media.items[selected][0]}</strong><p>${media.items[selected][1]}</p></div>
    </div>
  </div>`;
}

function renderTheory(unit, step) {
  const pageIndex = Math.max(0, Math.min(4, Number(state.theoryPages[step.id] || 0)));
  markTheoryVisit(step.id, pageIndex);
  const labels = ["Introducción", "Conceptos", "Caso aplicado", "Recurso", "Comprobación"];
  const left = page(`
    ${navStrip("Volver a la unidad", unit.id)}
    <div class="left-page-body theory-left">
      <p class="unit-tag">${unit.label} · ${step.title}</p>
      <h1 class="page-title">${step.subtitle}</h1>
      <p class="page-subtitle">${step.objective}</p>
      ${atlasIllustration(step.imageClass, `Ilustración de ${step.subtitle}`)}
      <div class="theory-map">${labels.map((label, index) => `<span class="${index === pageIndex ? "active" : ""} ${new Set(state.theoryVisits[step.id] || []).has(index) ? "visited" : ""}"><i>${index + 1}</i>${label}</span>`).join("")}</div>
    </div>
  `);

  const right = page(`
    <div class="fixed-layout theory-layout">
      <header class="page-section-heading"><span>${labels[pageIndex]}</span><strong>Página ${pageIndex + 1} de 5</strong></header>
      <div class="internal-scroll">${theoryPageBody(step, pageIndex)}</div>
      <nav class="theory-pagination" aria-label="Páginas de la teoría">
        <button class="secondary-action" type="button" data-theory-page="${pageIndex - 1}" ${pageIndex === 0 ? "disabled" : ""}>${renderIcon("back")}Anterior</button>
        <span>${pageIndex + 1} / 5</span>
        <button class="primary-action" type="button" data-theory-page="${pageIndex + 1}" ${pageIndex === 4 ? "disabled" : ""}>Siguiente${renderIcon("arrow")}</button>
      </nav>
    </div>
  `, "fixed-page");
  renderShell(left, right);
}

function activityData(step) {
  if (!state.activityData[step.id]) state.activityData[step.id] = {};
  return state.activityData[step.id];
}

function feedbackMarkup(step) {
  const feedback = state.activityFeedback[step.id];
  if (!feedback) return `<div class="feedback">Completa el reto y luego comprueba tu respuesta.</div>`;
  return `<div class="feedback ${feedback.ok ? "ok" : "bad"}">${feedback.text}</div>`;
}

function renderDragActivity(step) {
  const data = activityData(step);
  const placements = data.placements || {};
  const selected = state.dragSelection[step.id];
  const cardById = Object.fromEntries(step.cards.map((card) => [card[0], card]));
  return `<div class="drag-activity">
    <div class="drag-bank" aria-label="Tarjetas por ubicar">
      ${step.cards.filter((card) => !placements[card[0]]).map((card) => `<button type="button" draggable="true" class="drag-card ${selected === card[0] ? "selected" : ""}" data-drag-card="${card[0]}"><span class="grip" aria-hidden="true">⠿</span>${card[1]}</button>`).join("") || '<span class="bank-empty">Todas las tarjetas están ubicadas.</span>'}
    </div>
    <div class="drop-grid">${step.zones.map(([zoneId, label]) => {
      const cards = Object.entries(placements).filter(([, value]) => value === zoneId).map(([cardId]) => cardById[cardId]);
      return `<section class="drop-zone" data-drop-zone="${zoneId}"><h3>${label}</h3><div>${cards.map((card) => `<button type="button" class="placed-card" data-unplace="${card[0]}">${card[1]}<span aria-label="Devolver tarjeta">×</span></button>`).join("") || "<p>Suelta o toca aquí</p>"}</div></section>`;
    }).join("")}</div>
    ${feedbackMarkup(step)}
    <div class="activity-actions"><button class="secondary-action" type="button" data-reset-activity>${renderIcon("reset")}Reiniciar</button><button class="primary-action" type="button" data-check-activity>Comprobar</button></div>
  </div>`;
}

function renderMatchActivity(step) {
  const data = activityData(step);
  const matches = data.matches || {};
  const selected = state.matchSelection[step.id];
  const usedRight = new Set(Object.values(matches));
  return `<div class="match-activity">
    <div class="match-board" id="matchBoard"><svg class="match-lines" aria-hidden="true"></svg>
      <div class="match-column">${step.left.map(([id, label]) => `<button type="button" class="match-node left-node ${selected === id ? "selected" : ""} ${matches[id] ? "paired" : ""}" data-match-left="${id}">${label}<i></i></button>`).join("")}</div>
      <div class="match-column">${step.right.map(([id, label]) => `<button type="button" class="match-node right-node ${usedRight.has(id) ? "paired" : ""}" data-match-right="${id}"><i></i>${label}</button>`).join("")}</div>
    </div>
    ${feedbackMarkup(step)}
    <div class="activity-actions"><button class="secondary-action" type="button" data-reset-activity>${renderIcon("reset")}Reiniciar</button><button class="primary-action" type="button" data-check-activity>Comprobar</button></div>
  </div>`;
}

function renderOrderActivity(step) {
  const data = activityData(step);
  if (!Array.isArray(data.order)) data.order = step.items.map((item) => item[0]);
  const itemById = Object.fromEntries(step.items);
  return `<div class="order-activity"><ol class="order-list">${data.order.map((id, index) => `<li><span class="order-number">${index + 1}</span><strong>${itemById[id]}</strong><span class="order-controls"><button type="button" title="Subir" aria-label="Subir paso" data-order-move="${index}" data-order-direction="-1" ${index === 0 ? "disabled" : ""}>↑</button><button type="button" title="Bajar" aria-label="Bajar paso" data-order-move="${index}" data-order-direction="1" ${index === data.order.length - 1 ? "disabled" : ""}>↓</button></span></li>`).join("")}</ol>
    ${feedbackMarkup(step)}
    <div class="activity-actions"><button class="secondary-action" type="button" data-reset-activity>${renderIcon("reset")}Reiniciar</button><button class="primary-action" type="button" data-check-activity>Comprobar orden</button></div>
  </div>`;
}

function memoryDeck(step) {
  const barriers = step.pairs.map(([pairId, barrier]) => ({ id: `${pairId}-a`, pairId, text: barrier, type: "Barrera" }));
  const adjustments = step.pairs.map(([pairId, , solution]) => ({ id: `${pairId}-b`, pairId, text: solution, type: "Ajuste" })).reverse();
  return barriers.flatMap((card, index) => [card, adjustments[index]]);
}

function renderMemoryActivity(step) {
  const data = activityData(step);
  if (!Array.isArray(data.open)) data.open = [];
  if (!Array.isArray(data.found)) data.found = [];
  const deck = memoryDeck(step);
  return `<div class="memory-activity"><div class="memory-grid">${deck.map((card, index) => {
    const visible = data.open.includes(card.id) || data.found.includes(card.pairId);
    return `<button type="button" class="memory-card ${visible ? "open" : ""} ${data.found.includes(card.pairId) ? "found" : ""}" data-memory-card="${card.id}" aria-label="${visible ? `${card.type}: ${card.text}` : `Descubrir tarjeta ${index + 1}`}" ${data.found.includes(card.pairId) ? "disabled" : ""}><span class="memory-back">${renderIcon("book")}</span><span class="memory-front"><small>${card.type}</small>${card.text}</span></button>`;
  }).join("")}</div>
    ${feedbackMarkup(step)}
    <div class="activity-actions"><button class="secondary-action" type="button" data-reset-activity>${renderIcon("reset")}Reiniciar</button><span class="moves">${data.moves || 0} ${(data.moves || 0) === 1 ? "intento" : "intentos"}</span></div>
  </div>`;
}

function renderChoiceActivity(step) {
  const selected = state.selectedAnswers[step.id];
  return `<div class="choice-activity">
    <div class="case-story"><p>${step.context}</p></div>
    <div class="answers">${step.options.map(([text], index) => `<button type="button" class="answer-button ${selected === index ? "selected" : ""}" data-activity-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${text}</span></button>`).join("")}</div>
    ${feedbackMarkup(step)}
    <div class="activity-actions"><button class="secondary-action" type="button" data-reset-activity>${renderIcon("reset")}Reiniciar</button><button class="primary-action" type="button" data-check-activity ${selected === undefined ? "disabled" : ""}>Comprobar decisión</button></div>
  </div>`;
}

function renderActivity(unit, step) {
  const body = step.type === "drag" ? renderDragActivity(step) : step.type === "match" ? renderMatchActivity(step) : step.type === "order" ? renderOrderActivity(step) : step.type === "memory" ? renderMemoryActivity(step) : renderChoiceActivity(step);
  const left = page(`
    ${navStrip("Volver a la unidad", unit.id)}
    <div class="left-page-body activity-left">
      <div class="hero-mark compact">${renderIcon(step.final ? "trophy" : "clipboard")}</div>
      <p class="unit-tag">${unit.label} · ${step.title}</p>
      <h1 class="page-title">${step.subtitle}</h1>
      ${atlasIllustration(step.imageClass, `Situación para ${step.subtitle}`)}
      <div class="instruction-panel"><strong>Tu misión</strong><p>${step.instructions}</p></div>
      <span class="completion-chip ${isCompleted(step.id) ? "done" : ""}">${isCompleted(step.id) ? `${renderIcon("check")} Completada` : "En desarrollo"}</span>
    </div>
  `);
  const right = page(`<div class="fixed-layout activity-layout"><header class="page-section-heading"><span>${step.final ? "Reto final" : "Actividad interactiva"}</span><strong>${isCompleted(step.id) ? "100%" : "En curso"}</strong></header><div class="internal-scroll activity-scroll">${body}</div></div>`, "fixed-page");
  renderShell(left, right);
}

function renderStep(unitId, stepId) {
  const unit = unitById(unitId);
  const step = stepById(unit, stepId);
  if (!unit || !step) return renderMenu();
  return step.kind === "theory" ? renderTheory(unit, step) : renderActivity(unit, step);
}

function evaluationScore() {
  return evaluationQuestions.filter((question, index) => Number(state.evaluation.answers[index]) === question.answer).length;
}

function renderEvaluationLocked() {
  const left = page(`${navStrip("Regresar al menú")}<div class="left-page-body centered-copy"><div class="hero-mark">${renderIcon("lock")}</div><p class="unit-tag">Evaluación final</p><h1 class="page-title">Aún está bloqueada</h1><p class="page-subtitle">Completa las tres unidades para demostrar todo lo aprendido.</p></div>`);
  const right = page(`<div class="locked-evaluation"><h2>Requisitos</h2>${units.map((unit) => `<div class="requirement ${unitComplete(unit.id) ? "done" : ""}"><span>${renderIcon(unitComplete(unit.id) ? "check" : "lock")}</span><strong>${unit.label}</strong><small>${unitComplete(unit.id) ? "Completada" : "Pendiente"}</small></div>`).join("")}<button class="primary-action" type="button" data-continue>Ir al contenido pendiente${renderIcon("arrow")}</button></div>`);
  renderShell(left, right);
}

function renderEvaluationResult() {
  const score = evaluationScore();
  const percent = Math.round((score / evaluationQuestions.length) * 100);
  const passed = percent >= 70;
  const weakTopics = evaluationQuestions.filter((question, index) => Number(state.evaluation.answers[index]) !== question.answer).map((question) => question.topic);
  const left = page(`${navStrip("Regresar al menú")}<div class="left-page-body centered-copy result-summary"><div class="hero-mark ${passed ? "success" : "review"}">${renderIcon(passed ? "trophy" : "book")}</div><p class="unit-tag">Resultado final</p><h1 class="page-title">${passed ? "¡Evaluación aprobada!" : "Sigue construyendo"}</h1><div class="score-ring" style="--score:${percent}"><strong>${percent}%</strong><span>${score} de ${evaluationQuestions.length}</span></div><p class="page-subtitle">${passed ? "Obtuviste la insignia Guardián de derechos." : "Revisa los temas señalados y vuelve a intentarlo."}</p><button class="secondary-action" type="button" data-retake>${renderIcon("reset")}Repetir evaluación</button></div>`);
  const right = page(`<div class="fixed-layout result-layout"><header class="page-section-heading"><span>Retroalimentación</span><strong>${score} correctas · ${evaluationQuestions.length - score} por revisar</strong></header><div class="internal-scroll"><div class="result-breakdown">${evaluationQuestions.map((question, index) => { const selected = state.evaluation.answers[index]; const correct = Number(selected) === question.answer; return `<article class="result-item ${correct ? "correct" : "incorrect"}"><span>${renderIcon(correct ? "check" : "book")}</span><div><strong>Pregunta ${index + 1} · ${question.topic}</strong><p>${correct ? "Respuesta correcta." : selected === undefined ? "Sin respuesta." : `Tu respuesta: ${question.options[selected]}`}</p><p><b>Respuesta correcta:</b> ${question.options[question.answer]}</p><p>${question.explanation}</p></div></article>`; }).join("")}</div>${weakTopics.length ? `<div class="review-topics"><strong>Temas recomendados para repasar</strong><p>${[...new Set(weakTopics)].join(" · ")}</p></div>` : `<div class="review-topics success"><strong>Dominio integral</strong><p>Relacionaste correctamente los derechos, las rutas de protección y las respuestas inclusivas.</p></div>`}</div></div>`, "fixed-page");
  renderShell(left, right);
}

function renderEvaluation() {
  if (!evaluationUnlocked()) return renderEvaluationLocked();
  if (state.evaluation.submitted) return renderEvaluationResult();
  const index = Math.max(0, Math.min(evaluationQuestions.length - 1, Number(state.evaluation.index || 0)));
  const question = evaluationQuestions[index];
  const selected = state.evaluation.answers[index];
  const answered = Object.keys(state.evaluation.answers).length;
  const percent = Math.round((answered / evaluationQuestions.length) * 100);
  const left = page(`${navStrip("Regresar al menú")}<div class="left-page-body centered-copy evaluation-left"><div class="hero-mark">${renderIcon("trophy")}</div><p class="unit-tag">Evaluación final</p><h1 class="page-title">Demuestra lo aprendido</h1><p class="page-subtitle">Lee cada situación con calma. Puedes avanzar y regresar antes de finalizar.</p>${progressMarkup("Preguntas respondidas", percent, `${answered} de ${evaluationQuestions.length}`)}<div class="question-dots">${evaluationQuestions.map((_, dot) => `<button type="button" class="${dot === index ? "active" : ""} ${state.evaluation.answers[dot] !== undefined ? "answered" : ""}" data-evaluation-page="${dot}" aria-label="Ir a la pregunta ${dot + 1}">${dot + 1}</button>`).join("")}</div></div>`);
  const right = page(`<div class="fixed-layout evaluation-layout"><header class="page-section-heading"><span>Pregunta ${index + 1} de ${evaluationQuestions.length}</span><strong>${state.evaluation.answers[index] !== undefined ? "Respondida" : "Pendiente"}</strong></header><div class="internal-scroll"><div class="evaluation-question"><div class="question-box"><h2>${question.question}</h2></div><div class="answers">${question.options.map((option, optionIndex) => `<button type="button" class="answer-button ${selected === optionIndex ? "selected" : ""}" data-eval-answer="${optionIndex}"><span class="answer-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span></button>`).join("")}</div></div></div><nav class="evaluation-actions"><button class="secondary-action" type="button" data-evaluation-page="${index - 1}" ${index === 0 ? "disabled" : ""}>${renderIcon("back")}Anterior</button>${index === evaluationQuestions.length - 1 ? `<button class="primary-action" type="button" data-finish-evaluation>Finalizar evaluación${renderIcon("check")}</button>` : `<button class="primary-action" type="button" data-evaluation-page="${index + 1}">Siguiente${renderIcon("arrow")}</button>`}</nav></div>`, "fixed-page");
  renderShell(left, right);
}

function markComplete(step, message) {
  state.completed.add(step.id);
  save();
  state.activityFeedback[step.id] = { ok: true, text: message };
  playTone(true);
}

function checkActivity(step) {
  const data = activityData(step);
  if (step.type === "drag") {
    const placements = data.placements || {};
    if (Object.keys(placements).length < step.cards.length) {
      state.activityFeedback[step.id] = { ok: false, text: "Aún faltan tarjetas por ubicar. Revisa el banco superior y completa todos los destinos." };
    } else {
      const wrong = step.cards.filter((card) => placements[card[0]] !== card[2]);
      if (wrong.length) state.activityFeedback[step.id] = { ok: false, text: `${wrong.length === 1 ? "Una tarjeta necesita" : `${wrong.length} tarjetas necesitan`} revisión. Pista: ${wrong[0][3]}` };
      else markComplete(step, step.success);
    }
  } else if (step.type === "match") {
    const matches = data.matches || {};
    if (Object.keys(matches).length < step.left.length) state.activityFeedback[step.id] = { ok: false, text: "Completa todas las relaciones. Cada concepto debe quedar conectado con una acción." };
    else {
      const wrongId = step.left.map((item) => item[0]).find((id) => matches[id] !== step.pairs[id]);
      if (wrongId) state.activityFeedback[step.id] = { ok: false, text: `Hay una conexión por revisar. Pista: ${step.explanations[wrongId]}` };
      else markComplete(step, step.success);
    }
  } else if (step.type === "order") {
    if (JSON.stringify(data.order) === JSON.stringify(step.correctOrder)) markComplete(step, step.success);
    else state.activityFeedback[step.id] = { ok: false, text: `El orden todavía no construye una ruta completa. Pista: ${step.hint}` };
  } else if (step.type === "choice") {
    const selected = state.selectedAnswers[step.id];
    const option = step.options[selected];
    if (!option) state.activityFeedback[step.id] = { ok: false, text: "Selecciona una decisión antes de comprobar." };
    else if (option[1]) markComplete(step, option[2]);
    else {
      state.activityFeedback[step.id] = { ok: false, text: `${option[2]} Pista: ${option[3]}` };
      playTone(false);
    }
  }
  save();
  render();
}

function resetActivity(step) {
  state.activityData[step.id] = {};
  delete state.selectedAnswers[step.id];
  delete state.activityFeedback[step.id];
  delete state.matchSelection[step.id];
  delete state.dragSelection[step.id];
  save();
  render();
}

function drawMatchLines() {
  const board = document.getElementById("matchBoard");
  if (!board || state.route !== "step") return;
  const unit = unitById(state.selectedUnit);
  const step = stepById(unit, state.selectedStep);
  if (!step || step.type !== "match") return;
  const svg = board.querySelector(".match-lines");
  const matches = activityData(step).matches || {};
  const box = board.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
  svg.innerHTML = Object.entries(matches).map(([leftId, rightId]) => {
    const left = board.querySelector(`[data-match-left="${leftId}"]`);
    const right = board.querySelector(`[data-match-right="${rightId}"]`);
    if (!left || !right) return "";
    const a = left.getBoundingClientRect();
    const b = right.getBoundingClientRect();
    const x1 = a.right - box.left;
    const y1 = a.top + a.height / 2 - box.top;
    const x2 = b.left - box.left;
    const y2 = b.top + b.height / 2 - box.top;
    const curve = Math.max(24, (x2 - x1) * 0.45);
    return `<path d="M ${x1} ${y1} C ${x1 + curve} ${y1}, ${x2 - curve} ${y2}, ${x2} ${y2}" />`;
  }).join("");
}

function goContinue() {
  const target = nextTarget();
  if (target.type === "evaluation") return navigate("evaluation");
  if (target.type === "step") return navigate("step", { unitId: target.unitId, stepId: target.stepId });
  return navigate("unit", { unitId: target.unitId });
}

function render() {
  if (state.route === "cover") return;
  if (state.route === "home") return renderHome();
  if (state.route === "unit") return renderUnit(state.selectedUnit);
  if (state.route === "step") return renderStep(state.selectedUnit, state.selectedStep);
  if (state.route === "evaluation") return renderEvaluation();
  return renderMenu();
}

document.addEventListener("click", (event) => {
  const target = event.target;
  const openButton = target.closest("#openBookButton");
  const mobileButton = target.closest(".mobile-page-button[data-mobile-page]");
  const routeButton = target.closest("[data-route]");
  const theoryPageButton = target.closest("[data-theory-page]");
  const caseButton = target.closest("[data-case-answer]");
  const theoryCheckButton = target.closest("[data-theory-check]");
  const mediaButton = target.closest("[data-media-item]");
  const activityAnswer = target.closest("[data-activity-answer]");
  const dragCard = target.closest("[data-drag-card]");
  const dropZone = target.closest("[data-drop-zone]");
  const unplaceButton = target.closest("[data-unplace]");
  const matchLeft = target.closest("[data-match-left]");
  const matchRight = target.closest("[data-match-right]");
  const orderButton = target.closest("[data-order-move]");
  const memoryButton = target.closest("[data-memory-card]");
  const evaluationPage = target.closest("[data-evaluation-page]");
  const evalAnswer = target.closest("[data-eval-answer]");

  if (openButton) return openBook();
  if (mobileButton) return setMobilePage(mobileButton.dataset.mobilePage);
  if (target.closest("[data-credits]")) return creditsDialog.showModal();
  if (target.closest("[data-reset]")) return resetDialog.showModal();
  if (target.closest("[data-continue]")) return goContinue();

  if (theoryPageButton && !theoryPageButton.disabled) {
    const nextPage = Number(theoryPageButton.dataset.theoryPage);
    return turnPage(() => { state.theoryPages[state.selectedStep] = nextPage; }, { direction: nextPage < Number(state.theoryPages[state.selectedStep] || 0) ? "back" : "forward", mobileTarget: "right" });
  }
  if (caseButton) {
    state.theoryCases[state.selectedStep] = Number(caseButton.dataset.caseAnswer);
    playTone(Number(caseButton.dataset.caseAnswer) === stepById(unitById(state.selectedUnit), state.selectedStep).caseStudy.answer);
    save();
    return render();
  }
  if (theoryCheckButton) {
    const step = stepById(unitById(state.selectedUnit), state.selectedStep);
    state.theoryChecks[step.id] = Number(theoryCheckButton.dataset.theoryCheck);
    playTone(state.theoryChecks[step.id] === step.check.answer);
    save();
    return render();
  }
  if (mediaButton) {
    state.mediaSelection[state.selectedStep] = Number(mediaButton.dataset.mediaItem);
    save();
    return render();
  }
  if (target.closest("[data-complete-theory]")) {
    const step = stepById(unitById(state.selectedUnit), state.selectedStep);
    const visitedAll = new Set(state.theoryVisits[step.id] || []).size === 5;
    if (visitedAll && state.theoryChecks[step.id] === step.check.answer) {
      state.completed.add(step.id);
      save();
      playTone(true);
      return navigate("unit", { unitId: state.selectedUnit, direction: "back" });
    }
  }

  const currentStep = state.route === "step" ? stepById(unitById(state.selectedUnit), state.selectedStep) : null;
  if (activityAnswer && currentStep) {
    state.selectedAnswers[currentStep.id] = Number(activityAnswer.dataset.activityAnswer);
    delete state.activityFeedback[currentStep.id];
    save();
    return render();
  }
  if (dragCard && currentStep) {
    state.dragSelection[currentStep.id] = dragCard.dataset.dragCard;
    return render();
  }
  if (dropZone && currentStep && state.dragSelection[currentStep.id]) {
    const data = activityData(currentStep);
    if (!data.placements) data.placements = {};
    data.placements[state.dragSelection[currentStep.id]] = dropZone.dataset.dropZone;
    delete state.dragSelection[currentStep.id];
    delete state.activityFeedback[currentStep.id];
    save();
    return render();
  }
  if (unplaceButton && currentStep) {
    const data = activityData(currentStep);
    if (data.placements) delete data.placements[unplaceButton.dataset.unplace];
    delete state.activityFeedback[currentStep.id];
    save();
    return render();
  }
  if (matchLeft && currentStep) {
    state.matchSelection[currentStep.id] = matchLeft.dataset.matchLeft;
    return render();
  }
  if (matchRight && currentStep && state.matchSelection[currentStep.id]) {
    const data = activityData(currentStep);
    if (!data.matches) data.matches = {};
    const rightId = matchRight.dataset.matchRight;
    Object.keys(data.matches).forEach((leftId) => { if (data.matches[leftId] === rightId) delete data.matches[leftId]; });
    data.matches[state.matchSelection[currentStep.id]] = rightId;
    delete state.matchSelection[currentStep.id];
    delete state.activityFeedback[currentStep.id];
    save();
    return render();
  }
  if (orderButton && currentStep) {
    const data = activityData(currentStep);
    const from = Number(orderButton.dataset.orderMove);
    const to = from + Number(orderButton.dataset.orderDirection);
    [data.order[from], data.order[to]] = [data.order[to], data.order[from]];
    delete state.activityFeedback[currentStep.id];
    save();
    return render();
  }
  if (memoryButton && currentStep && !memoryBusy) {
    const data = activityData(currentStep);
    if (!Array.isArray(data.open)) data.open = [];
    const cardId = memoryButton.dataset.memoryCard;
    if (data.open.includes(cardId)) return;
    data.open.push(cardId);
    if (data.open.length < 2) return render();
    data.moves = (data.moves || 0) + 1;
    memoryBusy = true;
    render();
    const deck = memoryDeck(currentStep);
    const first = deck.find((card) => card.id === data.open[0]);
    const second = deck.find((card) => card.id === data.open[1]);
    window.setTimeout(() => {
      if (first.pairId === second.pairId) {
        data.found.push(first.pairId);
        const pair = currentStep.pairs.find((item) => item[0] === first.pairId);
        state.activityFeedback[currentStep.id] = { ok: true, text: pair[3] };
        playTone(true);
      } else {
        state.activityFeedback[currentStep.id] = { ok: false, text: "Estas tarjetas no forman pareja. Busca el ajuste que elimina directamente la barrera mostrada." };
        playTone(false);
      }
      data.open = [];
      if (data.found.length === currentStep.pairs.length) markComplete(currentStep, currentStep.success);
      memoryBusy = false;
      save();
      render();
    }, 650);
    return;
  }
  if (target.closest("[data-check-activity]") && currentStep) return checkActivity(currentStep);
  if (target.closest("[data-reset-activity]") && currentStep) return resetActivity(currentStep);

  if (evalAnswer && state.route === "evaluation") {
    state.evaluation.answers[state.evaluation.index] = Number(evalAnswer.dataset.evalAnswer);
    save();
    return render();
  }
  if (evaluationPage && !evaluationPage.disabled) {
    const nextIndex = Number(evaluationPage.dataset.evaluationPage);
    return turnPage(() => { state.evaluation.index = nextIndex; save(); }, { direction: nextIndex < Number(state.evaluation.index) ? "back" : "forward", mobileTarget: "right" });
  }
  if (target.closest("[data-finish-evaluation]")) {
    const answered = Object.keys(state.evaluation.answers).length;
    confirmMessage.textContent = answered === evaluationQuestions.length ? "Has respondido todas las preguntas. Después de finalizar verás el resultado y la explicación de cada respuesta." : `Has respondido ${answered} de ${evaluationQuestions.length}. Las preguntas sin respuesta contarán como incorrectas.`;
    return confirmDialog.showModal();
  }
  if (target.closest("[data-retake]")) {
    state.evaluation = { answers: {}, index: 0, submitted: false };
    save();
    return render();
  }

  if (routeButton && !routeButton.disabled) {
    event.preventDefault();
    const route = routeButton.dataset.route;
    const direction = route === "menu" || (route === "unit" && state.route === "step") ? "back" : "forward";
    return navigate(route, { unitId: routeButton.dataset.unit, stepId: routeButton.dataset.step, direction });
  }
});

document.addEventListener("dragstart", (event) => {
  const card = event.target.closest("[data-drag-card]");
  if (!card) return;
  draggedCardId = card.dataset.dragCard;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedCardId);
});

document.addEventListener("dragover", (event) => {
  if (event.target.closest("[data-drop-zone]")) event.preventDefault();
});

document.addEventListener("drop", (event) => {
  const zone = event.target.closest("[data-drop-zone]");
  if (!zone || state.route !== "step") return;
  event.preventDefault();
  const step = stepById(unitById(state.selectedUnit), state.selectedStep);
  if (!step || step.type !== "drag") return;
  const cardId = event.dataTransfer.getData("text/plain") || draggedCardId;
  const data = activityData(step);
  if (!data.placements) data.placements = {};
  data.placements[cardId] = zone.dataset.dropZone;
  draggedCardId = "";
  delete state.activityFeedback[step.id];
  save();
  render();
});

document.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key) && event.target.closest("button, video, .internal-scroll")) {
    if (event.target.closest("button")) event.preventDefault();
  }
});

confirmDialog.addEventListener("close", () => {
  if (confirmDialog.returnValue !== "confirm") return;
  state.evaluation.submitted = true;
  save();
  turnPage(() => {}, { mobileTarget: "left" });
});

resetDialog.addEventListener("close", () => {
  if (resetDialog.returnValue !== "confirm") return;
  localStorage.removeItem(STORAGE_KEY);
  state.completed.clear();
  state.theoryPages = {};
  state.theoryVisits = {};
  state.theoryChecks = {};
  state.theoryCases = {};
  state.mediaSelection = {};
  state.selectedAnswers = {};
  state.activityData = {};
  state.activityFeedback = {};
  state.evaluation = { answers: {}, index: 0, submitted: false };
  state.route = "menu";
  render();
});

window.addEventListener("resize", () => window.requestAnimationFrame(drawMatchLines));

const previewParams = new URLSearchParams(window.location.search);
const previewRoute = previewParams.get("preview");
const previewDemo = previewParams.get("demo");
if (previewDemo === "u1" || previewDemo === "u2") {
  units.slice(0, previewDemo === "u1" ? 1 : 2).forEach((unit) => unit.steps.forEach((step) => state.completed.add(step.id)));
}
if (previewDemo === "complete" || previewDemo === "result") {
  allSteps().forEach((step) => state.completed.add(step.id));
}
if (previewDemo === "result") {
  state.evaluation = {
    answers: Object.fromEntries(evaluationQuestions.map((question, index) => [index, index === 2 ? 0 : question.answer])),
    index: evaluationQuestions.length - 1,
    submitted: true
  };
}
if (previewRoute) {
  coverScreen.hidden = true;
  bookStage.classList.remove("is-hidden");
  state.mobilePage = previewParams.get("side") === "right" ? "right" : "left";
  state.route = previewRoute === "unit1" ? "unit" : previewRoute;
  if (previewRoute === "unit1") state.selectedUnit = "u1";
  if (previewRoute === "unit") state.selectedUnit = previewParams.get("unit") || "u1";
  if (previewRoute === "step") {
    state.selectedUnit = previewParams.get("unit") || "u1";
    state.selectedStep = previewParams.get("step") || "u1-t1";
    state.theoryPages[state.selectedStep] = Number(previewParams.get("page") || 0);
  }
  render();
}
