require('mix-html-builder');

let mix = require('laravel-mix');

mix.setPublicPath('dist')
    .setResourceRoot('../')
    .copy('src/images', 'dist/images')
    .sass('src/scss/screen.scss', 'css')
    .combine([
        'node_modules/@popperjs/core/dist/umd/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'], 'dist/js/main.js')
    .combine([
        'node_modules/@popperjs/core/dist/umd/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js', 
        'node_modules/@eonasdan/tempus-dominus/dist/js/tempus-dominus.min.js'], 'dist/js/main-tempus-dominus.js')
    .copy('node_modules/bootstrap/dist/js/bootstrap.min.js.map', 'dist/js/bootstrap.min.js.map')
    .browserSync({
        server: {
            baseDir: "dist",
            index: "templates/index.html"
        },
        files: [
            'src/**/*.html',
            'dist/**/*.+(css|js)'
        ]
    });

    if (!mix.inProduction()) {
        mix.html({
            htmlRoot: './src/templates/*.html',
            output: 'templates',
            partialRoot: './src/html/partials',
            minify: false
        })
    }