let IncomeSchema = require('../module/Income');


exports.addIncome = async (req, res) => {
    const { title, amount, category, description , date} = req.body;
    const income = IncomeSchema({ title, amount, category, description , date });

    // console.log(income);

    //checking 
    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "Please fill all the data" });
        }
        // if ( typeof amount !== 'number' || amount < 0 ) { this is also correct
            if(amount<0 || !amount === 'number'){
            return res.status(400).json({ message: "Enter the valid amount" });
        }

        await income.save();
        // console.log(income);
        res.status(200).json({ message: "Data is added" });

    } catch (error) {
        return res.status(500).json({ message:"Error while adding income data"});
    }
}

exports.getIncome = async(req , res) =>{
    try{
    const incomes = await IncomeSchema.find().sort({createdAt:-1});
    res.status(200).json(incomes);
    }catch(err){
        return res.status(500).json({ message:"Error while loding income data"});
    }
}

exports.deletIncome = async(req , res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id).then((income)=>{
    res.status(200).json({message:"Income is deleted"});
    }).catch((err)=>{
        return res.status(500).json({ message:"server error"});
    })
}
