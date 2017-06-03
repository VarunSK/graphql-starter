const userDetails = require('./userdata')['userDetails']['data'];
const postDetails = require('./postdata')['postDetails']['data'];

function userData(req, res, next){
    const id = req.params.id;
    let data = {};
    switch(id) {
        case '1':
            data = userDetails[0];
            break;
        case '2':
            data = userDetails[1];
            break;
        case '3':
            data = userDetails[2];
            break;
        case '4':
            data = userDetails[3]
            break;
        case '5':
            data = userDetails[4]
            break;
    }
    req.data = data;
    next();
}

function postData(req, res, next){
    const id = req.params.id;
    let data = {};
    switch(id) {
        case '1':
            data = postDetails[0];
            break;
        case '2':
            data = postDetails[1];
            break;
        case '3':
            data = postDetails[2]
            break;
        case '4':
            data = postDetails[3]
            break;
        case '5':
            data = postDetails[4]
            break
        case '6':
            data = postDetails[5];
            break;
        case '7':
            data = postDetails[6];
            break;
        case '8':
            data = postDetails[7]
            break;
        case '9':
            data = postDetails[8]
            break;
        case '10':
            data = postDetails[9]
            break;
    }
    req.data = data;
    next();
}

function userpostData(req, res, next) {
    let data = [];
    const id = req.params.id;
    switch(id) {
    case '1':
        data.push(postDetails[0], postDetails[1]);
        break;
    case '2':
        data.push(postDetails[2], postDetails[3]);
        break;
    case '3':
        data.push(postDetails[4], postDetails[5]);
        break;
    case '4':
        data.push(postDetails[6], postDetails[7]);
        break;
    case '5':
        data.push(postDetails[8], postDetails[9]);
        break;
  }
  req.data = data;
  next();
}

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

function saveUserInfo(data) {
    return data;
}


/**
 * mutation {
	addUser(
    id: 1
    firstname: "Varun"
    lastname: "SK"
    email: "sk@sk.com"
    age: 10
	) {
	  id
	}
}
 */
module.exports = {
    'userData' : userData,
    'postData' : postData,
    'userpostData' : userpostData,
    'mapper' : mapper,
    'saveUserInfo' : saveUserInfo,
}