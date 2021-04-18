const Deck = require('../models/Deck');
const AppError = require('../utils/AppError');
const catchAsync = require('../middleware/catchAsync');

// @desc    Get all decks
// @route   GET /api/v1/decks
// @access  Public
exports.getDecks = catchAsync(async (req, res, next) => {
  const decks = await Deck.find();
  res.status(200).json({ success: true, count: decks.length, data: decks });
});

// @desc    Get single deck
// @route   GET /api/v1/decks/:id
// @access  Public
exports.getDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.findById(req.params.id);

  if (!deck) {
    // return res.status(400).json({ success: false });
    return next(new AppError(`Deck not found with id ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: deck });
});

// @desc    Create deck
// @route   POST /api/v1/decks
// @access  Private
exports.createDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.create(req.body);
  res.status(201).json({ success: true, data: deck });
});

// @desc    Update deck
// @route   PUT /api/v1/decks/:id
// @access  Private
exports.updateDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!deck) {
    return next(new AppError(`Deck not found with id ${req.params.id}`, 404));
  }

  res.status(201).json({ success: true, data: deck });
});

// @desc    Delete deck
// @route   DELETE /api/v1/decks/:id
// @access  Private
exports.deleteDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.findByIdAndRemove(req.params.id);

  if (!deck) {
    return next(new AppError(`Deck not found with id ${req.params.id}`, 404));
  }

  res.status(201).json({ success: true, data: {} });
});
