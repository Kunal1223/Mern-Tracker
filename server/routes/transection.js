const express = require('express');
const router = express.Router();


router.get('/' , (req ,res)=>{
    res.send('hello i am kunal');
})

module.exports = router;