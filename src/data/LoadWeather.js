let APIkey = '28b4ff63e143043a4cf62a826e7449ea';
const $ = window.$;

export default class Service {
    static async getWeather() {
        const location = await this.getLocation();
        return await this.getWeatherByCoords(location);
    }

    static async getLocation() {
        let position = null;
        try {
            position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(
                resolve,
                reject,
                { enableHighAccuracy: true }
            ));
        } catch (e) {
            console.error('Get location error' + e);
        }
        return {
            lat: position.coords.latitude.toFixed(2),
            lon: position.coords.longitude.toFixed(2)
        }
    }

    static async getWeatherByName(name) {
        var result = '';
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            data: {
                q: name,
                appid: APIkey
            },
            async: false
        })
            .done(
                function (data) {
                    result = data;
                    result.cod = 200;
                }
            )
            .fail(
                function (data) {
                    result = data;
                }
            )
        return await this.parseWeather(result);
    }

    static async getWeatherByCoords(coords) {
        var result = '';
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            data: {
                lat: coords.lat,
                lon: coords.lon,
                appid: APIkey
            },
            async: false
        })
            .done(
                function (data) {
                    result = data;
                    result.cod = 200;
                }
            )
            .fail(
                function (err) {
                    result = err.status;
                }
            )
        return await this.parseWeather(result);
    }

    static async parseWeather(data) {
        if (data.cod !== 200) {
            return ({
                city: '',
                error: data.status
            })
        }
        return ({
            city: {
                name: data.name,
                img: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
                temperature: (data.main.temp - 273.15).toFixed(0) + '°C',
                wind: data.wind.speed + ' m/s',
                cloudiness: data.weather[0].description,
                pressure: data.main.pressure + ' hpa',
                humidity: data.main.humidity + ' %',
                location: '[' + data.coord.lat + ',' + data.coord.lon + ']',
            },
            error: data.cod
        });
    }
}