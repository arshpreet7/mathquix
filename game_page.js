player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0
player2_score = 0 

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ; 
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name ; 

question_turn = "player1";
answer_turn = "player2";

function send()
{
    number1 = document.getElementById("word");
    number2 = document.getElementById("number");
    actual_ans = parseInt(word) * parseInt(number);
    question_number = '<h4>' + word + "X" + number + '</h4>';
    input_box = "<br> Answer : <input type ='text' id='input_check_box'>";
    check_buutton = "<br><br> <button class='btn btn-info' onclick='check()'> Check </button>" ;
    row = question_number + input_box + check_buutton ; 
    document.getElementById("output").innerHTML = row;
   


    

}
