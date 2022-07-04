//TELA 1 REALOCADA -- INÍCIO

function mostrarTela3() {
  const upFront = document.querySelector(".upfront");
  upFront.classList.add("hide");
  const tela3 = document.querySelector(".tela3");
  tela3.classList.remove("hide");
  console.log(tela3);
  console.log(upFront);
}

function SearchAllQuizezz() {
  console.log("rodou");
  let quizzes = axios.get(
    "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes"
  );
  quizzes.then(ShowQuizzes);
  quizzes.catch(error);
}

function ShowQuizzes(elemento) {
  const allquizz = elemento.data;
  const divquizz = document.querySelector(".quiz-list");
  console.log(allquizz);
  allquizz.forEach(function (number) {
    divquizz.innerHTML += `<div class="quizz" onclick="EntrarNoQuizz()">
        <img src="${number.image}">
        <div class="overlay"></div>
        <div class="titulo1">${number.title}</div>
      </div>`;
  });
}

function error() {
  alert("Deu erro");
}
SearchAllQuizezz();

function EntrarNoQuizz() {
  const upFront = document.querySelector(".upfront");
  console.log(upFront);
  upFront.classList.add("hide");
  const tela2 = document.querySelector(".tela-2");
  tela2.classList.remove("hide");
  console.log(tela2);
  console.log(upFront);
}
//TELA 1 REALOCADA -- FINAL

function EscolherResp1(elemento) {
  const clarear = document.querySelector(".question1 .ClarearImg");
  if (clarear !== null) {
    clarear.classList.remove("ClarearImg");
  }

  elemento.classList.add("ClarearImg");
}

function EscolherResp2(elemento) {
  const clarear = document.querySelector(".ClarearImg .question2");
  if (clarear !== null) {
    clarear.classList.remove("ClarearImg");
  }

  elemento.classList.add("ClarearImg");
}

function EscolherResp3(elemento) {
  const clarear = document.querySelector(".ClarearImg .question3");
  if (clarear !== null) {
    clarear.classList.remove("ClarearImg");
  }

  elemento.classList.add("ClarearImg");
}


function buscaQuiz(id) {
  const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/" + id);
  console.log(promise);
  promise.then(exibirQuizz);
}

function exibirQuizz(response) {
  quiz = response.data;
  const quizBanner = document.querySelector(".banner");
  quizBanner.innerHTML = "";
  quizBanner.innerHTML += `
    <div class="quiz-image">
        <img src="${quiz.image}">
        <h2>${quiz.title}</h2>
    </div>
    `;

  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < quiz.questions.length; i++) {
    //Percorrendo as perguntas
    let respostas = "";
    quiz.questions[i].answers.sort(comparador);
    for (let j = 0; j < quiz.questions[j].answers.length; j++) {
      //Percorrendo as respostas da pergunta
      const ehCorreta = quiz.questions[i].answers[j].isCorrectAnswer;
      let estado;
      if (ehCorreta) {
        estado = "correto";
      } else {
        estado = "falso";
      }
      respostas += `
            <div>
                <img src="${quiz.questions[i].answers[j].image}">
                <p class="answer-text">${quiz.questions[i].answers[j].text}</p>
            </div>`;
    }

    container.innerHTML += `
        <div>
            <div class="question-title" style="background-color:${quiz.questions[i].color};">
                <h5>${quiz.questions[i].title}</h5>
            </div>
            <div class="quiz-answers">
                ${respostas}
            </div>
        </div>`;
  }
}

buscaQuiz(500);