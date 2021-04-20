const { ObjectId } = require('mongoose').Types;
const { News } = require('../models');

const findNews = ({ areFake, count, exclude_with_ids = [] }) => {

    const exclude_news_with_object_ids = exclude_with_ids.map(id => ObjectId(id));

    const news = News.aggregate([{
        $match: {
            "isFake": areFake,
            "_id": { $nin: exclude_news_with_object_ids }
        }
    }, { $sample: { size: count } }]);

    return news;
};

module.exports = {
    findNews
}