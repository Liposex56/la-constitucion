"use strict";

const STORAGE_KEY = "constitucion-libro-v1";

const icons = {
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 11.5 12 4l9 7.5v8a1 1 0 0 1-1 1h-5.4v-6h-5.2v6H4a1 1 0 0 1-1-1v-8Zm2 1v6h2.4v-6h9.2v6H19v-6.1l-7-5.8-7 5.9Z"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 4.5c2.4 0 4.3.5 6 1.6v13.1c-1.7-.9-3.6-1.3-6-1.3H3.5V4.5H5Zm15.5 0v13.4H19c-2.4 0-4.3.4-6 1.3V6.1c1.7-1.1 3.6-1.6 6-1.6h1.5ZM5.5 6.4v9.6c1.3 0 2.5.1 3.6.4V7c-1-.4-2.2-.6-3.6-.6Zm13 0c-1.4 0-2.6.2-3.6.6v9.4c1.1-.3 2.3-.4 3.6-.4V6.4Z"/></svg>',
  pillar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 20h14v2H5v-2Zm1-3h12v2H6v-2Zm2-9h2v8H8V8Zm3 0h2v8h-2V8Zm3 0h2v8h-2V8ZM4 6l8-4 8 4v1H4V6Z"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 2h6l1 2h3v18H5V4h3l1-2Zm1.2 4-.4-1H7v15h10V5h-2.8l-.4 1h-3.6ZM8 10h8v2H8v-2Zm0 4h8v2H8v-2Z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 4h10v2h3v3a5 5 0 0 1-4.2 4.9A5.8 5.8 0 0 1 13 16.5V19h4v2H7v-2h4v-2.5a5.8 5.8 0 0 1-2.8-2.6A5 5 0 0 1 4 9V6h3V4Zm10 4v3.7A3 3 0 0 0 18 9V8h-1ZM6 8v1a3 3 0 0 0 1 2.7V8H6Zm3-2v5.2a3 3 0 1 0 6 0V6H9Z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 10V8a5 5 0 0 1 10 0v2h2v11H5V10h2Zm2 0h6V8a3 3 0 0 0-6 0v2Zm-2 2v7h10v-7H7Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m9.5 16.6-4.1-4.1L4 13.9l5.5 5.5L20.5 8.4 19.1 7 9.5 16.6Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m14 5 7 7-7 7-1.4-1.4 4.6-4.6H3v-2h14.2l-4.6-4.6L14 5Z"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10 5 3 12l7 7 1.4-1.4L6.8 13H21v-2H6.8l4.6-4.6L10 5Z"/></svg>'
};

