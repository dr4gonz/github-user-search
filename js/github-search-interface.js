var GitHubSearch = require('./../js/github-search.js').githubsearchModule;

var displayUser = function(user) {
  console.log(user);
  $("#found-user-image").html("<img class='user-avatar-thumb' src="+user.avatar_url+"></img>");
  $("#found-user-name").text(user.name);
  $("#found-user-alias").html("<a href=" + user.html_url + ">" + user.login + "</a>" );
  $("#found-user-join-date").text(user.created_at);

};


$(document).ready(function(){
  $("#user-search").submit(function(event){
    event.preventDefault();
    var currentGitHubSearch = new GitHubSearch();
    var userName = $('#user-name').val();
    currentGitHubSearch.getRepos(userName, displayUser);
  });
});
