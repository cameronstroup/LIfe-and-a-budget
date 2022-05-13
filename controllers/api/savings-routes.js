const router = require('express').Router();
const { Savings } = require('../../models');

// Get all savings
router.get('/', (req, res) => {
    Savings.findAll({})
        .then(dbSavingsData => res.json(dbSavingsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get one savings
router.get('/:id', (req, res) => {
    Savings.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbSavingsData => {
            if (!dbSavingsData) {
                res.status(404).json({ message: 'No savings found with this id! '});
                return;
            }
            res.json(dbSavingsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a savings row
router.post('/', (req, res) => {
    Savings.create({
        title: req.body.title,
        Budget: req.body.Budget,
        Actual: req.body.Actual
    })
        .then(dbSavingsData => res.json(dbSavingsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a savings row
router.put('/:id', (req, res) => {
    Savings.update(
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
        .then(dbSavingsData => {
            if (!dbSavingsData) {
                res.status(404).json({ message: 'No savings found with this id! '});
                return;
            }
            res.json(dbSavingsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a savings row
router.delete('/:id', (req, res) => {
    Savings.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbSavingsData => {
            if (!dbSavingsData) {
                res.status(404).json({ message: 'No savings found with this id! '});
                return;
            }
            res.json(dbSavingsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;