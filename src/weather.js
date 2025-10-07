function process(visualcrossingobj) {
  let { visibility, conditions, humidity, sunrise, sunset, temp, datetime, feelslike, pressure, windspeed, icon } = visualcrossingobj 
  return ({ visibility, 
        conditions, 
        humidity, 
        sunrise, 
        sunset, 
        temp,
        datetime,
        feelslike,
        sunrise,
        pressure,
        windspeed,
        icon   
      }) 

}
export function getWeather(param="london") {
  return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${param}/next3days?unitGroup=metric&key=UVW6SQDY49YCTPXV9BBWS6PBJ`)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      let daysArr = result.days
      let res = []
      daysArr.forEach(day => {
        res.push(process(day))
      })
      return res
    })
}


