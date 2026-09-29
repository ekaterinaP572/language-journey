const deutschCard = document.getElementById("deutsch-card");
const englishCard = document.getElementById("english-card");
const foxMain = document.getElementById("fox-main");
const vocabularyCard = document.getElementById("vocabulary-card");
const grammarCard = document.getElementById("grammar-card");
let deutschPressed = false;
let englishPressed = false;





chooseLanguage();
linkDisabled();


function linkDisabled(){
	if(!deutschPressed && !englishPressed){
		vocabularyCard.classList.add("coming-soon-card");
		grammarCard.classList.add("coming-soon-card");
		
	}else{
		vocabularyCard.classList.remove("coming-soon-card");
		grammarCard.classList.remove("coming-soon-card");
		

	}
}


function chooseLanguage(){

	deutschCard.addEventListener("click", function() {
		deutschCard.classList.add("highlighted-card");
		englishCard.classList.remove ("highlighted-card");
		foxMain.src = "images/fox_de.png";

		vocabularyCard.href = "quiz-list.html?language=de&type=vocabulary";
		grammarCard.href = "quiz-list.html?language=de&type=grammar";
	
		
		vocabularyCard.classList.add("highlighted-card");
		grammarCard.classList.add("highlighted-card");


		deutschPressed = true;
		englishPressed = false;

		vocabularyCard.classList.remove("coming-soon-card");
		grammarCard.classList.remove("coming-soon-card");


	})
	englishCard.addEventListener("click", function() {

		englishCard.classList.add ("highlighted-card");
		deutschCard.classList.remove ("highlighted-card");
	
		foxMain.src = "images/fox_en.png";
		vocabularyCard.classList.add("highlighted-card");
		grammarCard.classList.add("highlighted-card");

		
		vocabularyCard.href = "quiz-list.html?language=en&type=vocabulary";
		grammarCard.href = "quiz-list.html?language=en&type=grammar";

		englishPressed = true;
		deutschPressed = false;

		vocabularyCard.classList.remove("coming-soon-card");
		grammarCard.classList.remove("coming-soon-card");



	})
	

	}


