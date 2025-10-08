import { Templates } from "./templates.js";
import { getGif } from "./background.js";
import { convertTemp } from "./helpers.js";

export const DOM = ((doc) => {
  const widgets = doc.querySelector(".b-weather");

  function renderWidget(attr, ...data) {
    const cast = widgets.querySelector(attr);
    cast.innerHTML = Templates.temperature(...data);
  }

  function renderInfo(windspeed, visibility, humidity, pressure) {
    // weather addtional information
    const w = widgets.querySelector(".wind");
    const v = widgets.querySelector(".visibility");
    const p = widgets.querySelector(".pressure");
    const h = widgets.querySelector(".humidity");

    w.textContent = windspeed + " " + "km/h";
    v.textContent = visibility + " " + "km/3";
    h.textContent = humidity + " " + "%";
    p.textContent = pressure + " " + "mbar";
  }

  function renderNowDatetime(dayName, hourMinute, month) {
    const nowDatetime = widgets.querySelector(".n-date-time");
    nowDatetime.textContent = `${dayName}, ${hourMinute} ${month}`;
  }
  function renderNowTemperature(sunset, sunrise, temp) {
    const nowTemp = widgets.querySelector(".container.temperature");
    nowTemp.innerHTML = Templates.nowTemperature(sunset, sunrise, temp);
  }
  function renderNowFeelsLike(feelsLikeTemp) {
    const nowFeelsLike = widgets.querySelector("#feels-like-temp");
    nowFeelsLike.textContent = feelsLikeTemp;
  }
  function renderNowConditions(conditions) {
    const nowConditions = widgets.querySelector(".conditions");
    nowConditions.textContent = conditions;
  }
  function renderBackground(conditions) {
    const bottom = widgets.querySelector(".bottom");
    getGif(conditions).then((img) => {
      bottom.style.cssText = `background: url(${img}); background-size: cover;`;
    });
  }
  function renderLocation(location) {
    let loc = doc.querySelector("#currentCity");
    loc.textContent = location;
  }

  function renderConversion(degree) {
    const temp = document.querySelectorAll("#temp");
    const feelsLikeTemp = document.querySelectorAll("#feels-like-temp");

    for (let element of [temp, feelsLikeTemp]) {
      element.forEach(
        (node) => (node.textContent = convertTemp(node.textContent, degree)),
      );
    }
    let degrees = document.querySelectorAll("#degrees");
    degrees.forEach(
      (deg) => (deg.textContent = `°${degree === "C" ? "F" : "C"}`),
    );
  }
  return {
    renderInfo,
    renderNowDatetime,
    renderNowTemperature,
    renderNowFeelsLike,
    renderNowConditions,
    renderWidget,
    renderBackground,
    renderLocation,
    renderConversion,
  };
})(document);
