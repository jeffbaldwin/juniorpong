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

var player1Name;
var player2Name;

var tempPlayerName;

var player1Wins;
var player1Losses;
var player2Wins;
var player2Losses;

var timerShown = false;

var tenSeconds = 10;
var timer = document.getElementById('replayTimer');

var resettingGame = false;


// ---------------------------------------- Load Page ---------------------------------------- //

window.onload = function() {
    timeLeftToResetHtml = document.querySelector('#time');
    hideTimer();
	
//	document.getElementById('player1Serve').style.display = "none";
//	document.getElementById('player2Serve').style.display = "none";
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
	
/*	
	// JEFF
	if(e.keyCode == 74){
		if(player1assigned == false && player2assigned == false){  
			player1assigned = true;
			
			player1NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/jeff/name");
			player1NameRef.once("value", function(snapshot) {
				player1Name = snapshot.val();
				console.log("Player 1 is " + player1Name);
			});
		
			player1WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/jeff/wins");
			player1WinsRef.once("value", function(snapshot) {
				player1Wins = snapshot.val();
			});
			
			player1LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/jeff/losses");
			player1LossesRef.once("value", function(snapshot) {
				player1Losses = snapshot.val();
			});
			
			window.onload = function(){
				document.getElementById("player1Name").innerHTML = player1Name;
				document.getElementById("player1SmallName").innerHTML = player1Name;
				document.getElementById("player1Wins").innerHTML = player1Wins;
				document.getElementById("player1Losses").innerHTML = player1Losses;
				document.getElementById("player1Image").src = "img/jeff-02.png";
			}

			setTimeout(function(){
				$('.player1').toggleClass('playerSelect'),
				$('.player1ImageWrapper').toggleClass('playerSelect');
				//Move the splash out of the way
				if(player2assigned == false){
					$('#landingPage').toggleClass('gameTime');
				}

				initiate();
			}, 500);
		} else 
		if(player1assigned == true && player2assigned == false){
			player2assigned = true;
			
			player2NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/jeff/name");
			player2NameRef.once("value", function(snapshot) {
				player2Name = snapshot.val();
				console.log("Player 2 is " + player2Name);
			});
			
			player2WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/jeff/wins");
			player2WinsRef.once("value", function(snapshot) {
				player2Wins = snapshot.val();
			});
			
			player2LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/jeff/losses");
			player2LossesRef.once("value", function(snapshot) {
				player2Losses = snapshot.val();
			});
			
			window.onload = function(){
				document.getElementById("player2Name").innerHTML = player2Name;
				document.getElementById("player2SmallName").innerHTML = player2Name;
				document.getElementById("player2Wins").innerHTML = player2Wins;
				document.getElementById("player2Losses").innerHTML = player2Losses;
				document.getElementById("player2Image").src = "img/jeff-02.png";
				document.getElementById("player2Image").src = "img/jeff-02.png";
			}

			setTimeout(function(){
				$('.player2').toggleClass('playerSelect'),
				$('.player2ImageWrapper').toggleClass('playerSelect');
				initiate();
			}, 500);
		}
	}
			
	// SEAN
	if(e.keyCode == 83){
		if(player1assigned == false && player2assigned == false){  
			player1assigned = true;
			
			player1NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/sean/name");
			player1NameRef.once("value", function(snapshot) {
				player1Name = snapshot.val();
				console.log("Player 1 is " + player1Name);
				document.getElementById("player1Name").innerHTML = player1Name;
				document.getElementById("player1SmallName").innerHTML = player1Name;
			});
			
			player1WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/sean/wins");
			player1WinsRef.once("value", function(snapshot) {
				player1Wins = snapshot.val();
				document.getElementById("player1Wins").innerHTML = player1Wins;
			});
			
			player1LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/sean/losses");
			player1LossesRef.once("value", function(snapshot) {
				player1Losses = snapshot.val();
				document.getElementById("player1Wins").innerHTML = player1Losses;
			});
			
			document.getElementById("player1Image").src = "img/sean-02.png";
	
			setTimeout(function(){
				$('.player1').toggleClass('playerSelect'),
				$('.player1ImageWrapper').toggleClass('playerSelect');
				//Move the splash out of the way
				if(player2assigned == false){
					$('#landingPage').toggleClass('gameTime');
				}

				initiate();
			}, 500);
		} else 
		if(player1assigned == true && player2assigned == false){
			player2assigned = true;
			
			player2NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/sean/name");
			player2NameRef.once("value", function(snapshot) {
				player2Name = snapshot.val();
				console.log("Player 2 is " + player2Name);
				document.getElementById("player2Name").innerHTML = player2Name;
				document.getElementById("player2SmallName").innerHTML = player2Name;
			});
			
			player2WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/sean/wins");
			player2WinsRef.once("value", function(snapshot) {
				player2Wins = snapshot.val();
				document.getElementById("player2Wins").innerHTML = player2Wins;
			});
			
			player2LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/sean/losses");
			player2LossesRef.once("value", function(snapshot) {
				player2Losses = snapshot.val();
				document.getElementById("player2Wins").innerHTML = player2Losses;
			});
			
			document.getElementById("player2Image").src = "img/sean-02.png";
			
			setTimeout(function(){
				$('.player2').toggleClass('playerSelect'),
				$('.player2ImageWrapper').toggleClass('playerSelect');

				initiate();
			}, 500);
		}
	}
	
	// ASH
	if(e.keyCode == 65){
		if(player1assigned == false && player2assigned == false){  
			player1assigned = true;
			
			player1NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/ash/name");
			player1NameRef.once("value", function(snapshot) {
				player1Name = snapshot.val();
				console.log("Player 1 is " + player1Name);
				document.getElementById("player1Name").innerHTML = player1Name;
				document.getElementById("player1SmallName").innerHTML = player1Name;
			});
			
			player1WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/ash/wins");
			player1WinsRef.once("value", function(snapshot) {
				player1Wins = snapshot.val();
				document.getElementById("player1Wins").innerHTML = player1Wins;
			});
			
			player1LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/ash/losses");
			player1LossesRef.once("value", function(snapshot) {
				player1Losses = snapshot.val();
				document.getElementById("player1Wins").innerHTML = player1Losses;
			});
			
			document.getElementById("player1Image").src = "img/ash-02.png";
			
			setTimeout(function(){
				$('.player1').toggleClass('playerSelect'),
				$('.player1ImageWrapper').toggleClass('playerSelect');
				//Move the splash out of the way
				if(player2assigned == false){
					$('#landingPage').toggleClass('gameTime');
				}

				initiate();
			}, 500);
		} else 
		if(player1assigned == true && player2assigned == false){
			player2assigned = true;
			
			player2NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/ash/name");
			player2NameRef.once("value", function(snapshot) {
				player2Name = snapshot.val();
				console.log("Player 2 is " + player2Name);
				document.getElementById("player2Name").innerHTML = player2Name;
				document.getElementById("player2SmallName").innerHTML = player2Name;
			});
			
			player2WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/ash/wins");
			player2WinsRef.once("value", function(snapshot) {
				player2Wins = snapshot.val();
				document.getElementById("player2Wins").innerHTML = player2Wins;
			});
			
			player2LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/ash/losses");
			player2LossesRef.once("value", function(snapshot) {
				player2Losses = snapshot.val();
				document.getElementById("player2Wins").innerHTML = player2Losses;
			});
			
			document.getElementById("player1Image").src = "img/ash-02.png";
			
			setTimeout(function(){
				$('.player2').toggleClass('playerSelect'),
				$('.player2ImageWrapper').toggleClass('playerSelect');
				initiate();
			}, 500);
		}
	}
	
	// ZAC
	if(e.keyCode == 68){
		if(player1assigned == false && player2assigned == false){  
			player1assigned = true;
			
			player1NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/zac/name");
			player1NameRef.once("value", function(snapshot) {
				player1Name = snapshot.val();
				console.log("Player 1 is " + player1Name);
				document.getElementById("player1Name").innerHTML = player1Name;
				document.getElementById("player1SmallName").innerHTML = player1Name;
			});
			
			player1WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/zac/wins");
			player1WinsRef.once("value", function(snapshot) {
				player1Wins = snapshot.val();
				document.getElementById("player1Wins").innerHTML = player1Wins;
			});
			
			player1LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/zac/losses");
			player1LossesRef.once("value", function(snapshot) {
				player1Losses = snapshot.val();
				document.getElementById("player1Wins").innerHTML = player1Losses;
			});
			
			document.getElementById("player1Image").src = "img/sean.png";
			
			setTimeout(function(){
				$('.player1').toggleClass('playerSelect'),
				$('.player1ImageWrapper').toggleClass('playerSelect');
				//Move the splash out of the way
				if(player2assigned == false){
					$('#landingPage').toggleClass('gameTime');
				}

				initiate();
			}, 500);
		} else 
		if(player1assigned == true && player2assigned == false){
			player2assigned = true;
			
			player2NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/zac/name");
			player2NameRef.once("value", function(snapshot) {
				player2Name = snapshot.val();
				console.log("Player 2 is " + player2Name);
				document.getElementById("player2Name").innerHTML = player2Name;
				document.getElementById("player2SmallName").innerHTML = player2Name;
			});
			
			player2WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/zac/wins");
			player2WinsRef.once("value", function(snapshot) {
				player2Wins = snapshot.val();
				document.getElementById("player2Wins").innerHTML = player2Wins;
			});
			
			player2LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/zac/losses");
			player2LossesRef.once("value", function(snapshot) {
				player2Losses = snapshot.val();
				document.getElementById("player2Wins").innerHTML = player2Losses;
			});
			
			document.getElementById("player1Image").src = "img/sean.png";
			
			setTimeout(function(){
				$('.player2').toggleClass('playerSelect'),
				$('.player2ImageWrapper').toggleClass('playerSelect');

				initiate();
			}, 500);
		}
	}
*/
	
	// JEFF
	if(e.keyCode == 74){
		if(tempPlayerName != "jeff"){
			tempPlayerName = "jeff";
			decide();
		}
	}
			
	// SEAN
	if(e.keyCode == 83){
		if(tempPlayerName != "sean"){
			tempPlayerName = "sean";
			decide();
		}
	}
	
	// ASH
	if(e.keyCode == 65){
		if(tempPlayerName != "ash"){
			tempPlayerName = "ash";
			decide();
		}
	}
	
	// ZAC
	if(e.keyCode == 90){
		if(tempPlayerName != "zac"){
			tempPlayerName = "zac";
			decide();
		}
	}
	
}

