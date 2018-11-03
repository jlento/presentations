---
title: Presentations
---

# Slides

{% for slide in site.slides %}
- [{{ slide.title }}]({{ slide.url | relative_url }})
{% endfor %}


# How this site works

The plan is to publish RevealJS slides on GitHub Pages. RevealJS slideshow
should be automatically generated and linked to this index page when the
markdown source is pushed to the GitHub repository.

{% for doc in site.docs %}
- [{{ doc.title }}]({{ doc.url | relative_url }})
{% endfor %}
