const graphql = require('graphql');

const {GraphQlObjectType, GraphQLString, GraphQLSchema} = graphql;

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
                
            }
          }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});