
// JQuery Interactions //

// ---------------------------------------- Variables ---------------------------------------- //

document.onkeydown = key_control;
document.onkeyup = resetKeys;

player1assigned = false;
player2assigned = false;

var player1;
var player2;

var player1serving = true;

var score_player1 = 0;
var score_player2 = 0;

var winning_player;
var count = 0;
var gameOver = true;

var player1won = false;
var player2won = false;

var timerShown = false;

var tenSeconds = 10;
var timer = document.getElementById('replayTimer');

var resettingGame = false;



// ---------------------------------------- Load Page ---------------------------------------- //

window.onload = function() {
    timeLeftToResetHtml = document.querySelector('#time');
    hideTimer();
}



// ---------------------------------------- Key Control ---------------------------------------- //

var keys = {
    z: false,
    m: false
}

function key_control(e){
    assign_players(e);
    scoring(e);
}

function resetKeys(e) {
    if(e.keyCode == 90){
        keys['z'] = false; 
    } else if(e.keyCode == 77){
        keys['m'] = false; 
    }  
}



// ---------------------------------------- Assign Players ---------------------------------------- //

function assign_players(e){
    
    if(e.keyCode == 81 && player1assigned == false){
        console.log("Q was pressed");
        player1assigned = true
        
        $('.player1').toggleClass('playerSelect'),
        $('.player1ImageWrapper').toggleClass('playerSelect');
        
        if(player2assigned == false){
            $('#landingPage').toggleClass('gameTime');
            // console.log(window.location.href);
        }
        
        initiate();
    } 
    
    else if(e.keyCode == 80 && player2assigned == false){
        console.log("P was pressed");
        player2assigned = true;
        
        $('.player2').toggleClass('playerSelect'),
        $('.player2ImageWrapper').toggleClass('playerSelect');
        
        if(player1assigned == false){
            $('#landingPage').toggleClass('gameTime');
        }
        
        initiate();
    }
}



// ---------------------------------------- Initiate Game ---------------------------------------- //

function initiate(){
    
    if(player1assigned == true && player2assigned == true){
        
        $('.gameInformation').toggleClass('gameInformationAnimation'),
        $('.player1Name').toggleClass('player1NameAnimate'),
        $('.player2Name').toggleClass('player2NameAnimate');
        
        setTimeout(function(){
            
            document.getElementById('score1').style.display = "block";
            document.getElementById('score2').style.display = "block";
            document.getElementById('score1').innerHTML = score_player1;	
            document.getElementById('score2').innerHTML = score_player2;
            $('#score1').toggleClass('animateScore1'),
            $('#score2').toggleClass('animateScore2');
            
        }, 3500);

        setTimeout(function () {
            gameOver = false;
            assign_serve();
        }, 3500);
    }
}



// ---------------------------------------- Serving ---------------------------------------- //

function assign_serve(){
    
//    if((player1.rank - player2.rank)<0)   {
//        player1serving = false;
//    } else if ((player1.rank - player2.rank)>0)   {
//        player1serving = true;
//    }
    
//    player1serving = true;
    
//    if(gameOver==false){
//        console.log("The game is over")
//    }
    
    // Check if we're at game point and make sure player with lower points is serving
    if(score_player1 >= 10 || score_player2 >= 10) {
        if(score_player1 > score_player2) {
            player1serving = false;
        } else if(score_player1 < score_player2) {
            player1serving = true;
        } else if(score_player1 == score_player2) {
            if(player1serving == true) {
                player1serving = true;
            } else if(player1serving == false) {
                player1serving = false;
            }
        }
    // Remove this bit later
    } else if((score_player1 + score_player2) == 0){
        player1serving = true;
    // Change the serving player every 2 points
    } else if(((score_player1 + score_player2) % 2 == 0) && ((score_player1 + score_player2) > 0)) {
        if(player1serving == true) {
            player1serving = false;
        } else if(player1serving == false) {
            player1serving = true;
        }
    }
    
    change_serve_icon();
}

function change_serve_icon() {
    if(gameOver == false) {
        if(player1serving == true) {
            document.getElementById('player1serve').style.display = "block";
            document.getElementById('player2serve').style.display = "none";
        } else if(player1serving == false) {
            document.getElementById('player1serve').style.display = "none";
            document.getElementById('player2serve').style.display = "block";
        }
    } else if(gameOver == true) {
        document.getElementById('player1serve').style.display = "none";
        document.getElementById('player2serve').style.display = "none";
    }
}



// ---------------------------------------- GameScoring ---------------------------------------- // 

function scoring(e){
    if(e.keyCode == 90){
        if(gameOver == false) {
            add_score_player1();
        }
        keys['z'] = true;
    } else if(e.keyCode == 77){
        if(gameOver == false) {
            add_score_player2();   
        }
        keys['m'] = true;
    }
    
    if(keys['z'] && keys['m']) {
        reset_game();
        hideTimer();
    }
}

function add_score_player1(){
	score_player1++;
	document.getElementById('score1').innerHTML = score_player1;
    assign_serve();
    check_score();
}

function add_score_player2(){
	score_player2++;
	document.getElementById('score2').innerHTML = score_player2;
    assign_serve();
    check_score();
}

