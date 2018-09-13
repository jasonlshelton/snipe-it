const {
    mix
} = require('laravel-mix');


// This generates a file called app.css, which we use
// later on to build all.css
mix
    .options({
        processCssUrls: false,
        processFontUrls: true,
        clearConsole: false
    })
    .less('resources/assets/less/AdminLTE.less', 'css')
    .less('resources/assets/less/app.less', 'css')
    .less('resources/assets/less/overrides.less', 'css')
    .styles([
            './resources/assets/css/app.css',
            'public/css/AdminLTE.css',
            'resources/assets/css/font-awesome/font-awesome.min.css',
            './node_modules/icheck/skins/minimal/minimal.css',
            './node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.standalone.css',
            'public/css/overrides.css'
        ],
        './public/css/dist/all.css')

    // jQuery is loaded from vue.js webpack process
    // This compiles the vue.js file in the build directory
    // for later concatenation in the scripts() section below.
    .js(

        'resources/assets/js/vue.js', // Snipe-IT's initializer for Vue.js
        './public/js/build'
    ).sourceMaps()
    .scripts([
            './node_modules/jquery-ui/jquery-ui.js',
            './public/js/build/vue.js', //this is the modularized nifty Vue.js thing we just built, above!
            './node_modules/tether/dist/js/tether.min.js',
            './node_modules/jquery-slimscroll/jquery.slimscroll.js',
            './node_modules/jquery.iframe-transport/jquery.iframe-transport.js',
            './node_modules/blueimp-file-upload/js/jquery.fileupload.js',
            './node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js',
            './node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
            './node_modules/icheck/icheck.js',
            './node_modules/ekko-lightbox/dist/ekko-lightbox.js',
            './resources/assets/js/app.js', //this is part of AdminLTE
            './resources/assets/js/snipeit.js', //this is the actual Snipe-IT JS
            './resources/assets/js/snipeit_modals.js'
        ],
        './public/js/dist/all.js');

mix.copy('./public/css/dist/all.css', './public/css/build/all.css').copy('./public/js/dist/all.js', './public/js/build/all.js');

mix.version();

/**
 * Combine bootstrap table js
 */
mix.combine([
        'node_modules/bootstrap-table/dist/bootstrap-table.js',
        'node_modules/bootstrap-table/dist/extentions/mobile/bootstrap-table-mobile.js',
        'node_modules/bootstrap-table/dist/extensions/export/bootstrap-table-export.js',
        'node_modules/bootstrap-table/dist/extensions/cookie/bootstrap-table-cookie.js',
        'resources/assets/js/extensions/jquery.base64.js',
        'node_modules/tableexport.jquery.plugin/tableExport.js',
        'node_modules/tableexport.jquery.plugin/libs/jsPDF/jspdf.min.js',
        'node_modules/tableexport.jquery.plugin/libs/jsPDF-AutoTable/jspdf.plugin.autotable.js'        
    ], 'public/js/dist/bootstrap-table.js')
    .version();
/**
 * Combine bootstrap table js Simple View
 */
mix.combine([
        'node_modules/bootstrap-table/dist/extensions/sticky-header/bootstrap-table-sticky-header.js',
        'node_modules/bootstrap-table/dist/extensions/toolbar/bootstrap-table-toolbar.js'
    ], 'public/js/dist/bootstrap-table-simple-view.js')
    .version();
/**
 * Combine bootstrap table css
 */
mix.combine([
        'node_modules/bootstrap-table/dist/bootstrap-table.css',
        'node_modules/bootstrap-table/dist/extensions/sticky-header/bootstrap-table-sticky-header.css'
    ], 'public/css/dist/bootstrap-table.css')
    .version();