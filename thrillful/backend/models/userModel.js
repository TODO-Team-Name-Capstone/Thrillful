import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    //Mongo will check all of these and require them for the DB creatation. 
    name: { type: String, required: true },
    //makes sure we do not have duplicate email in user connection. 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    //by defult a user is not the admin so we start with false. 
    isAdmin: { type: Boolean, default: false, required: true }

},
    {
        //Timestamp will create two more fields in the DB for created on x date and last update of record. 
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
export default User;