const User = require("./models/user");

const express = require("express"),
  app = express(),
  dotenv = require("dotenv"),
  cookieParser = require("cookie-parser"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  authRoutes = require("./routes/authRoutes"),
  userRoutes = require("./routes/userRoutes"),
  donationRoutes = require("./routes/donationRoutes"),
  whiteCollarReqRoutes = require("./routes/whiteCollarReqRoutes"),
  janazaReqRoutes = require("./routes/janazaReqRoutes"),
  marketRoutes = require("./routes/marketRoutes"),
  jwt = require("jsonwebtoken");
// multer = require("multer"),
// GridFsStorage = require("multer-gridfs-storage");

//connect to mongodb and listen for requests
const dbURI =
  "mongodb+srv://admin:hafsa123@cluster0.xzwka.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  require("express-session")({
    secret: "Any normal Word", //decode or encode session
    resave: false,
    saveUninitialized: false,
  })
);
dotenv.config();

//register view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// R O U T E S

app.use(cors());

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/donations", donationRoutes);

app.use("/api/whiteCollarRequests", whiteCollarReqRoutes);

app.use("/api/janazaRequests", janazaReqRoutes);

app.use("/api/markets", marketRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong! ";
  return res.status(errorStatus).json(errorMessage);
});

app.get("/api/userProfile", async (req, res) => {
  if (req.header("x-access-token")) {
    token = req.header("x-access-token");
    jwt.verify(token, process.env.secret, async (err, decoded) => {
      if (err) {
        console.log(err.errorMessage);
        return res.send(401).send("Invalid Token");
      }
      if (decoded) {
        username = decoded.username;
        user = await User.findOne({ username });
        return res.status(200).send(user);
      }
    });
  } else {
    return res.send("No Token Found");
  }
});

// Logout
app.get("/logout", function (req, res) {
  // remove the req.user property and clear the login session
  req.logout();

  // destroy session data
  req.session = null;

  // redirect to homepage
  res.redirect("/");
});

module.exports = app;
