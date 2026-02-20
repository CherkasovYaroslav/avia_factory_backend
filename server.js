const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(helmet());
app.use(cors({origin:"http://localhost:3000"}));

app.use(bodyParser.json());
app.use("/api/suppliers",require("./routes/suppliers"));
app.use("/api/clients",require("./routes/clients"));

app.listen(PORT,()=> {console.log(`server running on port ${PORT}`)});

const db = require("./config/db");
db.query("SELECT 1").then(()=> console.log("db connected"));

