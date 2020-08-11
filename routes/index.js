const express = require('express');
const getCityKey = require('../utils/city');
const forecast = require('../utils/forecast');
const { response } = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('index', {
            title: 'Weather App',
            'name': 'Ibrar Munir'
        });
    });

    router.get('/weather', (req, res) => {
        getCityKey(req.query.city, (error, locationKey) => {
            if(error) {
                return res.send({
                    error
                });
            }
            forecast(locationKey, (error, response) => {
                    if(error) {
                        return res.send({
                            error
                        });
                    }
                    res.send([
                        {'Day_1': response.DailyForecasts[0]},
                        {'Day_2': response.DailyForecasts[1]},
                        {'Day_3': response.DailyForecasts[2]},
                        {'Day_4': response.DailyForecasts[3]},
                        {'Day_5': response.DailyForecasts[4]}
                    ]);
                });
        });
    });
    
    
    router.get('/about', (req, res) => {
        res.render('about', {
            title: 'About',
            'name': 'Ibrar Munir'
        });
    });

    return router;
        
};