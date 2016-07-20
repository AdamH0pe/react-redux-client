var webpack             = require('webpack');
    postcssImport       = require('postcss-easy-import'),
    cssnext             = require('postcss-cssnext');

module.exports = (function(webpack) {
    return {
        defaults: [
            postcssImport({
                    addDependencyTo: webpack,
                    glob: true
                }),
            cssnext()
        ]
    };
});