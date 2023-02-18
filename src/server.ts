import express = require('express');
import * as STDDEF from './lib/STDDEF';
import log from './lib/log';
const app = express();
const PORT:number = parseInt(process.env.PORT)|80;
const isDEV:boolean = true;
if (process.platform.toString() === 'win32') log('This server may not work on Windows',STDDEF.LOG_TYPE.LOG_WARN);


app.get('/', (_req, res):void => {
    res.status(STDDEF.HTTP_STATUS.SERVER_ERROR).json('ESERVERNCONFIG'); /*replace with request handler*/
});

app.listen(PORT, ():void => {
    log(`Server listening on port ${PORT}`,STDDEF.LOG_TYPE.LOG_INFO);
});