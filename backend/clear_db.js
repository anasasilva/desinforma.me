///////////////////////////////////////////////////////////////////////////
// ATTENTION! THIS WILL IRREVERSIBLY CLEAR ALL ENTITIES IN THE DATABASE. //
///////////////////////////////////////////////////////////////////////////

require("dotenv").config();
require("./connect_mongodb");
const { News } = require('./models');

const clearDB = async () => {
    const result = await News.deleteMany({});
    const count_removed = result.n;
    return count_removed;
};

clearDB().then((news_destroyed) => {
    console.log(`Cleaned database successfully. Removed ${news_destroyed} news.`);
    process.exit(0);
}).catch(err => {
    console.error('Failed to clear database.')
    console.error(err);
    process.exit(1);
});