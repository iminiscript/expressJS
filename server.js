import express from 'express';
import routerUser from './routes/routes.js'

const app = express();

app.set('view engine', 'ejs');


app.use(express.static("public"));
app.use(express.urlencoded({ extended : true}))
//app.use(middleWare);

// app.get('/', middleWare, (req, res) => {
//     console.log('Hello');
//     //  res.send('Hello From Send');
//     //  res.sendStatus(500);
//     //  res.status(500).send('Hi Internal Server');
//     //  res.status(500).json({'message': 'Error'});
//       // res.json({ message: 'Hi From JSON Obj'});
//        // res.download('server.js');
    
//         console.log('Hello Maninder');
//        res.render('index', { text: 'Test'});
// })

app.use('/user', routerUser);

function middleWare(req, res, next) {
    console.log(req.originalUrl);
    console.log('MiddleWare')
    next();
}

app.listen(3000);