module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'css.js': /^app\/css\.js|^node_modules\/fg-loadcss\//,
                // Uncomment this line to trigger the bug:
                // (it only seems to work if the file is called exactly 'vendor.js')
                // 'vendor.js': 'mohaha',
            },
        },
    },

    npm: {
        static: [
            'node_modules/fg-loadcss/src/loadCSS.js',
        ],
    },
}
