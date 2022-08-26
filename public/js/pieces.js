const squares = document.querySelector(".squareContainer");
const raws = squares.children;

const pieces = [
  { id: "wP1", imgName: "w_pawn_1x_ns.png", position: "A2", alive: true },
  { id: "wP2", imgName: "w_pawn_1x_ns.png", position: "B2", alive: true },
  { id: "wP3", imgName: "w_pawn_1x_ns.png", position: "C2", alive: true },
  { id: "wP4", imgName: "w_pawn_1x_ns.png", position: "D2", alive: true },
  { id: "wP5", imgName: "w_pawn_1x_ns.png", position: "E2", alive: true },
  { id: "wP6", imgName: "w_pawn_1x_ns.png", position: "F2", alive: true },
  { id: "wP7", imgName: "w_pawn_1x_ns.png", position: "G2", alive: true },
  { id: "wP8", imgName: "w_pawn_1x_ns.png", position: "H2", alive: true },

  { id: "wB1", imgName: "w_bishop_1x_ns.png", position: "C1", alive: true },
  { id: "wB2", imgName: "w_bishop_1x_ns.png", position: "F1", alive: true },
  { id: "wKn1", imgName: "w_knight_1x_ns.png", position: "B1", alive: true },
  { id: "wKn2", imgName: "w_knight_1x_ns.png", position: "G1", alive: true },
  { id: "wK1", imgName: "w_king_1x_ns.png", position: "E1", alive: true },
  { id: "wQ1", imgName: "w_queen_1x_ns.png", position: "D1", alive: true },
  { id: "wR1", imgName: "w_rook_1x_ns.png", position: "A1", alive: true },
  { id: "wR2", imgName: "w_rook_1x_ns.png", position: "H1", alive: true },

  { id: "bP1", imgName: "b_pawn_1x_ns.png", position: "A7", alive: true },
  { id: "bP2", imgName: "b_pawn_1x_ns.png", position: "B7", alive: true },
  { id: "bP3", imgName: "b_pawn_1x_ns.png", position: "C7", alive: true },
  { id: "bP4", imgName: "b_pawn_1x_ns.png", position: "D7", alive: true },
  { id: "bP5", imgName: "b_pawn_1x_ns.png", position: "E7", alive: true },
  { id: "bP6", imgName: "b_pawn_1x_ns.png", position: "F7", alive: true },
  { id: "bP7", imgName: "b_pawn_1x_ns.png", position: "G7", alive: true },
  { id: "bP8", imgName: "b_pawn_1x_ns.png", position: "H7", alive: true },

  { id: "bB1", imgName: "b_bishop_1x_ns.png", position: "C8", alive: true },
  { id: "bB2", imgName: "b_bishop_1x_ns.png", position: "F8", alive: true },
  { id: "bKn1", imgName: "b_knight_1x_ns.png", position: "B8", alive: true },
  { id: "bKn2", imgName: "b_knight_1x_ns.png", position: "G8", alive: true },
  { id: "bK1", imgName: "b_king_1x_ns.png", position: "E8", alive: true },
  { id: "bQ1", imgName: "b_queen_1x_ns.png", position: "D8", alive: true },
  { id: "bR1", imgName: "b_rook_1x_ns.png", position: "A8", alive: true },
  { id: "bR2", imgName: "b_rook_1x_ns.png", position: "H8", alive: true },
];
function setPieces(){
for (let i = 0; i < raws.length; i++) {
  let squares = raws[i].children;
  for (let u = 0; u < squares.length; u++) {
    squares[u].setAttribute("draggable", "false");
    for (piece of pieces) {
      if (squares[u].id == piece.position) {
        squares[u].innerHTML = `<img src="./img/${piece.imgName}"/>`;

        squares[u].children[0].className = "apiece";
        squares[u].children[0].setAttribute("id", `${piece.id}`);
      }
    }
  }
}
}
setPieces()