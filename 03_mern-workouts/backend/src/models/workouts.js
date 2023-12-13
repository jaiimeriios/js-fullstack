const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        load: {
            type: Number,
            required: true,
        },
        user_id: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

// 'WorkoutSchema' is the object that mirrors the collection
// 'Workout' is the name of the collection on mongoDB,
// pluralized on db collecion

module.exports = mongoose.model('Workout', WorkoutSchema)