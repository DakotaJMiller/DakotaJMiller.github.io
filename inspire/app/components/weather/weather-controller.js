(function (){
	
	var wc = this;
	var NewWeatherService = new WeatherService();
	
	NewWeatherService.getWeather(function(res){
		
		$('#weather').append('<p>' + res.name + "<p>" + ((res.main.temp - 273) *  1.8 + 32).toFixed(1) + '°F' + "</p>" + "<p>" + res.weather[0].description)
		

		//What can you do with this weather object?
	})
	
	
	
	
	
}())
