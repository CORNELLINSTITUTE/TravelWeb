const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Voucher = require('../models/voucher');


/***************/
// Voucher CRUD
/***************/
router.post('/add', Voucher.addVoucher);
router.post('/update/:id', Voucher.updateVoucher);
router.delete('/delete/:id', Voucher.deleteVoucher);

/***************/
// Get Voucher
/***************/
router.get('/getAll', Voucher.getAllVouchers);

/***************/
// Get Voucher
/***************/
router.get('/getVoucher/:id', Voucher.getVoucher);


module.exports = router;