const userDetails = require('./data/userdata')['userDetails']['data'];
const postDetails = require('./data/postdata')['postDetails']['data'];

function userData(id) {
    return data = userDetails[id-1];
}

function postData(id){
    return data = postDetails[id-1];
}

function userpostData(id) {
    let data = [];
    data.push(postDetails[id-1], postDetails[id]);
    return data;
}

function saveUserInfo(data) {
    return data;
}


/**
 * mutation {
	addUser(
    id: 1
    firstname: "Random"
    lastname: "random"
    email: "random@random.com"
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
    'saveUserInfo' : saveUserInfo,
}