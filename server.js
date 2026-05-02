const express = require("express");
const path = require("path");

const app = express();

// このフォルダをそのまま公開
app.use(express.static(path.join(__dirname)));

app.listen(process.env.PORT || 3000);
