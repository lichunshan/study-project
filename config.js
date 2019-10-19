module.exports = {
    "mysql": {
        "host": "localhost",
        "port": 3306,
        "database": "think-one",
        "username": "root",
        "password": "UA2ao:yxCsxw"
    },
    "session": {
        key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
        maxAge: 86400000,
        autoCommit: true, /** (boolean) automatically commit headers (default true) */
        overwrite: true, /** (boolean) can overwrite or not (default true) */
        httpOnly: true, /** (boolean) httpOnly or not (default true) */
        signed: true, /** (boolean) signed or not (default true) */
        rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
        renew: false
    }
}