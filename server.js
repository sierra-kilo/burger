let express = require('express');
let bodyParser = require('body-parser');
let override = require('method-override');

let port = process.env.PORT || 3306;
let app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.listen(port);
