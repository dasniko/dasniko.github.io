---
layout: page
title: Tags
permalink: /tags/
---

{% assign tags = site.tags | sort %}
<ul class="list-unstyled">
{% for tag in tags %}
  <h3  id="{{ tag | first | slugify }}">{{ tag | first | sluging }}</h3>
  {% for post in tag[1] %}
    <li>
      <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time> &raquo;
      <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a><br />
    </li>
  {% endfor %}
{% endfor %}
</ul>
