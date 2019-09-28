---
layout: page
title: Videos
permalink: /videos/
---

{% for video in site.data.videos %}
### {{ video.title}}

<div class="video-container">
  <iframe src="{{ video.url }}" frameborder="0" allowfullscreen></iframe>
</div>
---
{% endfor %}
