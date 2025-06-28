# WeatherApp

A responsive React application that fetches and displays real‑time weather data from OpenWeatherMap. View current conditions, temperature, humidity, and a 5-day forecast in a clean, user-friendly interface.

---

## Features

* **Current Weather**: Displays temperature, humidity, wind speed, and weather description.
* **5-Day Forecast**: Provides daily forecasts with high/low temperatures and conditions.
* **Location Search**: Search by city name to get local weather data.
* **Responsive Design**: Optimized for mobile, tablet, and desktop screens.

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Adi-github-21/mini-project-react.git
   cd mini-project-react
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```

---

## Usage

1. **Start the development server**

   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`

---

## Configuration

1. Sign up for an API key at [OpenWeatherMap](https://openweathermap.org/api).
2. Create a `.env` file in the project root:

   ```env
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```
3. Restart the development server if it’s already running.

---

## Technologies

* **React** – Front-end library for building user interfaces
* **Fetch API** – For HTTP requests to OpenWeatherMap
* **OpenWeatherMap API** – Source of weather data
* **CSS Modules** – Scoped styling

---

## Contributing

1. Fork this repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: \`git commit -m "Add new feature"
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).
