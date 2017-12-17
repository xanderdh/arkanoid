var keys = {
	'LEFT' : 37,
	'RIGHT' : 39,
	'UP' : 38
};

var keyDown ={};

var setKey = function(keyCode) {
	keyDown[keyCode] = true;
};

var clearKey = function(keyCode){
	keyDown[keyCode] = false;
};

var isKeyDown = function(keyName){
	return keyDown[keys[keyName]];
};

window.onkeydown = function(e){
	setKey(e.keyCode);
};

window.onkeyup = function(e){
	clearKey(e.keyCode);
};
