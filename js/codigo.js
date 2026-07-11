const units = [
  {
    id: "unidad-1",
    label: "Unidad 1",
    title: "Vida, desarrollo, identidad y familia",
    unlockText: "Disponible desde el inicio",
    resources: [
      ["u1-vida-a1", "Derecho a la vida", "Actividad 1", "Reconoce la vida como derecho fundamental.", "Unidad1/DVida/1actividad/index.html"],
      ["u1-vida-a2", "Derecho a la vida", "Actividad 2", "Refuerza situaciones de proteccion de la vida.", "Unidad1/DVida/2actividad/index.html"],
      ["u1-desarrollo-a1", "Derecho al desarrollo", "Actividad 1", "Relaciona crecimiento, bienestar y oportunidades.", "Unidad1/DDesarrollo/1actividadDD/index.html"],
      ["u1-desarrollo-a2", "Derecho al desarrollo", "Actividad 2", "Practica conceptos del desarrollo integral.", "Unidad1/DDesarrollo/2actividadDD/index.html"],
      ["u1-identidad-a1", "Derecho a la identidad", "Actividad 1", "Trabaja nombre, historia e identidad personal.", "Unidad1/DIdentidad/1actividadDI/index.html"],
      ["u1-identidad-a2", "Derecho a la identidad", "Actividad 2", "Afianza el derecho a ser reconocido.", "Unidad1/DIdentidad/2actividadDI/index.html"],
      ["u1-familia-a1", "Derecho a tener una familia", "Actividad 1", "Construye relaciones familiares y de cuidado.", "Unidad1/DFamilia/Arbol_genealogico/indexArbolge.html"],
      ["u1-familia-a2", "Derecho a tener una familia", "Actividad 2", "Evalua aprendizajes sobre familia y proteccion.", "Unidad1/DFamilia/Arbol_evaluaFamilia/index_arbol2.html"]
    ]
  },
  {
    id: "unidad-2",
    label: "Unidad 2",
    title: "Participacion, igualdad, proteccion y juego",
    unlockText: "Completa toda la Unidad 1 para desbloquear",
    resources: [
      ["u2-participacion-a1", "Derecho a la participacion", "Actividad 1", "Aprende a expresar opiniones y decidir.", "Unidad2/t1DParticipacion/1actividadDP/index.html"],
      ["u2-participacion-a2", "Derecho a la participacion", "Actividad 2", "Refuerza la participacion en contextos cercanos.", "Unidad2/t1DParticipacion/2actividadDP/index.html"],
      ["u2-igualdad-a1", "Derecho a la igualdad", "Actividad 1", "Identifica acciones de igualdad y respeto.", "Unidad2/t2DIgualdad/1actividadDI/index.html"],
      ["u2-igualdad-a2", "Derecho a la igualdad", "Actividad 2", "Completa un ejercicio visual sobre igualdad.", "Unidad2/t2DIgualdad/2actividadDI/index.html"],
      ["u2-proteccion-a1", "Derecho a la proteccion", "Actividad 1", "Reconoce situaciones de cuidado y seguridad.", "Unidad2/t3DProteccion/1actividadDPRO/index.html"],
      ["u2-proteccion-a2", "Derecho a la proteccion", "Actividad 2", "Responde un reto de verdadero y falso.", "Unidad2/t3DProteccion/2actividadDPRO/index.html"],
      ["u2-juego-a1", "Derecho al juego y al desarrollo", "Actividad 1", "Relaciona juego, aprendizaje y bienestar.", "Unidad2/t4DJuego y desarrollo/1actividadJD/index.html"],
      ["u2-juego-a2", "Derecho al juego y al desarrollo", "Actividad 2", "Diferencia situaciones positivas y negativas.", "Unidad2/t4DJuego y desarrollo/2actividadJD/index.html"]
    ]
  },
  {
    id: "unidad-3",
    label: "Unidad 3",
    title: "Educacion, salud, trabajo infantil y discapacidad",
    unlockText: "Completa toda la Unidad 2 para desbloquear",
    resources: [
      ["u3-educacion-a1", "Derecho a la educacion", "Actividad 1", "Explora el derecho a aprender y asistir a la escuela.", "Unidad3/t1DEducacion/actividad1EDU/index.html"],
      ["u3-educacion-a2", "Derecho a la educacion", "Actividad 2", "Clasifica elementos de una educacion digna.", "Unidad3/t1DEducacion/actividad2EDU/index.html"],
      ["u3-salud-a1", "Derecho a la salud", "Actividad 1", "Identifica habitos y espacios de cuidado.", "Unidad3/t2DSalud/1actividadSAL/index.html"],
      ["u3-salud-a2", "Derecho a la salud", "Actividad 2", "Practica decisiones relacionadas con salud.", "Unidad3/t2DSalud/2actividadSAL/index.html"],
      ["u3-trabajo-a1", "Proteccion contra el trabajo infantil", "Actividad 1", "Reconoce riesgos y formas de proteccion.", "Unidad3/t3Dptrabajo infantil/actividad1LAB/index.html"],
      ["u3-trabajo-a2", "Proteccion contra el trabajo infantil", "Actividad 2", "Resuelve situaciones frente al trabajo infantil.", "Unidad3/t3Dptrabajo infantil/actividad2LAB/index.html"],
      ["u3-discapacidad-a1", "Derechos de ninos y ninas con discapacidad", "Actividad 1", "Aprende sobre inclusion, apoyo y respeto.", "Unidad3/t4Dninos con discapacidad/1actividadDIS/index.html"],
      ["u3-discapacidad-a2", "Derechos de ninos y ninas con discapacidad", "Actividad 2", "Completa un ejercicio interactivo sobre inclusion.", "Unidad3/t4Dninos con discapacidad/2actividadDIS/index.html"]
    ]
  }
].map((unit) => ({
  ...unit,
  resources: unit.resources.map(([id, title, type, description, path]) => ({
    id,
    title,
    type,
    description,
    path,
    unitId: unit.id,
    unitLabel: unit.label
  }))
}));

