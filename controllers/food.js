let Food = require('../models/food')

create = (req, res, next) => {
  let doc = new Food(req.body)
  doc.save().then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
}

read = (req, res, next) => {
  Food.find().exec( (err, docs) => {
    if(err) res.send(err)
    res.json(docs)
  })
}

readOne = (req, res, next) => {
  Food.findById(req.params.id).exec( (err, doc) => {
    if (err) res.send(err)
    res.json(doc)
  })
}

update = (req, res, next) => {
  console.log(req.body);
  Food.findOneAndUpdate({_id: req.params.id}, req.body, {}, (err, doc) => {
    if(err) res.send(err)
    res.send(doc)
  })
}

deleteFood = (req, res, next) => {
  Food.remove({_id: req.params.id}, (err, doc) => {
    if(err) res.send(err)
    res.send(doc)
  })
}

module.exports = {
  create: create,
  read: read,
  readOne: readOne,
  update: update,
  deleteFood: deleteFood
}
