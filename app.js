const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),

    routes = require('./routes')

module.exports = exports = express()

exports
    .use(cors())
    .use(bodyParser.json({
        limit: '10mb',
    }))
    .use(bodyParser.urlencoded({
        limit: '10mb',
        extended: false
    }))
    .use(cookieParser())
    .use(session({
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: null,
            httpOnly: true
        },
        store: new (require('session-memory-store')(session))
    }))
    .use('/', routes)
    .use((error, req, res, next) => {
        // 로그 추가

        if (res.statusCode !== 404) {
            res
                .status(error.statusCode ? error.statusCode : 500)
                .send(error instanceof Error ? error.message : error)
        }
    })