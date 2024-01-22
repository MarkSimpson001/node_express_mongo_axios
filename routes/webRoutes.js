import express from 'express';
import axios from 'axios';

const app = express();
const router = express.Router();
export default router;

// Call view to represent returned search result
router.get('/', async (req, res) => {
    axios({
        method: 'get',
        url: 'http://localhost:3000/api/getAll'
    }).then(apiResponse => {
        const students = apiResponse.data;
        res.render('index', { title: 'All Students', students: students })
    }).catch(err => {
        res.status(404).send(err);
    })
});

router.get('/studentDetail/:id', async (req, res) => {
    let id = req.params.id;
    console.log('id: ', id);
    axios({
        method: 'get',
        url: `http://localhost:3000/api/find/${id}`
    }).then(apiResponse => {
        const students = apiResponse.data;
        res.render('studentDetail', { title: 'Student Detail', students: students })
    }).catch(err => {
        res.status(404).send(err);
    })
});

// Display search page
router.get('/search', (req, res) => {
    res.render('search', { title: 'Search' })
})

// Execute search and return studentDetail view
router.post('/search', async (req, res) => {
    let query = Object.fromEntries(Object.entries(req.body).filter(([k, v]) => v != ''));
    axios({
        method: 'get',
        url: `http://localhost:3000/api/search`,
        data: query,

    }).then(apiResponse => {
        const students = apiResponse.data;
        res.render('studentDetail', { title: 'Student Detail', students: students })
    }).catch(err => {
        res.status(404).send(err);
    })
})
