module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'css.js': /^app\/css\.js|^node_modules\/fg-loadcss\//,
                // Uncomment this line to trigger the bug:
                // 'mash.js': /^(?!app\/|node_modules\/fg-loadcss\/)/,
            },
        },
    },

    npm: {
        static: [
            'node_modules/fg-loadcss/src/loadCSS.js',
        ],
    },
}
