import express from 'express';

const routerUser = express.Router();


routerUser.get('/', (req, res) => {
    res.send('users');
    console.log(req.query)
    console.log(req.query.test);
});

routerUser.get('/info', (req, res) => {
    //res.send('users info')
    res.render('users/info', { firstName: 'Maninder'})
});

routerUser.post('/', (req, res) => {
    console.log(req.body.firstName);
    const isValid = true;

    if (isValid) {
        users.push(req.body.firstName);
        res.redirect( `user/${users.length - 1}`)
    } else {
        console.log('Error');
        res.render('users/info', { firstName: req.body.firstName })
    }

});

routerUser.route('/:userID')
.get((req, res) => {
    console.log(req.user);
    req.params.userID;
    res.send(`users Get with id ${req.params.userID} - ${req.user.name} - ${req.user}`);
}).put((req, res) => {
    req.params.userID;
    res.send(`PUT users Get with id ${req.params.userID}`);
}).delete((req, res) => {
    req.params.userID;
    res.send(`Delete users Get with id ${req.params.userID}`);
});

// routerUser.get('/:userID', (req, res) => {
//     req.params.userID;
//     res.send(`users Get with id ${req.params.userID}`);
// });

// routerUser.put('/:userID', (req, res) => {
//     req.params.userID;
//     res.send(`PUT users Get with id ${req.params.userID}`);
// });

// routerUser.delete('/:userID', (req, res) => {
//     req.params.userID;
//     res.send(`Delete users Get with id ${req.params.userID}`);
// });
const users = [{ name: 'Maninder'}, { name: 'Navjot'}]
routerUser.param("userID", (req, res, next, userID) => {
    console.log(userID);
    req.user = users[userID]
    next();
})

export default routerUser;