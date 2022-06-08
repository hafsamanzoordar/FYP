const User = require("../models/user");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");
const jwt = require("jsonwebtoken");

//const getRegister = async (req, res) => {
// res.render("SignUp");
//};

//const getLogin = async (req, res) => {
//res.render("login");
//};

const register = async (req, res) => {
  try {
    // Get user input
    const { username, email, password } = req.body;

    // Validate user input
    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exists. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      username,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.access_token,
      {
        expiresIn: "2h",
      }
    );

    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(req.body.password, salt);

//const newUser = new User({
// ...req.body,
//  password: hash,
//});

//await newUser.save();
//  res.status(200).send("User has been created.");
//} catch (err) {
// next(err);
//  }
//};

const login = async (req, res, next) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.access_token,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our login logic ends here
};

//const user = await User.findOne({ username: req.body.username });
// if (!user) return next(createError(404, "User not found!"));

// const isPasswordCorrect = await bcrypt.compare(
//   req.body.password,
//   user.password
// );
// if (!isPasswordCorrect)
//   return next(createError(400, "Wrong password or username!"));

// const token = jwt.sign(
//   { id: user._id, isAdmin: user.isAdmin },
//   process.env.JWT
// );

// const { password, isAdmin, ...otherDetails } = user._doc;
// res
//   .cookie("access_token", token, {
//     httpOnly: false,
//     sameSite: "none",
//     secure: false,
//   })
//   .status(200)

//     res.json({ details: { ...otherDetails }, isAdmin, access_token: token });
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  register,
  login,
  //getRegister,
  //getLogin,
};
