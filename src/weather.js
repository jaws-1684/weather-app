export function getWeather(param="london") {
   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London/today?unitGroup=metric&key=UVW6SQDY49YCTPXV9BBWS6PBJ`)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response) 
    });
}
getWeather()

