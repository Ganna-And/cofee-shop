const graphql = require('graphql');
const_= require('lodash');

const {GraphQlObjectType, GraphQLString, GraphQLSchema} = graphql;


//dummy data
var books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

const BookType = new GraphQlObjectType({
    name: 'Book',
    fields:()=>({
        id:{type: GraphQLString},
        name:{type: GraphQLString},
        genre:{type:GraphQLString}
    })
});


const RootQuery = new GraphQlObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type: GraphQLString }},
            resolve(parent, args){
                //code to get date for db/othersource
             return_.find(books, {id: args.id});                
            }
          }
    }
})



module.exports = new GraphQLSchema({
    query: RootQuery
});