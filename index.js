const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const resolvers = require('./resolvers')

const schema = require('./schema');
const app = express();

app.get('/users/:id', resolvers.userData, function(req, res) {
  res.json(req.data);
});

app.get('/posts/:id', resolvers.postData, function(req, res) {
  res.json(req.data);
});

app.get('/users/:id/posts/', resolvers.userpostData, function(req, res) {
  res.json(req.data);
});

// Graphql GET request handler
app.use('/graphql', graphqlHTTP(function(req, res, next) {
  return {
    schema: schema,
    pretty: true,
    graphiql: req.app.get('env') === 'development' ? true :false,
  };
}));

app.listen(3000);
console.log('Running at port 3000 .....')
app.use(bodyParser.json({ type: 'application/json' }));
module.exports = app;
