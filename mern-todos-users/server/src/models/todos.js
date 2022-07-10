import mongoose from 'mongoose';

const TodosSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        important: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

// 'todo' is the name of the collection on mongoDB
// 'TodosSchema' is the object that mirrors the collection

const TodosModel = mongoose.model('todo', TodosSchema);

export default TodosModel;
