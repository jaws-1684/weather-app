function process(visualcrossingobj) {
  let { currentConditions: { visibility, conditions, humidity, sunrise, sunset, temp } } = visualcrossingobj 
  return ({ visibility, 
        conditions, 
        humidity, 
        sunrise, 
        sunset, 
        temp   }) 

}
export function getWeather(param="london") {
  return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${param}/today?unitGroup=metric&key=UVW6SQDY49YCTPXV9BBWS6PBJ`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      return process(result)
    })
}

// getWeather().then(res => console.log(res))

