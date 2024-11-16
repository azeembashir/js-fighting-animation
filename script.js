let pos1 = 1; 
let pos2 = 1; 

let character1 = document.getElementById("char1");
let character2 = document.getElementById("char2");

function moves(event) {
  

  if (event.keyCode === 37) { 
    pos1 -= 10;
    character1.style.left = pos1 + "px";
  }
  if (event.keyCode === 39) { 
    pos1 += 10;
    character1.style.left = pos1 + "px";
  }

  if (event.key === "a") { 
    pos2 += 10;
    character2.style.right = pos2 + "px";
  }
  if (event.key === "d") { 
    pos2 -= 10;
    character2.style.right = pos2 + "px";
  }
}

window.addEventListener("keydown", moves);
