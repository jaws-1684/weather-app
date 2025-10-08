import "./styles.css";
import { DOM } from "./DOM.js";
import { App } from "./app.js";
import { Weather } from "./weather.js";

Weather.getWeather().then(res => {
	App.main(res)
})

App.listen()