function decide(){
	if(player1assigned == false && player2assigned == false){  
		assign_player_1();
	} else 					
	if(player1assigned == true && player2assigned == false){
		assign_player_2();
	}
}
	
function assign_player_1(){
	player1assigned = true

	player1NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/" + tempPlayerName + "/name");
	player1NameRef.once("value", function(snapshot) {
		player1Name = snapshot.val();
		console.log("Player 1 is " + player1Name);
		assignElements();
	});

	player1WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/" + tempPlayerName + "/wins");
	player1WinsRef.once("value", function(snapshot) {
		player1Wins = snapshot.val();
		console.log("-   " + player1Name + " has " + player1Wins + " wins");
		assignElements();
	});

	player1LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/" + tempPlayerName + "/losses");
	player1LossesRef.once("value", function(snapshot) {
		player1Losses = snapshot.val();
		console.log("-   " + player1Name + " has " + player1Losses + " losses");
		assignElements();
	});

	function assignElements(){
		document.getElementById("player1Name").innerHTML = player1Name;
		document.getElementById("player1SmallName").innerHTML = player1Name;
		document.getElementById("player1Wins").innerHTML = player1Wins;
		document.getElementById("player1Losses").innerHTML = player1Losses;
		document.getElementById("player1Image").src = "img/" + player1Name.toLowerCase() + "-06.png";
	}

	setTimeout(function(){
//		$('#landingPage').toggleClass('gameTime');
		$('.player1').toggleClass('playerSelect'),
		$('.player1ImageWrapper').toggleClass('playerSelect');
	}, 1000);
}

