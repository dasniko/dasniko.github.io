function parseRSS(url, callback) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      callback(data.responseData.feed);
    }
  });
}

// JAXenter column
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

// Events
$(document).ready(function() {
  $.ajax({
    url: '/events.json',
    dataTpe: 'json',
    success: function(data) {
      if (!data || data.length == 0) return;
      var html = '<h3>Meet me at these events:</h3>';
      html += '<ul class="text-small">';
      data.forEach(function(e) {
        if (new Date(e.start) >= new Date()) {
          html += '<li><a href="' + e.url + '" target="_blank">' + e.title + '</a>';
          html += ', ' + e.location;
          html += '<br/>' + dateFormat(e.start);
          if (e.start !== e.end) {
            html += ' &ndash; ' + dateFormat(e.end);
          }
          html += '</li>';
        }
      });
      html += '</ul>';
      $('#events').html(html);
    }
  });
});

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dateFormat = function(dtStr) {
  var date = new Date(dtStr);

  var d = '' + date.getDate();
  if (d.endsWith('1')) {
    d += '<sup>st</sup>';
  } else if (d.endsWith('2')) {
    d += '<sup>nd</sup>';
  } else if (d.endsWith('3')) {
    d += '<sup>rd</sup>';
  } else {
    d += '<sup>th</sup>';
  }
  var m = months[date.getMonth()];
  var y = date.getFullYear();

  return m + ', ' + d + ' ' + y;
}

// back-to-top button behaviour
$(document).ready(function() {
  $('.top').hide();

  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.top').fadeIn();
      } else {
        $('.top').fadeOut();
      }
    });

    $('.top').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
});
