require("dotenv").config();
require("./connect_mongodb");
const app = require("./app");

const port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log(`Web server started at port ${port}`);
});
