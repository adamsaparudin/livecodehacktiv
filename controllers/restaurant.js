let Restaurant = require('../models/restaurant')

create = (req, res, next) => {
  let doc = new Restaurant(req.body)
  doc.save().then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
}

read = (req, res, next) => {
  Restaurant.find().exec( (err, docs) => {
    if(err) res.send(err)
    res.json(docs)
  })
}

readOne = (req, res, next) => {
  Restaurant.findById(req.params.id).exec( (err, doc) => {
    if (err) res.send(err)
    res.json(doc)
  })
}

update = (req, res, next) => {
  Restaurant.findOneAndUpdate({_id: req.params.id}, req.body, {}, (err, doc) => {
    if(err) res.send(err)
    res.send(doc)
  })
}

deleteRestaurant = (req, res, next) => {
  Restaurant.remove({_id: req.params.id}, (err, doc) => {
    if(err) res.send(err)
    res.send(doc)
  })
}

module.exports = {
  create: create,
  read: read,
  readOne: readOne,
  update: update,
  deleteRestaurant: deleteRestaurant
}
