var _canvas;
var _context;
var _animate;
var _myReq;
var _reqAnimation;
var _cancelAnimation;
var _starttime;
var _monster1;
var _monster2;
var _monster3;
var _monster4;
var _monster5;
var _monster6;
var _monster7;
var _monster8;
var _monster9;
var _time = 60;
var _xMouse = 10;
var _yMouse = 110;
var _clickMonster1;
var _clickMonster2;
var _clickMonster3;
var _clickMonster4;
var _clickMonster5;
var _clickMonster6;
var _clickMonster7;
var _clickMonster8;
var _clickMonster9;
var _tempMonster1 = 0;
var _tempMonster2 = 0;
var _tempMonster3 = 0;
var _tempMonster4 = 0;
var _tempMonster5 = 0;
var _tempMonster6 = 0;
var _tempMonster7 = 0;
var _tempMonster8 = 0;
var _tempMonster9 = 0;
var _countMonsterDie = 0;
var _clickCanvas = 0;
var _score = 0;
var _heart = 0;
var _monsterDie = 0;
var _nextGame = 0;
var _speed = 1;
var myReq;
//var time = new Date();

window.onload = function() {
	_canvas = document.getElementById("myCanvas");
	_context = _canvas.getContext("2d");
	//_monster = new Monster(_canvas.width,_canvas.height);
	//setInterval("update()",interval);
	_canvas.width = 500;
	_canvas.height = 400;
	_monster1 = new Monster(_canvas.width,_canvas.height);
    _monster1.draw();
    _monster2 = new Monster(_canvas.width,_canvas.height);
    _monster2.draw();
    _monster3 = new Monster(_canvas.width,_canvas.height);
    _monster3.draw();
    _monster4 = new Monster(_canvas.width,_canvas.height);
    _monster4.draw();
    _monster5 = new Monster(_canvas.width,_canvas.height);
    _monster5.draw();
    _monster6 = new Monster(_canvas.width,_canvas.height);
    _monster6.draw();
    _monster7 = new Monster(_canvas.width,_canvas.height);
    _monster7.draw();
    _monster8 = new Monster(_canvas.width,_canvas.height);
    _monster8.draw();
    _monster9 = new Monster(_canvas.width,_canvas.height);
    _monster9.draw();
	_reqAnimation = window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame;
	_cancelAnimation = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

	if(_reqAnimation) {
		update();
	}
	else {
		alert("Ac");
	}

}

function update(time) {
	if(!_starttime)
	    _starttime = time;
	if((time - _starttime) > (_time)) {
		_starttime  = time;
		_context.clearRect(0, 0, 500, 400);

	    _clickMonster1 = kiemTraClick(_monster1, _clickCanvas);
        _clickMonster2 = kiemTraClick(_monster2, _clickCanvas);
        _clickMonster3 = kiemTraClick(_monster3, _clickCanvas);
        _clickMonster4 = kiemTraClick(_monster4, _clickCanvas);
        _clickMonster5 = kiemTraClick(_monster5, _clickCanvas);
        _clickMonster6 = kiemTraClick(_monster6, _clickCanvas);
        _clickMonster7 = kiemTraClick(_monster7, _clickCanvas);
        _clickMonster8 = kiemTraClick(_monster8, _clickCanvas);
        _clickMonster9 = kiemTraClick(_monster9, _clickCanvas);

        if(_clickMonster1) {
            _tempMonster1 = 1;
        }
        if(_clickMonster2) {
            _tempMonster2 = 1;
        }
        if(_clickMonster3) {
	        _tempMonster3 = 1;
        }
        if(_clickMonster4) {
	        _tempMonster4 = 1;
        } 
        if(_clickMonster5) {
	        _tempMonster5 = 1;
        } 
        if(_clickMonster6) {
	        _tempMonster6 = 1;
        } 
        if(_clickMonster7) {
	        _tempMonster7 = 1;
        } 
        if(_clickMonster8) {
	        _tempMonster8 = 1;
        }  
        if(_clickMonster9) {
	        _tempMonster9 = 1;
        } 

        if(_tempMonster1 == 0) {
            _monster1.update();
        } else {
            _monster1.die(_monster1.cx, _monster1.cy);
        }
        if(_tempMonster2 == 0) {
        	_monster2.update();
        } else {
            _monster2.die(_monster2.cx, _monster2.cy);
        }
        if(_tempMonster3 == 0) {
        	_monster3.update();
        } else {
            _monster3.die(_monster3.cx, _monster3.cy);
        }
        if(_tempMonster4 == 0) {
        	_monster4.update();
        } else {
            _monster4.die(_monster3.cx, _monster3.cy);
        }
        if(_tempMonster5 == 0) {
        	_monster5.update();
        } else {
            _monster5.die(_monster3.cx, _monster3.cy);
        }if(_tempMonster6 == 0) {
        	_monster6.update();
        } else {
            _monster6.die(_monster3.cx, _monster3.cy);
        }
        if(_tempMonster7 == 0) {
        	_monster7.update();
        } else {
            _monster7.die(_monster3.cx, _monster3.cy);
        }if(_tempMonster8 == 0) {
        	_monster8.update();
        } else {
            _monster8.die(_monster3.cx, _monster3.cy);
        }if(_tempMonster9 == 0) {
        	_monster9.update();
        } else {
            _monster9.die(_monster3.cx, _monster3.cy);
        }

        //Kiem tra click chuot
        if((_xMouse > 10) && (_yMouse > 110) && (_clickMonster1 != 1) && (_clickMonster2 != 1) && (_clickMonster3 != 1) &&
        (_clickMonster4 != 1) && (_clickMonster5 != 1) && (_clickMonster6 != 1) && (_clickMonster7 != 1) &&
        (_clickMonster8 != 1) && (_clickMonster9 != 1)) {
        	_nextGame++;
        	if(_nextGame < 5) {
        		alert("Bạn còn " + (5 - _nextGame) + " lần chơi");
        		document.getElementById("heart").innerHTML = 5 - _nextGame;
        	} else {
        		alert("Bạn đã hết lượt chơi. Bạn được " + _score + " điểm");
        		document.getElementById("heart").innerHTML = 4;
        		document.getElementById("score").innerHTML = 0;
        		_score = 0;
        		_nextGame = 0;
            }
            _tempMonster1 = 0;
			_tempMonster2 = 0;
			_tempMonster3 = 0;
			_tempMonster4 = 0;
			_tempMonster5 = 0;
			_tempMonster6 = 0;
			_tempMonster7 = 0;
			_tempMonster8 = 0;
			_tempMonster9 = 0;
        }

        //Qua man
        if((_tempMonster1 == 1) && (_tempMonster2 == 1) && (_tempMonster3 == 1) && (_tempMonster4 == 1) && (_tempMonster5 == 1) && 
        (_tempMonster6 == 1) && (_tempMonster7 == 1) && (_tempMonster8 == 1) && (_tempMonster9 == 1)) {
        	_tempMonster1 = 0;
        	_tempMonster2 = 0;
        	_tempMonster3 = 0;
        	_tempMonster4 = 0;
        	_tempMonster5 = 0;
        	_tempMonster6 = 0;
        	_tempMonster7 = 0;
        	_tempMonster8 = 0;
        	_tempMonster9 = 0;
        	_speed++;
        	_time = _time - 10;
        	document.getElementById("speed").innerHTML = _speed;
        	if(_speed == 6) {
        		alert("Bạn đã chiến thắng với " + _score + " điểm. Nhấn F5 để chơi lại.");
        	}        	
        }

        //Tra lai vi tri chuot sau moi lan update
        _xMouse = 10;
	    _yMouse = 110;
	    document.getElementById("score").innerHTML = _score;
	}
    _myReq = _reqAnimation(update);
}