function assign_player_2(){
	player2assigned = true;

	player2NameRef = new Firebase("https://juniorpingpong.firebaseio.com/players/" + tempPlayerName + "/name");
	player2NameRef.once("value", function(snapshot) {
		player2Name = snapshot.val();
		console.log("Player 2 is " + player2Name);
		assignElements();
	});

	player2WinsRef = new Firebase("https://juniorpingpong.firebaseio.com/players/" + tempPlayerName + "/wins");
	player2WinsRef.once("value", function(snapshot) {
		player2Wins = snapshot.val();
		console.log("-   " + player2Name + " has " + player2Wins + " wins");
		assignElements();
	});

	player2LossesRef = new Firebase("https://juniorpingpong.firebaseio.com/players/" + tempPlayerName + "/losses");
	player2LossesRef.once("value", function(snapshot) {
		player2Losses = snapshot.val();
		console.log("-   " + player2Name + " has " + player2Losses + " losses");
		assignElements();
	});

	function assignElements(){
		document.getElementById("player2Name").innerHTML = player2Name;
		document.getElementById("player2SmallName").innerHTML = player2Name;
		document.getElementById("player2Wins").innerHTML = player2Wins;
		document.getElementById("player2Losses").innerHTML = player2Losses;
		document.getElementById("player2Image").src = "img/" + player2Name.toLowerCase() + "-06.png";
	}

	setTimeout(function(){
		$('.player2').toggleClass('playerSelect'),
		$('.player2ImageWrapper').toggleClass('playerSelect');
		initiate();
	}, 1000);
}


