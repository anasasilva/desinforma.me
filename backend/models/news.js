const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema
 */

const NewsSchema = new Schema({
    title: {
        'type': String,
        'unique': true
    },
    originalTitle: String,
    url: String,
    originalUrl: String,
    datePublished: Date,
    website: String,
    imageUrl: String,
    textSummary: String,
    isFake: {
        'type': Boolean,
        'index': true
    },
    fakeDetails: { // nullable
        fakeTitle: String,
        fakeSummary: String,
        entitiesReplacedTitle: [
            {
                originalEntityName: String,
                replacedEntityName: String,
            }
        ],
        entitiesReplacedSummary: [
            {
                originalEntityName: String,
                replacedEntityName: String,
            }
        ]
    }
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