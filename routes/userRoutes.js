const express = require('express');
const userController = require ('../controllers/userController.js');
const {verifyToken, verifyUser, verifyAdmin} = require('../utils/verifyToken.js');

const router = express.Router();

//router.get("/checkAuthentication", verifyToken, (req,res,next)=>{
//res.send("hello user, you are logged in")
//})

//router.get("/checkUser/:id", verifyUser, (req,res,next)=>{
//res.send("hello user, you are logged in and you can delete your account")
 //})

//router.get("/checkAdmin/:id", verifyAdmin, (req,res,next)=>{
//res.send("hello admin, you are logged in and you can delete all accounts")
//})

router.get('/', verifyAdmin, userController.user_index);

router.get('/:id', verifyAdmin, userController.user_get_by_id);

router.put('/:id', verifyUser, userController.updateUser);

router.delete('/:id', verifyAdmin, userController.deleteUser);

module.exports = router;