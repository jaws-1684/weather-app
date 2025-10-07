export const Template = (() => {
	const temperature = (day, time, realTemp, feelTemp) => {
		return `
			<div class="content">
                        <div class="date">${day}</div>
                        <div class="day">${time}</div>
                        <div class="temp-data">
                           <p class="temp"><span id="temp">${realTemp}</span>&nbsp<span id="degrees">°C</span></p>
                           <p class="feels-like-temp">Feels like&nbsp
                            <span id="feels-like-temp">${feelTemp}</span>&nbsp
                            <span id="degrees">°C</span>
                           </p>
                        </div>
                    </div>
                    <img class="ico" src=''>
		`
	}

	const blockTemp = (sunset, sunrise, realTemp) => {
		return ` <div class="sunrise">
                                <p>Sunrise</p>
                                <p>${sunrise}</p>
                            </div>
                            <div class="n-temp">
                              <p><span id="temp">${realTemp}</span>&nbsp<span id="degrees">°C</span></p>
                            </div>
                            <div class="sunset">
                               <p>Sunset</p>
                               <p>${sunset}</p>
                            </div>`
	}
	const blockConditions = () => {

	}

	return { temperature, blockTemp }
})()