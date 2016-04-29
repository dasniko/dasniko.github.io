function parseRSS(url, callback) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      callback(data.responseData.feed);
    }
  });
}

$(document).ready(function() {
  parseRSS('https://jaxenter.de/tag/web-tales?feed=rss2', function(data) {
    var html = '<h3>' + data.title + '</h3>';
    html += '<div class="text-small">Latest articles of my <a href="' + data.link + '/tag/web-tales" target="_blank">JAXenter column.</a></div>';
    html += '<ul class="text-small">';
    data.entries.forEach(function(e) {
      html += '<li><a href="' + e.link + '" target="_blank">' + e.title + '</a></li>';
    });
    html += '</ul>';
    $('#jaxenter').html(html);
  });
});
