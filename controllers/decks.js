// @desc    Get all decks
// @route   GET /api/v1/decks
// @access  Public
exports.getDecks = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all decks' });
};

// @desc    Get single deck
// @route   GET /api/v1/decks/:id
// @access  Public
exports.getDeck = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get deck ${req.params.id}` });
};

// @desc    Create deck
// @route   POST /api/v1/decks
// @access  Private
exports.createDeck = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new deck' });
};

// @desc    Update deck
// @route   PUT /api/v1/decks/:id
// @access  Private
exports.updateDeck = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update deck ${req.params.id}` });
};

// @desc    Delete deck
// @route   DELETE /api/v1/decks/:id
// @access  Private
exports.deleteDeck = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete deck ${req.params.id}` });
};
