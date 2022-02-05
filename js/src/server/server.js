const THREE = require('three');

const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const router = express.Router()


app.set('port', 3065);

app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
  httpOnly: true,
  resave: false,
  saveUninitialized: false,
  secret: "papillon",
  name: 'connect.sid',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // true면 qs, false면 querystring

app.use("/",
    router.get('/', (req, res) => {
        res.send('Hello');
    })
);

app.use("/three",
    router.get('/three', (req, res) => {
        res.send('');
    })
);

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});