import express from 'express';
import cors from 'cors';
import { nanoid } from 'nanoid';
import { connect, urlModel } from './db/db.js';
const app = express();
app.use(cors());
app.use(express.json());
app.post('/', async function (req, res) {
    try {
        const url = req.body.url;
        const shortUrl = nanoid(8);
        await connect();
        const createShortUrl = await urlModel.create({
            url,
            shortUrl
        });
        if (!createShortUrl) {
            res.json({
                success: false,
                message: "Failed to create short url"
            });
        }
        res.json({
            success: true,
            shortUrl: `http://localhost:3000/${shortUrl}`
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
app.get('/:shortUrl', async function (req, res) {
    try {
        const shortUrl = req.params.shortUrl;
        await connect();
        const url = await urlModel.findOne({ shortUrl });
        if (!url) {
            res.status(404).send("Not Found");
        }
        if (url) {
            res.redirect(url.url);
        }
        else {
            res.status(404).send("Not Found");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
