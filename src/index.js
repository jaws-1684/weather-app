import "./styles.css";
import { DOM } from "./DOM.js";
import { Weather } from "./weather.js";
import { getGif } from "./background.js";
import { Templates } from "./templates.js";
import { getDay, getDayName, formatTime, getMonthName, convertTemp } from "./helpers.js"



const submitBtn = document.querySelector("#submit")
const input = document.querySelector("input[name='location']")

const currentCity = document.querySelector("#currentCity")
// const weatherBlock = document.querySelector(".b-weather")
const nowCast = weatherBlock.querySelector(".now")
const tommorowCast = weatherBlock.querySelector(".tommorow")
const afterTommorowCast = weatherBlock.querySelector(".after-tommorow")


const bottom = weatherBlock.querySelector(".bottom")



const degreesSwitch = document.querySelector("#degreesSwitch")

function setIcon(e, icon) {
	e.querySelector(".ico").src = require(`./icons/SVG/monochrome/${icon}.svg`)
}

function setData(e, ...data) {
	e.innerHTML = Templates.temperature(...data)
}
function setConversion(degree, ...elements) {
	for (let element of elements) {
		element.forEach(node => node.textContent = convertTemp(node.textContent, degree))
	}
	let degrees = document.querySelectorAll("#degrees")
	degrees.forEach(deg => deg.textContent = `°${degree === "C" ? "F" : "C"}`)
}
function setCurrentCity(city="london") {
	currentCity.textContent = upper(city)
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
	let temp = now.temp
	let sunset = now.sunset
	let sunrise = now.sunrise
	let datetime = now.datetime

	DOM.renderNowDatetime(getDayName(datetime), getDay(datetime), getMonth(datetime))
	DOM.renderNowTemperature(formatTime(sunset), formatTime(sunrise), data[0].temp)
	DOM.renderNowFeelsLike(now.feelslike)
	DOM.renderNowConditions(now.conditions)
	DOM.renderInfo(now.windspeed, now.visibility, now.humidity, now.pressure)
	getGif(now.conditions).then(img => {
		bottom.style.cssText = `background: url(${img}); background-size: cover;`
	})
}

Weather.getWeather().then(res => {
	setCurrentCity()
	fillWeatherWidgets(res)
	fillWeatherBlock(res)
})


// degreesSwitch.addEventListener("click", event => {
// 	const temp = document.querySelectorAll("#temp")
// 	const feelsLikeTemp = document.querySelectorAll("#feels-like-temp")
// 	if (event.target.checked === true) {
// 		setConversion("C", temp, feelsLikeTemp)
// 	}
// 	else {
// 		setConversion("F", temp, feelsLikeTemp)
// 	}  
// })
// submitBtn.addEventListener("click", e => {
//     e.preventDefault()
//     let city = input.value.toString()
//     if (city.length !== 0) {
//         getWeather(input.value.toString()).then(res => {
//         	setCurrentCity(city)
// 					fillWeatherWidgets(res)
// 					fillWeatherBlock(res)
// 					input.value = ""
//         })
//     }
// })
