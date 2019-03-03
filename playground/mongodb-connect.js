const MongoClient = require('mongodb').MongoClient;

const connectionURL = 'mongodb://localhost:27017'
const databaseName ='TodoApp';


MongoClient.connect(connectionURL, (error, client)=>{
    if(error)
    {
      return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server')
    const db =client.db(databaseName);

db.collection('users').findOne({age: 29}, (error, user)=>{
if(error){
    return console.log('errror');
}
console.log(user);


})

//insert new doc into users name, age location 

//     db.collection('Users').insertOne({
//         name:'Bat-el Pinto',
//         age:29,
//         location :'Simtat hakalanit 2, Udim'
//     }, (error,result)=>{
// if(error){
//     return console.log('Unable to insert user', error);
// }
// console.log(JSON.stringify(result.ops, undefined, 2));
//     });

    client.close();

});
