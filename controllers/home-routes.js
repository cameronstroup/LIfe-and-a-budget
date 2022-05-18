const router = require('express').Router();
const sequelize = require('../config/connection');
const { Income } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        style: 'style.css'
    })
});

router.get('/login', (req, res) => {
    res.render('login', {
        style: 'loginStyle.css'
    })
});

// Get all income
router.get('/budget', (req, res) => {
    Income.findAll({

    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        console.log(dbPostData[0])
        const income = dbPostData
        res.render('budget', { 
          income,
          style: 'budgetStyle.css'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;