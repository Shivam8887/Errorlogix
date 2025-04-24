const  express = require('express');
const cors =require('cors')
const router = require('./Routes/routes');
const app = express();


require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // A
const corsOptions = {
  origin: ['http://localhost:5173', 'https://errorlogix2-frontend.onrender.com'],
  credentials: true // only if you're using cookies or auth headers
};

app.use(cors(corsOptions));
const port = process.env.PORT||5000;
app.use('/',router);

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
