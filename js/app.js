//Init weather obj
const weather = new Weather('Mumbai')
const ui = new UI()
//run on dim load
document.addEventListener("DOMContentLoaded",getWeather())
function getWeather(){
    weather.getWeather()
    .then((data) =>{
        console.log(data.forecast)
        ui.paint(data.forecast)
    })
    .catch(err => console.log(err))
}