// ---------------------------------------- Initiate Game ---------------------------------------- //

function initiate(){
    
    if(player1assigned == true && player2assigned == true){
		
		tempPlayerName = null;
		
		$('#player1ServeLogo').css("visibility", "visible");
		
//        $('.gameInformation').toggleClass('gameInformationAnimation'),
//        $('#player1Name').toggleClass('player1NameAnimate'),
//        $('#player2Name').toggleClass('player2NameAnimate');
		
//		$('#player1Serve').css("visibility", "visible");
//		$('#player2Serve').css("visibility", "hidden");
		
		setTimeout(function(){
			$('#startText').css("visibility", "visible");
			$('#startText').toggleClass('fadeIn');
			$('#startText').toggleClass('fadeOut');
		}, 1000);
		
		setTimeout(function(){
			$('#startText').toggleClass('fadeIn');
			$('#startText').toggleClass('fadeOut');
		}, 3000);
        
        setTimeout(function(){
			$('#player1SmallName').css("visibility", "visible");
			$('#player2SmallName').css("visibility", "visible");
			
			$('#player1SmallName').toggleClass('fadeIn');
            $('#player2SmallName').toggleClass('fadeIn');
			$('#player1SmallName').toggleClass('fadeOut');
            $('#player2SmallName').toggleClass('fadeOut');
        }, 4000);
		
		setTimeout(function(){
			$('#player1Record').css("visibility", "visible");
			$('#player2Record').css("visibility", "visible");
			
			$('#player1Record').toggleClass('fadeIn');
            $('#player2Record').toggleClass('fadeIn');
			$('#player1Record').toggleClass('fadeOut');
            $('#player2Record').toggleClass('fadeOut');
        }, 4500);
		
		setTimeout(function(){
			document.getElementById('score1').innerHTML = score_player1;	
            document.getElementById('score2').innerHTML = score_player2;
			
			$('#score1').css("visibility", "visible");
			$('#score2').css("visibility", "visible");
			
			$('#score1').toggleClass('fadeIn');
            $('#score2').toggleClass('fadeIn');
			$('#score1').toggleClass('fadeOut');
            $('#score2').toggleClass('fadeOut');
		}, 5500);
		
		
		slackStartGame();

        setTimeout(function () {
            gameOver = false;
			assign_serve();
			
			$('#player1ServeLogo').toggleClass('fadeIn2');
			$('#player1ServeLogo').toggleClass('fadeOut2');
			
			console.log("The game is starting");
        }, 6500);
    }
}



// ---------------------------------------- Serving ---------------------------------------- //

function assign_serve(){
	
	/*
//    if((player1.rank - player2.rank)<0)   {
//        player1serving = false;
//    } else if ((player1.rank - player2.rank)>0)   {
//        player1serving = true;
//    }
    
//    player1serving = true;
    
//    if(gameOver==false){
//        console.log("The game is over")
//    }
*/
    
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
    // Change the serving player every 2 points
    } else if(((score_player1 + score_player2) % 2 == 0) && ((score_player1 + score_player2) > 0)) {
        if(player1serving == true) {
            player1serving = false;
			console.log("Player 2 is serving");
        } else if(player1serving == false) {
            player1serving = true;
			console.log("Player 1 is serving");
        }
	// Remove this bit later
    } else if((score_player1 + score_player2) == 0){
        player1serving = true;
	}
    
    change_serve_icon();
}

