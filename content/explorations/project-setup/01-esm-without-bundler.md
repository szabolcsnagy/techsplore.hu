# ESM without bundler

In this exploration I tracked down how to setup a React project without a bundler by loading ES modules into the browser.

## Failed Attempt

I tried to link react from a CDN and load the main file `index.js` from the server as an ES module.

```html
<head>
  <script type="module" src="index.js">
</head>
```

This sort of worked however I couldn't use JSX in my components because the browser cannot interpret that.
To deal with the JSX problem I also added a babel transpiler from a CDN. There are 2 problems with that.

1. Transpiling on the fly is not recommended. It hurts your runtime performance.
1. To indicate to Babel that you need to transpile a file it needs to be loaded with `type="text/babel"` which collide with the `type="module"` requirement to load the ES module.

## Steps to setup an ESM React module

1. To get around the transpiling problem I setup typescript and placed my components to the src directory. Typescript has the `target` set to `ES2016` and the `outDir` to `public` which will save the transpiled ESM output into the public directory.
1. I added a static html file into the public directory which references the compiled index file in the same directory.
1. The application using `react` and `react-dom` as external dependencies and the compiled ES module has imports from `react` and `react-dom`. Since the browser doesn't have those packages provide an import map in the head of the html for them.

```html
<head>
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.run/react@18.2.0",
        "react-dom/client": "https://esm.run/react-dom@18.2.0"
      }
    }
  </script>
</head>
```
