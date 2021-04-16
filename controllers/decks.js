const Deck = require('../models/Deck');

// @desc    Get all decks
// @route   GET /api/v1/decks
// @access  Public
exports.getDecks = async (req, res, next) => {
  try {
    const decks = await Deck.find();
    res.status(200).json({ success: true, count: decks.length, data: decks });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single deck
// @route   GET /api/v1/decks/:id
// @access  Public
exports.getDeck = async (req, res, next) => {
  try {
    const deck = await Deck.findById(req.params.id);

    if (!deck) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: deck });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create deck
// @route   POST /api/v1/decks
// @access  Private
exports.createDeck = async (req, res, next) => {
  try {
    const deck = await Deck.create(req.body);
    res.status(201).json({ success: true, data: deck });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update deck
// @route   PUT /api/v1/decks/:id
// @access  Private
exports.updateDeck = async (req, res, next) => {
  try {
    const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!deck) {
      return res.status(400).json({ success: false });
    }

    res.status(201).json({ success: true, data: deck });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete deck
// @route   DELETE /api/v1/decks/:id
// @access  Private
exports.deleteDeck = async (req, res, next) => {
  try {
    const deck = await Deck.findByIdAndRemove(req.params.id);

    if (!deck) {
      return res.status(400).json({ success: false });
    }

    res.status(201).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
