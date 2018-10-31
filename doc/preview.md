# Preview site and slides before pushing to GitHub

GitHub Pages uses Jekyll site generator. It can be run locally to preview site
before pushing to GitHub.

Follow the instructions from
https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

After having fresh ruby, bundler and jekyll installed, it's basically

```
git clone --recurse-submodules https://github.com/jlento/presentations.git
cd presentations/
bundle install
bundle exec jekyll serve &
```

Me: Remember to push Homebrew path /usr/local/bin to the top of PATH on macOS :)


