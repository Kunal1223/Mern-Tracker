const express = require('express');
const { addIncome, getIncome, deletIncome } = require('../controlller/AddIncome');
const { deletExpense, getExpense, addExpense } = require('../controlller/Expense');
const router = express.Router();


router.post('/add-income' , addIncome)
    .get('/get-income' , getIncome)
    .delete('/delete-income/:id' , deletIncome)
    .post('/add-expense' , addExpense)
    .get('/get-expense' , getExpense)
    .delete('/delete-expense/:id' , deletExpense)

    
module.exports = router;