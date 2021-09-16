import { Request, Response } from 'express';
import axios from 'axios';

export const rootHandler = (_req: Request, res: Response) => {
    return res.send('API is working 🤓');
};

export const sendLogHandler = (req: Request, res: Response) => {

    console.log(req.body);

    axios.post(process.env.DD_SEND_LOG_URL, { ...req.body }, {
        headers: {
            'DD-API-KEY': process.env.DD_API_KEY
        }
    })
        .then(response => {
            console.log(response)
            res.status(200).json({ msg: 'Success' })
        })
        .catch(error => {
            console.log(error)
            res.json({ msg: 'Some error occurred' })
        });

};