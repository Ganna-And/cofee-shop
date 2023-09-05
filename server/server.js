const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const app = express();


app.use('/graphql', graphqlHTTP({
  // pass in a schema property
  schema
}))




app.listen(4000, ()=>{
  console.log("Server running on port 4000")})