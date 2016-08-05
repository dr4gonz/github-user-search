var apiKey = require('./../.env').apiKey;

GitHubSearch = function() {};

GitHubSearch.prototype.getUser = function(userName, displayUser, displayRepos) {
  var that = this;
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    displayUser(response);
    that.getRepos(response.login, displayRepos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

GitHubSearch.prototype.getRepos = function(userName, displayRepos) {
  $.get('https://api.github.com/users/' + userName + '/repos?type=owner&sort=created&direction=desc').then(function(response){
    for(i = 0; i < response.length; i++){
      displayRepos(response[i]);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubsearchModule = GitHubSearch;
