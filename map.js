var Tile = function(x,y,w,h,c, bonus, life) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;
	this.bonus = bonus;
	this.life = life;
};

Tile.prototype.draw = function() {
	if (this.life >= 1) {
		draw(this.x, this.y, this.w, this.h, this.c);
	}
};


var level = {
	1: [
		[1,1,1,1,1,1,1,1,1,1],
		[0,1,0,0,1,1,1,0,1,0],
		[0,1,0,0,0,1,0,0,1,0],
		[0,1,0,0,0,1,0,0,1,0],
		[0,0,0,0,0,1,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0]
	]
};


var greed = {
	map: [],
	w: 50,
	h: 20,
	makeMap: function(lvl){
		var l = level[lvl];
		var i,j;
		for (i = 0; i < l.length; i++){
			for(j = 0; j < l[i].length; j++) {

				this.map.push(new Tile(j * (this.w + 5) + 45, i * (this.h + 5) + 20, this.w, this.h, 'red', 0, l[i][j]))
			}
		}
	},
	render: function(){
		for (var i = 0; i < this.map.length; i++) {
			this.map[i].draw();
		}
	}
};

greed.makeMap(1);
