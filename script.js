// Selecionando elementos do DOM

const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const displayHours = document.querySelector(".hrs");
const displayMinutes = document.querySelector(".min");
const displaySeconds = document.querySelector(".sec");
// Inicializando constantes e variáveis de tempo
const initialSeconds = 0;
const initialMinutes = 0;
const initialHours = 0;

let interval;

let seconds = initialSeconds;
let minutes = initialMinutes;
let hours = initialHours;

// Evento para iniciar o temporizador
btnStart.addEventListener("click", () => {
  interval = setInterval(updateTime, 1000);
  if (!btnStart.classList.contains("hidden")) {
    btnStart.classList.add("hidden");
    btnPause.classList.remove("hidden");
    btnStop.classList.remove("hidden");
  }
});
// Evento para pausar o temporizador
btnPause.addEventListener("click", () => {
  clearInterval(interval); // Limpa o intervalo, parando o temporizador
});
// Evento para parar o temporizador e resetar
btnStop.addEventListener("click", () => {
  clearInterval(interval);
  resetTime();
  if (btnStart.classList.contains("hidden")) {
    btnStart.classList.remove("hidden");
    btnPause.classList.add("hidden");
    btnStop.classList.add("hidden");
  }
});

// Função para adicionar um zero à esquerda de números menores que 10
const formatTwoDigits = (number) => {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
};

// Função para atualizar o tempo a cada segundo
const updateTime = () => {
  seconds++;
  displaySeconds.style.color = "#ffffff";
  // Verifica se passou 60 segundos, atualiza minutos e zera segundos
  if (seconds == 60) {
    minutes++;
    displayMinutes.style.color = "#ffffff";
    seconds = 0;
  } else if (minutes == 60) {
    hours++;
    displayHours.style.color = "#ffffff";
    minutes = 0;
  } else if (hours == 100) {
    // Caso o contador de horas ultrapasse 100, reseta tudo para 0
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  // Atualiza os elementos visuais com os novos valores de horas, minutos e segundos
  displayHours.innerText = formatTwoDigits(hours);
  displayMinutes.innerText = formatTwoDigits(minutes);
  displaySeconds.innerText = formatTwoDigits(seconds);
};

// Função para resetar o temporizador e elementos visuais

const resetTime = () => {
  displayHours.innerText = "00";
  displayMinutes.innerText = "00";
  displaySeconds.innerText = "00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  // Define a cor do texto de horas, minutos e segundos para uma cor de fundo semitransparente
  displaySeconds.style.color = "#f6ebf95e";
  displayMinutes.style.color = "#f6ebf95e";
  displayHours.style.color = "#f6ebf95e";
};
