const request = require('request');
const { response } = require('express');

const key = 'ZD5nyan8mGG8udquDmdMGCVB0X9sQkJc';

const forecast = (locationKey, callback) => {
    const forecastBase = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
    const forecastQuery = `${locationKey}?apikey=${key}`;

    const forecastUrl = forecastBase + forecastQuery;

    request({ url: forecastUrl, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to the weather service', undefined);
        }else if(response.body.Code == '400'){
            callback(response.body.Message, undefined);
        }else{
            callback(undefined, response.body);
        }
    });
};

// forecast(260622, (error, response) => {
//     if(error){
//         console.log(error);
//     }else {
//         console.log(response.body);
//     }
// });

module.exports = forecast;