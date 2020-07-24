//posso usare import perchè babel permette di usare la sintassi più recente
import express from 'express';
import routes from './src/routes/crmRoutes'; //importo routes
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express(); // costante APP = express() => crea una applicazione express
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// bodyparser setup
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//richiamo la funzione e passo come parametro app
routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
// con npm start ottengo nel terminale il log `Your server is running on port 4000`, mentre su browser la scritta "Node and express server running on port 4000"