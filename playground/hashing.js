const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id:10
};

var secret ='mySecret45';
var token = jwt.sign(data,secret);
console.log(token);

var decodedRes = jwt.verify(token,secret);
console.log(decodedRes);


// var msg = 'I am user lalaw';

// var hash = SHA256(msg).toString();

// console.log(`Message : ${msg}`);
// console.log(`hash : ${hash}`);

// var data ={
//     id: 4
// };


// var token ={
// data, 
// hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash =SHA256(JSON.stringify(token.data)+'somesecret').toString();
// if(resultHash === token.hash)
// {
//     console.log("Data wasn't changed");
// }
// else
// {   console.log("Data was changed, Do not trust!!")
// }