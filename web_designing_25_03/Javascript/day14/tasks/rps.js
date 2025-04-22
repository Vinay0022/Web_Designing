var player1 = prompt("Player 1 Enter: Stone, Paper, scissors").toLowerCase();
var player2 = prompt("Player 2 Enter: Stone, Paper, scissors").toLowerCase();

// Tie 
if(player1==player2){
confirm("It's Tie");
}
// Player 2 wining conditions.
else if(player1=="stone" && player2=="paper"){
confirm(`Player2 wins. ${player2} beats ${player1}`);
}
else if(player1=="paper" && player2=="scissors"){
confirm(`Player2 wins. ${player2} beats ${player1}`);
}
else if(player1=="scissors" && player2=="stone"){
confirm(`Player2 wins. ${player2} beats ${player1}`);
}

// Player 1 wining conditions.
else if(player1=="paper" && player2=="stone"){
    confirm(`Player1 wins. ${player1} beats ${player2}`);
    }
    else if(player1=="scissors" && player2=="paper"){
   confirm(`Player1 wins. ${player1} beats ${player2}`);
    }
    else if(player1=="stone" && player2=="scissors"){
    confirm(`Player1 wins. ${player1} beats ${player2}`);
    }

    else{
        confirm(`Something went wrong.`);
    }