const units = [
  {
    id: "u1",
    label: "Unidad 1",
    title: "Vida, desarrollo, identidad y familia",
    description: "Reconoce la primera red de protección de la niñez: vivir, crecer, tener identidad y pertenecer a una familia cuidadora.",
    quote: "Los derechos de la niñez funcionan como una red: si una parte se rompe, las demás también se debilitan.",
    steps: [
      {
        id: "u1-t1",
        kind: "theory",
        title: "Teoría 1",
        subtitle: "La red inicial de protección",
        points: [
          "El derecho a la vida es la base de todos los demás derechos.",
          "El desarrollo necesita cuidado, salud, educación, juego y oportunidades reales.",
          "La identidad permite ser reconocido por un nombre, una historia y una pertenencia."
        ],
        fact: "Artículo 44: los derechos de los niños prevalecen sobre los derechos de los demás."
      },
      {
        id: "u1-a1",
        kind: "choice",
        title: "Actividad 1",
        subtitle: "Reconocer el derecho afectado",
        question: "Un niño tiene nombre y familia, pero no recibe cuidado ni protección. ¿Qué idea resume mejor la situación?",
        options: [
          "Solo se afecta el derecho al juego.",
          "Se debilita la red de vida, desarrollo y protección.",
          "No hay afectación porque tiene familia."
        ],
        answer: 1
      },
      {
        id: "u1-t2",
        kind: "theory",
        title: "Teoría 2",
        subtitle: "Familia, cuidado e identidad",
        points: [
          "La familia debe ser un entorno de protección, afecto y orientación.",
          "La identidad no es solo un documento: también incluye historia, cultura y reconocimiento.",
          "Cuando la escuela protege estos derechos, ayuda a construir ciudadanía."
        ],
        fact: "Una acción protectora debe reconocer el problema y proponer apoyo, no culpar al niño o aislarlo."
      },
      {
        id: "u1-a2",
        kind: "classify",
        title: "Actividad 2",
        subtitle: "Clasifica acciones protectoras",
        categories: ["Protege", "No protege"],
        items: [
          ["Escuchar al niño y activar apoyo escolar.", "Protege"],
          ["Ignorar la situación porque ocurre en casa.", "No protege"],
          ["Garantizar nombre, cuidado y acompañamiento.", "Protege"]
        ]
      },
      {
        id: "u1-final",
        kind: "choice",
        title: "Actividad final",
        subtitle: "Caso de la unidad",
        question: "¿Qué debe hacer la escuela ante una barrera que afecta vida, cuidado o identidad?",
        options: [
          "Observar sin actuar.",
          "Ajustar el entorno y activar una ruta de protección.",
          "Esperar a que el estudiante lo resuelva solo."
        ],
        answer: 1,
        final: true
      }
    ]
  },
  {
    id: "u2",
    label: "Unidad 2",
    title: "Participación, igualdad, protección y juego",
    description: "Estudia derechos que permiten convivir, expresar opiniones, ser tratado con igualdad y aprender mediante el juego.",
    quote: "Participar no es hablar más fuerte: es ser escuchado con respeto y poder decidir.",
    steps: [
      {
        id: "u2-t1",
        kind: "theory",
        title: "Teoría 1",
        subtitle: "Democracia cotidiana",
        points: [
          "La participación permite opinar, preguntar y tomar parte en decisiones.",
          "La igualdad exige evitar discriminación por diferencias físicas, sociales, culturales o familiares.",
          "La protección cuida a niños, niñas y adolescentes frente a riesgos."
        ],
        fact: "El artículo 41 conecta la escuela con prácticas democráticas para aprender participación ciudadana."
      },
      {
        id: "u2-a1",
        kind: "classify",
        title: "Actividad 1",
        subtitle: "Acciones de convivencia",
        categories: ["Ayuda", "Daña"],
        items: [
          ["Dar turno de palabra a todos.", "Ayuda"],
          ["Excluir a alguien del juego por ser diferente.", "Daña"],
          ["Escuchar antes de decidir.", "Ayuda"]
        ]
      },
      {
        id: "u2-t2",
        kind: "theory",
        title: "Teoría 2",
        subtitle: "Juego, inclusión y protección",
        points: [
          "El juego desarrolla lenguaje, imaginación, movimiento y convivencia.",
          "Un juego justo incluye reglas claras y trato respetuoso.",
          "La inclusión exige ajustar la actividad para que todos puedan participar."
        ],
        fact: "No basta con invitar a participar: hay que quitar las barreras que impiden hacerlo."
      },
      {
        id: "u2-a2",
        kind: "choice",
        title: "Actividad 2",
        subtitle: "Decidir con igualdad",
        question: "En un grupo, solo algunos pueden hablar y otros quedan por fuera del juego. ¿Qué derechos aparecen?",
        options: [
          "Participación, igualdad y juego.",
          "Solo propiedad privada.",
          "Ninguno, porque es una decisión del grupo."
        ],
        answer: 0
      },
      {
        id: "u2-final",
        kind: "choice",
        title: "Actividad final",
        subtitle: "Reto de convivencia",
        question: "¿Cuál es una acción que protege el derecho a la igualdad?",
        options: [
          "Tratar con respeto sin discriminar.",
          "Hacer equipos siempre con los mismos.",
          "Burlarse de quien aprende diferente."
        ],
        answer: 0,
        final: true
      }
    ]
  },
  {
    id: "u3",
    label: "Unidad 3",
    title: "Educación, salud, trabajo infantil y discapacidad",
    description: "Relaciona escuela, salud, protección contra explotación e inclusión como condiciones para aprender y vivir dignamente.",
    quote: "La inclusión no consiste en apartar a quien necesita apoyo, sino en ajustar el entorno.",
    steps: [
      {
        id: "u3-t1",
        kind: "theory",
        title: "Teoría 1",
        subtitle: "Educación y salud",
        points: [
          "La educación debe formar en derechos humanos, paz, democracia, trabajo y recreación.",
          "La salud permite aprender mejor y participar con bienestar.",
          "Una escuela protectora enseña, cuida y adapta sus espacios."
        ],
        fact: "Artículo 67: la educación forma en el respeto a los derechos humanos, la paz y la democracia."
      },
      {
        id: "u3-a1",
        kind: "choice",
        title: "Actividad 1",
        subtitle: "Artículo clave",
        question: "¿Qué artículo relaciona educación con derechos humanos, paz y democracia?",
        options: ["Artículo 67", "Artículo 11", "Artículo 33"],
        answer: 0
      },
      {
        id: "u3-t2",
        kind: "theory",
        title: "Teoría 2",
        subtitle: "Protección e inclusión",
        points: [
          "La protección contra el trabajo infantil defiende el tiempo de estudio, juego y descanso.",
          "La discapacidad no debe ser motivo de exclusión.",
          "La inclusión requiere acceso, apoyo, respeto y participación real."
        ],
        fact: "Si una barrera impide participar, la respuesta correcta es ajustar el entorno."
      },
      {
        id: "u3-a2",
        kind: "classify",
        title: "Actividad 2",
        subtitle: "Inclusión o barrera",
        categories: ["Inclusión", "Barrera"],
        items: [
          ["Adaptar materiales para que todos puedan usarlos.", "Inclusión"],
          ["Dejar por fuera a quien necesita apoyo.", "Barrera"],
          ["Permitir participación con acompañamiento.", "Inclusión"]
        ]
      },
      {
        id: "u3-final",
        kind: "choice",
        title: "Actividad final",
        subtitle: "Cierre de unidad",
        question: "Una niña no puede participar por una barrera física. ¿Qué debe hacerse?",
        options: [
          "Ajustar el entorno para garantizar participación.",
          "Pedirle que mire desde lejos.",
          "Cancelar la actividad para todos."
        ],
        answer: 0,
        final: true
      }
    ]
  }
];

