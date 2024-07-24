const snake = new Snake(30, 30, 25, "green");
const food = new Food(100, 100, 8, "red");
const score = document.getElementById("score");
const barrier = new Barrier(200, 0, 100, "white", 5);
const barrier1 = new Barrier(800, 0, 60, "white", 5);

function play() {

    snake.move();
    food.draw();
    snake.eat(food);
    // score.draw();
    barrier.move();
    barrier1.move();
    snake.gameOver(barrier, barrier1);
    requestAnimationFrame(play)
}



play();

gameOver(barrier, barrier1);