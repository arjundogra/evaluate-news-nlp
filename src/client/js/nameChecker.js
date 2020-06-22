function CheckURL(url) {
    var validUrl = require('valid-url');

    if (validUrl.isUri(url)){
        console.log('Looks like an URI');
        return true;
    } 
    else {
        console.log('Not a URI');
        return false;
    }
    }

export { CheckURL }