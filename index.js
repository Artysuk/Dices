function getRandomArbitrary() {
    return Math.ceil(Math.random() * 6);
  }

let dice1 = getRandomArbitrary();
document.querySelector(".dice .img1").setAttribute("src",`./images/dice${dice1}.png`);

let dice2 = getRandomArbitrary();
document.querySelector(".dice .img2").setAttribute("src",`./images/dice${dice2}.png`);


if(dice1>dice2){
    document.querySelector(".container h1").textContent = "Player 1 wins!";
}
else if(dice1<dice2){
    document.querySelector(".container h1").textContent = "Player 2 wins!";
}
else{
    document.querySelector(".container h1").textContent = "It's a tie!";
}