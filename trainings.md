---
layout: page
title: Custom Trainings & Workshops
permalink: /trainings/
---

I offer the following trainings & workshops in cooperation with renowned public training providers.

_I am also more than happy to create customized in-house trainings and workshops entirely according to your wishes. Feel free to get in touch!_

---

Folgende Trainings & Workshops biete ich in Zusammenarbeit mit renommierten öffentlichen Trainingsanbietern an.

_Gerne erstelle ich auch kundenspezifische In-House Trainings und Workshops ganz nach Ihren Wünschen. Sprechen Sie mich gerne an!_

---

* **[Keycloak - Open Source Identity and Access Management & Single Sign On](/trainings/keycloak)** (🇩🇪 )

* **[Quarkus Serverless - Supersonic Subatomic Java in the Clouds](/trainings/quarkus)** (🇩🇪 )

_(click for details and training contents)_

---

### Public trainings

<ul>
{% capture now %}{{ 'now' | date: '%Y-%m-%d' }}{% endcapture %}
{% for training in site.data.trainings %}
  {% capture trDate %}{{ training.date | date: '%Y-%m-%d' }}{% endcapture %}
  {% if trDate > now %}
  <li>
    {{ training.date | date: '%d.%m.%Y' }}:
    <a href="{{ training.url }}" target="_blank">{{ training.title }} ({{ training.name}})</a>
    ({{ training.location }})
  </li>
  {% endif %}
{% endfor %}
<li><em>and additionally on request</em></li>
</ul>
