import { DOM } from "./DOM.js";
import { getDay, getDayName, formatTime, getMonthName, convertTemp, upper } from "./helpers.js"
import { Weather } from "./weather.js";

export class App {
	static #submitBtn = document.querySelector("#submit")
	static #input = document.querySelector("input[name='location']")
	static #degreesSwitch = document.querySelector("#degreesSwitch")

	static widgets(data) {
		let a = data.slice(0, 3)
		for (let i = 0; i < 3; i++) {
			let day = a[i]
			let { icon, datetime, temp, feelslike } = day
			let attr = {
				0: ".now",
				1: ".tommorow",
				2: ".after-tommorow"
			}
			if (i === 0) {
				DOM.renderWidget(attr[i], icon, "Now", datetime, temp, feelslike)
			}
			else {
				DOM.renderWidget(attr[i], icon, getDayName(datetime), datetime, temp, feelslike)
			}
		}					
	}

	 static now(data) {
		let now = data[0]
		let { temp, sunset, sunrise, datetime, conditions, humidity, pressure, visibility, windspeed, feelslike } = now
		DOM.renderNowDatetime(getDayName(datetime), getDay(datetime), getMonthName(datetime))
		DOM.renderNowTemperature(formatTime(sunset), formatTime(sunrise), temp)
		DOM.renderNowFeelsLike(feelslike)
		DOM.renderNowConditions(conditions)
		DOM.renderInfo(windspeed, visibility,humidity, pressure)
		DOM.renderBackground(conditions)
		
	}

	static main(res, loc="london") {
		DOM.renderLocation(upper(loc))
		this.widgets(res)
		this.now(res)
	}
	static switchListener(event) {
		if (event.target.checked === true) {
			DOM.renderConversion("C")
		}
		else {
			DOM.renderConversion("F")
		}
	}
	static submitListener(event) {
    event.preventDefault()
    let city = this.#input.value.toString()
    if (city.length !== 0) {
        Weather.getWeather(city).then(res => {
        	App.main(res, city)
			this.#input.value = ""
        })
    }
	}
	static listen () {
		this.#degreesSwitch.addEventListener("click", App.switchListener.bind(this))
		this.#submitBtn.addEventListener("click", App.submitListener.bind(this))
	}  
}