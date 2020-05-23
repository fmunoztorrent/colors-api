import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import ColorController from './core/Color/Infrastructure/Controllers/Color'


const PRODUCTION = process.env.PRODUCTION_SERVER || 'no';
if(PRODUCTION === 'no'){
  dotEnv.config();
}

const PORT = process.env.LISTENING_PORT;

const app = express();
app.use(bodyParser.json());


/*
*
* COLOR ENDPOINTS
*
*/

const colorCtrl = new ColorController();

// List All (with pagination)
app.get('/colores', colorCtrl.list);

// Get by ID
app.get('/colores/:colorId', colorCtrl.getById);

// Create new color
app.post('/colores', colorCtrl.createNewColor);




// init server...
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
