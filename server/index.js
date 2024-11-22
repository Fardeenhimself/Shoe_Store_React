const express = require('express');
const app = express();
const cors = require('cors'); 
const dotenv = require('dotenv');
dotenv.config();  


const routerProductPublic = require('./router/publicProductRouter');
const routerEntry = require('./router/entryRouter');


const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ "message": "this the api service for shoe store" });
})

app.use('/api/public/products', routerProductPublic);
app.use('/api/public', routerEntry);

app.use((req, res)=>{
    res.json({"message":"unvalid route"});
})

app.listen(port, () => {
    console.log(`Server is running on port  (http://127.0.0.1:${port})`);
})