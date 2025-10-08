import { Templates } from "./templates.js";

export const DOM = ((doc) => {
	const nowWidget = doc.querySelector(".b-weather")
	
	function renderIcon(e, icon) {
		e.querySelector(".ico").src = require(`./icons/SVG/monochrome/${icon}.svg`)
	}

	function renderWidgets(e, ...data) {
		e.innerHTML = Templates.temperature(...data)
	}
	function renderInfo(windspeed, visibility, humidity, pressure) {
		// weather addtional information
		const w = nowWidget.querySelector(".wind")
		const v = nowWidget.querySelector(".visibility")
		const p =  nowWidget.querySelector(".pressure")
		const h =  nowWidget.querySelector(".humidity")

		w.textContent = windspeed + " " + "km/h"
		v.textContent = visibility + " " + "km/3"
		h.textContent = humidity + " " + "%"
		p.textContent = pressure + " " + "mbar"
	}

	function renderNowDatetime(dayName, hourMinute, month) {
		const nowDatetime = nowWidget.querySelector(".n-date-time")
		nowDatetime.textContent = `${dayName}, ${hourMinute} ${month}`
	}
	function renderNowTemperature(sunset, sunrise, temp) {
		const nowTemp =  nowWidget.querySelector(".container.temperature")
		nowTemp.innerHTML = Templates.nowTemperature(sunset, sunrise, temp)
	}
	function renderNowFeelsLike(feelsLikeTemp) {
		const nowFeelsLike = nowWidget.querySelector("#feels-like-temp")
		nowFeelsLike.textContent = feelsLikeTemp

	}
	function renderNowConditions(conditions) {	
		const nowConditions = nowWidget.querySelector(".conditions")
		nowConditions.textContent = conditions
	}
	
	return { renderInfo, renderNowDatetime, renderNowTemperature, renderNowFeelsLike, renderNowConditions }
})(document)