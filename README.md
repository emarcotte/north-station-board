# north station board

emulates the departure board of boston's north station.

## install it

the server requires express and request libraries to build a simple proxy for
the depature data provided by the mbta.

```
git clone https://github.com/emarcotte/north-station-board
cd north-station-board
npm install
```

## run it

```
node server.js
```

## view it

load up http://localhost:3000 in a relatively modern browser. note that the page
will load one library from cdnjs to parse the csv.

browser will also need support for fetch, string templates, and arrow functions, as i did not use any transpilers or polyfills to make it work with older browsers. firefox and chrome both seem to meet the need.

