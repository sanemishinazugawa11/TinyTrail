import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
import { Request, Response } from 'express';
import { connect } from './Db/db';

app.post('/' , async function (req,res){
    const url = req.body.url;

    console.log(url);
    res.send("url recieved");
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});