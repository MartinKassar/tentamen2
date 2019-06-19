const express = require('express')
const router = express.Router()

const book = require('./book.js')

router.get("/books", book.get)
router.get("/books/:id", book.getById)
router.post("/books", book.post)
router.delete("/books/:id", book.deleteById)
router.put("/books/:id", book.put)


module.exports = router