url1 = "https://get.geojs.io/v1/ip/geo.json"
baseUrl = "https://api.open-meteo.com/v1/forecast"




fetch(url1)
    .then(response => response.json())
    .then(countryData => {
        let latitude = countryData.latitude;
        const longitude = countryData.longitude;
        const city = countryData.city;
        const url2 = baseUrl + "?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true";
        console.log(url2)
        fetch(url2)
            .then(response => response.json())
            .then(weatherData => {
                console.log(weatherData)
            })

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



/*


const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
*/