const cors = require('cors')
const express = require('express')
const proxy = require('./proxy')
// const { body, check, param, validationResult } = require('express-validator')
// const middlewareWrapper = require('cors')

const PORT = 80
const app = express()
const corsOptions = { origin: ['http://localhost:3000'], optionsSuccessStatus:200 }

// middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/message', cors(corsOptions), async (req,res) => {
    res.send({message: 'We are the dunder Cats - hoo! '})
})

app.get('/members', cors(corsOptions), async (req, res) => {
    const members = await proxy.selectMembers(); 
    res.send(members);
})




app.listen(PORT, () => { 
    console.log(`Express - we are up and running on port: ${PORT}`)
})
