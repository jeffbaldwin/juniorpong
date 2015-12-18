$command = $_POST['leaderboard'];

$domain = $_POST[''];

$token = $_POST['cTrTjmmrFVY2dAUrzU2qhgRW'];

if($token != 'cTrTjmmrFVY2dAUrzU2qhgRW'){ 
    $msg = "The token for the slash command doesn't match. Check your script.";
    die($msg);
    echo $msg;
}

 $reply = "