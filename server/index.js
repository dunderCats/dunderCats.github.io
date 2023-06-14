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

app.get('/member/:id', cors(corsOptions), async (req, res)=> {
    const memberId = req.params['id']
    const member = await proxy.selectMemberById(memberId)
    res.send(member)
})

app.get('/member', cors(corsOptions), async (req, res)=> {
    const firstName = req.query.first_name
    const lastName = req.query.last_name
    const member = await proxy.selectMemberByName(firstName, lastName)
    res.send(member)
    // console.log(member)
})

app.post('/member', cors(corsOptions), async(req, res) => {
    const member = req.body
    // console.log(member)
    const newMember = await proxy.insertMember(member)
    res.send(newMember)
 })


app.listen(PORT, () => { 
    console.log(`Express - we are up and running on port: ${PORT}`)
})
