let ExpenseSchema = require('../module/Expense');


exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const Expense = ExpenseSchema({ title, amount, category, description, date });

    // console.log(Expense);

    //checking 
    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "Please fill all the data" });
        }
        // if ( typeof amount !== 'number' || amount < 0 ) { this is also correct
        if (amount < 0 || !amount === 'number') {
            return res.status(400).json({ message: "Enter the valid amount" });
        }

        await Expense.save();
        // console.log(Expense);
        res.status(200).json({ message: "Data is added" });

    } catch (error) {
        return res.status(500).json({ message: "Error while adding Expense data" });
    }
}

exports.getExpense = async (req, res) => {
    try {
        const Expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(Expenses);
    } catch (err) {
        return res.status(500).json({ message: "Error while loding Expense data" });
    }
}

exports.deletExpense = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({ message: "Expense is deleted" })
        }).catch((err) => {
            return res.status(500).json({ message: "server error" });
        })
}
