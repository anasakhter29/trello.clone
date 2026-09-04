//username,password
//organization
//issues
//boards
const express = require('express');


const users = [{
    id: 1,
    username: 'user1',
    password: 'password1'
},{
    id: 2,
    username: 'user2',
    password: 'password2'
},{
    id: 3,
    username: 'user3',
    password: 'password3'
}];
const organization = [{
    id: 1,
    name: 'anas.organization'
},{
    id: 2,  
    name: 'zaid.organization'
}];
const board =[{
    id:1,
    branch:'dev'
}]
const issues = [
    {
        id:1,
        title:"android dark mode",
    },{}
];
 
const app = express();  

app.post('/signup', (req, res) => {

}); 


app.listen(3000);