function change_serve_icon() {
    if(gameOver == false) {
        if(player1serving == true) {
//            $('#player1Serve').css("visibility", "visible");
//			$('#player2Serve').css("visibility", "hidden");
			$('#player1ServeLogo').css("visibility", "visible");
			$('#player2ServeLogo').css("visibility", "hidden");
        } else if(player1serving == false) {
//			$('#player1Serve').css("visibility", "hidden");
//			$('#player2Serve').css("visibility", "visible");
			$('#player1ServeLogo').css("visibility", "hidden");
			$('#player2ServeLogo').css("visibility", "visible");
        }
    } else if(gameOver == true) {
//        $('#player1Serve').css("visibility", "hidden");
//        $('#player2Serve').css("visibility", "hidden");
		$('#player1ServeLogo').css("visibility", "hidden");
		$('#player2ServeLogo').css("visibility", "hidden");
    }
}


// ---------------------------------------- GameScoring ---------------------------------------- // 

function scoring(e){
    if(e.keyCode == 188){
        if(gameOver == false) {
            add_score_player1();
        }
        keys['z'] = true;
    } else if(e.keyCode == 190){
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

		addGameResultToDB(player1Name, player2Name);
    } else if((score_player2 >= 11) && (score_player2 > (score_player1 + 1))) {
        winning_player = player2;
        player2won = true;
        end_game();
        player2win(); 
				
		addGameResultToDB(player2Name, player1Name);
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
    }, 2000);    
	
	slackScore();
//	tweetScore();
}

function player1win(){
    document.getElementById('score1').style.display = "none";
    document.getElementById('score2').style.display = "none";
	
	document.getElementById('winnerText').innerHTML = player1Name + " is the winner!";
	$('#winnerText').toggleClass('fadeIn');
	$('#winnerText').toggleClass('fadeOut');
	
	$('#countdownText').toggleClass('fadeIn');
	$('#countdownText').toggleClass('fadeOut');
    
    $('.player1').toggleClass('awardPlayer1'),
    $('.player2').toggleClass('loserPlayer2'),
    $('.player1ImageWrapper').toggleClass('awardPlayer1Image'),
    $('.player2ImageWrapper').toggleClass('loserPlayer2Image'),
    $('#winnerText').toggleClass('winnerTextAnimation');
	$('#countdownText').toggleClass('winnerTextAnimation');
    
    console.log(player1Name + " won");
	
	player1Wins ++;
	player2Losses ++;
	document.getElementById("player1Wins").innerHTML = player1Wins;
	document.getElementById("player2Losses").innerHTML = player2Losses;
	
	hideGameInfo();
}

function player2win(){
    document.getElementById('score1').style.display = "none";
    document.getElementById('score2').style.display = "none";
	
	document.getElementById('winnerText').innerHTML = player2Name + " is the winner!";
	$('#winnerText').toggleClass('fadeIn');
	$('#winnerText').toggleClass('fadeOut');
	
	$('#countdownText').toggleClass('fadeIn');
	$('#countdownText').toggleClass('fadeOut');
    
    $('.player1').toggleClass('loserPlayer1'),
    $('.player2').toggleClass('awardPlayer2'),
    $('.player1ImageWrapper').toggleClass('loserPlayer1Image'),
    $('.player2ImageWrapper').toggleClass('awardPlayer2Image'),
    $('#winnerText').toggleClass('winnerTextAnimation');
	$('#countdownText').toggleClass('winnerTextAnimation');
    
    console.log(player2Name + " won");
	
	player1Losses ++;
	player2Wins ++;
	document.getElementById("player1Losses").innerHTML = player1Losses;
	document.getElementById("player2Wins").innerHTML = player2Wins;
	
	hideGameInfo();
}

function hideGameInfo(){
	$('#player1SmallName').toggleClass('fadeIn');
	$('#player2SmallName').toggleClass('fadeIn');
	$('#player1SmallName').toggleClass('fadeOut');
	$('#player2SmallName').toggleClass('fadeOut');
			
	$('#player1Record').toggleClass('fadeIn');
    $('#player2Record').toggleClass('fadeIn');
	$('#player1Record').toggleClass('fadeOut');
    $('#player2Record').toggleClass('fadeOut');
	
//	$('#underline1').toggleClass('fadeIn');
//    $('#underline2').toggleClass('fadeIn');
}
 

