const params = new URLSearchParams(window.location.search);

const language = params.get("language");
const type = params.get("type");
const foxMain = document.getElementById("fox-main");
const container = document.getElementById("quiz-container");


sessionStorage.setItem("language", language);
sessionStorage.setItem("type", type);


const selectedQuiz = quizList[language][type];

foxLearning(language);
createCards();

function foxLearning(language){
  foxMain.src = `images/fox_${language}.png`;
}


function createCards(){
  for(const quiz of selectedQuiz) {
    const superBody = document.createElement("div");
    superBody.classList.add("col-auto");
    const link = document.createElement("a");
    link.classList.add("text-decoration-none");
    link.href = `quiz-play.html?quiz=${quiz.id}`;

   const card = document.createElement("div");
   card.classList.add("card", "menu-card");

   const body = document.createElement("div");
   body.classList.add("card-body", "text-center");

   const icon = document.createElement("div");
   icon.classList.add("fs-2");
   icon.textContent = "📝";

   const levelBadge = document.createElement("div");
   levelBadge.textContent = quiz.level;
   levelBadge.classList.add("level-badge"); 
   if(quiz.level === "A1"){
    levelBadge.classList.add("level-a1");
   }


   const title = document.createElement("h6");
   title.classList.add("mt-2", "mb-0", "quiz-card-title");
   title.textContent = quiz.title;

    body.appendChild(icon);
    body.appendChild(title);
    body.appendChild(levelBadge);

    card.appendChild(body);
    link.appendChild(card);
    superBody.appendChild(link);
    container.appendChild(superBody);
  }
}



