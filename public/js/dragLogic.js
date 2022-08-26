const piecesImg = document.querySelectorAll(".apiece");

for (let i = 0; i < raws.length; i++) {
  let squares = raws[i].children;
  for (let u = 0; u < squares.length; u++) {
    squares[u].ondragover = allowDrop;
    squares[u].ondrop = drop;
  }
}

function allowDrop(event) {
  event.preventDefault();
}
for (let i = 0; i < piecesImg.length; i++) {
  piecesImg[i].ondragstart = drag;
}

function drag(event) {
  event.dataTransfer.setData("id", event.target.id);
  event.target.style.setProperty('max-height', '90px')
  
}

function drop(event) {
  let pieceId = event.dataTransfer.getData("id");
  let killedPieceId
  if (event.target.id[0]=== 'w'|| event.target.id[0] ==='b'){
   killedPieceId = event.target.id
   console.log(killedPieceId)

   
  }else{
   console.log('comes null')
   killedPieceId = null
  }
  let squareId = event.target.id;
  console.log(squareId, 'SquareId')
  document.querySelector(`#${pieceId}`).style.setProperty('max-height', '60px')
  const mySecondMessage = JSON.stringify({ pieceId, squareId, killedPieceId });
  // * 15 ws.send на сервер
  if (isOpen(ws)){
  ws.send(mySecondMessage);
  }
  //   event.target.append(document.getElementById(pieceId));
}
