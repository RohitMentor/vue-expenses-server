const Expense=require("../model/expense.model")

async function getExpenses(){
    try{
        let expenseData=await Expense.find({})
        return expenseData
    }catch(error){
        console.log(error)
    }
}

async function addExpense(expense){
    try{
        let expenseModel=new Expense(expense)
        let expenseData=await expenseModel.save(expense)
        return expenseData
    }catch(error){
        console.log(error)
    }
}

async function updateExpense(expenseId,expense){
    try{
        let response=await Expense.updateOne({_id:expenseId},expense)
        return response
    }catch(error){
        console.log(error)
    }
}

async function deleteExpense(expenseId){
    try{
        let response=await Expense.remove({_id:expenseId})
        return response
    }catch(error){
        console.log(error)
    }
}

module.exports={
    getExpenses,
    addExpense,
    updateExpense,
    deleteExpense
}