const evaluationQuestions = [
  {
    question: "La Constitución se estudia en colegios e instituciones educativas porque...",
    options: ["lo ordena el Artículo 41", "solo sirve para abogados", "no tiene relación con la escuela"],
    answer: 0
  },
  {
    question: "Si un niño necesita salud, educación, familia y protección, se relaciona principalmente con...",
    options: ["Artículo 44", "Artículo 20", "Artículo 95"],
    answer: 0
  },
  {
    question: "Una acción que protege el derecho a la igualdad es...",
    options: ["tratar con respeto sin discriminar", "excluir por diferencias", "impedir participar"],
    answer: 0
  },
  {
    question: "El derecho al juego es importante porque ayuda al desarrollo, aprendizaje y bienestar.",
    options: ["Verdadero", "Falso"],
    answer: 0
  }
];

const state = {
  route: "cover",
  selectedUnit: null,
  selectedStep: null,
  selectedAnswers: {},
  classifications: {},
  completed: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")),
  evaluationAnswers: {}
};

const coverScreen = document.getElementById("coverScreen");
const closedBook = document.getElementById("closedBook");
const bookStage = document.getElementById("bookStage");
const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");
const creditsDialog = document.getElementById("creditsDialog");

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.completed]));
}

function playTone(success = true) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = success ? "sine" : "triangle";
    oscillator.frequency.value = success ? 660 : 180;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.18);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
  } catch (error) {
    // Audio is optional; browsers can block it without affecting the activity.
  }
}

function allSteps() {
  return units.flatMap((unit) => unit.steps.map((step) => ({ ...step, unitId: unit.id })));
}

function unitById(unitId) {
  return units.find((unit) => unit.id === unitId);
}

function stepById(unit, stepId) {
  return unit.steps.find((step) => step.id === stepId);
}

function isCompleted(id) {
  return state.completed.has(id);
}

function unitComplete(unitId) {
  const unit = unitById(unitId);
  return unit.steps.every((step) => isCompleted(step.id));
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
  const done = items.filter((item) => isCompleted(item.id)).length;
  return Math.round((done / items.length) * 100);
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
  return `<div class="page-content ${extra}">${content}</div>`;
}

function buttonBack(label, route, unitId = "") {
  return `<button class="secondary-action back-button" type="button" data-route="${route}" ${unitId ? `data-unit="${unitId}"` : ""}>${renderIcon("back")} ${label}</button>`;
}

