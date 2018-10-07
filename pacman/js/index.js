'use strict';

const size = 64;

// below defines the size of the gameplan in multiples of variable "size"

class Pacman {
  constructor(posX, posY, name, color, direction, gp) {
    this.posX = posX;
    this.posY = posY;
    this.mouth = "open";
    this.name = name;
    this.color = color;
    this.direction = direction;
    this.gameplan = gp;
    this.standingOnBomb = 0;
  }

  checkIfBomb() {
    const pacman = document.getElementById(`pacman-${this.name}`);
    if ((johnny.posX) === bomb.posX && (johnny.posY) === bomb.posY) {
      console.log("BOOOOM");
      pacman.className = "pacman tombstone";
    }

  }

  moveRight() {
    if (this.posX < (this.gameplan.width - 1) * size) {
      this.posX += size;
    }
    this.direction = "r";
    this.chew();
    this.updateHTML();
    this.checkIfBomb();
  };

  moveLeft() {
    if (this.posX > 0) {
      this.posX -= size;
    }
    this.direction = "l";
    this.chew();
    this.updateHTML();
    this.checkIfBomb();

  };

  moveUp() {
    if (this.posY > 0) {
      this.posY -= size;
    }
    this.direction = "t"
    this.chew();
    this.updateHTML();
    this.checkIfBomb();

  };

  moveDown() {
    if (this.posY < (this.gameplan.height - 1) * size) {
      this.posY += size;
    }
    this.direction = "b";
    this.chew();
    this.updateHTML();
    this.checkIfBomb();

  };

  chew() {
    if (this.mouth === "open") {
      this.mouth = "close";
    } else {
      this.mouth = "open";
    }
  }

  updateHTML() {
    const pacman = document.getElementById(`pacman-${this.name}`);
    pacman.style.left = this.posX + "px";
    pacman.style.top = this.posY + "px";
    pacman.className = `pacman pac-${this.color}-${this.direction + this.mouth}`;
  }
}

class Bomb {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  placeBomb(x, y) {
    this.posX = x * size;
    this.posY = y * size;
  }
}

const bombs = [];
bombs[0] = new Bomb;
bombs[0].placeBomb(
  (Math.floor(Math.random()*gameplan.width)),
  (Math.floor(Math.random()*gameplan.height)
  ));

const bomb = new Bomb;
bomb.placeBomb(2, 2);


const johnny = new Pacman(0, 0, "johnny", "light", "r", gameplan);
const sally = new Pacman(0, size, "sally", "dark", "r", gameplan);

function mount() {
  johnny.updateHTML();
  sally.updateHTML();
  let body = document.getElementById("body");
  body.style.width = gameplan.width * size + "px";
  body.style.height = gameplan.height * size + "px";
}

mount();

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      johnny.moveRight();
    } else if (e.key === "ArrowLeft") {
      johnny.moveLeft();
    } else if (e.key === "ArrowUp") {
      johnny.moveUp();
    } else if (e.key === "ArrowDown") {
      johnny.moveDown();
    } else if (e.key === "d") {
      sally.moveRight();
    } else if (e.key === "a") {
      sally.moveLeft();
    } else if (e.key === "w") {
      sally.moveUp();
    } else if (e.key === "s") {
      sally.moveDown();
    }

  })
});