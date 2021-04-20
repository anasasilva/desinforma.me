const { ObjectId } = require('mongoose').Types;
const { findNews } = require('../services/newsService');

async function getNews(req, res) {

    const { count_real = 1, count_fake = 1, exclude_news_with_ids = [] } = req.body;

    const real_news = await findNews({
        areFake: false,
        count: count_real,
        exclude_with_ids: exclude_news_with_ids
    });

    const fake_news = await findNews({
        areFake: true,
        count: count_fake,
        exclude_with_ids: exclude_news_with_ids
    });

    return res.json({
        real_news,
        fake_news
    });
}

module.exports = {
    getNews
};
