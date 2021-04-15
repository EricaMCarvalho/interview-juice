const express = require('express');
const {
  getDecks,
  getDeck,
  createDeck,
  updateDeck,
  deleteDeck,
} = require('../controllers/decks');

const router = express.Router();

router.route('/').get(getDecks).post(createDeck);

router.route('/:id').get(getDeck).put(updateDeck).delete(deleteDeck);

module.exports = router;
