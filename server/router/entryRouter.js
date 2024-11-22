const express = require('express');
const routerEntry = express.Router();
const client = require('../db/db.config');
const usr = {name:'', email:'',ack:''};

routerEntry.post('/login', async (req, res) => {
    if(client.connect()){
        const cursor = client.db('shoe_store').collection('usr');
        const result = await cursor.findOne({email: req.body.email});
        if(result){
            if(result.password === req.body.password){
                usr.email = result.email;
                usr.name = result.name;
                usr.ack= true
                res.send(usr)
            }
            else{
                return res.send("Incorrect Password");
            }
        }
        else{
            return res.send("Invalid email");
        }

    }
    else{
        res.send({"message":"error in connection"});
    }

});

routerEntry.post('/signup', async (req, res) => {

    if(client.connect()){
        const cursor = client.db('shoe_store').collection('usr');
        const result = await cursor.insertOne(req.body);
        res.send(result);
    }
    else{
        res.send({"message":"error in connection"});
    }

})


routerEntry.post('/order', async (req, res) => {

    if(client.connect()){
        const cursor = client.db('shoe_store').collection('order');
        const result = await cursor.insertOne(req.body);
        res.send(result);
    }
    else{
        res.send({"message":"error in connection"});
    }

})

routerEntry.get('/confirm', async(req, res) => {
    if(client.connect()){
        const cursor = client.db('shoe_store').collection('order').find();
        const result = await cursor.toArray()
        res.send(result);
    }
    else{
        res.send({"message":"error in connection"});
    }
} )




module.exports = routerEntry;