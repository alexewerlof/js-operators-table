# Introduction

This project builds a javascript equality table (similar to [this](https://dorey.github.io/JavaScript-Equality-Table/)) using Vue.js

**[See it live](https://rawgit.com/userpixel/js-operators-table/master/index.html)**

It doesn't have any build step and is supposed to be served directly using Github pages.

### About Vuejs

This little project is using Vuejs. It doesn't need any build step and fetches Vuejs ESM module
directly from CDN. The templates are in index.html and should be easy to read.

The idea was to Keep it Simple and Stupid 💋 like the good old days of Javascript!

# Running it locally

Install dependencies and run it like a normal server:

````
npm i
npm start
````

This uses `live-reload` to load on any change.

All live-reload switches are accessible
for example if you want to force run it on Chrome do `npm start -- --browser=google\ chrome`.