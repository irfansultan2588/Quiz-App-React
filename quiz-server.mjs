import express from "express"
import cors from "cors"
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.use(cors())

const port = process.env.PORT || 5001;


const quizSchema = new mongoose.Schema({
    Question: String,
    AnswerText: Array
});

const quizModel = mongoose.model('quiz', quizSchema);


app.get("/home", async (req, res) => {
    try {

        const response = await quizModel.find({}).exec();
        console.log('chalja mere bhai')
        return res.send(response)

    } catch (error) {
        console.log('error', error)
    }
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})







// /////////////////////////////////////////////////////////////////////////////////////////////////
let dbURI = process.env.MONGODBURI || 'mongodb+srv://abc:abc@cluster0.jqfzaar.mongodb.net/quizAppBase?retryWrites=true&w=majority';
mongoose.connect(dbURI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////