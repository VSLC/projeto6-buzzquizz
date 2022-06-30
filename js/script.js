let quizz = {
	title: "",
	image: "",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		}
	]
}

let questionsNumber = 0;
let levelsNumber = 0;


function createQuestions(){
    let basicScreen = document.querySelector(".basics");
    let questionScreen = document.querySelector(".ask");
    basicScreen.classList.add("hide");
    questionScreen.classList.remove("hide");


    quizz.title = document.querySelector(".title").value;
    quizz.image = document.querySelector(".URL").value;
    questionsNumber = document.querySelector(".questions-number").value;
    levelsNumber = document.querySelector(".levels-number").value

    questionScreen.innerHTML += `<h3>Crie suas perguntas</h3>`;

    for(let i=0; i < questionsNumber; i++){

        if(i === 0){
            questionScreen.innerHTML += `<div class="question${i+1}">
            <section class="content questions showing-question">
            <h4>Pergunta ${i+1}</h4>
            <article class="question">
                <input type="text" placeholder="Texto da pergunta">
                <input type="text" placeholder="Cor de fundo da pergunta">
            </article>
            <h4>Resposta correta</h4>
            <article class="question right-answer">
                <input type="text" placeholder="Resposta correta">
                <input type="text" placeholder="URL da imagem">
            </article>
            <h4>Respostas incorretas</h4>
            <article class="question wrong-answer">
                <input type="text" placeholder="Resposta incorreta 1">
                <input type="text" placeholder="URL da imagem">
            </article>
            <article class="question wrong-answer">
                <input type="text" placeholder="Resposta incorreta 2">
                <input type="text" placeholder="URL da imagem 2">
            </article>
            <article class="question wrong-answer">
                <input type="text" placeholder="Resposta incorreta 3">
                <input type="text" placeholder="URL da imagem 3">
            </article>
        </section>
        
        <section class="content hidden hide">
            <h4>Pergunta ${i+1}</h4>
            <ion-icon name="create-outline" onclick="showQuestion(this)"></ion-icon>
        </section>
        </div>`;
        }else {
            questionScreen.innerHTML += `<div class="question${i+1}">
            <section class="content questions hide">
                <h4>Pergunta ${i+1}</h4>
                <article class="question">
                    <input type="text" placeholder="Texto da pergunta">
                    <input type="text" placeholder="Cor de fundo da pergunta">
                </article>
                <h4>Resposta correta</h4>
                <article class="question right-answer">
                    <input type="text" placeholder="Resposta correta">
                    <input type="text" placeholder="URL da imagem">
                </article>
                <h4>Respostas incorretas</h4>
                <article class="question wrong-answer">
                    <input type="text" placeholder="Resposta incorreta 1">
                    <input type="text" placeholder="URL da imagem">
                </article>
                <article class="question wrong-answer">
                    <input type="text" placeholder="Resposta incorreta 2">
                    <input type="text" placeholder="URL da imagem 2">
                </article>
                <article class="question wrong-answer">
                    <input type="text" placeholder="Resposta incorreta 3">
                    <input type="text" placeholder="URL da imagem 3">
                </article>
            </section>
            
            <section class="content hidden">
                <h4>Pergunta ${i+1}</h4>
                <ion-icon name="create-outline" onclick="showQuestion(this)"></ion-icon>
            </section>
            </div>`;
        }

    }

    questionScreen.innerHTML += `<button onclick="createLevels()">Prosseguir pra criar níveis</button>`;


}

function showQuestion(element){
    let hidenInputs = element.parentNode;
    let showInputs =  hidenInputs.parentNode.querySelector(".questions");

    let showingInputs = document.querySelector(".showing-question");
    let hideInputs = showingInputs.parentNode.querySelector(".hidden");
    showingInputs.classList.remove("showing-question");
    showingInputs.classList.add("hide");
    hideInputs.classList.remove("hide");

    hidenInputs.classList.add("hide");
    showInputs.classList.remove("hide");
    showInputs.classList.add("showing-question");
}

function showLevel(element){
    let hidenInputs = element.parentNode;
    let showInputs =  hidenInputs.parentNode.querySelector(".questions");

    let showingInputs = document.querySelector(".showing-level");
    let hideInputs = showingInputs.parentNode.querySelector(".hidden");
    showingInputs.classList.remove("showing-level");
    showingInputs.classList.add("hide");
    hideInputs.classList.remove("hide");

    hidenInputs.classList.add("hide");
    showInputs.classList.remove("hide");
    showInputs.classList.add("showing-level");
}

function createLevels(){
    let questionScreen = document.querySelector(".ask");
    let levelScreen = document.querySelector(".levels");
    questionScreen.classList.add("hide");
    levelScreen.classList.remove("hide");
    levelScreen.innerHTML += `<h3>Agora, decida os níveis</h3>`;

    for(let i=0; i<levelsNumber; i++){
        if(i === 0){
            levelScreen.innerHTML += `<div class="level${i+1}">
            <section class="content questions showing-level">
            <h3>Nível ${i+1}</h3>
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <input type="text" placeholder="Descrição do nível">
        </section>
        <section class="content hiden some">
            <h4>Nível ${i+1}</h4>
            <ion-icon name="create-outline" onclick="showLevel(this)"></ion-icon>
        </section>
        </div>`;
        }else{
            levelScreen.innerHTML += `<div class="level${i+1}">
            <section class="content questions some">
            <h3>Nível ${i+1}</h3>
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <input type="text" placeholder="Descrição do nível">
        </section>
        <section class="content hidden">
            <h4>Nível ${i+1}</h4>
            <ion-icon name="create-outline" onclick="showLevel(this)"></ion-icon>
        </section>
        </div>`;
        }
    }

    levelScreen.innerHTML += `<button onclick="finishQuizz()">Finalizar Quizz</button>`
}

function finishQuizz(){
    let levelScreen = document.querySelector(".levels");
    let finishScreen = document.querySelector(".finish");
    levelScreen.classList.add("hide");
    finishScreen.classList.remove("hide");
} 