
const START = 0
const END = 1
 
 //Html elements
 const playerStat = document.getElementById('player')
 const gameTable = document.getElementById('game')
 const p1= document.getElementById('p1');
 const p2= document.getElementById('p2');


 const game={
    state: START ,
    turn:'X',
    move:0
 }
 function endgame(winner){
     if(winner){

         alert(`Game Over!!!Congratulation!! ${winner} you are a winner. Hurrayy🥳🎉`)
     }
     else{
         alert('Game Over | DRAW ')
     }
     game.state = END
 }
 function buttonRestart(){
    if(Math.random()>0.5) game.turn = 'O'
    else game.turn = 'X'
    game.state = START 
    game.move = 0
    Array.from(document.getElementsByTagName('td')).forEach(cell=>{
        cell.textContent = ''
    })
 }
 function nextTurn(){
     if(game.state == END) return
    game.move++
    if(game.turn=='X') game.turn = 'O'
    else game.turn ='X'


    playerStat.textContent = game.turn
    if(game.move == 9){
        endgame()
    }
 }

 function isSeqCapture(arrayOf3Cells){
    let WinComb =game.turn+game.turn+game.turn
    if(arrayOf3Cells.map(i => i.textContent).join('')===WinComb){
        endgame(game.turn)
    }
 }
 function isRowCapture(row){
     let tableRow = Array.from(gameTable.children[0].children[row-1].children)
     let WinComb =game.turn+game.turn+game.turn
     isSeqCapture(tableRow)
 }
 function iscolCapture(col){
    let tableCol = [

        gameTable.children[0].children[0].children[col-1],
        gameTable.children[0].children[1].children[col-1],
        gameTable.children[0].children[2].children[col-1]
]
    // console.log(tableCol)
    isSeqCapture(tableCol)
    }

function isDiaCapture(row,col){
    if(row !=col && (row+col)!=4)return
    let diag1 = [gameTable.children[0].children[0].children[0],
    gameTable.children[0].children[1].children[1],
    gameTable.children[0].children[2].children[2]
]
    let diag2 = [
        gameTable.children[0].children[0].children[2],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[0]
]
    isSeqCapture(diag1)
    isSeqCapture(diag2)
}


function boxClicked(row,col){
    if(game.state == END){

        alert("Game ENDED | Restart To play AGAIN")
        return
    }
    console.log('box-clicked =', row, col)
    let clickedBox = gameTable.children[0].children[row-1].children[col-1]
    clickedBox.textContent = game.turn 
    isRowCapture(row)
    iscolCapture(col)
    isDiaCapture(row,col)

    nextTurn()
}