---
layout: page
title: Tags
permalink: /tags/
---

{% assign tags = site.tags | sort %}
<ul class="tags-box">
{% for tag in tags %}
  <li  id="{{ tag | first | slugify }}">{{ tag | first | sluging }}</li>
  {% for post in tag[1] %}
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time> &raquo;
    <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a><br />
  {% endfor %}
{% endfor %}
</ul>
