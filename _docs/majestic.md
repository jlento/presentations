---
title: Slideshow's inner workings
---

{% assign ghroot = site.github.repository_url | append: "/blob/master/" %}

# Majestic

The [majestic layout]({{ghroot}}_layouts/majestic.html) adds minimal CSS
([majestic-csc.css]({{ghroot}}css/majestic-csc.css)) and Javascript
([majestic.js]({{ghroot}}js/majestic.js)) sugar on top of the Jekyll generated
HTML to make it into a very basic slideshow. Minimalistic is majestic!

## How to use

- use arrow keys to change slides.
- print slides in PDF format from browser (Chrome)

## How majestic JS works

- onload, split content into slides (DIVs) before H1, H2, and H3 headings
- set the display style of the current slide to 'block', and 'none' for other
  slides
- detect events
    - window resize
        - content scaling
    - key press
        - slide changes (arrow keys)
- that's all!



