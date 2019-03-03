

const {MongoClient, ObjectID} = require('mongodb');
const connectionURL = 'mongodb://localhost:27017';
const databaseName ='TodoApp';


MongoClient.connect(connectionURL, (error, client)=>{
    if(error)
    {
      return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server')
    const db =client.db(databaseName);

    // db.collection('Todos').findOne({_id:new ObjectID("5c7ba8adfc0eae2604b68d56")}, (error, todo)=>{
    //     if(error){
    //         return console.log('errror');
    //     }
    //     console.log(todo);
    // });


    db.collection('Todos').find({completed: true}).toArray((error, todos)=>{
        if(error){
            return console.log('errror');
        }
        console.log(todos);
    });

// db.collection('Users').findOne({_id:new ObjectID("5c77bd332be3fd68c4c7bcc7")}, (error, user)=>{
// if(error){
//     return console.log('errror');
// }
// console.log(user);


// })

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
