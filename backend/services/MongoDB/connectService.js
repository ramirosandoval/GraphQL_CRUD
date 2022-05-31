const { connect } = require('mongoose');

const mongouri = 'mongodb+srv://sramirx:KXerrJCRSlYhHyWp@instagram.sg0cc.mongodb.net/Instagram';
const connectoToDB = async () => {
    try{
        await connect(mongouri, {dbName:"Books"});
        console.log('Connected succesfully to MongoDB!');
    }catch(err){
        console.error(err);
    }
};

module.exports = {connectoToDB};