function parseRSS(url, callback) {
  $.ajax({
    url: 'https://api.rss2json.com/v1/api.json?api_key=vlybkabevt2nzscqyarurh4yutv4g3loc8aen7jb&count=5&rss_url=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      callback(data);
    }
  });
}

// JAXenter column
// $(document).ready(function() {
//   parseRSS('https://jaxenter.de/author/nikokbler?feed=rss2', function(data) {
//     var html = '<h3>' + data.feed.title + '</h3>';
//     html += '<div class="text-small">Latest articles of my <a href="' + data.feed.link + 'author/nikokbler" target="_blank">JAXenter column.</a></div>';
//     html += '<ul class="text-small">';
//     data.items.forEach(function(e) {
//       html += '<li><a href="' + e.link + '" target="_blank">' + e.title + '</a></li>';
//     });
//     html += '</ul>';
//     $('#jaxenter').html(html);
//   });
// });

// Events
$(document).ready(function() {
  $.ajax({
    url: '/events.json',
    dataTpe: 'json',
    success: function(data) {
      if (!data || data.length == 0) return;
      var html = '<h3>Meet me at these events:</h3>';
      html += '<ul class="events">';
      data.forEach(function(e) {
        if (new Date(e.start+'T23:59:59') >= new Date()) {
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
