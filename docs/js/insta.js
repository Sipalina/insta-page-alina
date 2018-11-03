$(document).ready(function(){ 

    var userFeed = new Instafeed({
        get: 'user',
        userId: '8364276493',
        accessToken: '8364276493.1677ed0.5384ba185da14bfd99406bff6ab343bb',
        resolution: 'standard_resolution',
        limit: 33
    });
    userFeed.run();

    setTimeout(function(){
        $('.instafeed').addClass('shadowed');
    }, 100);

});