// //TELA 2 

// const URL_SERVER_QUIZZES = "https://mock-api.driven.com.br/api/v7/buzzquizz/";
// let QUIZZ_ID = 1;               

// let promise = axios.get(URL_SERVER_QUIZZES +'/'+ QUIZZ_ID);
// promise.then(getQuizz);
// let quizzQuestions = [];

// function getQuizz(response){ 
//    quizzTitle(response.data);
//    quizzQuestions = response.data.questions;
//    showQuestions(quizzQuestions);
// }

// function quizzTitle(title){
//     const quizzTitle = document.querySelector('.quizz-title h1');
//     bannerImg = title.image;
//     document.getElementById('banner-img').style.backgroundImage = `url(${bannerImg})`;;
//     quizzTitle.innerHTML = title.title; 
// }

// function showQuestions(quizzQuestions){
//     const questions = document.querySelector("ul")
//     console.log(quizzQuestions)
//     let o = 0;
//     let p = 0;
//     for(let i = 0; i < quizzQuestions.length; i++){
//         questions.innerHTML +=` <li class="question-box" >
//                                   <div class="question">
//                                   ${quizzQuestions[i].title}
//                                   </div> 
//                                   <div class="answers" id="${i}">
//                                   </div>
//                                 </li>`;
//         let = quizzAnswers = quizzQuestions[i].answers;
//         quizzAnswers.sort(sortAnswers);
//         let answers = document.getElementById(i);
//         for(let j = 0; j < quizzAnswers.length; j++){
//           answers.innerHTML +=
//                               `<div class="answer" onclick="selectAnswer(this)">
//                                 <img src="${quizzAnswers[j].image}" >
//                                 <strong>${quizzAnswers[j].text}</strong>
//                               </div>
//                               `; 
//         }
//         answers = [];   
//     }
// }

// function sortAnswers(){

//     return Math.floor(Math.random() * 10);
// } 

// function selectAnswer(element){
//   const pai = element.parentNode.querySelectorAll(".answers > .answer")
//   for(let i = 0; i<pai.length; i++){
//       console.log(pai[i]);
//       pai[i].classList.add("opac");
//   }
//   console.log("ok");
//   element.classList.remove("opac");
// }


// function mostrarTela3() {
//   const upFront = document.querySelector(".upfront");
//   upFront.classList.add("hide");
//   const tela3 = document.querySelector(".tela3");
//   tela3.classList.remove("hide");
//   console.log(tela3);
//   console.log(upFront);
// }

// function SearchAllQuizezz() {
//   console.log("rodou");
//   let quizzes = axios.get(
//     "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes"
//   );
//   quizzes.then(ShowQuizzes);
//   quizzes.catch(error);
// }

// function ShowQuizzes(elemento) {
//   const allquizz = elemento.data;
//   const divquizz = document.querySelector(".quiz-list");
//   console.log(allquizz);
//   allquizz.forEach(function (number) {
//     divquizz.innerHTML += `<div class="quizz" onclick="EntrarNoQuizz()">
//         <img src="${number.image}">
//         <div class="overlay"></div>
//         <div class="titulo1">${number.title}</div>
//       </div>`;
//   });
// }

// function error() {
//   alert("Deu erro");
// }
// SearchAllQuizezz();

// function EntrarNoQuizz() {
//   const upFront = document.querySelector(".upfront");
//   console.log(upFront);
//   upFront.classList.add("hide");
//   const tela2 = document.querySelector(".tela-2");
//   tela2.classList.remove("hide");
//   console.log(tela2);
//   console.log(upFront);
// }
// //TELA 1 REALOCADA -- FINAL

// function EscolherResp1(elemento) {
//   const clarear = document.querySelector(".question1 .ClarearImg");
//   if (clarear !== null) {
//     clarear.classList.remove("ClarearImg");
//   }

//   elemento.classList.add("ClarearImg");
// }

// function EscolherResp2(elemento) {
//   const clarear = document.querySelector(".ClarearImg .question2");
//   if (clarear !== null) {
//     clarear.classList.remove("ClarearImg");
//   }

//   elemento.classList.add("ClarearImg");
// }

// function EscolherResp3(elemento) {
//   const clarear = document.querySelector(".ClarearImg .question3");
//   if (clarear !== null) {
//     clarear.classList.remove("ClarearImg");
//   }

//   elemento.classList.add("ClarearImg");
// }


// function buscaQuiz(id) {
//   const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/" + id);
//   console.log(promise);
//   promise.then(exibirQuizz);
// }

// function exibirQuizz(response) {
//   quiz = response.data;
//   const quizBanner = document.querySelector(".banner");
//   quizBanner.innerHTML = "";
//   quizBanner.innerHTML += `
//     <div class="quiz-image">
//         <img src="${quiz.image}">
//         <h2>${quiz.title}</h2>
//     </div>
//     `;

//   const container = document.querySelector(".container");
//   container.innerHTML = "";
//   for (let i = 0; i < quiz.questions.length; i++) {
//     //Percorrendo as perguntas
//     let respostas = "";
//     quiz.questions[i].answers.sort(comparador);
//     for (let j = 0; j < quiz.questions[j].answers.length; j++) {
//       //Percorrendo as respostas da pergunta
//       const ehCorreta = quiz.questions[i].answers[j].isCorrectAnswer;
//       let estado;
//       if (ehCorreta) {
//         estado = "correto";
//       } else {
//         estado = "falso";
//       }
//       respostas += `
//             <div>
//                 <img src="${quiz.questions[i].answers[j].image}">
//                 <p class="answer-text">${quiz.questions[i].answers[j].text}</p>
//             </div>`;
//     }

//     container.innerHTML += `
//         <div>
//             <div class="question-title" style="background-color:${quiz.questions[i].color};">
//                 <h5>${quiz.questions[i].title}</h5>
//             </div>
//             <div class="quiz-answers">
//                 ${respostas}
//             </div>
//         </div>`;
//   }
// }

// buscaQuiz(500);