const renderTemplate = require("../../lib/renderTemplate");

const router = require("express").Router();
const Main = require("../views/Main") 

router.get("/", (req, res) => {
   const pieces = [
      {id:'wP1', imgName:'w_pawn_1x_ns.png', position:'A2'},
      {id:'wP1', imgName:'w_pawn_1x_ns.png', position: "B2"},
      // wP3 = {},
      // wP4{},
      // wP5
      // wP6
      // wP7
      // wP8
   ]
    renderTemplate(Main, {pieces}, res);

  });
  router.get('/roomList',(req,res) =>{
   renderTemplate(RoomList, {}, res);
  });

module.exports = router;
