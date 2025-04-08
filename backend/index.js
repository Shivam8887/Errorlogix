const  express = require('express');
const cors =require('cors')
const router = require('./Routes/routes');
const app = express();


require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // A
app.use(cors({origin:'http://localhost:5173'}))
const port = process.env.PORT||5000;
app.use('/',router);

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})