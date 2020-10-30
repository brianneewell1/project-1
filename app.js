  
//youtube api call
$(document).ready(function () {
  $('#search-term').click(function (event) {
      event.preventDefault();
      var searchTerm = $('#query').val();
      getRequest(searchTerm);
  });
});

function getRequest(searchTerm) {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
      part: 'snippet',
      key: 'AIzaSyAZbcpLkq2DEmBTLkQX-3XeqTcfi4k83qQ',
      q: searchTerm
  };

  $.getJSON(url, params, showResults);
}

function showResults(results) {
  var html = "";
  var entries = results.items;
  
  $.each(entries, function (index, value) {
      var title = value.snippet.title;
      var thumbnail = value.snippet.thumbnails.default.url;
      html += '<p>' + title + '</p>';
      html += '<img src="' + thumbnail + '">';
  }); 
  $('#search-results').html(html);
}
