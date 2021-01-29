require('dotenv').config()
let express = require('express')
let app = express()
let sequelize = require('./db');

const wishlist = require('./controllers/wishlistController')
const user = require('./controllers/userController')

// sequelize.sync();
sequelize.sync({force: true})
app.use(require('./middleware/headers'))
app.use(express.json());

app.use('/test', (req,res)=>res.send('Test Successful. Prepare to Launch!'))

app.use(require('./middleware/validateSession'))
app.use('/user', user)

app.get("*", (req, res)=>{
    res.status(404).send("Sorry, nothing found here");
})

app.listen(process.env.PORT, ()=>console.log('Serving port '+process.env.PORT))