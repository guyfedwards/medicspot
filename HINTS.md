# Challenge 1: Questions

Depending on experience you might want to run the scripts and debug the statements to give a confident answer.

# Challenge 2: The geo search server

Loading data: 

SQLite has tools for loading data into a database automatically. The data is provided as a Tab Separated Variables (.tsv). 

From the sqlite prompt:

```
sqlite> .mode tabs
sqlite> .import ./data/GB.tsv locations
```

Building the server: 

Feel free to include modules to help you with this challenge. A good set might be:

* [express](https://www.npmjs.com/package/express)
* [sqlite](https://www.npmjs.com/package/sqlite)

There is a starter `package.json` and `index.js` to build your app

# Challenge 3: The search form

The search app can be built using the tools of your choice. Building with vanilla JS is fine or you may wish to import UI tooling such as React using something like unpkg.

```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

There is a starter `/public/index.html` file for the client app. This should be served from the webserver from Challenge 2.