function renderShell(left, right) {
  leftPage.innerHTML = left;
  rightPage.innerHTML = right;
}

function openBook() {
  closedBook.classList.add("is-opening");
  window.setTimeout(() => {
    coverScreen.hidden = true;
    bookStage.classList.remove("is-hidden");
    state.route = "menu";
    render();
  }, 620);
}

function renderMenu() {
  const progress = globalProgress();
  const target = nextTarget();
  const continueLabel = target.type === "evaluation" ? "Ir a evaluación" : target.type === "step" ? "Continuar ruta" : "Ver unidad pendiente";

  const left = page(`
    <div class="seal">${renderIcon("book")}</div>
    <p class="unit-tag">Bienvenido a</p>
    <h1 class="page-title">Constitución Política y derechos humanos</h1>
    <div class="ornament" aria-hidden="true"></div>
    <p class="page-subtitle">Un libro digital para reconocer derechos fundamentales, practicar decisiones ciudadanas y avanzar por unidades desbloqueables.</p>
    <div class="progress-block">
      <span class="progress-label">Progreso general</span>
      <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
      <span class="progress-text">${progress}% completado</span>
    </div>
    <div class="unit-actions">
      <button class="primary-action" type="button" data-continue>${continueLabel}</button>
    </div>
    <img class="book-illustration" src="imagenes/libro-constitucion.svg" alt="Ilustración académica de Constitución y derechos" />
  `, "centered");

  const items = [
    ["home", "Inicio", "Resumen, instrucciones y avance", "home", true],
    ["pillar", "Unidad 1", units[0].title, "unit", unitUnlocked("u1"), "u1"],
    ["pillar", "Unidad 2", units[1].title, "unit", unitUnlocked("u2"), "u2"],
    ["book", "Unidad 3", units[2].title, "unit", unitUnlocked("u3"), "u3"],
    ["clipboard", "Evaluación final", evaluationUnlocked() ? "Disponible" : "Completa todas las unidades", "evaluation", evaluationUnlocked()]
  ];

  const right = page(`
    <ul class="menu-list">
      ${items.map(([icon, title, note, route, unlocked, unitId]) => `
        <li>
          <button class="menu-item ${unlocked ? "" : "locked"}" type="button" data-route="${route}" ${unitId ? `data-unit="${unitId}"` : ""} ${unlocked ? "" : "disabled"}>
            <span class="menu-icon">${renderIcon(unlocked ? icon : "lock")}</span>
            <span>
              <span class="menu-title">${title}</span>
              <span class="menu-note">${note}</span>
            </span>
            <span class="menu-arrow">${unlocked ? "›" : "Bloqueado"}</span>
          </button>
        </li>
      `).join("")}
    </ul>
    <div class="credits-row">
      <button class="small-button" type="button" data-credits>Créditos</button>
    </div>
  `);

  renderShell(left, right);
}

function renderHome() {
  const badges = units.map((unit) => `
    <div class="badge ${unitComplete(unit.id) ? "earned" : ""}">
      <strong>${unit.label}</strong><br />
      ${unitComplete(unit.id) ? "Completada" : unitUnlocked(unit.id) ? "Disponible" : "Bloqueada"}
    </div>
  `).join("");

  const left = page(`
    ${buttonBack("Menú", "menu")}
    <p class="unit-tag">Inicio</p>
    <h1 class="page-title">Cómo avanzar en el libro</h1>
    <p class="unit-description">Lee cada teoría, completa la actividad que se desbloquea y avanza en orden. Las unidades bloqueadas se muestran para que sepas qué sigue, pero solo se abren cuando cumples el requisito.</p>
    <div class="progress-block">
      <span class="progress-label">Progreso general</span>
      <div class="progress-track"><div class="progress-fill" style="width:${globalProgress()}%"></div></div>
      <span class="progress-text">${globalProgress()}% completado</span>
    </div>
  `, "centered");

  const right = page(`
    <div class="fact-card">
      <strong>Regla principal</strong>
      Primero teoría, luego actividad. La Unidad 2 se desbloquea al completar la Unidad 1; la Unidad 3 después de la Unidad 2.
    </div>
    <div class="badge-grid">${badges}</div>
    <div class="unit-actions">
      <button class="primary-action" type="button" data-continue>Comenzar o continuar</button>
    </div>
  `, "page-scroll");

  renderShell(left, right);
}

