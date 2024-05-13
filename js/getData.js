
const url = "http://dataservice.accuweather.com/"

const getCity = async (city) => {
    const response = await fetch(`${url}locations/v1/cities/search?apikey=${key}&q=${city}`)
    const data = await response.json()
    
    console.log(data[0]);
    // return data[0];
}

const getWeather = async (id) => {
    const response = await fetch(`${url}currentconditions/v1/${id}?apikey=${key}`)
    const data = await response.json();

    console.log(data[0])
    // return data[0];
};

getCity('Pozarevac')
getWeather(297305)