function check_score(){
    if((score_player1 >= 11) && (score_player1 > (score_player2 + 1))) {
        winning_player = player1;
        player1won = true;
        end_game();
        player1win();
    } else if((score_player2 >= 11) && (score_player2 > (score_player1 + 1))) {
        winning_player = player2;
        player2won = true;
        end_game();
        player2win(); 
    }
}



// ---------------------------------------- Game Ending ---------------------------------------- //

function end_game(){
    gameOver = true;
    change_serve_icon();
    count++;
    setTimeout(function () {
        showTimer();
        timerShown = true;
    }, 000);      
}

function player1win(){
    document.getElementById('score1').style.display = "none";
    document.getElementById('score2').style.display = "none";
    
    $('.player1').toggleClass('awardPlayer1'),
    $('.player2').toggleClass('loserPlayer2'),
    $('.player1ImageWrapper').toggleClass('awardPlayer1Image'),
    $('.player2ImageWrapper').toggleClass('loserPlayer2Image'),
    $('.winnerText h1').toggleClass('winnerTextAnimation');
    
    console.log("Winning Player is Player 1");
}

function player2win(){
    document.getElementById('score1').style.display = "none";
    document.getElementById('score2').style.display = "none";
    
    $('.player1').toggleClass('loserPlayer1'),
    $('.player2').toggleClass('awardPlayer2'),
    $('.player1ImageWrapper').toggleClass('loserPlayer1Image'),
    $('.player2ImageWrapper').toggleClass('awardPlayer2Image'),
    $('.winnerText h1').toggleClass('winnerTextAnimation');
    
    console.log("Winning Player is Player 2");
}
    
    

// ---------------------------------------- Countdown ---------------------------------------- //

var timeCount;
var startTimer;

function showTimer(){
    timeLeftToResetHtml.textContent = '';
    document.getElementById('replayTimer').style.display = "block";
    timeCount = tenSeconds;
    startTimer = setInterval(timerCountDown, 1000); 
}

function timerCountDown(){
    $('.radial-timer').addClass('s-animate');
    console.log(timeCount);
    seconds = parseInt(timeCount % 60, 10);
    seconds = seconds < 10 ? (0 + seconds) : seconds;
    timeCount--;
    timeLeftToResetHtml.textContent = seconds;
    
    if (seconds <= 0) {
        console.log('done');
        clearInterval(startTimer);
        resettingGame = true;
        reset_game();
    }
}

function hideTimer(replayTimer){
    document.getElementById('replayTimer').style.display = "none";
}
    


// ---------------------------------------- Reset Game ---------------------------------------- //

function reset_game(){
    if(timerShown == true){
        console.log("The game has reset");
        timerShown = false;
        hideTimer();
        
        if(player1won == true && player2won == false) {
            reset_player1win();
        } else if (player2won == true && player1won == false) {
            reset_player2win();
        }
        
        if(resettingGame == true){
            full_reset();
        }
        
        clearInterval(startTimer);
        reset_score();
    }
}

function reset_player1win(){
    console.log("Player 1 just won");
   
    $('.player1').toggleClass('awardPlayer1'),
    $('.player2').toggleClass('loserPlayer2'),
    $('.player1ImageWrapper').toggleClass('awardPlayer1Image'),
    $('.player2ImageWrapper').toggleClass('loserPlayer2Image');
}

function reset_player2win(){
    console.log("Player 2 just won");

    $('.player1').toggleClass('loserPlayer1'),
    $('.player2').toggleClass('awardPlayer2'),
    $('.player1ImageWrapper').toggleClass('loserPlayer1Image'),
    $('.player2ImageWrapper').toggleClass('awardPlayer2Image');
}

function full_reset(){
    console.log("It's a full reset");
    
    player1assigned = false;
    player2assigned = false;
    //move player backgrounds & player images down
    $('#landingPage').toggleClass('gameTime'),
    $('.player1').toggleClass('playerSelect'),
    $('.player1ImageWrapper').toggleClass('playerSelect'),
    $('.player1Name').toggleClass('player1NameAnimate'),
    $('.player2').toggleClass('playerSelect'),
    $('.player2ImageWrapper').toggleClass('playerSelect'),
    $('.player2Name').toggleClass('player2NameAnimate');
    $('.gameInformation').toggleClass('gameInformationAnimation');
}

function reset_score(){
    player1won = false;
    player2won = false;
    
    setTimeout(function () {
        gameOver = false;   
    }, 3000);
    
    change_serve_icon();
    
    count++;
    if(count % 2 == 0){
        $('.winnerText h1').toggleClass('winnerTextAnimation');
    }
    
	score_player1 = 0;
	score_player2 = 0;
    
    if(resettingGame == false){
        document.getElementById('score1').style.display = "block";
        document.getElementById('score2').style.display = "block";
        document.getElementById('score1').innerHTML = score_player1;	
        document.getElementById('score2').innerHTML = score_player2;
    } else if(resettingGame == true){
        $('#score1').toggleClass('animateScore1'),
        $('#score2').toggleClass('animateScore2');
        resettingGame = false;
    }
    
    $('.radial-timer').removeClass('s-animate');
}
 


