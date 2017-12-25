'use strict';
function DataInterface() { }
const { Pool, Client } = require('pg');
const env = require('dotenv').config().parsed;
var user = env.pgUser;
var dbName = env.pgDatabase;
var pass = env.pgPass || null;
var dbHost = env.pgHost || '127.0.0.1';
const config = {
    user: user, // name of the user account
    host: dbHost,
    database: dbName, // name of the database
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};
if(pass)
    config.password = pass;
const pool = new Pool(config);
//A simple fetch all, with limit and offset so we can paginate
DataInterface.prototype.getPosts = function (callback, limit=10, offset=0 ) {
    pool.query('SELECT * FROM posts LIMIT $1 OFFSET $2', [limit, offset]  , (err, res) => {
        callback(err, res);
    })    
}

DataInterface.prototype.getPost = function (callback, postId) {
    pool.query('SELECT * FROM posts where id =  $1', [postId], (err, res) => {
        callback(err, res);
    })
}
module.exports = DataInterface;