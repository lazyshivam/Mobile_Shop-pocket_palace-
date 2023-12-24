const express = require("express");
const cookie_session = require("express-session");
const cors = require("cors");
const path = require("path");
const passport = require("./passportAuth"); // Import your Passport configuration
require("dotenv").config();
const connectToMongo=require("./db");

const app = express();
const port = 8080;
//function call to connect to the mongoDb Database
connectToMongo();
// Middleware setup 
// app.use(express.static( 'build'));

// Handle other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build/index.html'));
// });
app.use(
  cors({
		origin: process.env.Home_URL,
		methods: "GET,POST,PUT,DELETE",
		// credentials: false,
	})
);

app.use(express.json({limit: '50mb'} ));
// app.use(express.urlencoded({extended: false}));

app.use(
  cookie_session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());
// console.log(process.env.SECRET_KEY)

app.use("/auth", require("./routes/auth"));
app.use('/admin/user', require("./routes/manageProducts"));
app.use("/api/data", require("./routes/products"));


app.all('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});
app.listen(port||process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});