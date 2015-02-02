


$(document).ready(function(){

var question = [];
var questionNumber = 0;
var numCorrect = 0;




var writetoPage = function(){
$("#questions").empty();
$(".hey").empty();
$("#mainpic").empty();

$("#questions").append(question[questionNumber].questionText);
$("#list1").append(question[questionNumber].answers[0]);
$("#list2").append(question[questionNumber].answers[1]);
$("#list3").append(question[questionNumber].answers[2]);
$("#list4").append(question[questionNumber].answers[3]);

$("#mainpic").append('<img src="images/' + question[questionNumber].questionImage +'">');

};

function Question(questionText, answers, correctAnswer, questionImage){
	this.questionText = questionText;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
	this.questionImage = questionImage;
}

	$("#answerChoices li").click(function(){

		var userChoice = $(this).val();
			console.log(userChoice);
			if ((userChoice.toString()) === question[questionNumber].correctAnswer) {
				numCorrect +=1;
				console.log(numCorrect);
				
			}

		if(questionNumber<4){
			
				questionNumber +=1;
			$('#score').empty();
			$("#score").append("Score: " + numCorrect.toString());
			writetoPage();
			return false;

			}
			
			else{
				$('#score').empty();
				$("#score").append("Score: " + numCorrect.toString());
				$('#questions').empty();
				$('#mainpic').empty();
				document.getElementById('heading').remove();
				var mainImage = document.getElementById("mainpic");
				mainImage.style.width = "585px";
				$('#mainpic').append('<img src ="images/gameover.jpg">');
				$('ul').hide()
				$('#questions').append("Congratulations. You finished the quiz.");
				var x = document.getElementById('questions')
				x.style.paddingBottom = '40px';
				x.style.fontWeight = 'bold';

				
			}
			
	});

				$("#start").click(function(){
					window.location.reload();
	});

question[0] = new Question("What is the name of singer 1?", 
["Steve Zucker",
"Tom Delonge",
"Steve Miller",
"Bon Jovi"], "2", "tomdelonge.jpg");


question[1] = new Question("What is the name of singer 2?", 
["Mark Hoppus",
"Dan Marino",
"Travis Barker",
"Motley Crue"], "1", "markhoppus.jpg");


question[2] = new Question("What is the name of singer 3?", 
["Lady Gaga",
"Curt Cobain",
"Bono",
"Bon Jovi"], "4", "bonjovi.jpg");

question[3] = new Question("What is the name of singer 4?", 
["Jason Mraz",
"Slim Shady",
"Curtis Jackson",
"Jimmy Buffet"], "2", "slimshady.jpg");


question[4] = new Question("What is the name of singer 5?", 
["Mickey Avalon",
"Cobra Starship",
"John Johannsen",
"Stevie Nicks"], "1", "mickeyavalon.jpg");			
});




