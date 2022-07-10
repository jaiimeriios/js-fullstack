const mongoose = require('mongoose');
const Workout = require('../models/workouts');

// GET all
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    console.log(':: GET ALL :: ', workouts);
    res.status(200).json(workouts);
};


// GET single
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log(':: ID DOES NOT EXIST ::');
        return res.status(404).json({ error: 'ID Does Not Exist' });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        console.log(':: WORKOUT NOT FOUND ::');
        return res.status(404).json({ error: 'Workout not Found' });
    }

    console.log(':: GET SINGLE :: ', workout);
    res.status(200).json(workout);
};


// POST
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    // error handling messages
    const emptyFields = []
    if (!title) { emptyFields.push('title') }
    if (!reps) { emptyFields.push('reps') }
    if (!load) { emptyFields.push('load') }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'No empty fields', emptyFields });
    }

    try {
        const workout = await Workout.create({ title, reps, load });
        console.log(':: POST :: ', workout);
        res.status(200).json(workout);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
};


// DELETE
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log(':: ID DOES NOT EXIST ::');
        return res.status(400).json({ error: 'No such workout' });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
        return res.status(400).json({ error: 'No such workout' });
    }

    console.log(':: DELETED WORKOUT ::', workout)
    res.status(200).json(workout);
};


// PATCH
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' });
    }

    const workout = await Workout.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!workout) {
        return res.status(400).json({ error: 'No such workout' });
    }

    console.log(':: PATCH WORKOUT ::', workout)
    res.status(200).json(workout);
};

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
};