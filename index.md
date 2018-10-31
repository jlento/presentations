---
title: Presentations
---

{% for p in site.pages %}
{% assign slidepath = p.url | split: '/' %}
{% if slidepath[1] == 'doc' %}
- [{{ p.title }}]({{ p.url | relative_url }})
{% endif %}
{% endfor %}