function renderUnit(unitId) {
  const unit = unitById(unitId);
  const percent = progressPercent(unit.steps);

  const left = page(`
    ${buttonBack("Regresar al menú", "menu")}
    <div class="seal">${renderIcon(unit.id === "u3" ? "book" : "pillar")}</div>
    <p class="unit-tag">${unit.label}</p>
    <h1 class="page-title">${unit.title}</h1>
    <div class="ornament" aria-hidden="true"></div>
    <p class="unit-description">${unit.description}</p>
    <div class="progress-block">
      <span class="progress-label">Progreso de la unidad</span>
      <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>
      <span class="progress-text">${percent}% completado</span>
    </div>
    <div class="fact-card"><strong>Idea clave</strong>${unit.quote}</div>
    <img class="book-illustration" src="imagenes/libro-constitucion.svg" alt="" />
  `, "centered");

  const right = page(`
    <div class="content-grid">
      ${unit.steps.map((step, index) => {
        const unlocked = stepUnlocked(unit, index);
        const done = isCompleted(step.id);
        const statusClass = done ? "done" : unlocked ? "current" : "locked";
        const statusText = done ? "Completado" : unlocked ? "Disponible" : "Bloqueado";
        const icon = done ? "check" : unlocked ? (step.kind === "theory" ? "book" : step.final ? "trophy" : "clipboard") : "lock";
        return `
          <button class="content-card ${step.final ? "wide" : ""} ${unlocked ? "unlocked" : "locked"}" type="button" data-route="step" data-unit="${unit.id}" data-step="${step.id}" ${unlocked ? "" : "disabled"}>
            <span class="card-icon">${renderIcon(icon)}</span>
            <span>
              <h3>${step.title}</h3>
              <p>${step.subtitle}</p>
              <span class="status ${statusClass}">${statusText}</span>
            </span>
          </button>
        `;
      }).join("")}
    </div>
  `, "page-scroll");

  renderShell(left, right);
}

function renderTheory(unit, step) {
  const left = page(`
    ${buttonBack("Volver a la unidad", "unit", unit.id)}
    <div class="seal">${renderIcon("book")}</div>
    <p class="unit-tag">${unit.label} · ${step.title}</p>
    <h1 class="page-title">${step.subtitle}</h1>
    <div class="ornament" aria-hidden="true"></div>
    <p class="unit-description">${unit.description}</p>
    <img class="book-illustration" src="imagenes/libro-constitucion.svg" alt="" />
  `, "centered");

  const right = page(`
    <ul class="theory-list">
      ${step.points.map((point) => `<li>${point}</li>`).join("")}
    </ul>
    <div class="fact-card"><strong>Dato importante</strong>${step.fact}</div>
    <div class="theory-actions">
      <button class="primary-action" type="button" data-complete="${step.id}">${isCompleted(step.id) ? "Teoría completada" : "Marcar teoría como completada"}</button>
    </div>
  `, "page-scroll");

  renderShell(left, right);
}

function renderChoice(unit, step) {
  const selected = state.selectedAnswers[step.id];
  const checked = selected !== undefined;
  const correct = checked && selected === step.answer;

  const left = page(`
    ${buttonBack("Volver a la unidad", "unit", unit.id)}
    <div class="seal">${renderIcon(step.final ? "trophy" : "clipboard")}</div>
    <p class="unit-tag">${unit.label} · ${step.title}</p>
    <h1 class="page-title">${step.subtitle}</h1>
    <p class="unit-description">${step.final ? "Demuestra lo aprendido en esta unidad." : "Selecciona una respuesta y revisa la retroalimentación."}</p>
  `, "centered");

  const right = page(`
    <div class="activity-panel">
      <div class="question-box"><h3>${step.question}</h3></div>
      <div class="answers">
        ${step.options.map((option, index) => {
          const selectedClass = selected === index ? (index === step.answer ? "correct" : "wrong") : "";
          return `<button class="answer-button ${selectedClass}" type="button" data-answer="${index}">
            <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
          </button>`;
        }).join("")}
      </div>
      <div class="feedback ${checked ? (correct ? "ok" : "bad") : ""}">
        ${!checked ? "Elige una respuesta." : correct ? "Correcto. Puedes completar este contenido." : "Revisa la teoría y vuelve a intentarlo."}
      </div>
      <div class="activity-actions">
        <button class="primary-action" type="button" data-complete="${step.id}" ${correct || isCompleted(step.id) ? "" : "disabled"}>${isCompleted(step.id) ? "Contenido completado" : "Completar contenido"}</button>
      </div>
    </div>
  `, "page-scroll");

  renderShell(left, right);
}

