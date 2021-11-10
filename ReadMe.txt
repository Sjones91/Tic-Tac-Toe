A two player game of Tic Tac Toe written in JavaScript.
The top of the script grabs the elements from the HTML and sets various variables such as player objects, winning states and the tile board matrix.
There is then a loop that adds an event listener to each tile.

The game logic then follows that allows each player to take a turn, update the class of the tile clicked to display the naught or cross, change the turn value of each player to true or false and then remove the event listener.
This function also updates the tileboard matrix and runs a function checkWin to determine if a winning state has been achieved by either player. 
another function also runs called displayResults which displays a winning card with the winning player and a button to reset the game and play again.