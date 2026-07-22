const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const route = require('./routes');
app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.engine('hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/blogs/create', (req, res) => {
    console.log("Dữ liệu nhận được từ Form:", req.body);

    res.json(req.body);
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === 'admin' && password === '123456') {
        console.log('Đăng nhập thành công');
    } else {
        console.log('Sai tài khoản hoặc mật khẩu');
    }

    res.send('Đã xử lý đăng nhập');
});

route(app);

app.listen(3000, () => {
    console.log('Server started');
});