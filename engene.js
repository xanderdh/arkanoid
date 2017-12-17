var render = (function(){
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback) {
		setTimeout(callback, 1000 / 60);
	};
})();

var engine = function(){
	console.log("Game Loop doesn't init");
};

var startGame = function(game){
	if (typeof game == 'function') {
		engine = game;
	}
	gameLoop();
};

var setGame = function(game){
	if (typeof game == 'function') {
		engine = game;
	}
};

var gameLoop = function() {
	engine();
	render(gameLoop);
};

var getRandom = function (min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
};

var clearAll = function(){
	ctx.clearRect(0, 0, gameCondition.w, gameCondition.h);
};

var fillAll = function(color){
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, gameCondition.w, gameCondition.h);
};

var draw = function(x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
};

var drawCircle = function(x, y, r, color){
	ctx.fillStyle = color;
	ctx.beginPath(); 
	ctx.arc(x, y, r, 0, Math.PI*2, false); 
	ctx.closePath(); 
	ctx.fill();
};

var isCollision = function(x1, y1, w1, h1, x2, y2, w2, h2) {
	return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && h1 + y1 > y2
}
