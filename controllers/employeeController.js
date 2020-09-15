const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req,res) => {
    res.render("employee/addOrEdit",{
        viewTitle : "Insert Employee"
    });
});

router.post('/', (req,res) => {
    // insertRecord(req,res);
    console.log(req.body);
});

/* function insertRecord(req,res) {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err,doc) => {
        if (!err) {
            res.redirect('employee/list');
        } else {
            console.log('Error during record insertion : ' + err);
        }
    });
} */

router.get('/list', (req,res) => {
    res.json('form list');
});

module.exports = router;