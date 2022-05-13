const router = require('express').Router();
const { Expenses } = require('../../models');

// Get all expenses
router.get('/', (req, res) => {
    Expenses.findAll({})
        .then(dbExpensesData => res.json(dbExpensesData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get a row from expenses
router.get('/', (req, res) => {
    Expenses.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbExpensesData => {
            if (!dbExpensesData) {
                res.status(404).json({ message: 'No expenses found with this id! '});
                return;
            }
            res.json(dbExpensesData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create an expense row
router.post('/', (req, res) => {
    Expenses.create({
        title: req.body.title,
        Budget: req.body.Budget,
        Actual: req.body.Actual
    })
        .then(dbExpensesData => res.json(dbExpensesData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update an expense row
router.put('/:id', (req, res) => {
    Expenses.update(
        {
            title: req.body.title,
            Budget: req.body.Budget,
            Actual: req.body.Actual
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbExpensesData => {
            if (!dbExpensesData) {
                res.status(404).json({ message: 'No expenses found with this id! '});
                return;
            }
            res.json(dbExpensesData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete an expense row
router.delete('/:id', (req, res) => {
    Expenses.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbExpensesData => {
            if (!dbExpensesData) {
                res.status(404).json({ message: 'No expenses found with this id! '});
                return;
            }
            res.json(dbExpensesData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;