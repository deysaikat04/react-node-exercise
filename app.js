const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

const route = require("./routes");

const PORT = process.env.PORT || 4000;

app.use("/", route);

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
