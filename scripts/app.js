// Singleton for game states
function GameState(game) {
	var self = this,
			states = {
				INITIALIZING: { name: 'stateInit' , id: 0 , callback: function () {
					game.initGame();
				}},
				MENU: { name: 'stateMenu' , id: 1 , callback: function() {
					game.initMenu();
				}},
				PLAYING: { name: 'statePlay' , id: 2 , callback: function() {
					game.playGame();
				}},
				ERROR: { name: 'stateError' , id: 3 , callback: function(event) {
					game.handleError(event);
				}},
				LOADING: { name: 'stateLoading' , id: 9 , callback: function() {
					game.initLoading();
				}}
			};
	self.Event = [];
	
	self.init = function () {
	
		
	};
	
	self.subscribe = function(event,callback) {
		self.Event[event] = callback;
	};
	
	self.updateEvent = function (event) {
		console.log(self.Event[event]);
		if (self.Event[event] !== undefined)
			self.Event[event](this);
	};
	// state getter-setter
	self.state = function (state) {
		if (state !== undefined) {
			self.currentState = state;
		} else if (self.currentState !== undefined) {	
			return self.currentState;				
		} else {
			return self.states.ERROR;
		}
		self.updateEvent(state.name);
		console.log( 'State changed to ' + state.name );
		return self.state;
	};
	console.log('Initializing GameState');
	// Event su
	for (var state in states) {
		self.subscribe(states[state].name, states[state].callback);
	}

	self.state(states.INITIALIZING);

	return self;
}

function Application() {
	var self = this;
	
	self.initGame = function () {
		console.log('GameInit - show');
	};
	
	self.initMenu = function () {
		console.log('Menu initializate - show');
		// Render Menu
		
		
		
	};
	
	self.handleError = function () {
		console.log('handling error');
	};
	
	var gameState = new GameState(self);
	gameState.init();
}

var app = new Application();



