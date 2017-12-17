var player = {
	hp: 3,
	color: '#2100FF',
	w: 100,
	h: 10,
	x: 0,
	speed: 5,
	dir: 0,
	score: 0,


	move: function() {
		if (isKeyDown('LEFT') && this.x > 0) {
			this.x -= this.speed;
			this.dir = -1;
		} else if 
		(isKeyDown('RIGHT') && this.x + this.w < gameCondition.w) {
			this.x += this.speed;
			this.dir = 1;
		} else {
			this.dir = 0;
		}
	},

	draw: function() {
		draw(this.x, gameCondition.h - this.h, this.w, this.h, this.color);
	},

	updScore: function(score) {
		this.score += score;
	}

};

player.x = gameCondition.w / 2 - player.w / 2;

var ballSpeed = 3;
var ball = {	
	speedX: ballSpeed,
	speedY: ballSpeed,
	x: 0,
	y: 0,
	r: 5,
	color: 'red',
	stop: true,

	dx: 1,
	dy: -1,

	draw: function() {
		drawCircle(this.x, this.y, this.r, this.color);
		drawCircle(this.x, this.y, 3, 'blue');
		
	},
	move: function() {
		if (this.stop && isKeyDown('UP')) {
			this.stop = false;
		}

		if (this.x - this.r <= 0 || this.x + this.r >= gameCondition.w) {
			this.dx *= -1;
		}

		if (this.y - this.r <= 0) {
			this.dy *= -1;
		}

		

		if ( isCollision(this.x, this.y - this.r, this.r * 2, this.r * 2, player.x, gameCondition.h - player.h, player.w, player.h) ) {
			this.dy = -1;
			
			//player resist phisicks
			if (player.dir == 0) {
				this.speedX += 0.05;
				this.speedY += 0.05;
			}

			if (player.dir === this.dx) {
				this.speedX += this.speedX / player.speed;
			} 
			if (player.dir === -this.dx && this.speedX - this.speedX / player.speed > 0.4) {
				this.speedX -= this.speedX / player.speed;
				this.dx *= -1;
			}
		}

		for (var i = 0; i < greed.map.length; i++) {
			if (isCollision(this.x, this.y + this.r, this.r * 2, this.r * 2, greed.map[i].x, greed.map[i].y, greed.map[i].w, greed.map[i].h) && greed.map[i].life >= 1) {
				greed.map[i].life -= 1;
				//this.dy *= -1;
			}
		}



		this.x += this.speedX * this.dx;
		this.y += this.speedY * this.dy;

		console.log(this.speedX + ' ' + this.speedY);
	},

	init: function(){
		if (this.stop) {
			this.x = player.x + player.w / 2 ;
			this.y = gameCondition.h - player.h - ball.r - 1;
		}
	}
}
