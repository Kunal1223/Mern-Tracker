const express = require('express');
const { addIncome } = require('../controlller/AddIncome');
const router = express.Router();


router.post('/add-income' , addIncome);

module.exports = router;