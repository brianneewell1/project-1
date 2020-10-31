//youtube api call
$(document).ready(function () {
  $("#Rock").click(function (event) {
    event.preventDefault();
    var searchTerm = $("#query").val();
    getRequest("rock music");
  });
  $("#Pop").click(function (event) {
    event.preventDefault();

    getRequest("pop music");
  });
  $("#Rap").click(function (event) {
    event.preventDefault();

    getRequest("Rap music");
  });
  $("#instrumental").click(function (event) {
    event.preventDefault();

    getRequest("instrumental music");
  });
  $("#Jazz").click(function (event) {
    event.preventDefault();

    getRequest("Jazz music");
  });
  $("#thrashMetal").click(function (event) {
    event.preventDefault();

    getRequest("Thrash Metal music");
  });
  $("#Edm").click(function (event) {
    event.preventDefault();

    getRequest("Edm music");
  });
  $("#gangstaRap").click(function (event) {
    event.preventDefault();

    getRequest("Gangsta Rap music");
  });
  $("#country").click(function (event) {
    event.preventDefault();

    getRequest("Country music");
  });
  $("#soul").click(function (event) {
    event.preventDefault();

    getRequest("Soul music");
  });
});

function getRequest(searchTerm) {
  var url = "https://www.googleapis.com/youtube/v3/search";
  var params = {
    part: "snippet",
    key: "AIzaSyAZbcpLkq2DEmBTLkQX-3XeqTcfi4k83qQ",
    q: searchTerm,
  };

  $.getJSON(url, params, showResults);
}

function showResults(results) {
  var html = "";
  var entries = results.items;

  $.each(entries, function (index, value) {
    var title = value.snippet.title;
    var thumbnail = value.snippet.thumbnails.default.url;
    html += "<p>" + title + "</p>";
    html += '<img src="' + thumbnail + '">';
  });
  $("#search-results").html(html);
}
