const express = require('express');
const router = express.Router();
const whiteCollarReqController = require('../controllers/whiteCollarReqController');
const {verifyToken, verifyUser, verifyAdmin} = require('../utils/verifyToken.js');

router.get('/', verifyAdmin, whiteCollarReqController.whiteCollarReq_index);

router.post('/', verifyUser, whiteCollarReqController.whiteCollarReq_create_post);

router.get('/:id', verifyAdmin, whiteCollarReqController.whiteCollarReq_get_by_id);

router.put('/:id', verifyAdmin, whiteCollarReqController.updatewhiteCollarReq);

router.delete('/:id', verifyAdmin, whiteCollarReqController.deletewhiteCollarReq);

module.exports = router;