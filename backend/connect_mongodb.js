const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', function (err) {
    console.error(`Failed to connect to database. Err: ${err}`)
    process.exit(1);
});

db.once('open', function () {
    console.log('Connected to database successfully.')
});
