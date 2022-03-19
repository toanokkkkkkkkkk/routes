const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const api = require("./routes/api");
const moment = require('moment-timezone');
const app = express();
var timeVN = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY_HH:mm:ss');

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/", api);

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});
(async () => {
  app.listen(process.env.PORT || 80);
  console.log(`[ Đang tải ] - Đang loading...`) 
  console.log(`[ LOADER ] - ${timeVN}`)
  console.log(`[ Hoàn tất ] - Đã tải Thành công`)
})();
