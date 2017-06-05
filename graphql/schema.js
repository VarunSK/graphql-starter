const graphql = require('graphql');
const User = require('./Users');
const Post = require('./Posts');
const userdata = require('../data/userdata')['userDetails']['data'];
const postdata = require('../data/postdata')['postDetails']['data'];
const resolvers = require('../models');

const Query = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      user: {
        type: User,
        description: 'The individual User data',
        args: {
          id: {
            type: graphql.GraphQLInt,
            description: 'The id of the user',
          },
        },
        resolve(root, args) {
          return userdata[args.id - 1];
        },
      },
      post: {
        type: Post,
        description: 'The individual Post data',
        args: {
          id: {
            type: graphql.GraphQLInt,
            description: 'The id of the Post',
          },
        },
        resolve(root, args) {
          return postdata[args.id - 1];
        },
      },
    };
  },
});

const Mutation = new graphql.GraphQLObjectType({
  name: 'Mutation',
  description: 'This is the root muatation',
  fields: () => {
    return {
      addUser: {
        type: User,
        description: 'Creating a new user',
        args: {
          id: {
            type: graphql.GraphQLInt,
            description: 'The user id',
          },
          firstname: {
            type: graphql.GraphQLString,
            description: 'The firstname of the user',
          },
          lastname: {
            type: graphql.GraphQLString,
            description: 'The lastname of the user',
          },
          email: {
            type: graphql.GraphQLString,
            description: 'The email of the user',
          },
          age: {
            type: graphql.GraphQLInt,
            description: 'The age of the user',
          },
        },
        resolve(root, args) {
          return resolvers.saveUserInfo(args);
        },
      },
    };
  },
});

module.exports = new graphql.GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
