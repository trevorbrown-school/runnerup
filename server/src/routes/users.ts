import { request, Router } from 'express';
import requestUser from '../mongo/requestUser';

const users = Router();

users.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    requestUser(id).then(user => {
        res.send(user);
    });
});

users.post('/', (req, res) => {
    // TODO figure out how to parse json
    // console.log();
    res.send('Post Recieved!')
})

export default users;