Monster.prototype.update = function() {
    this.draw();
    this.move();
    this.checkCollision();
}
function Monster(mapWidth, mapHeight) {
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.radius = 1;
	this.speedX = 1;
	this.speedY = 1;
	this.cx = Math.floor(Math.random(this.mapWidth)*(this.mapWidth-2*this.radius)) + this.radius;
	this.cy = Math.floor(Math.random(this.mapHeight)*(this.mapHeight-2*this.radius)) + this.radius;	
	/**this.cx = 0;
	this.cy = 0;**/
}
Monster.prototype.draw = function() {
	this.cx += this.speedX;
	this.cy += this.speedY;
	this.left = this.cx - this.radius;
	this.top = this.cy - this.radius;
	this.right = this.cx + this.radius;
	this.bottom = this.cy + this.radius;
    var _x = this.cx + this.speedX;
    var _y = this.cy + this.speedY;
    var img = createMonster(_x, _y);	
}
Monster.prototype.die = function() {
    var img = monsterDie(this.cx, this.cy);	
}
Monster.prototype.move = function(){
	this.cx += this.speedX;
	this.cy += this.speedY;
	this.left = this.cx - this.radius;
	this.top = this.cy - this.radius;
	this.right = this.cx + this.radius;
	this.bottom = this.cy + this.radius;
}
Monster.prototype.checkCollision = function(shapes) {
    if(this.left <= 0 || this.right >= this.mapWidth) 
    	this.speedX = -this.speedX;
	if(this.top <= 0 || this.bottom >= this.mapHeight) 
		this.speedY = -this.speedY;
}
function createMonster(_x, _y) {
    var img = new Image();
    img.onload = function() {
    	_context.drawImage(img, _x, _y, 50, 50);
    }
    img.src = "images/monster.png";
    return img;
}
function monsterDie(_x, _y) {
    var img = new Image();
    img.onload = function() {
        _context.drawImage(img, _x, _y, 50, 50);
    }
    img.src = "images/monster_die.jpg";
    return img;
}

function showit() {
    _xMouse = event.x;
    _yMouse = event.y;
}

function showitMOZ(e) {
    _xMouse = e.pageX;
    _yMouse = e.pageY;
}

if(!document.all) {
    window.captureEvents(Event.CLICK);
    window.onclick=showitMOZ;
} else {
  document.onclick=showit;
}
function kiemTraClick(monster, clickCanvas) {
	if((_xMouse <= (monster.cx + 50 + 10)) && ((monster.cx + 10) <= _xMouse) && 
		(_yMouse <= (monster.cy + 50 + 110)) && ((monster.cy + 110) <= _yMouse)) {
		_score++;
		return true;
	}
    clickCanvas = 1;
	return false;
}

function boomMonsters() {
	_monster1.die(_monster1.cx, _monster1.cy);
	_monster2.die(_monster1.cx, _monster1.cy);
	_monster3.die(_monster1.cx, _monster1.cy);
	_monster4.die(_monster1.cx, _monster1.cy);
	_monster5.die(_monster1.cx, _monster1.cy);
	_monster6.die(_monster1.cx, _monster1.cy);
	_monster7.die(_monster1.cx, _monster1.cy);
	_monster8.die(_monster1.cx, _monster1.cy);
	_monster9.die(_monster1.cx, _monster1.cy);
	_cancelAnimation(_myReq);
}
function pauseMonsters() {
	_cancelAnimation(_myReq);
}
function resumeMonsters() {
	_myReq = _reqAnimation(update);
}
function stopMonsters() {
	_cancelAnimation(_myReq);
}