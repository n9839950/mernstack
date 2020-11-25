import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes);
// parse application/json
app.use(bodyParser.json({limit:"30mb", extended: true}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://javascriptmernApp:Manan_0106@cluster0.4inqm.mongodb.net/<dbname>?retryWrites=true&w=majority' 
const PORT = process.env.PORT || 5000;


// connecting to the database
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.error());