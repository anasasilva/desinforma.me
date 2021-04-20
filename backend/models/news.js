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
    fakeDetails: {
        required: false,
        type: {
            fakeTitle: String,
            fakeSummary: String,
            entitiesReplaced: [
                {
                    originalEntityName: String,
                    replacedEntityName: String,
                }
            ]
        }
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