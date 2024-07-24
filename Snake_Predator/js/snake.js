
class Snake {
    _x;
    _y;
    _size;
    _color;
    _speed;
    _ctx;
    _flag;
    _score;
    _snakeBody = [];
    

    constructor(x, y, size, color, snakeBoby) {
        this._x = x;
        this._y = y;
        this._size = size;
        this._color = color;
        this._speed = 0;
        this._score = 0;
        this._canvas = document.getElementById("screen-game");
        this._ctx = this._canvas.getContext("2d");
        this._flag = "right";
        this._snakeBody = snakeBoby;
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.rect(this._x, this._y, this._size, this._size);
        this._ctx.fillStyle = this._color;
        this._ctx.fill();
        this._ctx.closePath();
    }

    move() {
        // Move the snake
        this.clearScreen();
        // handle click events on the keyboard
        this.controlFlag();
        this.controlDirection();
        this.handleCollideScreen();
        this.draw();
    }

    handleCollideScreen() {
        switch (this._flag) {
            case "right":
                this.handleCollideRightScreen();
                break;
            case "left":
                this.handleCollideScreenLeft();
                break;
            case "up":
                this.handleCollideTopScreen();
                break;
            default:
                this.handleCollideBottomScreen();
                break;
        }

    }

    handleCollideBottomScreen() {
        if (this._y + this._size >= this._canvas.height) {
            this._y = 0;
        }
    }

    handleCollideTopScreen() {
        if (this._y <= 0) {
            this._y = this._canvas.height - this._size;
        }
    }

    handleCollideScreenLeft() {
        if (this._x <= 0) {
            this._x = this._canvas.width - this._size;
        }
    }

    handleCollideRightScreen() {
        if (this._x + this._size >= this._canvas.width) {
            this._x = 0;
        }
    }

    controlDirection() {
        switch (this._flag) {
            case "left":
                this.moveLeft();
                break;
            case "right":
                this.moveRight();
                break;
            case "up":
                this.moveUp();
                break;
            case "down":
                this.moveDown();
                break;

        }
    }

    controlFlag() {
        window.addEventListener("keydown", (evt) => {
            const keyNumber = evt.keyCode;
            if (keyNumber === 40) {
                this._flag = "down";
                this._speed = 3;
            } else if (keyNumber === 39) {
                this._flag = "right";
                this._speed = 3;
            } else if (keyNumber === 37) {
                this._flag = "left";
                this._speed = 3;
            } else if (keyNumber === 38) {
                this._flag = "up";
                this._speed = 3;
            }
        })
    }

    moveRight() {
        this._x += this._speed;
    }

    moveLeft() {
        this._x -= this._speed;
    }

    moveDown() {
        this._y += this._speed;
    }

    moveUp() {
        this._y -= this._speed;
    }

    clearScreen() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    gameOver(Barrier, Barrier1, score) {
        if (
          this._x + this._size >= Barrier._x 
            &&
          this._x <= Barrier._x + 10 
          &&
          this._y >= Barrier._y 
          &&
          this._y <= Barrier._y + Barrier._size 


        ) {
          alert("Game Over! Điểm bạn đạt được là : " + this._score);
           this.reset();
        }else if (
            this._x + this._size >= Barrier1._x 
            &&
          this._x <= Barrier1._x + 10 
          &&
          this._y >= Barrier1._y 
          &&
          this._y <= Barrier1._y + Barrier._size ){
            alert("Game Over! Điểm bạn đạt được là : " + this._score);
            this.reset();
          }
      }



    eat(food) {
        switch (this._flag) {
            case "right":
                // xu ly va cham ben trai moi
                if (this._x + this._size >= food._x - food._radius
                    && this._y <= food._y && food._y <= this._y + this._size) {
                    food.randomPosition();
                    this._score++;
                    score.innerHTML = 'Score:' + this._score;
                }
                break;
            case "left":
                if (this._x <= food._x + food._radius
                    && this._y <= food._y && food._y <= this._y + this._size) {
                    food.randomPosition();
                    this._score++;
                    score.innerHTML = 'Score:' + this._score;
                }
                break;
            case "up":
                if (this._y <= food._y + food._radius
                    && this._x <= food._x && food._x <= this._x + this._size) {
                    food.randomPosition();
                    this._score++;
                    score.innerHTML = 'Score:' + this._score;
                }
                break;
            default:
                if (this._y + this._size >= food._y - food._radius
                    && this._x <= food._x && food._x <= this._x + this._size) {
                    food.randomPosition();
                    this._score++;
                    score.innerHTML = 'Score:' + this._score;
                }
        }
      

    }
    reset() {
        this._x = 30;
        this._y = 30;
        food.randomPosition();
        this._speed = 0;
        this._score = 0;
        score.innerHTML = 'Score :' + this._score;
    }
   
}