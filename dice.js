
    
        let  player1 = "खिलाड़ी 1";
        let player2 = "खिलाड़ी 2";
  
   
        function restartgame() {
            player1 = prompt("खिलाड़ी 1 का नाम बदले");
            player2 = prompt("खिलाड़ी 2 का नाम बदले");
  
            document.querySelector("p.Player1")
                            .innerHTML = player1;
                              
            document.querySelector("p.Player2")
                            .innerHTML = player2;
        }
  
      
        function rollTheDice() {
            setTimeout(function () {
                let randomNumber1 = Math.floor(Math.random() * 6) + 1;
                let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
                document.querySelector(".img1").setAttribute("src",
                    "dice" + randomNumber1 + ".png");
  
                document.querySelector(".img2").setAttribute("src",
                    "dice" + randomNumber2 + ".png");
  
                if (randomNumber1 === randomNumber2) {
                    document.querySelector("h1").innerHTML = "Draw!";
                }
  
                else if (randomNumber1 < randomNumber2) {
                    document.querySelector("h1").innerHTML
                        = (player2 + " WINS!");
                }
  
                else {
                    document.querySelector("h1").innerHTML
                        = (player1 + " WINS!");
                }
            }, 25);
        }