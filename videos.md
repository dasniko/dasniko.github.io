---
layout: page
title: Videos
permalink: /videos/
---

{% for video in site.data.videos %}
### {{ video.title}}

<div class="ratio ratio-16x9">
  <iframe src="{{ video.url }}" allowfullscreen></iframe>
</div>
---
{% endfor %}
