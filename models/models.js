import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    enrolled: {
        type: String,
        default: Date.now
    }
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;