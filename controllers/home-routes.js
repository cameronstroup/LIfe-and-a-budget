const { Script } = require('vm');

const router = require('express').Router();

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

router.get('/budget', (req, res) => {
    res.render('budget', {
        style: 'budgetStyle.css'
    })
});

module.exports = router;