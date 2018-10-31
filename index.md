---
title: Presentations
---

## How this site works

The plan is to publish RevealJS slides on GitHub Pages. RevealJS slideshow
should be automatically generated and linked to this index page when the
markdown source is pushed to the GitHub repository.

{% for p in site.pages %}
{% assign slidepath = p.url | split: '/' %}
{% if slidepath[1] == 'doc' %}
- [{{ p.title }}]({{ p.url | relative_url }})
{% endif %}
{% endfor %}
