const graphql = require('graphql');
const postDetails = require('../data/postdata')['postDetails']['data'];
const resolvers = require('../models')

const user = new graphql.GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => {
    return {
      id: {
        type: graphql.GraphQLInt,
        description: 'The id of the user',
        resolve(user) {
          return user['id'];
        },
      },
      firstname: {
        type: graphql.GraphQLString,
        description: 'The firstname of the user',
        resolve(user) {
          return user['firstname'];
        },
      },
      lastname: {
        type: graphql.GraphQLString,
        description: 'The lastname of the user',
        resolve(user) {
          return user['lastname'];
        },
      },
      email: {
        type: graphql.GraphQLString,
        description: 'The email of the user',
        resolve(user) {
          return user['email'];
        },
      },
      age: {
        type: graphql.GraphQLInt,
        description: 'The age of the user',
        resolve(user) {
          return user['age'];
        },
      },
      posts: {
        type: new graphql.GraphQLList(Posts),
        description: 'The age of the user',
        resolve(user) {
          return resolvers.userpostData(user['id']);
        },
      }
    };
  },
});

// Here require statement is added at the end just to avoid cyclic dependencies
// http://stackoverflow.com/a/14098262/5538893
module.exports = user;
const Posts = require('./Posts');