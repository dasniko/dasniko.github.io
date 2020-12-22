// Events
document.addEventListener("DOMContentLoaded", function() {
  fetch('/events.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      if (!data || data.length == 0) return;
      var html = '<div class="card mb-3"><h3 class="card-header">Upcoming Events</h3><div class="card-body"><h6 class="card-subtitle text-muted">Meet me on-site or remote</h6></div>';
      html += '<ul class="list-group list-group-flush">';
      data.forEach(function(e) {
        if (new Date(e.start+'T23:59:59') >= new Date()) {
          html += '<li class="list-group-item"><a href="' + e.url + '" target="_blank">' + e.title + '</a>';
          html += '<br/>' + e.location;
          html += '<br/>' + dateFormat(e.start, false);
          if (e.start !== e.end) {
            html += ' &ndash; ' + dateFormat(e.end, true);
          }
          html += '</li>';
        }
      });
      html += '</ul></div>';
      document.getElementById('my-events').innerHTML = html
    })
});

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dateFormat = function(dtStr, year) {
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

  return m + ', ' + d + (year ? (' ' + y) : '');
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
