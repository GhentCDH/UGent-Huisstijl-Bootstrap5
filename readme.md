# UGent Huisstijl Bootstrap 5

The offical UGent huisstijl Bootstrap 3 build ([https://github.ugent.be/UGent-Huisstijl/websites](https://github.ugent.be/UGent-Huisstijl/websites)) was released in 2016 and has received only some minor updates since then. It is heavily dependent on an old JQuery version and other deprecated plugins. It also has security risks, and lacks modern frontend development features.

This is an **unofficial build** and a **best effort** upgrade to the latest [Bootstrap version (5.2)](https://getbootstrap.com/docs/5.2/getting-started/introduction/). Only use in your project if you know what you're doing.

## Breaking HTML markup changes!
While most custom Bootstrap 3 huisstijl CSS classes are backwards compatible, most components have a new HTML markup structure (like the navbar). You cannot just replace the old css and javascript files, you will need to rewrite your HTML code. (use the [src/html/partials](https://github.ugent.be/Onderwijstechnologie/UGent-Huisstijl-Bootstrap5/blob/main/src/html/partials/) as a reference)

## No JQuery
Only the official Bootstrap javascript plugins are included, if you really need JQuery (or other plugins) you need to include them yourself.

## Usage
Copy the dist folder in your project and include the UGent Huisstijl Bootstrap 5 [screen.css](https://github.ugent.be/Onderwijstechnologie/UGent-Huisstijl-Bootstrap5/blob/main/dist/css/screen.css) and [main.js](https://github.ugent.be/Onderwijstechnologie/UGent-Huisstijl-Bootstrap5/blob/main/dist/js/main.js) file. Or you can require this package in your project and import [screen.scss](https://github.ugent.be/Onderwijstechnologie/UGent-Huisstijl-Bootstrap5/blob/main/src/scss/screen.scss) and the [bootstrap esm modules](https://github.ugent.be/Onderwijstechnologie/UGent-Huisstijl-Bootstrap5/blob/main/src/js/main.js). 

## Templates
The old Bootstrap 3 templates ([https://styleguide.ugent.be/websites/templates.html](https://styleguide.ugent.be/websites/templates.html)) are recreated with the unofficial UGent Huisstijl Bootstrap 5.2 build. 
To preview the templates you can run the development webserver with `$ npx mix watch`.

## Development
### Requirements
- [Node 18+](https://nodejs.org/en/)
- [NPM 8+](https://www.npmjs.com/)

### Installing
run `$ npm install` in the root folder to install the dependencies.

### Building
run `$ npx mix watch` to build and start a development webserver. Mix will recompile every time you change a file. Browsersync will automatically monitor your files for changes, and inject any changes into the browser - all without requiring a manual refresh.

run `$ npm mix --production` if you're ready to build for production.

## Documentation
- [Bootstrap v5.2 Docs](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)




