var stop = function(){
	//function when lose
	console.log('stop');
};

var game = function(){
	//console.log('game is in progress');
	clearAll();
	fillAll('#ccc');
	player.draw();
	player.move();

	greed.render();

	ball.init();
	ball.draw();
	ball.move();

	if (ball.y - ball.r > gameCondition.h) {
		if (player.hp > 1) {
			player.hp--;
			ball.stop = true;
			console.log('player HP: ' + player.hp)
		} else {
			 setGame(stop)
		}

	}

};

startGame(game);
