---
layout: page
title: Videos
permalink: /videos/
---

{% for video in site.data.videos %}
### {{ video.title}}

<iframe src="{{ video.url }}" width="640" height="360" frameborder="0" allowfullscreen></iframe>

---
{% endfor %}
