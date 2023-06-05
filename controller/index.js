'use strict'

Object.defineProperties(
    exports,
    {
        helloWorld: {
            value: (req, res, next) => {
                res.send('hello world')
            }
        }
    }
)