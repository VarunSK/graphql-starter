const graphql = require('graphql');
const postDetails = require('./postdata')['postDetails']['data'];

function mapper(id) {
    let data = []
    switch(id) {
    case 1:
        data.push(postDetails[0], postDetails[1]);
        break;
    case 2:
        data.push(postDetails[2], postDetails[3]);
        break;
    case 3:
        data.push(postDetails[4], postDetails[5]);
        break;
    case 4:
        data.push(postDetails[6], postDetails[7]);
        break;
    case 5:
        data.push(postDetails[8], postDetails[9]);
        break;
  }
  return data;
}

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
          return mapper(user['id']);
        },
      }
    };
  },
});

// Here require statement is added at the end just to avoid cyclic dependencies
// http://stackoverflow.com/a/14098262/5538893
module.exports = user;
const Posts = require('./Posts');