const express = require("express"),
  app = express(),
  dotenv = require("dotenv"),
  cookieParser = require("cookie-parser"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  multer = require("multer"),
  path = require("path"),
  cors = require("cors"),
  authRoutes = require("./routes/authRoutes"),
  userRoutes = require("./routes/userRoutes"),
  donationRoutes = require("./routes/donationRoutes"),
  whiteCollarReqRoutes = require("./routes/whiteCollarReqRoutes"),
  janazaReqRoutes = require("./routes/janazaReqRoutes"),
  marketRoutes = require("./routes/marketRoutes"),
  Image = require("./models/image");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

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

//=======================
//      R O U T E S
//=======================

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

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

app.get("/api/adminDashboard", async (req, res) => {
  res.render("adminDashboard");
});

app.use("./public/images", express.static("images"));

app.post("/api/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  const image = new Image({
    name: req.body.name,
    _id: req.body._id,
    donationImage: req.file.path,
  });
  image
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Image uploaded successfully",
        uploadedImage: {
          donationImage: result.donationImage,
          _id: result._id,
          request: {
            type: "GET",
            url: "https://fyp-2022.herokuapp.com/api/upload/" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = app;
