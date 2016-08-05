var GitHubSearch = require('./../js/github-search.js').githubsearchModule;

var displayUser = function(user) {
  $("#found-user-image").html("<img class='user-avatar-thumb' src="+user.avatar_url+"></img>");
  $("#found-user-name").text(user.name);
  $("#found-user-alias").html("<a href=" + user.html_url + ">" + user.login + "</a>" );
  $("#found-user-join-date").text(user.created_at);
};

var displayRepos = function(repo) {
  console.log(repo);
  if(repo.description === null || repo.description === "") {
    $("#repo-list").append("<li class='list-group-item' id='repoId"+repo.id+"'>"+repo.name+"</li>");

    $('#repoId'+repo.id).click(function(){
      $("#found-repo-name").text(repo.name);
      $("#found-repo-url").html("<a href=" + repo.html_url + ">" + repo.html_url + "</a>");
      $("#found-repo-description").text("No Description Given");
    });

  } else {
    $("#repo-list").append("<li class='list-group-item' id='repoId"+repo.id+"'>"+repo.name+"</li>");

    $('#repoId'+repo.id).click(function(){
      $("#found-repo-name").text(repo.name);
      $("#found-repo-url").html("<a href=" + repo.html_url + ">" + repo.html_url + "</a>");
      $("#found-repo-description").text(repo.description);
    });
  }
};


$(document).ready(function(){
  $("#user-search").submit(function(event){
    event.preventDefault();
    var currentGitHubSearch = new GitHubSearch();
    var userName = $('#user-name').val();
    $("#user-results").show();
    $("#repo-descriptions").show();
    currentGitHubSearch.getUser(userName, displayUser, displayRepos);
  });
});
