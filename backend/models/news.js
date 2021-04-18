const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema
 */

const NewsSchema = new Schema({
    title: { type: String, default: '' }
});

/**
 * Methods
 */

NewsSchema.method({});

/**
 * Statics
 */

NewsSchema.static({});

/**
 * Register
 */

const model = mongoose.model('News', NewsSchema);

module.exports = model;