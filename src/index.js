import "./styles.css";
import { App } from "./app.js";
import { Weather } from "./weather.js";
import favicon from "./icons/favicon.png";

let link = document.querySelector("#favicon");
link.href = favicon;
Weather.getWeather().then((res) => {
  App.main(res);
});

App.listen();
