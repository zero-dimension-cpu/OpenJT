const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 中间件：解析 JSON 请求体  
app.use(bodyParser.json());

// 中间件：解析 URL 编码的请求体  
app.use(bodyParser.urlencoded({ extended: true }));

// 根路径 GET 请求  
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// /about 路径 GET 请求  
app.get('/about', (req, res) => {
  res.json({ message: 'This is the about page!' });
});

// /submit 路径 POST 请求  
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `Thank you, ${name}! Your email is ${email}.` });
});

// 启动服务器  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});