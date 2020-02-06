var data = require("../data.json");

exports.addFriend = function(request, response) { 
	response.render('index',data);
  var name = request.query.name;
  var description = request.query.description;

  var newFriend = {
    name: name,
    description: description,
    imageURL: 'http://lorempixel.com/400/400/people'
  }

  console.log(data);
  data.friends.push(newFriend);
 }
