var express = require('express');
var router = express.Router();

let Food = require('./controllers/food')
let Restaurant = require('./controllers/restaurant')

router.post('/food', Food.create)
//View all
router.get('/food', Food.read)
//view One
router.get('/food/:id', Food.update)
router.put('/food/:id', Food.update)
router.delete('/food/:id', Food.delete)
