var GitHubSearch = require('./../js/github-search.js').githubsearchModule;

$(document).ready(function(){
  $("#user-search").submit(function(event){
    event.preventDefault();
    var currentGitHubSearch = new GitHubSearch();
    var userName = $('#user-name').val();
    currentGitHubSearch.getRepos(userName);
  });
});
