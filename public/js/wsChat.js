const ws = new WebSocket(window.location.href.replace(/^http/, "ws"));

const chatText = document.querySelector(".chatText");
const chatForm = document.getElementsByClassName("chatForm");
const chatBtn = document.querySelector(".chatBtn");
const notesContainer = document.querySelector(".notesContainer");
const deadBlack = document.querySelector(".deadBlack");
const deadWhite = document.querySelector(".deadWhite");

function isOpen(ws) {
  return ws.readyState === ws.OPEN;
}

ws.onopen = () => {
  chatBtn.disabled = false;
};
const color = `#${`${Math.random().toString(16)}000000`
  .substring(2, 8)
  .toUpperCase()}`;

chatForm[0].addEventListener("submit", (event) => {
  event.preventDefault();

  const { value } = event.target.chatInp;

  // * 14 подготовка сообщения к отправке на сервер
  const myMessage = JSON.stringify({ value, color });
  // * 15 ws.send на сервер
  if (isOpen(ws)) {
    ws.send(myMessage);
  }
});

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  let { pieceId, squareId, value, color, killedPieceId } = data;
  ///work with chat
  if (value) {
    const str = document.createElement("h3");
    str.innerText = value;
    str.style.color = color;
    chatText.appendChild(str);
    document.getElementById('exampleInput1').value = ''
  }
  if (killedPieceId && pieceId[0] != squareId[0]) {
    let thekilledPiece = document.getElementById(killedPieceId);
    let theSquare = document.querySelector(`#${squareId}`).parentElement;

    if (killedPieceId[0] == "w") {
      deadBlack.appendChild(thekilledPiece);
    }
    if (killedPieceId[0] == "b") {
      deadWhite.appendChild(thekilledPiece);
    }
    
    let thePiece = document.querySelector(`#${pieceId}`);
    theSquare.appendChild(thePiece);
    //work with pieces object
    // let thePieceOfObj = pieces.find(piece => piece.id == pieceId)
    // thePieceOfObj.position = squareId
    //alive = false
    //adding notation
    if(pieceId !=squareId){
    const str = document.createElement("h3");
    str.innerText = `${pieceId} kills ${squareId} on ${theSquare.id}`;
    notesContainer.appendChild(str);
    }
  }
  if (pieceId && !killedPieceId) {
    //moving figures
    let theSquare = document.querySelector(`#${squareId}`);
    let thePiece = document.querySelector(`#${pieceId}`);
    theSquare.appendChild(thePiece);
    //worj with pieces Obj
    let thePieceOfObj = pieces.find(piece => piece.id == pieceId)
    thePieceOfObj.position = squareId

    //adding notation
    if(pieceId != squareId){
    const str = document.createElement("h3");
    str.innerText = `${pieceId} ----> ${squareId}`;
    notesContainer.appendChild(str);
    }
    if(piceId[0] =='w' && squareId[1] == 'H'){

    }
  }

  // * 22 меняем количество вошедших юзеров
  // users.innerText = `Количество юзеров в чате: ${data.clientsSize}`;
};
