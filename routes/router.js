const express = require('express')
const route = express.Router()


const read = require('../controller/read');
const home = require('../controller/home');
const del = require('../controller/delete');
const specific_get = require('../controller/specific_get');
const put = require('../controller/put');
const patch = require('../controller/patch');
const specific_del = require('../controller/specific_delete');

//////////////////////////////////////////Requests targeting all articles//////////////////////////////////////////////
route.get('/articles', read);
route.post('/articles', home);
route.delete('/articles', del);

//////////////////////////////////////Requests targeting specific articles//////////////////////////////////////////
route.get('/articles/:articleTitle', specific_get);
route.put('/articles/:articleTitle', put);
route.patch('/articles/:articleTitle', patch);
route.delete('/articles/:articleTitle', specific_del);

module.exports = route;