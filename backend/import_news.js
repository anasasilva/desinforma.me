require("dotenv").config();
require("./connect_mongodb");
const { News } = require('./models');

const importNews = async () => {
    const createNews = async (newsRaw, isFake) => {
        const news = {
            'title': newsRaw['title'],
            'originalTitle': newsRaw['original_title'],
            'url': newsRaw['url'],
            'originalUrl': newsRaw['original_url'],
            'imageUrl': newsRaw['image'],
            'textSummary': newsRaw['summary'],
            'isFake': isFake,
            'fakeDetails': isFake ?
                {
                    'fakeTitle': newsRaw['fake_details']['fake_title'],
                    'fakeSummary': newsRaw['fake_details']['fake_summary'],
                    'fakeImageUrl': newsRaw['fake_details']['fake_image_url'],
                    'entitiesReplaced': newsRaw['fake_details']['entities_replaced'].map((entity) => ({
                        'originalEntityName': entity['original_entity_name'],
                        'replacedEntityName': entity['replaced_entity_name'],
                    }))
                } : undefined
        };
        try {
            await News.create(news);
            return 1;
        }
        catch (err) {
            if (err.name === 'MongoError' && err.code === 11000) // Duplicate news.
                return 0;
            else throw err; // Unknown error.
        }
    }

    const genuine_news = require('./genuine_news.json');
    const fake_news = require('./fake_news.json');

    let total_new = 0;
    let total_duplicate = 0;

    for (const news of genuine_news) {
        await createNews(news, false) ? total_new++ : total_duplicate++;
    }

    let x = 0;
    for (const news of fake_news) {
        if (x % 2 == 0)
            await createNews(news, true) ? total_new++ : total_duplicate++;
        else 
            await createNews(news, false) ? total_new++ : total_duplicate++
        x++;
    }

    return {
        total_new,
        total_duplicate
    }
};

importNews().then(({ total_new, total_duplicate }) => {
    console.log(`Imported a total of ${total_new} news. Found ${total_duplicate} duplicate.`)
    process.exit(0);
}).catch(err => {
    console.error('Failed to import news.')
    console.error(err);
    process.exit(1);
});