const rights = {
  vida: ["Derecho a la vida", "La vida es inviolable y es la base para ejercer los demas derechos."],
  igualdad: ["Derecho a la igualdad", "Todas las personas nacen libres e iguales ante la ley y deben recibir la misma proteccion."],
  educacion: ["Derecho a la educacion", "La educacion debe formar en derechos humanos, paz, democracia, trabajo y recreacion."],
  salud: ["Derecho a la salud", "Ninos, ninas y adolescentes tienen derecho a salud, seguridad social y cuidado integral."],
  familia: ["Derecho a tener una familia", "La familia, el cuidado y el amor hacen parte de los derechos fundamentales de la ninez."],
  participacion: ["Derecho a participar", "La Constitucion promueve practicas democraticas para aprender valores de participacion ciudadana."]
};

const challenges = [
  {
    question: "Que articulo obliga a estudiar la Constitucion?",
    options: ["Articulo 41", "Articulo 11", "Articulo 67"],
    answer: "Articulo 41",
    ok: "Correcto: el Articulo 41 habla del estudio obligatorio de la Constitucion e instruccion civica."
  },
  {
    question: "Que articulo menciona educacion para derechos humanos, paz y democracia?",
    options: ["Articulo 67", "Articulo 44", "Articulo 13"],
    answer: "Articulo 67",
    ok: "Bien: el Articulo 67 conecta educacion con derechos humanos, paz y democracia."
  },
  {
    question: "Que articulo enumera derechos fundamentales de ninos y ninas?",
    options: ["Articulo 44", "Articulo 27", "Articulo 85"],
    answer: "Articulo 44",
    ok: "Exacto: el Articulo 44 reune derechos fundamentales de la ninez."
  }
];

