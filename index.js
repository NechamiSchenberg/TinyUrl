import bodyParser from 'body-parser';
import express from 'express';
import LinkRouter from './Routers/LinkRouter.js';
import RedirectRouter from './Routers/RedirectRouter.js';
import UserRouter from './Routers/UserRouter.js';
import connectDB from './db.js';

connectDB();
const app = express()

const port = 3000;
app.use(bodyParser.json());

app.use('/Users', UserRouter);
app.use('/Links', LinkRouter)
app.use('/TinyUrl', RedirectRouter)
app.listen(port, function () {
    console.log(`app listening http://localhost:${port}`);
})