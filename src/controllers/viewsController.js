const axios = require('axios');
const API_KEY = ''; // Put your API_KEY here!
const Weather = require('../model/Weather');

exports.renderHomePage = (req, res) => {
	res.render('index');
};

exports.renderWeatherForecast = (req, res) => {
	const city = req.body.city;
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

	const weather = new Weather(req.body.city);
	weather.validateUserInput();

	if (weather.errors.length) {
		res.render('index', {
			error: weather.errors.toString(),
		});
	} else {
		const sendGetRequest = async () => {
			try {
				const resp = await axios.get(url);
				res.render('index', {
					weather: `It is currently ${resp.data.main.temp} Degrees in ${resp.data.name}.`,
				});
			} catch (err) {
				// Handle Error Here
				console.error(err);
			}
		};

		sendGetRequest();
	}
};

exports.renderAboutPage = (req, res) => {
	res.render('about');
};