// ---------------------------------------- Add Game Result to DB ---------------------------------------- //

function addGameResultToDB(winningPlayer, losingPlayer){
		
	var winningPlayerRef = new Firebase("https://juniorpingpong.firebaseio.com/players/" + winningPlayer.toLowerCase() + "/wins");
	winningPlayerRef.transaction(function (current_value) {
	  	return (current_value || 0) + 1;
		console.log(player1Name + " now has " + player1Wins + " wins");
	});

	var losingPlayerRef = new Firebase("https://juniorpingpong.firebaseio.com/players/" + losingPlayer.toLowerCase() + "/losses");
	losingPlayerRef.transaction(function (current_value) {
	  	return (current_value || 0) + 1;
		console.log(player2Name + " now has " + player2Wins + " wins");
	});

}


// ---------------------------------------- Tweet and Slack ---------------------------------------- //

function slackStartGame(){
    var startGameSlackText = player1Name + " is now facing off against " + player2Name + "! Who do you want to win?";
    console.log(startGameSlackText);
    
    $.ajax({
        url: "https://hooks.slack.com/services/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",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: false,
        data: '{"text":' + '"' + startGameSlackText + '" , "channel": "#juniorpong", "username": "pongbot", "icon_emoji": ":table_tennis_paddle_and_ball:"}',
        success: function (data) {
          alert(JSON.stringify(data));
        },
        error: function(){
//          alert("Cannot get data");
            }
    });
    
	console.log('sent a slack msg that game has started');
}




function slackScore(){
    
    var player1WinnerText = player1Name + " just beat " + player2Name + " " + score_player1 + "-" + score_player2 + "! " + player1Name + " is now " + player1Wins + "-" + player1Losses + " while " + player2Name + " is now " + player2Wins + "-" + player2Losses + ".";
    
    var player2WinnerText =  player2Name + " just beat " + player1Name + " " + score_player2 + "-" + score_player1 + "! " + player2Name + " is now " + player2Wins + "-" + player2Losses + " while " + player1Name + " is now " + player1Wins + "-" + player1Losses + ".";
    
	if(player1won == true){
        
        $.ajax({
            url: "https://hooks.slack.com/services/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",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            processData: false,
            data: '{"text":' + '"' + player1WinnerText + '", "channel": "#juniorpong", "username": "pongbot", "icon_emoji": ":table_tennis_paddle_and_ball:"}',
            success: function (data) {
              alert(JSON.stringify(data));
            },
            error: function(){
    //          alert("Cannot get data");
            }
        });
        
		console.log('sent a slack msg player 1 wins');
        
	} else if(player2won == true){
        
        $.ajax({
            url: "https://hooks.slack.com/services/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",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            processData: false,
            data: '{"text":' + '"' + player2WinnerText + '", "channel": "#juniorpong", "username": "pongbot", "icon_emoji": ":table_tennis_paddle_and_ball:"}',
            success: function (data) {
              alert(JSON.stringify(data));
            },
            error: function(){
    //          alert("Cannot get data");
            }
        });
        
		console.log('sent a slack msg player 2 wins');
        
	}
}


function tweetScore(){
	if(player1won == true){
		Bot.tweet(player1Name + " beat " + player2Name + " " + score_player1 + " - " + score_player2 + "!");
		console.log('sent a tweet');
	} else if(player2won == true){
		Bot.tweet(player2Name + " beat " + player2name + " " +score_player2 + " - " + score_player1 + "!");
		console.log('sent a tweet');
	}
}


// ---------------------------------------- Countdown ---------------------------------------- //

var timeCount;
var startTimer;

function showTimer(){
//	timeLeftToResetHtml.textContent = '';
//    document.getElementById('replayTimer').style.display = "block";
    timeCount = tenSeconds;
    startTimer = setInterval(timerCountDown, 1000); 
	
//	$('#countdownText').css("visibility", "visible");
}

