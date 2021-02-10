var game = {};
game.scoreBoard = function () {
    return Math.abs(game.ply1.point - game.ply2.point);
}
game.ply1 = {
    name: "Player1",
    point: 0
};
game.ply2 = {
    name: "Player2",
    point: 0
};

var loadNameEntry= function(){
    document.getElementById("entry").classList.remove("invisible");
    document.getElementById("play_btn").classList.add("invisible");
}

var initGame = function () {
    document.getElementById("roll_btn").classList.remove("invisible");
    document.getElementById("scoreboard").classList.remove("invisible");
    document.getElementById("reset_btn").classList.remove("invisible");
    document.getElementsByClassName("dice")[0].classList.remove("invisible");
    document.getElementById("entry").classList.add("invisible");
    document.getElementById("play_btn").classList.add("invisible");
    
    game.ply1.name = document.getElementById("player1_name").value
    game.ply2.name = document.getElementById("player2_name").value
    document.getElementById("player1_lbl").textContent = game.ply1.name
    document.getElementById("player2_lbl").textContent = game.ply2.name
};

var roll= function(){
    random1 = Math.random() * 6 + 1
    random2 = Math.random() * 6 + 1
    random1 = Math.floor(random1)
    random2 = Math.floor(random2)
    document.getElementById("img1").src = `images/dice${random1}.png`
    document.getElementById("img2").src = `images/dice${random2}.png`

    if (random1 > random2) {
        updateScore(1)
    }
    else if (random1 < random2) {
        updateScore(2)
    }
    else {
    }
}

var resetGame = function () {
    updateScore(3)
    document.getElementById("play_btn").classList.remove("invisible");
    document.getElementById("roll_btn").classList.add("invisible");
    document.getElementById("reset_btn").classList.add("invisible");
    document.getElementsByClassName("dice")[0].classList.add("invisible");
    document.getElementById("scoreboard").classList.add("invisible");
};

var updateScore = function (who) {
    if (who == 1) {
        game.ply1.point+=1
        document.getElementById("player1_scr").textContent = game.ply1.point
    }
    else if (who == 2) {
        game.ply2.point+=1
        document.getElementById("player2_scr").textContent = game.ply2.point
    }
    else{
        game.ply1.point = 0
        game.ply2.point = 0
        document.getElementById("player1_scr").textContent = game.ply1.point
        document.getElementById("player2_scr").textContent = game.ply2.point
    }
    document.getElementById("Score").textContent = game.scoreBoard()

    if(game.scoreBoard() > 3){ //when the difference between players score more than 3 game will end.
        if(game.ply1.point> game.ply2.point){
            alert(`${game.ply1.name} won the game!`)
        }
        else if(game.ply1.point < game.ply2.point){
            alert(`${game.ply2.name} won the game!`)
        }
        resetGame()
    }

}