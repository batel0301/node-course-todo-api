const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id ='5c7fabe89a2a7830c09fe57a1111';

if(!ObjectId.isValid(id))
{
    console.log('Invalid id');
}

Todo.find({
    _id: id
}).then((todos)=> {
console.log('Todos', todos)
});

Todo.findById(id).then((todo)=> {
    if(!todo)
    {
        return console.log('id not found');
    }
    console.log('Todo by id', todo)
    }).catch((e)=>{
        console.log(e)
    });