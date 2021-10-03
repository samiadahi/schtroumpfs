const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Schtroumpf } = require('../models/schtroumpfs');

// => localhost:3000/schtroumpfs/
router.get('/', (req, res) => {
    Schtroumpf.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving schtroumpfs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Schtroumpf.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving schtroumpfs :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var emp = new Schtroumpf({
        login: req.body.login,
        password: req.body.password,
        age: req.body.age,
        family: req.body.family,
        race: req.body.race,
        food: req.body.food,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Schtroumpf Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        login: req.body.login,
        password: req.body.password,
        age: req.body.age,
        family: req.body.family,
        race: req.body.race,
        food: req.body.food,
    };
    Schtroumpf.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error inSchtroumpf Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Schtroumpf.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Schtroumpf Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;