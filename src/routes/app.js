const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/app')
//THIS IS YOUR MASTER ROUTE PAGE 
//THIS PAGE WORKS LIKE A FORMULA PAGE FOR ALL OF OUR ROUTES
//THIS PAGE USES FORMULAS FROM THE 'CONTROL' BRANCH 

router.get('/', ctrl.getAllUsers)
//The route above GETS ALL 
//'/' means we are starting from the beginnging of the url 

module.exports = router
