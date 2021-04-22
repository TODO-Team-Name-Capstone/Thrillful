//import bcrypt from 'bcryptjs';
const data = {
    users: [
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
            isAdmin: false,
        },
    ],
};
export default data;