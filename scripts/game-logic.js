/*
** Game Board
** :::: :::::
** 
** 
**/

function Board(w,h) {
	var self = this;
			
	self.width = w;
	self.height = h;
	
	// initialization
	var Brd = new Array(width);
	for (var i = 0; i < width; i++) {
		Brd[i] = new Array(height);
	}
	
	return self;
}

Board.prototype.board = function (pos, elem){
	if (pos !== undefined && elem === undefined) {
		// Getter position
		return Brd[pos.x-1][pos.y-1];
	} else if (pos === undefined && elem === undefined) {
		// Getter all board
		return Brd;
	} else if (pos !== undefined && elem !== undefined) {
		// Setter element in position
		if ((pos.x > 0) && (pos.x <= self.width) && (pos.y > 0) && (pos.y <= self.height))
			Brd[pos.x-1][pos.y-1] = elem;
		else
			return 0;
	}
	return 0;
};

Board.prototype.getNearElements = function (pos) {
	var nearElements = [];
	
	if ((pos.y > 1) && (pos.y < self.height)) {
		/* _ _ + _ _
		 * o o e o o
		 * o o + o o
		 * _ _ _ _ _ */
		nearElements.unshift(self.board({x:pos.x, y:pos.y+1}));
		nearElements.unshift(self.board({x:pos.x, y:pos.y-1}));
	}
	if ((pos.x > 1) && (pos.x < self.width)) {
		/* | o o o |
		 * | + e + |
		 * | o o o |
		 * | o o o | */
		nearElements.unshift(self.board({x:pos.x+1, y:pos.y}));
		nearElements.unshift(self.board({x:pos.x-1, y:pos.y}));
	} 
	if (pos.x == 1) {
		/* o | | | |
		 * e + | | |
		 * o | | | |
		 * o | | | | */
		nearElements.unshift(self.board({x:pos.x+1, y:pos.y}));
	} else if (pos.x == self.width) {
		/* | | | | o
		 * | | | | o
		 * | | | + e
		 * | | | | o */
		nearElements.unshift(self.board({x:pos.x-1, y:pos.y}));
	}
	if (pos.y == 1) {
		/* o o e o o
		 * | | + | |
		 * | | | | |
		 * | | | | | */
		nearElements.unshift(self.board({x:pos.x, y:pos.y+1}));
	} else if (pos.y == self.height) {
		/* | | | | |
		 * | | | | |
		 * | | + | |
		 * o o e o o */
		nearElements.unshift(self.board({x:pos.x, y:pos.y+1}));
	}
	
	return nearElements;
};

Board.prototype.clean = function () {
	Brd = new Array(width);
	for (var i = 0; i < width; i++) {
		Brd[i] = new Array(height);
	}
};

/* @TODO
** Game Step
** :::: ::::
** 
** game steps are states and be able to go back, every placement, movement, rotation of pipes are included in the game steps in form of actions log sorted by time.
** 
**/

/*
** Game Element
** :::: :::::::
** 
** game elements are every element placeable on board.
** pipes, entrance and exit of fluids, blockers and any other board element.
** pipes n stuff inherit of game element
** 
**/

/*
** [Interface] Placeable
**             :::::::::
** 
** placeable interface implements place action in given board.
** 
**/
function Placeable() {
	var self = this;
	_elementCanBePlaced = function(b, e, x, y) {
		//@TODO
		// Board valid ?
		// Element valid ?
		// Board(x,y) free ?
		
		return true;
	};
	self.place = function(board, element, x, y) {
		if (_elementCanBePlaced(board,element,x,y)) {
			board.board(x, y, element);
			//@TODO
			// Perform connection if possible with near tiles
			// 
		}
	};
	return self;
}
