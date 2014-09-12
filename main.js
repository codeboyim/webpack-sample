document.getElementById('nav').addEventListener('click', function (e) {

    if (e.target.tagName === 'A') {
        if (e.target.getAttribute('href') === '#feed') {
            require.ensure([], function () { 
                require('./feed').show();
            });
        } else if (e.target.getAttribute('href') === '#profile') {
            require.ensure([], function () {
                require('./profile').show();
            });
        }
    }
    
});