const finalQuestions = [
  {
    prompt: "La Constitucion se estudia en colegios e instituciones educativas porque...",
    options: ["lo ordena el Articulo 41", "solo sirve para abogados", "no tiene relacion con la escuela"],
    answer: "lo ordena el Articulo 41"
  },
  {
    prompt: "Si un nino necesita salud, educacion, familia y proteccion, hablamos principalmente del...",
    options: ["Articulo 44", "Articulo 20", "Articulo 95"],
    answer: "Articulo 44"
  },
  {
    prompt: "La educacion debe formar en derechos humanos, paz y democracia segun el...",
    options: ["Articulo 67", "Articulo 11", "Articulo 33"],
    answer: "Articulo 67"
  },
  {
    prompt: "Una accion que protege el derecho a la igualdad es...",
    options: ["tratar con respeto sin discriminar", "excluir por diferencias", "impedir participar"],
    answer: "tratar con respeto sin discriminar"
  },
  {
    prompt: "El derecho al juego es importante porque ayuda al desarrollo, aprendizaje y bienestar.",
    options: ["Verdadero", "Falso"],
    answer: "Verdadero"
  }
];

const state = {
  view: "inicio",
  search: "",
  challenge: 0,
  currentActivityId: null,
  completed: new Set(JSON.parse(localStorage.getItem("ddhh-progress") || "[]")),
  finalAnswers: JSON.parse(localStorage.getItem("ddhh-final-answers") || "{}")
};

const allActivities = units.flatMap((unit) => unit.resources);
const unitGrids = {
  "unidad-1": document.getElementById("activityGridUnidad1"),
  "unidad-2": document.getElementById("activityGridUnidad2"),
  "unidad-3": document.getElementById("activityGridUnidad3")
};
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const searchInput = document.getElementById("activitySearch");
const activityDialog = document.getElementById("activityDialog");
const frame = document.getElementById("contentFrame");
const viewerTitle = document.getElementById("viewerTitle");
const openInNewTab = document.getElementById("openInNewTab");
const completeActivityButton = document.getElementById("completeActivityButton");
const rightDetail = document.getElementById("rightDetail");
const challengeQuestion = document.getElementById("challengeQuestion");
const challengeOptions = document.getElementById("challengeOptions");
const challengeResult = document.getElementById("challengeResult");
const creditsDialog = document.getElementById("creditsDialog");
const introOverlay = document.getElementById("introOverlay");
const evaluationContent = document.getElementById("evaluationContent");
const evaluationIntro = document.getElementById("evaluationIntro");
const evaluationNav = document.getElementById("evaluationNav");
const hudTitle = document.getElementById("hudTitle");
const hudBadges = document.getElementById("hudBadges");

function saveProgress() {
  localStorage.setItem("ddhh-progress", JSON.stringify([...state.completed]));
}

function saveFinalAnswers() {
  localStorage.setItem("ddhh-final-answers", JSON.stringify(state.finalAnswers));
}

function finishIntro() {
  document.body.classList.remove("intro-running");
  introOverlay?.setAttribute("aria-hidden", "true");
  showView("inicio", false);
}

function unitById(unitId) {
  return units.find((unit) => unit.id === unitId);
}

function unitComplete(unitId) {
  const unit = unitById(unitId);
  return unit.resources.every((activity) => state.completed.has(activity.id));
}

function unitUnlocked(unitId) {
  if (unitId === "unidad-1") return true;
  if (unitId === "unidad-2") return unitComplete("unidad-1");
  if (unitId === "unidad-3") return unitComplete("unidad-2");
  return true;
}

function unitRequirement(unitId) {
  if (unitId === "unidad-2") return "Completa toda la Unidad 1 para abrir esta unidad.";
  if (unitId === "unidad-3") return "Completa toda la Unidad 2 para abrir esta unidad.";
  return "";
}

function allActivitiesDone() {
  return units.every((unit) => unitComplete(unit.id));
}

