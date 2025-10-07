import "./styles.css";
import { getWeather } from "./weather.js";
import { getGif } from "./background.js";
import { Template } from "./templates.js";
import { getDayName, formatTime, getMonthName, convertTemp } from "./helpers.js"

const submitBtn = document.querySelector("#submit")
const input = document.querySelector("input[name='location']")

const currentCity = document.querySelector("#currentCity")
const weatherBlock = document.querySelector(".b-weather")
const nowCast = weatherBlock.querySelector(".now")
const tommorowCast = weatherBlock.querySelector(".tommorow")
const afterTommorowCast = weatherBlock.querySelector(".after-tommorow")
const bTemp =  weatherBlock.querySelector(".container.temperature")
const nowDatetime = weatherBlock.querySelector(".n-date-time")
const conditions = weatherBlock.querySelector(".conditions")
const bottom = weatherBlock.querySelector(".bottom")
const feelsLike = weatherBlock.querySelector("#feels-like-temp")
const wind = weatherBlock.querySelector(".wind")
const visibility = weatherBlock.querySelector(".visibility")
const pressure =  weatherBlock.querySelector(".pressure")
const humidity =  weatherBlock.querySelector(".humidity")

const degreesSwitch = document.querySelector("#degreesSwitch")

function setIcon(e, icon) {
	e.querySelector(".ico").src = require(`./icons/SVG/monochrome/${icon}.svg`)
}

function setData(e, ...data) {
	e.innerHTML = Template.temperature(...data)
}
function setConversion(degree, ...elements) {
	for (let element of elements) {
		element.forEach(node => node.textContent = convertTemp(node.textContent, degree))
	}
	let degrees = document.querySelectorAll("#degrees")
	degrees.forEach(deg => deg.textContent = `°${degree === "C" ? "F" : "C"}`)
}
function fillCurrentCity(city="London") {
	currentCity.textContent = city[0].toUpperCase() + city.slice(1, city.length)
}
function fillWeatherWidgets(data) {
	let [now, tommorow, afterTommorow] = data

	setData(nowCast, "Now", now.datetime, now.temp, now.feelslike)
	setData(tommorowCast, getDayName(tommorow.datetime), tommorow.datetime, tommorow.temp, tommorow.feelslike)
	setData(afterTommorowCast, getDayName(afterTommorow.datetime), afterTommorow.datetime, afterTommorow.temp, afterTommorow.feelslike)
	
	setIcon(nowCast, now.icon)
	setIcon(tommorowCast, tommorow.icon)
	setIcon(afterTommorowCast, afterTommorow.icon)								
}
function fillWeatherBlock(data) {
	let now = data[0]
	let sunset = now.sunset
	let sunrise = now.sunrise
	let datetime = now.datetime

	nowDatetime.textContent = `${getDayName(datetime)}, ${datetime.split("-")[2]} ${getMonthName(datetime)}`
	bTemp.innerHTML = Template.blockTemp(formatTime(sunset), formatTime(sunrise), data[0].temp)
	feelsLike.textContent = now.feelslike
	conditions.textContent = now.conditions
	wind.textContent = now.windspeed + " " + "km/h"
	visibility.textContent = now.visibility + " " + "km/3"
	humidity.textContent = now.humidity + " " + "%"
	pressure.textContent = now.pressure + " " + "mbar"
	getGif(now.conditions).then(img => {
		bottom.style.cssText = `background: url(${img}); background-size: cover;`
	})
}

getWeather().then(res => {
	fillCurrentCity()
	fillWeatherWidgets(res)
	fillWeatherBlock(res)
})


degreesSwitch.addEventListener("click", event => {
	const temp = document.querySelectorAll("#temp")
	const feelsLikeTemp = document.querySelectorAll("#feels-like-temp")
	if (event.target.checked === true) {
		setConversion("C", temp, feelsLikeTemp)
	}
	else {
		setConversion("F", temp, feelsLikeTemp)
	}  
})
submitBtn.addEventListener("click", e => {
    e.preventDefault()
    let city = input.value.toString()
    if (city.length !== 0) {
        getWeather(input.value.toString()).then(res => {
        	fillCurrentCity(city)
					fillWeatherWidgets(res)
					fillWeatherBlock(res)
					input.value = ""
        })
    }
})
