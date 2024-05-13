const form = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const timeOfDay = document.querySelector('.time-of-day')
const icon = document.querySelector('.icon img')

const displayData = (data) => {
    const { cityData, weatherData } = data

    //display city data and weather data
    details.innerHTML = `
    <h5 class="my-3">
        ${cityData.EnglishName}
    </h5>

    <p class="my-3">
        ${weatherData.WeatherText}
    </p>

    <div class="my-4 display-4">
        <span>
            ${weatherData.Temperature.Metric.Value}
        </span>
        <span>&deg;C</span>
    </div>
    `

    //update weather condition icon
    const iconSRC = `assets/icons/${weatherData.WeatherIcon}.svg`
    icon.setAttribute('src', iconSRC)

    //update day/night img
    let timeOfDaySRC

    weatherData.IsDayTime ? timeOfDaySRC = './assets/day.svg' : timeOfDaySRC = './assets/night.svg'

    timeOfDay.setAttribute('src', timeOfDaySRC)

    //toggle/remove d-none
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}

const getCityAndWeatherData = async (cityName) => {
    const cityData = await getCityData(cityName)

    if (cityData === undefined) {
        alert('The city name you provided does not exist, please try again')
    }

    const weatherData = await getWeatherData(cityData.Key)

    return {
        cityData,
        weatherData
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()

    const cityName = e.target[0].value.trim()
    form.reset()

    if (!cityName) {
        alert('Please provide a search term')
    }

    getCityAndWeatherData(cityName)
        .then(data => displayData(data))
        .catch(err => console.log(err))
})
