const request = require('request');

const key = 'ZD5nyan8mGG8udquDmdMGCVB0X9sQkJc';


const getCityKey = (city, callback) => {
    const cityBase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const cityQuery = `?apikey=${key}&q=${city}`;
    const cityUrl = cityBase + cityQuery;
    request({ url: cityUrl, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        }else if(response.body.length === 0){
            callback('Unable to find location', undefined);
        }else {
            callback(undefined, response.body[0].Key);
        }
    });
}

module.exports = getCityKey;