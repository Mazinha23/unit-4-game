var win = 0;
var loss = 0;
var answer = "";
var userNum = 0;

function updateAnswer() {
    var rand = [Math.floor(Math.random()*80)];
    answer = parseInt(rand);
    $("#numToGuess").text(answer);
    $("#points").text(userNum);
}
updateAnswer();

function checkS() {
    if (answer==userNum){
        win= win + 1;
        $("#wins").text(win);
        updateAnswer();
    }
    else if (answer < userNum){
        loss= loss + 1;
        $("loss").text(loss);
        updateAnswer();
    }
}
    

 
$("#crystal-1").on('click', function(){
    userNum=userNum+2;
    $("#points").text(userNum);
})

$("#crystal-2").on('click', function(){
    userNum=userNum+10;
    $("#points").text(userNum);
})

$("#crystal-3").on('click', function(){
    userNum=userNum+8;
    $("#points").text(userNum);
})

$("#crystal-4").on('click', function(){
    userNum=userNum+7;
    $("#points").text(userNum);
})