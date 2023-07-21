const express = require('express');
const { addIncome, getIncome, deletIncome } = require('../controlller/AddIncome');
const router = express.Router();


router.post('/add-income' , addIncome)
    .get('/get-income' , getIncome)
    .delete('/delete-income/:id' , deletIncome)

    
module.exports = router;