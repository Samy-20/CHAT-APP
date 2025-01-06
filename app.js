const express = require('express');
const Users = require('./models/Users');

//Import files
require('./db/connection');


//app Use
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const port = process.env.PORT || 8000;

// Routes
app.get('/', (req, res) => {
    res.send('Welcome');
})


app.post('/api/register', async(req, res) => {
    try{
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password ){
            res.status(400).send('please fill all required fileds');
        }
        else{
            const isAlreadyExist = await Users.findOne({ email });
            if (isAlreadyExist) {
                res.status(400).send('user already exists');
            }
            else{
                const newUsers = new Users({ fullName, email });
            }
        }
    }catch(error) {

    }
});

app.listen(port, () => {
    console.log('listening on port' + port);
})