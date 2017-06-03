const graphql = require('graphql');
const User = require('./User');
const Post = require('./Posts');
const userdata = require('./userdata')['userDetails']['data'];
const postdata = require('./postdata')['postDetails']['data'];

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

module.exports = new graphql.GraphQLSchema({
  query: Query,
});
