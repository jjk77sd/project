const siteRouter = require('./site');

function route(app) {
    // Mọi luồng truy cập sẽ chuyển sang siteRouter
    app.use('/', siteRouter);
}

module.exports = route;