var apiKey = require('./../.env').apiKey;

GitHubSearch = function() {};

GitHubSearch.prototype.getRepos = function(userName, displayUser) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayUser(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.githubsearchModule = GitHubSearch;
