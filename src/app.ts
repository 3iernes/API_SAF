import express from "express";
const app = express();
const cors = require("cors");
const morgan = require('morgan');
let cookieParser = require('cookie-parser')

//setting
let port;

app.set("port", port || process.env.APP_PORT);
app.use(express.json());
app.use(cookieParser())
app.set('trust proxy', true); 
app.use(morgan('tiny'));

const corsOpc = {
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST","PATCH","PUT"],
    credentials: true,
  }

//middlewares
app.use(cors(corsOpc));

//Routes

export default app