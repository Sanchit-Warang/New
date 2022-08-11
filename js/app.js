//Init storge obj
const storage = new Storage()
const weatherLocation = storage.getLocationData()
//Init weather obj
const weather = new Weather(weatherLocation)
//init ui obj
const ui = new UI()
// ui.setAlert('Found the city','success')

//Change location event
document.querySelector('.btn').addEventListener('click',() =>{
    const city  =  document.querySelector("#changeLoc").value 
    //change location
    weather.changeLocation(city)
    //setlocation in local storage()
    storage.setLocationData(city)
    //Call get weather again
    getWeather()
})

//run on dom load
document.addEventListener("DOMContentLoaded",getWeather())
function getWeather(){
    weather.getWeather()
    .then((data) =>{
        console.log(data.forecast)
        ui.paint(data.forecast,data.name)
    })
    .catch(err => console.log(err))
}
