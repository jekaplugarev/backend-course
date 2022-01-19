import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000
const app = express()
const DB_URL = `mongodb+srv://JekaPl:JekaPl1968@cluster0.uahq4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log('Start')
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()

