var mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/common/app.scss', 'public/css')
   .sass('resources/assets/sass/admin/admin-styles.scss', 'public/css')
   .sass('resources/assets/sass/app/style.scss', 'public/css')
    .styles(['resources/assets/plugins/pace/pace-flash.css'],'public/plugins/pace/pace-flash.css')
    .styles(['resources/assets/plugins/owl-carousel/owl.carousel.css'],'public/plugins/owl-carousel/owl.carousel.css')
    .styles(['resources/assets/sass/plugins/animate.css'],'public/plugins/animate.css')
    .styles(['resources/assets/plugins/cube-portfolio/cubeportfolio/css/cubeportfolio.min.css'],'public/plugins//cube-portfolio/cubeportfolio/css/cubeportfolio.min.css')
