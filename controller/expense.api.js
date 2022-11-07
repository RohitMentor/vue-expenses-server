const express = require('express')
const router = express.Router()
const ExpenseService = require("../service/expense.service")

router.get("/", (req, res) => {
    ExpenseService.getExpenses().then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(400).json(error)
    })
})

router.post("/", async (req, res) => {
    try {
        let data = await ExpenseService.addExpense(req.body)
        res.status(201).json(data)
    }
    catch (error) {
        res.status(400).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        let data = await ExpenseService.updateExpense(req.params.id,req.body)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let data = await ExpenseService.deleteExpense(req.params.id)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router