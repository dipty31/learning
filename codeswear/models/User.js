

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
}, {timestamps: true});
// timestamps is an object, it'll automatically make 'created at' and 'updated at'
mongoose.models = {}

export default mongoose.model('User', UserSchema);