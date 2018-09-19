Setting up your GitHub Pages site locally with Jekyll
=========================
From https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

Requirements
-----------------
We recommend using Bundler to install and run Jekyll. Bundler manages Ruby gem dependencies, reduces Jekyll build errors, and prevents environment-related bugs. To install Bundler, you must install Ruby.

Check whether you have Ruby 2.1.0 or higher installed:
```
ruby --version
```
If you don't have Ruby installed, install Ruby 2.1.0 + DevKit or higher.

Install MSYS2 depencence, running:
```
ridk install
```


Install Bundler:

```
gem install bundler
```
If you already have a local repository for your Jekyll site, skip to Step 2.

Install Jekyll using Bundler
-----------------

Install Jekyll and other dependencies from the GitHub Pages gem:

```
bundle install
```

Build your local Jekyll site
----------------

Run your Jekyll site locally:

```
bundle exec jekyll serve
```

Preview your local Jekyll site in your web browser at http://localhost:4000.