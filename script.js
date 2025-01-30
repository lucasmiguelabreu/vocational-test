const questions = [
    {
      question: "O que você prefere fazer no seu tempo livre?",
      options: [
        { text: "Ler livros ou estudar algo novo.", value: "a" },
        { text: "Fazer atividades ao ar livre ou esportes.", value: "b" },
        { text: "Criar coisas, como desenhar, escrever ou cozinhar.", value: "c" },
        { text: "Ajudar outras pessoas ou resolver problemas.", value: "d" },
      ],
    },
    {
      question: "Qual dessas matérias você mais gosta?",
      options: [
        { text: "Matemática ou Ciências.", value: "a" },
        { text: "Educação Física ou Biologia.", value: "b" },
        { text: "Artes ou Literatura.", value: "c" },
        { text: "História ou Filosofia.", value: "d" },
      ],
    },
    {
      question: "Como você se descreveria?",
      options: [
        { text: "Analítico e lógico.", value: "a" },
        { text: "Prático e ativo.", value: "b" },
        { text: "Criativo e imaginativo.", value: "c" },
        { text: "Empático e comunicativo.", value: "d" },
      ],
    },
    {
      question: "Qual ambiente de trabalho você prefere?",
      options: [
        { text: "Um escritório ou laboratório.", value: "a" },
        { text: "Ao ar livre ou em movimento.", value: "b" },
        { text: "Um estúdio ou espaço criativo.", value: "c" },
        { text: "Um local onde possa interagir com pessoas.", value: "d" },
      ],
    },
    {
      question: "Qual dessas habilidades você tem mais facilidade?",
      options: [
        { text: "Resolver problemas complexos.", value: "a" },
        { text: "Coordenar atividades físicas ou práticas.", value: "b" },
        { text: "Expressar ideias de forma criativa.", value: "c" },
        { text: "Mediar conflitos ou ajudar os outros.", value: "d" },
      ],
    },
    {
      question: "O que você valoriza mais em um trabalho?",
      options: [
        { text: "Desafios intelectuais.", value: "a" },
        { text: "Liberdade de movimento e ação.", value: "b" },
        { text: "Liberdade para expressar sua criatividade.", value: "c" },
        { text: "Oportunidade de fazer a diferença na vida das pessoas.", value: "d" },
      ],
    },
    {
      question: "Qual dessas áreas você acha mais interessante?",
      options: [
        { text: "Tecnologia ou Engenharia.", value: "a" },
        { text: "Saúde ou Esportes.", value: "b" },
        { text: "Artes ou Design.", value: "c" },
        { text: "Educação ou Serviço Social.", value: "d" },
      ],
    },
    {
      question: "Como você lida com desafios?",
      options: [
        { text: "Analiso todas as possibilidades antes de agir.", value: "a" },
        { text: "Enfrento de forma prática e direta.", value: "b" },
        { text: "Penso em soluções inovadoras e diferentes.", value: "c" },
        { text: "Busco ajuda ou colaboração para resolver.", value: "d" },
      ],
    },
    {
      question: "Qual dessas atividades você faria com prazer?",
      options: [
        { text: "Desenvolver um software ou resolver equações.", value: "a" },
        { text: "Praticar um esporte ou cuidar de animais.", value: "b" },
        { text: "Pintar um quadro ou escrever um poema.", value: "c" },
        { text: "Dar aulas ou orientar alguém.", value: "d" },
      ],
    },
    {
      question: "O que você acha mais gratificante?",
      options: [
        { text: "Resolver um problema difícil.", value: "a" },
        { text: "Concluir uma tarefa física ou prática.", value: "b" },
        { text: "Ver sua criação ganhar vida.", value: "c" },
        { text: "Saber que ajudou alguém.", value: "d" },
      ],
    },
    {
      question: "Qual desses filmes ou livros você preferiria?",
      options: [
        { text: "Um documentário sobre ciência ou tecnologia.", value: "a" },
        { text: "Uma história de aventura ou esportes.", value: "b" },
        { text: "Um romance ou obra de ficção.", value: "c" },
        { text: "Um drama humano ou história inspiradora.", value: "d" },
      ],
    },
    {
      question: "Como você toma decisões?",
      options: [
        { text: "Baseado em dados e fatos.", value: "a" },
        { text: "Baseado na intuição e experiência prática.", value: "b" },
        { text: "Baseado na criatividade e inspiração.", value: "c" },
        { text: "Baseado no impacto nas pessoas ao redor.", value: "d" },
      ],
    },
    {
      question: "Qual desses gadgets você acha mais útil?",
      options: [
        { text: "Um computador potente.", value: "a" },
        { text: "Um smartwatch ou equipamento esportivo.", value: "b" },
        { text: "Uma câmera fotográfica ou tablet para desenho.", value: "c" },
        { text: "Um aplicativo de comunicação ou organização.", value: "d" },
      ],
    },
    {
      question: "O que você gosta de fazer em grupo?",
      options: [
        { text: "Discutir ideias ou projetos.", value: "a" },
        { text: "Participar de atividades físicas ou competições.", value: "b" },
        { text: "Colaborar em projetos criativos.", value: "c" },
        { text: "Ajudar ou orientar os outros.", value: "d" },
      ],
    },
    {
      question: "Qual desses valores é mais importante para você?",
      options: [
        { text: "Conhecimento e inovação.", value: "a" },
        { text: "Saúde e vitalidade.", value: "b" },
        { text: "Expressão e originalidade.", value: "c" },
        { text: "Solidariedade e justiça.", value: "d" },
      ],
    },
  ];
  
  const questionContainer = document.getElementById("questionContainer");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("resultText");

let currentQuestionIndex = 0;
let results = { a: 0, b: 0, c: 0, d: 0 };

// Exibe a pergunta atual
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <div class="question">
      <p>${currentQuestionIndex + 1}. ${question.question}</p>
      ${question.options
        .map(
          (opt) => `
        <label>
          <input type="radio" name="question" value="${opt.value}">
          ${opt.text}
        </label>
      `
        )
        .join("")}
    </div>
  `;
  nextBtn.classList.remove("hidden");
}

// Avança para a próxima pergunta
nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="question"]:checked');
  if (selected) {
    results[selected.value]++; // Contabiliza a resposta
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showQuestion(); // Exibe a próxima pergunta
    } else {
      showResult(); // Exibe o resultado no final
    }
  } else {
    alert("Por favor, selecione uma resposta antes de continuar.");
  }
});

// Exibe o resultado final
function showResult() {
  const maxResult = Object.keys(results).reduce((a, b) =>
    results[a] > results[b] ? a : b
  );

  let profession = "";
  switch (maxResult) {
    case "a":
      profession = "Ciências Exatas, Tecnologia e Engenharia";
      break;
    case "b":
      profession = "Esportes, Saúde e Atividades Práticas";
      break;
    case "c":
      profession = "Artes, Design e Comunicação";
      break;
    case "d":
      profession = "Serviços Sociais, Educação e Relações Humanas";
      break;
    default:
      profession = "Nenhuma área específica";
  }

  resultText.textContent = `Você tem mais afinidade com a área de ${profession}.`;
  resultDiv.classList.remove("hidden");
  questionContainer.classList.add("hidden");
  nextBtn.classList.add("hidden");
}

// Inicia o teste
showQuestion();