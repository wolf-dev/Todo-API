const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{

 if(err){

   return  console.log('Unable to connect to MongoDB server');
 }
 
 console.log('Connected to MongoDB server');
 const db = client.db('TodoApp')

 db.collection('Todos').insertOne({
     text:'Something to do',
     completed: false
 }, (err,result) =>{
   
    if(err){

        return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));

 })

 //insert new collectionm into the dataBase

 db.collection('Users').insertOne({
     name:'Hridoy',
     age:22,
     place:'Chittagong'
 }, (err,result) =>{

    if(err){
        
     return console.log('Unable to insert todo', err);
}
        
         console.log(result.ops[0]._id);
 })

 client.close();
});