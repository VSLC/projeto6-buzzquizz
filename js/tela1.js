<<<<<<< HEAD




=======
>>>>>>> 254ad58106f9e7ce05f831fbf9b0935c858b79e2
let acerto = 0;
let idQuiz;
let quiz;
let cliques = 0;

function comparador() {
  return Math.random() - 0.5;
}

function iniciaPagina() {
  window.scrollTo(0, 0);
}

function mostrarTela3() {
  document.querySelector(".upfront").classList.add("hide");
  document.querySelector(".tela3").classList.remove("hide");
}

iniciaPagina();
<<<<<<< HEAD
=======

function SearchAllQuizezz() {
  console.log("rodou");
  let quizzes = axios.get(
    "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes"
  );
  quizzes.then(ShowQuizzes);
  quizzes.catch(error);
  console.log(quizzes);
  alert();
}

function ShowQuizzes(elemento) {
  const allquizz = elemento.data;
  const divquizz = document.querySelector(".quiz-list");
  divquizz = "";
  console.log(allquizz);
  allquizz.forEach(function (number) {
    console.log(number);
    divquizz.innerHTML += `<div class="quizz">
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
>>>>>>> 254ad58106f9e7ce05f831fbf9b0935c858b79e2
