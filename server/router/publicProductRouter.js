const express = require('express');
const routerProductPublic = express.Router();
// const data = require('../data/data.json');
// const catData = require('../data/categoryData.json');
const client = require('../db/db.config');


routerProductPublic.get('/', async (req, res) => {
    if(client.connect()){
        const cursor = client.db('shoe_store').collection('shoes').find();
        const result = await cursor.toArray()
        res.send(result);
    }
    else{
        res.send({"message":"error in connection"});
    }
})

// routerProductPublic.get('/product/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const out = data.filter((val) => {
//         return val.id === id;
//     })
//     if (out.length > 0) {
//         res.send(out);
//     }
//     else {
//         res.send({ 'message': 'invalid id' })
//     }
//     client.close()
// })

// routerProductPublic.get('/search/:character', (req, res) => {
//     const character = req.params.character.toLowerCase();
//     const matchedProducts = data.filter(product => product.name.toLowerCase().includes(character));
//     if (matchedProducts.length > 0) {
//         res.send(matchedProducts);
//     }
//     else {
//         res.send({ 'message': 'Not Found' })
//     }
// });

routerProductPublic.get('/category', async(req, res) => {
    if(client.connect()){
        const cursor = client.db('shoe_store').collection('category').find();
        const result = await cursor.toArray()
        res.send(result);
    }
    else{
        res.send({"message":"error in connection"});
    }
})

// routerProductPublic.get('/gender', (req, res) => {
//     res.send(gender);
// })

// routerProductPublic.get('/category/:gender/:categoryID', (req, res) => {
//     const genderID = parseInt(req.params.gender);
//     const out = data.filter((val) => {
//         return val.gender === genderID;
//     })
//     if (out.length > 0) {
//         const catID = parseInt(req.params.categoryID);
//         const final = out.filter((val) => {
//             return val.category === catID;
//         })
//         if (final.length > 0) {
//             res.send(final);
//         }
//         else {
//             res.send({ 'message': 'invalid id' })
//         }
//     }
//     else {
//         res.send({ 'message': 'invalid id' })
//     }
// })

routerProductPublic.get('/category/id/:id', async (req, res) => {
    const catID = req.params.id;
    if (catID !== 0) {
        if(client.connect()){
            const cursor = client.db('shoe_store').collection('shoes').find( {category: catID} );
             const result = await cursor.toArray()
            res.send(result)
        }
        else{
            res.send({"message":"error in connection"});
        }
    }
})

module.exports = routerProductPublic;