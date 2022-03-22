const { errorHandler } = require("../utils");

exports.baucua = async (req, res, next) => {
let input = req.query.chon;
  var ehe = {}
      ehe.error = `Sai định dạng [ Bầu - Cua - Cá - Nai - Gà - Tôm ]`
      ehe.huongdan = `https://apixin-1.toannguyen73.repl.co/baucua?chon= + [ Bầu - Cua - Cá - Nai - Gà - Tôm ]`
res.header("Content-type", "application/json; charset=utf-8")
if(!input) return res.send(JSON.stringify( ehe, null,2 ))
const slotItems = ["🍐", "🦀", "🐟", "🦌", "🐓", "🦞"];
var number = [], win = false;
for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
var itemm;
        switch (input) {
            case "bầu":
                case "Bầu": itemm = "🍐";
                    break;
            case "cua": 
                case "Cua": itemm = "🦀";
                    break;
            case "cá":
                case "Cá": itemm = "🐟";
                    break;
            case "nai":
                case "Nai": itemm = "🦌";
                    break;
            case "gà": 
                case "Gà": itemm = "🐓";
                    break;
            case "tôm":
                case "Tôm": itemm = "🦞";
                    break;
                       }
var array = [number[0],number[1],number[2]];
var i = 0;
if (array[0] == itemm) i+=1;
if (array[1] == itemm) i+=1;
if (array[2] == itemm) i+=1;
var thangthua = (i == 1) ? `có 1 ${itemm}` : (i == 2) ? `có 2 ${itemm}` : (i == 3) ? `có 3 ${itemm}` : (i == 0) ? `có 0 ${itemm}` : array.includes(itemm) ? "thắng" : "thua" ;
var results = (i == 1) ? `thắng` : (i == 2) ? `thắng` : (i == 3) ? `thắng` : (i == 0) ? `thua` : array.includes(itemm) ? "thắng" : "thua" ;
var hi = {}
    hi.ketqua = array.join(" | ")
    hi.find = thangthua
    hi.results = results
    hi.authors = `Tòn`
res.header("Content-type", "application/json; charset=utf-8")
res.send(JSON.stringify(hi, null, 2))
var he = []
    he.baucua = hi
console.log(he)
};
