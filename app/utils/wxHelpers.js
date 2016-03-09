var axios = require('axios');

var apiKey = "4a49444774e3043172a9c672f7f938f5";

function getForecastUrl(city) {
  return 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&type=accurate&APPID='+apiKey+'&cnt=5';
}

function getDetail(city) {
  //return axios.get('')
}

var wxHelpers = {
  getForecast: function(city) {
    var url = getForecastUrl(city);
    return axios.get(url,function(results){
      return results;
    }).then(function(forecast){
      return forecast.data.list;
    }).catch(function(err){
      console.warn('Error in getForecast',err)
    })
  }
}

module.exports = wxHelpers;