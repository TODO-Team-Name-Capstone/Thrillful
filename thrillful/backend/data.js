<<<<<<< HEAD
import bcrypt from 'bcryptjs';
const data = {
    customers: [
        {
            first_name: 'Miss',
            last_name: 'Staff',
            username: 'M',
            email: 'shawnastaff@gmail.com',
            password: bcrypt.hashSync('4321', 8),
            isAdmin: true
        },
        {
            first_name: 'John',
            last_name: 'Doe',
            username: 'JJ',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
=======
//import bcrypt from 'bcryptjs';
const data = {
    customers: [
        {
            name: 'Miss',
            email: 'shawnastaff@gmail.com',
            password: '4321', //bcrypt.hashSync('4321', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: '11234', //crypt.hashSync('1234', 8),
>>>>>>> 6000e836d4bb9aae180c4e9c8b355c21f8ad4db5
            isAdmin: false,
        },
    ],
};
export default data;