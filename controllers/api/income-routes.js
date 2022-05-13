const router = require('express').Router();
const { Income } = require('../../models');

// Get all income
router.get('/', (req, res) => {
    Income.findAll({})
        .then(dbIncomeData => res.json(dbIncomeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get a single income
router.get('/:id', (req, res) => {
    Income.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbIncomeData => {
            if (!dbIncomeData) {
                res.status(404).json({ message: 'No income found with this id!' });
                return;
            }
            res.json(dbIncomeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create an income row
router.post('/', (req, res) => {
    Income.create({
        title: req.body.title,
        Budget: req.body.Budget,
        Actual: req.body.Actual
    })
        .then(dbIncomeData => res.json(dbIncomeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update an income row
router.put('/:id', (req, res) => {
    Income.update(
        { // All three need to update in order to get tossed into the db
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
        .then(dbIncomeData => {
            if (!dbIncomeData) {
                res.status(404).json({ message: 'No income found with this id!' });
                return;
            }
            res.json(dbIncomeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete an income row
router.delete('/:id', (req, res) => {
    Income.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbIncomeData => {
            if (!dbIncomeData) {
                res.status(404).json({ message: 'No income found with this id!' });
                return;
            }
            res.json(dbIncomeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;