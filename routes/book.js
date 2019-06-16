/*
get = (req, res, next) => {
  req.models.Book.find().then((books) => {
    return res.send(books);
  }).catch((error) => next(error))
}

*/

get = (req, res, next) => {
  var query;
  if (req.query.kommun) {
      query = req.models.Book.findOne({ "title": req.query.title })
  }
  else {
      query = req.models.Book.find()
  }

  query.exec().then((book) => {
      return res.send(book);
  }).catch((error) => next(error))
}

post = (req, res, next) => {
  req.models.Book.create({
    
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      sellerEmail: req.body.sellerEmail,
      used: req.body.used,
      location: {
        city: req.body.location.city,
        street: req.body.location.street,
      },
      
  })
    .then(book => {
      return res.status(201).send(book);
    })
    .catch(error => {
      next(error);
    });
};

deleteById = (req, res, next) => {
  req.models.Book.findByIdAndDelete(req.params.id)
    .then(deleted => {
      if (deleted) return res.send(deleted).status(200);
      res.sendStatus(204);
    })
    .catch(error => next(error));
};

put = (req, res, next) => {
  req.models.Book.updateOne(
    { _id: req.params.id },
    {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      sellerEmail: req.body.sellerEmail,
      used: req.body.used,
      location: {
        city: req.body.location.city,
        street: req.body.location.street,
      },
    },
    {
      new: true,
      upsert: true,
      runvalidators: true
    }
  )
    .then(status => {
      console.log('status: ', status);
      if (status.upserted) res.status(201);
      else if (status.nModified) res.status(200);
      else res.status(204);
      res.send();
    })
    .catch(error => next(error));
};




module.exports = {
  get,
  post,
  deleteById,
  put,
}

