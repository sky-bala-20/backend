const express = require('express');
const router = express.Router();
const UsersModel = require('../models/Users')


//get all users
router.get('/users', async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
});

// get a single user
router.get('/user/:id', async (req, res) => {
    try {
        const user = await UsersModel.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
});

//post user
router.post('/create', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new UsersModel({ name, email, age });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
});

//put user
router.put('/edit/:id', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const updatedUser = await UsersModel.findByIdAndUpdate(
            req.params.id,
            { name, email, age },
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
});

//delete user
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await UsersModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
});

module.exports = router;