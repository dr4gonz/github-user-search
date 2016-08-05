var apiKey = require('./../.env').apiKey;

GitHubSearch = function() {};

GitHubSearch.prototype.getRepos = function(uesrName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
