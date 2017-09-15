var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//mongoose.connect('mongodb://localhost/sports');
var db = "mongodb://aneeshmunn:reset123@ds135514.mlab.com:35514/sports";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
	if(err){
		console.error("Error!" +err);
	}
});

var athlete = require("./routes/athletes");

var app = express();

//Body Parser Middleware
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/athletes", athlete);

var port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log("Listening on port 3000");
});