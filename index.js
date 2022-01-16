require('dotenv').config()

const cohort = process.argv[2]
const user = process.env.USER

// node index.js web-49 runs this 
if (cohort === 'web-49') {
    console.log(`${cohort} is a nice`)
} else {
    console.log(`${cohort} aint great`)
}

console.log(`the user is ${user}`)

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.json({ message: 'hey there' })
})

const port = process.env.PORT || 9000 // heroku wants to set its own port
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})