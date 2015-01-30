


$(document).ready(function(){

var question = [];
var questionNumber = 0;
var numCorrect = 0;




var writetoPage = function(){
	if($("input:checked").length>0){
$("#questions").empty();
$(".hey").empty();
$("#questions").append(question[questionNumber].questionText);
$("#list1").append(question[questionNumber].answers[0]);
$("#list2").append(question[questionNumber].answers[1]);
$("#list3").append(question[questionNumber].answers[2]);
$("#list4").append(question[questionNumber].answers[3]);
$("#mainpic").empty();

$("#mainpic").append('<img src="images/' + question[questionNumber].questionImage +'">');
$(".choice").removeAttr("checked");
}
else{
	alert("Please make a selection");
}

};

function Question(questionText, answers, correctAnswer, questionImage){
	this.questionText = questionText;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
	this.questionImage = questionImage;
}

	$("#submit1").click(function(){

		if($("input:checked").length>0){
			
			if ($("input:checked").val() === question[questionNumber].correctAnswer) {
				numCorrect +=1;

			}
		}

		if(questionNumber<4){
			
			if($("input:checked").length>0){
				questionNumber +=1;
			}
			writetoPage();
			return false;

			}
			
			else{
				$("#score").append(numCorrect.toString());
				document.getElementById("score").style.border = "2px solid white";
				$('#questions').empty();
				$('#mainpic').empty();
				var mainImage = document.getElementById("mainpic");
				mainImage.style.width = "600px";
				$('#mainpic').append('<img src ="images/gameover.jpg">');
				$('ul').empty()
				$('#questions').append("Congratulations. You finished the quiz.");
				document.getElementById('heading').remove();
				
			}
	});

				$("#start").click(function(){
		questionNumber=0;
		numCorrect=0;
		writetoPage();
		$("#score").empty();
		$("#score").text("Score: ");
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




