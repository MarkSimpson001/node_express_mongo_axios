import Student from '../models/models.js';

export const addStudent = async (req, res ) => {
    let student = new Student(req.body);
    await student
        .save()
        .then(() => {
            res.json(student);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getAll = async (req, res) => {
    const students =  await Student.find({});
    res.json(students);
}

export const update = async (req, res) => {
    let id = { '_id': req.params.id };
    let update = req.body;
    await Student
        .findOneAndUpdate(id, update, { new: true })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.send(err);
        })
}

export const deleteStudent = (req, res) => {
    let id = { '_id': req.params.id };
    if(id){
        Student
            .deleteOne({ _id: id })
            .then(() => {
                res.send('Student was deleted!')
            })
            .catch((err) => {
                res.send(err);
            })
    } else
        res.send('Bad student id!');
}

export const find = (req, res) => {
    let id = req.params.id;
    Student
        .findOne({ _id: id })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        })
}

export const search = (req, res) => {
    Student
        .find(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        })
}