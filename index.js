require('dotenv').config();
const mongoose =  require("mongoose");
const bodyParser =  require("body-parser");
const express = require('express')

const app = express();
const port = process.env.PORT;

const articles = require("./routes/articles.routes");

mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});

//register the enpoints
app.use("/api/v1/articles", articles);

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});
