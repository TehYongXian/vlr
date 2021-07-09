const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//database
const db = require("./userAuth/models");
const Role = db.role;

//drop all table if it already exists
db.sequelize.sync({}).then(() => {
    console.log('Drop and Resync Database with {')
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to CoreUI application. "});
});

require('./userAuth/routes/auth.routes')(app);
require('./userAuth/routes/user.routes')(app);
//require('./userAuth/routes/category.routes')(app);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}.`);
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }