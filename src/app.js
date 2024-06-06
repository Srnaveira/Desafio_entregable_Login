import express, { json } from 'express'

const app = express();
const PORT = 8080;


app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(PORT, () =>{
    console.log(`SERVER RUNING IN THE PORT: "${PORT}"`);

})