function timerCountDown(){
//    $('.radial-timer').addClass('s-animate');
//    console.log(timeCount);
    seconds = parseInt(timeCount % 60, 10);
    seconds = seconds < 10 ? (0 + seconds) : seconds;
    timeCount--;
//    timeLeftToResetHtml.textContent = seconds;
    
	if (seconds-1 > 1) {
		document.getElementById('countdownText').innerHTML = timeCount + " seconds to rematch";
	} else if (seconds-1 == 1) {
		document.getElementById('countdownText').innerHTML = timeCount + " second to rematch";
	} else if (seconds-1 <= 0) {
		document.getElementById('countdownText').innerHTML = null;
	}
		
    if (seconds <= 0) {
//        console.log('done');
        clearInterval(startTimer);
        resettingGame = true;
        reset_game();
    }
}

function hideTimer(/*replayTimer*/){
//    document.getElementById('replayTimer').style.display = "none";
}
    

// ---------------------------------------- Reset Game ---------------------------------------- //

function reset_game(){
    if(timerShown == true){
        console.log("The game has reset");
        timerShown = false;
//        hideTimer();
        
        if(resettingGame == true){
            full_reset();
        } else if(resettingGame == false){
			showGameInfo();
			if(player1won == true && player2won == false) {
				reset_player1win();
			} else if (player2won == true && player1won == false) {
				reset_player2win();
			}
		}

        clearInterval(startTimer);
        reset_score();
    }
}

function showGameInfo(){
	$('#winnerText').toggleClass('fadeIn');
	$('#winnerText').toggleClass('fadeOut');
	
	$('#countdownText').toggleClass('fadeIn');
	$('#countdownText').toggleClass('fadeOut');
	
	$('#player1SmallName').toggleClass('fadeIn');
	$('#player2SmallName').toggleClass('fadeIn');
	$('#player1SmallName').toggleClass('fadeOut');
	$('#player2SmallName').toggleClass('fadeOut');
			
	$('#player1Record').toggleClass('fadeIn');
    $('#player2Record').toggleClass('fadeIn');
	$('#player1Record').toggleClass('fadeOut');
    $('#player2Record').toggleClass('fadeOut');
	
//	$('#underline1').toggleClass('fadeIn');
//    $('#underline2').toggleClass('fadeIn');
}

function reset_player1win(){   
    $('.player1').toggleClass('awardPlayer1'),
    $('.player2').toggleClass('loserPlayer2'),
    $('.player1ImageWrapper').toggleClass('awardPlayer1Image'),
    $('.player2ImageWrapper').toggleClass('loserPlayer2Image');
	
	$('#winnerText').toggleClass('winnerTextAnimation');
	$('#countdownText').toggleClass('winnerTextAnimation');
}

function reset_player2win(){
    $('.player1').toggleClass('loserPlayer1'),
    $('.player2').toggleClass('awardPlayer2'),
    $('.player1ImageWrapper').toggleClass('loserPlayer1Image'),
    $('.player2ImageWrapper').toggleClass('awardPlayer2Image');
	
	$('#winnerText').toggleClass('winnerTextAnimation');
	$('#countdownText').toggleClass('winnerTextAnimation');
}

function full_reset(){
    console.log("It's a full reset");
	
	$('#player1Image').toggleClass('fadeIn'),
    $('#player2Image').toggleClass('fadeIn');
	$('#player1Image').toggleClass('fadeOut'),
    $('#player2Image').toggleClass('fadeOut');
	
	$('#winnerText').toggleClass('fadeIn');
	$('#winnerText').toggleClass('fadeOut');
	
	$('#countdownText').toggleClass('fadeIn');
	$('#countdownText').toggleClass('fadeOut');
	
	$('#winnerText').toggleClass('winnerTextAnimation');
	$('#countdownText').toggleClass('winnerTextAnimation');
    
//    player1assigned = false;
//    player2assigned = false;
//    //move player backgrounds & player images down
//    $('#landingPage').toggleClass('gameTime'),
//    $('.player1').toggleClass('playerSelect'),
//    $('.player1ImageWrapper').toggleClass('playerSelect'),
//    $('.player1Name').toggleClass('player1NameAnimate'),
//    $('.player2').toggleClass('playerSelect'),
//    $('.player2ImageWrapper').toggleClass('playerSelect'),
//    $('.player2Name').toggleClass('player2NameAnimate');
//    $('.gameInformation').toggleClass('gameInformationAnimation');
	
	setTimeout(function(){
		location.reload();
	}, 2000);
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
    
//    $('.radial-timer').removeClass('s-animate');
}
 
