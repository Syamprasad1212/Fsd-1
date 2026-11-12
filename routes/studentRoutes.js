
const express = require('express');
const router = express.Router();

const Student = require('../models/Student');

// POST - Add Student
router.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.send("Student added successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// GET - Display Students
router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// PUT - Update Student
router.put('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.send("Student updated successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// DELETE - Delete Student
router.delete('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send("Student deleted successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
