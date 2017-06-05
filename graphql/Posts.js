const graphql = require('graphql');
const userDetails = require('../data/userdata')['userDetails']['data'];

const posts = new graphql.GraphQLObjectType({
  name: 'Posts',
  description: 'This represents a Postby user',
  fields: () => {
    return {
      id: {
        type: graphql.GraphQLInt,
        description: 'The id of the post',
        resolve(posts) {
          return posts['id'];
        },
      },
      title: {
        type: graphql.GraphQLString,
        description: 'The title of the post',
        resolve(posts) {
          return posts['title'];
        },
      },
      published_date: {
        type: graphql.GraphQLString,
        description: 'The published_date of the post',
        resolve(posts) {
          return posts['published_date'];
        },
      },
      author_id: {
        type: graphql.GraphQLInt,
        description: 'The author_id of the post',
        resolve(posts) {
          return posts['author_id'];
        },
      },
      author: {
        type: User,
        description: 'The author of the post',
        resolve(posts) {
          return userDetails[posts['author_id'] - 1];
        },
      },
    };
  },
});

// Here require statement is added at the end just to avoid cyclic dependencies
// http://stackoverflow.com/a/14098262/5538893
module.exports = posts;
const User = require('./Users');