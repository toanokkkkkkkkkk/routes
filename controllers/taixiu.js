const { errorHandler } = require("../utils");

exports.lac = async (req, res, next) => {
  let input = req.query.chon;
  let one = Math.ceil(Math.random()*6);
  let two = Math.ceil(Math.random()*6);
  let three = Math.ceil(Math.random()*6);
var one1 = (one == "1") ? "https://i.ibb.co/1JGMF5Q/row-1-column-1.jpg" : (one == "2") ? "https://i.ibb.co/tq3nykP/row-1-column-2.jpg" : (one == "3") ? "https://i.ibb.co/bP4d8tR/row-2-column-1.jpg" : (one == "4") ? "https://i.ibb.co/GdhsNG7/row-2-column-2.jpg" : (one == "5") ? "https://i.ibb.co/884GLkx/row-3-column-1.jpg" : "https://i.ibb.co/2N86jZ1/row-3-column-2.jpg";
var two1 = (two == "1") ? "https://i.ibb.co/1JGMF5Q/row-1-column-1.jpg" : (two == "2") ? "https://i.ibb.co/tq3nykP/row-1-column-2.jpg" : (two == "3") ? "https://i.ibb.co/bP4d8tR/row-2-column-1.jpg" : (two == "4") ? "https://i.ibb.co/GdhsNG7/row-2-column-2.jpg" : (two == "5") ? "https://i.ibb.co/884GLkx/row-3-column-1.jpg" : "https://i.ibb.co/2N86jZ1/row-3-column-2.jpg";
var three1 = (three == "1") ? "https://i.ibb.co/1JGMF5Q/row-1-column-1.jpg" : (three == "2") ? "https://i.ibb.co/tq3nykP/row-1-column-2.jpg" : (three == "3") ? "https://i.ibb.co/bP4d8tR/row-2-column-1.jpg" : (three == "4") ? "https://i.ibb.co/GdhsNG7/row-2-column-2.jpg" : (three == "5") ? "https://i.ibb.co/884GLkx/row-3-column-1.jpg" : "https://i.ibb.co/2N86jZ1/row-3-column-2.jpg";
var image = [ one1 , two1 , three1 ];
let results = (one == two == three) ? "thua" : (one + two + three <= 10) ? (["xỉu","xiu","x"].includes(input)) ? "thắng" : "thua" : (["tài","tai","t"].includes(input)) ? "thắng" : "thua";
let dices = (one == two && two == three) ? "3 nút bằng nhau" : (one + two + three <= 10) ? "xỉu" : "tài";
var hi = {}
    hi.dices = `${one} | ${two} | ${three} -> ${dices}`
    hi.input = input
    hi.results = results
    hi.image = image
    hi.authors = `DungUwU && Lê Anh Trí mod ảnh by Tòn`
res.header("Content-type", "application/json; charset=utf-8")
res.send(JSON.stringify(hi, null, 2))
var he = []
    he.taixiu = hi
console.log(he)
};
