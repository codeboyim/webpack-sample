module.exports = {
    entry: {
        main: './main.js'
        /* 
        uncomment the following lines and you'll get pretty much same result but with two more 'entry' js files.
        Also, without wrapping in an array, i.e. the profile entry, webpack throws an error of
        'Module not found: Error: a dependency to an entry point is not allowed'. 
        see https://github.com/webpack/webpack/issues/300
        */

//        ,
//        Profile: './profile.js',
//        Feed: ['./feed.js']
    },
    output: {
        path: 'build',
        filename: '[name].js', // Template based on keys in entry above
        publicPath: 'build/'
    }
};