function nextLockedStep() {
  if (!unitComplete("unidad-1")) return "Termina todas las actividades de Unidad 1.";
  if (!unitComplete("unidad-2")) return "Termina todas las actividades de Unidad 2.";
  if (!unitComplete("unidad-3")) return "Termina todas las actividades de Unidad 3.";
  return "Ruta completa.";
}

function nextUnitView() {
  if (!unitComplete("unidad-1")) return "unidad-1";
  if (!unitComplete("unidad-2")) return "unidad-2";
  if (!unitComplete("unidad-3")) return "unidad-3";
  return "evaluacion";
}

function showView(view, scroll = true) {
  if (view === "evaluacion") renderEvaluation();

  state.view = view;
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("active-view", panel.dataset.viewPanel === view);
  });
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

function playAudio(id) {
  const audio = document.getElementById(id);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function openContent(path, title, activityId = null) {
  state.currentActivityId = activityId;
  frame.src = path;
  viewerTitle.textContent = title;
  openInNewTab.href = path;
  document.body.classList.add("dialog-open");

  if (activityId) {
    const activity = allActivities.find((item) => item.id === activityId);
    completeActivityButton.hidden = false;
    completeActivityButton.disabled = state.completed.has(activityId);
    completeActivityButton.textContent = state.completed.has(activityId) ? "Actividad finalizada" : `Finalizar ${activity.type}`;
  } else {
    completeActivityButton.hidden = true;
  }

  if (typeof activityDialog.showModal === "function") {
    activityDialog.showModal();
    frame.addEventListener("load", stabilizeFrameControls, { once: true });
  } else {
    window.open(path, "_blank", "noopener");
  }
}

function stabilizeFrameControls() {
  try {
    const doc = frame.contentDocument;
    if (!doc) return;
    doc.documentElement.style.overflow = "hidden";
    doc.body.style.overflow = "hidden";
    doc.body.style.margin = "0";
    doc.addEventListener("keydown", (event) => {
      const blockedKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "];
      const target = event.target;
      const editable = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if (!editable && blockedKeys.includes(event.key)) {
        event.preventDefault();
      }
    }, true);
    frame.focus();
  } catch (error) {
    frame.focus();
  }
}

function groupedActivities(unitId) {
  const term = unitId === "unidad-1" ? state.search.trim().toLowerCase() : "";
  const groups = new Map();

  allActivities
    .filter((activity) => activity.unitId === unitId)
    .filter((activity) => {
      const text = `${activity.title} ${activity.type} ${activity.description}`.toLowerCase();
      return !term || text.includes(term);
    })
    .forEach((activity) => {
      if (!groups.has(activity.title)) groups.set(activity.title, []);
      groups.get(activity.title).push(activity);
    });

  return [...groups.entries()].map(([title, activities]) => ({ title, activities }));
}

function renderActivities() {
  Object.entries(unitGrids).forEach(([unitId, grid]) => {
    const unit = unitById(unitId);
    const unlocked = unitUnlocked(unitId);
    const groups = groupedActivities(unitId);
    const unitDone = unitComplete(unitId);

    if (!groups.length) {
      grid.innerHTML = `<div class="empty-state">No encontre actividades con ese filtro.</div>`;
      return;
    }

    grid.innerHTML = `
      <div class="unit-state ${unlocked ? "available" : "locked"} ${unitDone ? "complete" : ""}">
        <span>${unitDone ? "Unidad completada" : unlocked ? "Unidad disponible" : "Unidad bloqueada"}</span>
        <strong>${unit.title}</strong>
        <p>${unlocked ? unit.unlockText : unitRequirement(unitId)}</p>
      </div>
      ${groups.map((group) => {
        const done = group.activities.filter((activity) => state.completed.has(activity.id)).length;
        const total = group.activities.length;
        const groupDone = done === total;
        return `
          <article class="topic-card ${groupDone ? "complete" : ""} ${!unlocked ? "locked" : ""}">
            <div>
              <div class="activity-meta">
                <span class="pill">${group.activities[0].unitLabel}</span>
                <span class="pill">${done} de ${total} listas</span>
              </div>
              <h3>${group.title}</h3>
              <p>${group.activities[0].description}</p>
              <div class="topic-progress"><span style="width:${Math.round((done / total) * 100)}%"></span></div>
            </div>
            <div class="topic-actions">
              ${group.activities.map((activity) => {
                const doneActivity = state.completed.has(activity.id);
                const status = doneActivity ? "done" : unlocked ? "available" : "locked";
                const label = doneActivity ? "Completada" : unlocked ? "Abrir" : "Bloqueada";
                return `
                  <div class="activity-option ${status}">
                    <strong>${activity.type}</strong>
                    <small>${doneActivity ? "Mision superada" : unlocked ? "Disponible en esta unidad" : unitRequirement(unitId)}</small>
                    <button class="activity-open" type="button" data-open="${activity.id}" ${unlocked ? "" : "disabled"}>${label}</button>
                  </div>
                `;
              }).join("")}
            </div>
          </article>
        `;
      }).join("")}
    `;
  });
}

function renderProgress() {
  const done = allActivities.filter((activity) => state.completed.has(activity.id)).length;
  const total = allActivities.length;
  const percent = Math.round((done / total) * 100);
  const badges = [
    ["Unidad 1", unitComplete("unidad-1")],
    ["Unidad 2", unitComplete("unidad-2")],
    ["Unidad 3", unitComplete("unidad-3")],
    ["Experto", allActivitiesDone()]
  ];

  progressText.textContent = `${percent}% - ${done} de ${total}`;
  progressBar.style.width = `${percent}%`;
  hudTitle.textContent = allActivitiesDone() ? "Ruta completa - evaluación final desbloqueada" : nextLockedStep();

  document.querySelector('[data-view="unidad-2"]')?.classList.toggle("locked-link", !unitUnlocked("unidad-2"));
  document.querySelector('[data-view="unidad-3"]')?.classList.toggle("locked-link", !unitUnlocked("unidad-3"));
  evaluationNav.classList.toggle("locked-link", !allActivitiesDone());
  evaluationNav.textContent = allActivitiesDone() ? "Evaluación" : "Evaluación bloqueada";

  hudBadges.innerHTML = badges.map(([label, active]) => (
    `<span class="${active ? "earned" : ""}">${active ? "*" : "-"} ${label}</span>`
  )).join("");
}

function renderChallenge() {
  const current = challenges[state.challenge];
  challengeQuestion.textContent = current.question;
  challengeOptions.innerHTML = current.options.map((option) => (
    `<button type="button" data-answer="${option}">${option}</button>`
  )).join("");
}

function renderEvaluation() {
  if (!allActivitiesDone()) {
    evaluationIntro.textContent = "La evaluacion se desbloquea cuando termines las tres unidades.";
    evaluationContent.innerHTML = `
      <div class="evaluation-locked">
        <span>!</span>
        <h3>Evaluación final bloqueada</h3>
        <p>${nextLockedStep()}</p>
        <button class="primary-button" type="button" data-view="${nextUnitView()}">Ir a la unidad pendiente</button>
      </div>
    `;
    return;
  }

  evaluationIntro.textContent = "Responde el reto final. Recibiras retroalimentacion inmediata y una insignia al aprobar.";
  const answered = Object.keys(state.finalAnswers).length;
  const score = finalQuestions.filter((question, index) => state.finalAnswers[index] === question.answer).length;

  evaluationContent.innerHTML = `
    <div class="evaluation-score">
      <strong>${score}/${finalQuestions.length}</strong>
      <span>${answered === finalQuestions.length ? "Resultado actual" : "Preguntas respondidas"}</span>
    </div>
    <div class="evaluation-grid">
      ${finalQuestions.map((question, index) => {
        const selected = state.finalAnswers[index];
        return `
          <article class="question-card ${selected ? (selected === question.answer ? "correct" : "wrong") : ""}">
            <span>Reto ${index + 1}</span>
            <h3>${question.prompt}</h3>
            <div class="question-options">
              ${question.options.map((option) => `
                <button type="button" data-final-question="${index}" data-final-answer="${option}" class="${selected === option ? "selected" : ""}">
                  ${option}
                </button>
              `).join("")}
            </div>
            <p>${selected ? (selected === question.answer ? "Correcto. Sigue asi." : `Revisa: la respuesta esperada es "${question.answer}".`) : "Selecciona una respuesta."}</p>
          </article>
        `;
      }).join("")}
    </div>
    ${answered === finalQuestions.length && score >= 4 ? `
      <div class="final-badge">
        <span>*</span>
        <strong>Insignia desbloqueada: Guardian de derechos</strong>
        <p>Aprobaste la evaluacion final.</p>
      </div>
    ` : ""}
  `;
}

function render() {
  renderActivities();
  renderProgress();
  renderChallenge();
  renderEvaluation();
}

function completeCurrentActivity() {
  if (!state.currentActivityId) return;
  state.completed.add(state.currentActivityId);
  saveProgress();
  completeActivityButton.disabled = true;
  completeActivityButton.textContent = "Actividad finalizada";
  render();
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const pathButton = event.target.closest("[data-open-path]");
  const openButton = event.target.closest("[data-open]");
  const rightButton = event.target.closest("[data-right]");
  const answerButton = event.target.closest("[data-answer]");
  const finalAnswerButton = event.target.closest("[data-final-question]");

  if (pathButton) {
    openContent(pathButton.dataset.openPath, pathButton.dataset.title || "Contenido");
    if (pathButton.dataset.title === "Juego integrador") playAudio("sonido_juego");
    return;
  }

  if (viewButton?.dataset.view) {
    showView(viewButton.dataset.view);
    return;
  }

  if (openButton) {
    if (openButton.disabled) return;
    const activity = allActivities.find((item) => item.id === openButton.dataset.open);
    if (activity && unitUnlocked(activity.unitId)) openContent(activity.path, `${activity.title} - ${activity.type}`, activity.id);
    return;
  }

  if (rightButton) {
    const detail = rights[rightButton.dataset.right];
    if (!detail) return;
    document.querySelectorAll("[data-right]").forEach((button) => button.classList.remove("active"));
    rightButton.classList.add("active");
    rightDetail.innerHTML = `<strong>${detail[0]}</strong><p>${detail[1]}</p>`;
    return;
  }

  if (answerButton) {
    const current = challenges[state.challenge];
    if (answerButton.dataset.answer === current.answer) {
      challengeResult.textContent = current.ok;
      state.challenge = (state.challenge + 1) % challenges.length;
      setTimeout(() => {
        challengeResult.textContent = "";
        renderChallenge();
      }, 2200);
    } else {
      challengeResult.textContent = "Casi. Revisa la pista constitucional e intenta otra vez.";
    }
  }

  if (finalAnswerButton) {
    state.finalAnswers[finalAnswerButton.dataset.finalQuestion] = finalAnswerButton.dataset.finalAnswer;
    saveFinalAnswers();
    renderEvaluation();
  }
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderActivities();
});

document.getElementById("skipIntroButton").addEventListener("click", finishIntro);
document.getElementById("helpButton").addEventListener("click", () => playAudio("sonido_ayuda"));
document.getElementById("closeActivityButton").addEventListener("click", () => activityDialog.close());
activityDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});
completeActivityButton.addEventListener("click", completeCurrentActivity);

document.getElementById("resetProgress").addEventListener("click", () => {
  state.completed.clear();
  state.finalAnswers = {};
  saveProgress();
  saveFinalAnswers();
  render();
});

document.getElementById("creditsButton").addEventListener("click", () => {
  playAudio("sonido_creditos");
  if (typeof creditsDialog.showModal === "function") creditsDialog.showModal();
});

render();
setTimeout(finishIntro, 5200);
