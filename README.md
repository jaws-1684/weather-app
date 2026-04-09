# odin-meteo.js - Weather App 
<a href="https://jaws-1684.github.io/weather-app/">View Demo</a>

## Description
The *idea* behind this project is to practice fetching resources across the web using javascrtipt's native Fetch API.
## About The Project

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/jaws-1684/weather-app/refs/heads/images/170137.png">
</p>

The app allows users to see the weather forecast for a chosen location and switch between celsius and fahrenheit degrees. From the time the form is submitted until the information comes back from the API, the app displays a loading component. The weather data comes from the Visual Crossing API and a gif image for the condition is fetched from the Giphy API. 

### Built With

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)



---

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

```sh
npm install npm@latest -g
```
### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/jaws-1684/weather-app.git
   ```
2. Navigate into the project directory
   ```sh
   cd weather-app
   ```
3. Install dependencies
   ```sh
   npm install
   ```


---

## Usage

### Development server
```sh
npm run dev
```
Opens a live-reloading dev server powered by webpack-dev-server.

### Watch mode
```sh
npm run watch
```
Rebuilds automatically on file changes without starting a dev server.

### Production build
```sh
npm run build
```
Outputs optimised assets into the `dist/` folder.

### Deploy to GitHub Pages
```sh
npm run deploy
```
Builds the project and pushes the `dist/` folder to the `gh-pages` branch automatically.

---

## Project Structure

```
src
├── DOM.js
├── app.js
├── background.js
├── helpers.js
├── icons
│   ├── PNG
│   ├── SVG
│   └── favicon.png
├── index.js               [entry point]
├── styles.css
├── template.html
├── templates.js
└── weather.js
webpack.common.js 
webpack.dev.js 
webpack.prod.js
README.md  
package-lock.json
package.json
```


---

## Contributing
If you have some *amazing* improvement ideas you are welcome so *feel free* to contribute.

1. Clone this repo
2. Create your Feature Branch (`git checkout -b feature/my_amazing_feature`)
3. Commit your Changes (`git commit -m 'Add some amazing_feature'`)
4. Push to the Branch (`git push origin feature/amazing_feature`)
5. Open a Pull Request


---

## License

Distributed under the ISC License. See `LICENSE` for more information.

---

## Contact

GitHub: [jaws-1684](https://github.com/jaws-1684)
Project Link: [https://github.com/jaws-1684/weather-app](https://github.com/jaws-1684/weather-app)


---

## Acknowledgments
The following resources proved to be quite helpful:
* [The Odin Project](https://www.theodinproject.com)
* [Webpack](https://webpack.js.org)
* [Jest](https://jestjs.io)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Visual Crossing](https://www.visualcrossing.com/weather-api/)
* [Giphy](https://giphy.com/)