function renderClassify(unit, step) {
  const answers = state.classifications[step.id] || {};
  const answered = step.items.every((_, index) => answers[index]);
  const correct = answered && step.items.every((item, index) => answers[index] === item[1]);

  const left = page(`
    ${buttonBack("Volver a la unidad", "unit", unit.id)}
    <div class="seal">${renderIcon("clipboard")}</div>
    <p class="unit-tag">${unit.label} · ${step.title}</p>
    <h1 class="page-title">${step.subtitle}</h1>
    <p class="unit-description">Clasifica cada situación. La retroalimentación aparece cuando completes todas las tarjetas.</p>
  `, "centered");

  const right = page(`
    <div class="activity-panel">
      <div class="classification-list">
        ${step.items.map((item, index) => `
          <div class="classification-item">
            <strong>${item[0]}</strong>
            <div class="classification-options">
              ${step.categories.map((category) => `
                <button type="button" class="${answers[index] === category ? "selected" : ""}" data-classify-index="${index}" data-classify-value="${category}">${category}</button>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      <div class="feedback ${answered ? (correct ? "ok" : "bad") : ""}">
        ${!answered ? "Selecciona una categoría en cada tarjeta." : correct ? "Correcto. Clasificaste todas las situaciones." : "Hay una o más tarjetas por corregir."}
      </div>
      <div class="activity-actions">
        <button class="primary-action" type="button" data-complete="${step.id}" ${correct || isCompleted(step.id) ? "" : "disabled"}>${isCompleted(step.id) ? "Contenido completado" : "Completar contenido"}</button>
      </div>
    </div>
  `, "page-scroll");

  renderShell(left, right);
}

function renderStep(unitId, stepId) {
  const unit = unitById(unitId);
  const step = stepById(unit, stepId);
  if (step.kind === "theory") return renderTheory(unit, step);
  if (step.kind === "classify") return renderClassify(unit, step);
  return renderChoice(unit, step);
}

function renderEvaluation() {
  if (!evaluationUnlocked()) {
    const left = page(`
      ${buttonBack("Regresar al menú", "menu")}
      <div class="seal">${renderIcon("lock")}</div>
      <p class="unit-tag">Evaluación final</p>
      <h1 class="page-title">Aún está bloqueada</h1>
      <p class="unit-description">Completa las tres unidades para abrir esta evaluación.</p>
    `, "centered");
    const right = page(`
      <div class="badge-grid">
        ${units.map((unit) => `<div class="badge ${unitComplete(unit.id) ? "earned" : ""}"><strong>${unit.label}</strong><br>${unitComplete(unit.id) ? "Completada" : "Pendiente"}</div>`).join("")}
      </div>
      <div class="unit-actions">
        <button class="primary-action" type="button" data-continue>Ir a la parte pendiente</button>
      </div>
    `);
    renderShell(left, right);
    return;
  }

  const answered = Object.keys(state.evaluationAnswers).length;
  const score = evaluationQuestions.filter((question, index) => state.evaluationAnswers[index] === question.answer).length;
  const done = answered === evaluationQuestions.length;

  const left = page(`
    ${buttonBack("Regresar al menú", "menu")}
    <div class="seal">${renderIcon("trophy")}</div>
    <p class="unit-tag">Evaluación final</p>
    <h1 class="page-title">Demuestra lo aprendido</h1>
    <p class="unit-description">Responde las preguntas. Al finalizar recibirás tu resultado y retroalimentación.</p>
    <div class="progress-block">
      <span class="progress-label">Progreso</span>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.round((answered / evaluationQuestions.length) * 100)}%"></div></div>
      <span class="progress-text">${answered} de ${evaluationQuestions.length} respondidas</span>
    </div>
  `, "centered");

  const right = page(`
    <div class="evaluation-list">
      ${evaluationQuestions.map((question, index) => `
        <div class="question-box">
          <p class="unit-tag">Pregunta ${index + 1}</p>
          <h3>${question.question}</h3>
          <div class="answers">
            ${question.options.map((option, optionIndex) => `
              <button class="answer-button ${state.evaluationAnswers[index] === optionIndex ? "selected" : ""}" type="button" data-eval-question="${index}" data-eval-answer="${optionIndex}">
                <span class="answer-letter">${String.fromCharCode(65 + optionIndex)}</span>
                <span>${option}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `).join("")}
      ${done ? `
        <div class="result-card">
          <span class="result-score">${score}/${evaluationQuestions.length}</span>
          <strong>${score >= 3 ? "Evaluación aprobada" : "Puedes intentarlo de nuevo"}</strong>
          <p>${score >= 3 ? "Insignia académica desbloqueada: Guardián de derechos." : "Revisa las unidades y vuelve a presentar la evaluación."}</p>
        </div>
      ` : ""}
    </div>
  `, "page-scroll");

  renderShell(left, right);
}

function completeStep(stepId) {
  state.completed.add(stepId);
  save();
  playTone(true);
  const unit = units.find((item) => item.steps.some((step) => step.id === stepId));
  renderUnit(unit.id);
}

function goContinue() {
  const target = nextTarget();
  if (target.type === "evaluation") {
    state.route = "evaluation";
  } else if (target.type === "step") {
    state.route = "step";
    state.selectedUnit = target.unitId;
    state.selectedStep = target.stepId;
  } else {
    state.route = "unit";
    state.selectedUnit = target.unitId;
  }
  render();
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
  const openButton = event.target.closest("#openBookButton");
  const routeButton = event.target.closest("[data-route]");
  const continueButton = event.target.closest("[data-continue]");
  const creditsButton = event.target.closest("[data-credits]");
  const completeButton = event.target.closest("[data-complete]");
  const answerButton = event.target.closest("[data-answer]");
  const classifyButton = event.target.closest("[data-classify-index]");
  const evalButton = event.target.closest("[data-eval-question]");

  if (openButton) {
    event.preventDefault();
    openBook();
    return;
  }

  if (creditsButton) {
    event.preventDefault();
    creditsDialog.showModal();
    return;
  }

  if (continueButton) {
    event.preventDefault();
    goContinue();
    return;
  }

  if (completeButton) {
    event.preventDefault();
    completeStep(completeButton.dataset.complete);
    return;
  }

  if (answerButton && state.route === "step") {
    event.preventDefault();
    state.selectedAnswers[state.selectedStep] = Number(answerButton.dataset.answer);
    const unit = unitById(state.selectedUnit);
    const step = stepById(unit, state.selectedStep);
    playTone(Number(answerButton.dataset.answer) === step.answer);
    render();
    return;
  }

  if (classifyButton && state.route === "step") {
    event.preventDefault();
    const key = state.selectedStep;
    if (!state.classifications[key]) state.classifications[key] = {};
    state.classifications[key][classifyButton.dataset.classifyIndex] = classifyButton.dataset.classifyValue;
    render();
    return;
  }

  if (evalButton) {
    event.preventDefault();
    state.evaluationAnswers[evalButton.dataset.evalQuestion] = Number(evalButton.dataset.evalAnswer);
    renderEvaluation();
    return;
  }

  if (routeButton) {
    event.preventDefault();
    const route = routeButton.dataset.route;
    if (route === "unit") {
      state.route = "unit";
      state.selectedUnit = routeButton.dataset.unit;
    } else if (route === "step") {
      state.route = "step";
      state.selectedUnit = routeButton.dataset.unit;
      state.selectedStep = routeButton.dataset.step;
    } else {
      state.route = route;
    }
    if (bookStage.classList.contains("is-hidden")) {
      coverScreen.hidden = true;
      bookStage.classList.remove("is-hidden");
    }
    render();
  }
});

const previewRoute = new URLSearchParams(window.location.search).get("preview");
if (previewRoute) {
  coverScreen.hidden = true;
  bookStage.classList.remove("is-hidden");
  state.route = previewRoute === "unit1" ? "unit" : previewRoute;
  if (previewRoute === "unit1") state.selectedUnit = "u1";
  render();
}
