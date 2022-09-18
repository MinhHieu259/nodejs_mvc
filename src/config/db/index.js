const mongoose = require('mongoose');

async function connect() {
try {
    await mongoose.connect('mongodb+srv://Minhhieu259:Minhhieu259@cluster0.swse9.mongodb.net/education_application?retryWrites=true&w=majority');
    console.log('connect success')
} catch (error) {
    console.log('connect failed')
}

}
module.exports = {connect}