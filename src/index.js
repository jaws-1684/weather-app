import "./styles.css";
import { getWeather } from "./weather.js";

const submitBtn = document.querySelector("#submit")
const input = document.querySelector("input[name='location']")

submitBtn.addEventListener("click", e => {
    e.preventDefault()

    if (input.value.toString().length !== 0) {
        getWeather(input.value.toString()).then(res => console.log(res))
    }
})
