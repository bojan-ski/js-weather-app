const getCityData = async (cityName) => {
    const response = await fetch(`${process.env.URL}locations/v1/cities/search?apikey=${process.env.API_KEY}&q=${cityName}`)
    const data = await response.json()
    
    return data[0];
}

const getWeatherData = async (id) => {
    const response = await fetch(`${process.env.URL}currentconditions/v1/${id}?apikey=${process.env.API_KEY}`)
    const data = await response.json();

    return data[0];
};