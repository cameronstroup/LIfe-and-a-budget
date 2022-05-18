const router = require('express').Router();
const sequelize = require('../config/connection');
const { Income, Expenses, Savings } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        style: 'style.css'
    })
});

router.get('/login', (req, res) => {
    res.render('login', {
        style: 'login.css'
    })
});

// Get all income
router.get('/budget', async (req, res) => {
  try {
    let incomeData = await Income.findAll({});
    let expensesData = await Expenses.findAll({});
    let savingsData = await Savings.findAll({});

    let mappedIncome = incomeData.map((incomeData) => {
      return incomeData.dataValues;
    })

    let mappedExpenses = expensesData.map((expensesData) => {
      return expensesData.dataValues
    })

    let mappedSavings = savingsData.map((savingsData) => {
      return savingsData.dataValues
    })

    res.render('budget', { 
      income: mappedIncome,
      expense: mappedExpenses,
      savings: mappedSavings,
      style: 'budgetStyle.css'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  //   Income.findAll({})
  //     .then(dbPostData => {
  //       // pass a single post object into the homepage template
  //       console.log(dbPostData[0])
  //       const income = dbPostData
  //       let mappedIncome = dbPostData.map((data) => {

  //         return data.dataValues;
  //       })
  //       console.log(mappedIncome);
  //       res.render('budget', { 
  //         income: mappedIncome,
  //         style: 'budgetStyle.css'
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
  });

module.exports = router;
