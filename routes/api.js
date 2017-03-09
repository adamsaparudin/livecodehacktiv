var express = require('express');
var router = express.Router();

let Food = require('../controllers/food')
let Restaurant = require('../controllers/restaurant')

router.post('/food', Food.create)

//View all
router.get('/food', Food.read)
//view One
router.get('/food/:id', Food.readOne)

router.put('/food/:id', Food.update)
router.delete('/food/:id', Food.deleteFood)


///
router.post('/restaurant', Restaurant.create)

//view all
router.get('/restaurant', Restaurant.read)
//view one
router.get('/restaurant/:id', Restaurant.readOne)

router.put('/restaurant/:id', Restaurant.update)
router.delete('/restaurant/:id', Restaurant.deleteRestaurant)

module.exports = router
