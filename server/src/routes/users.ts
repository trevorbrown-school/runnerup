import {  Router } from 'express';
import {requestUser, postUser, updateUser} from '../mongo';
const users = Router();

users.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    requestUser(id).then(user => {
        res.send(user);
    });
});

users.post('/', (req, res) => {
    postUser(req.body, user => {
        res.send(user);
    });

    // res.send('Post Recieved!')
})

users.post('/u/:id', (req, res) => {
    updateUser(req.params.id, req.body.workouts, (user) => {
        res.send(user);
    });
    
})

export default users;