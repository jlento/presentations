---
title: Preview site and slides before pushing to GitHub
---

GitHub Pages uses Jekyll site generator. It can be run locally to preview site
before pushing to GitHub.

Follow the instructions from
https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

After having fresh ruby and bundler installed, it's basically

```
git clone https://github.com/jlento/presentations.git
cd presentations/
bundle install
bundle exec jekyll serve &
```

and open http://localhost:4000

Me: Remember to push Homebrew path /usr/local/bin to the top of PATH on macOS :)

