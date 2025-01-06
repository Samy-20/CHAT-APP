const mongoose =  require('mongoose');

const url = `mongodb+srv://Chat_app_admin:Sony@123@cluster0.fdda3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// IMport Files
const Users =  require('./models/Users');

mongoose.connect(url, {
    strict: true,
    deprecationErrors: true,
}).then(() => console.log('connected to DB')).catch((e) => console.log('Error', e))