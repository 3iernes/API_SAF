import express from "express";
const app = express();
//import cron from 'node-cron'
const cors = require("cors");
const morgan = require('morgan');
let cookieParser = require('cookie-parser')
import * as path from 'path';
//Routes
import vehiclesRoutes from './routes/vehiclesRoutes'
import userRoutes from './routes/usersRoutes'
import driverRoutes from './routes/driverRoutes'
import tyreRoutes from './routes/tyreRoutes'
import docsAPI from './routes/docsAPI'
import locationsRoutes from './routes/locationsRoutes'
import utilsRoutes from './routes/utilsRoutes'
import companiesRoutes from './routes/companiesRoutes'
import tripRoutes from './routes/tripRoutes'
import productsRoutes from './routes/productsRoutes'
import personalVehiclesRoutes from './routes/personalVehiclesRoutes'
import vehicleCostsRoutes from './routes/vehicleCostsRoutes'
import operativosRoutes from './routes/operativosRoutes'
//import { selectTrucks } from "./services/vehiclesServices";
//import { Vehicle } from "./interfaces/Vehicle";

/*cron.schedule('* * * * *', async() => {
  // Lógica de la tarea a ejecutar cada 1 minuto
  const db_response = await selectTrucks()
  console.log('\nLOS SIGUIENTES VEHICULOS TIENEN DOCUMENTACION VENCIDA\n')
  if(Array.isArray(db_response.val))[
    db_response.val.map((v:Vehicle)=>{
      if(v.documentacion_vencida){
        console.log(v)
      }
    })
  ]
});*/

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
app.use(express.static(path.join(__dirname, 'dist')))

//Routes
app.use(vehiclesRoutes)
app.use(userRoutes)
app.use(driverRoutes)
app.use(tyreRoutes)
app.use(docsAPI)
app.use(locationsRoutes)
app.use(utilsRoutes)
app.use(companiesRoutes)
app.use(tripRoutes)
app.use(productsRoutes)
app.use(personalVehiclesRoutes)
app.use(vehicleCostsRoutes)
app.use(operativosRoutes)
export default app