const mongoose = require('mongoose');

// Define the Painting schema
const paintingSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  artist: { type: String, required: true },
  href: { type: String, required: true },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  price: { type: String, required: true },
});

// Create the Painting model
const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;
