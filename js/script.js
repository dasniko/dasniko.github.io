// Events
document.addEventListener("DOMContentLoaded", function() {
  fetch('/events.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
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
      document.getElementById('events').innerHTML = html
    })
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
document.addEventListener("scroll", function() {
  var e = document.getElementById('back2top');
  if (window.scrollY > 150) {
    e.classList.add("visible")
  } else {
    e.classList.remove("visible")
  }
});
