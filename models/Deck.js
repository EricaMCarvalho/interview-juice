const mongoose = require('mongoose');
const slugify = require('slugify');

const DeckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  public: {
    type: Boolean,
    default: true,
  },
  slug: String,
  description: {
    type: String,
    maxlength: [500, 'Name can not be more than 50 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    maxlength: [50, 'Category can not be more than 50 characters'],
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card',
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

// Create deck slug from name
DeckSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Deck', DeckSchema);
