import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, reqired: true},
    isAdmin: { type: Boolean, default: false, req: true}
},
{
    timestamp: true
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;