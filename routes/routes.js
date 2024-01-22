import { Router } from 'express';
import { addStudent, getAll, update, deleteStudent, find, search } from '../controllers/students.js';

const router = Router();
export default router;

router.get('/getAll', getAll);

router.post('/addstudent', addStudent);


router.patch('/update/:id', update);

router.delete('/delete/:id', deleteStudent);

router.get('/find/:id', find);

router.get('/search', search);

