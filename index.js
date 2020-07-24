//posso usare import perchè babel permette di usare la sintassi più recente
import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
// con npm start ottengo nel terminale il log `Your server is running on port 4000`, mentre su browser la scritta "Node and express server running on port 4000"