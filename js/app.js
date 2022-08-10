//Init storge obj
const storage = new Storage()
const weatherLocation = storage.getLocationData()
//Init weather obj
const weather = new Weather(weatherLocation)
//init ui obj
const ui = new UI()


//Change location event
document.querySelector('.btn').addEventListener('click',() =>{
    const city  =  document.querySelector("#changeLoc").value
    //change location
    weather.changeLocation(city)
    //setlocation in local storage()
    storage.setLocationData(city)
    //Call get weather again
    getWeather()
    if(weather.cityExits === true){
        ui.alert('Check the city name','danger')
    }else{
        ui.alert('Found the city','success')
    } 
})

//run on dim load
document.addEventListener("DOMContentLoaded",getWeather())
function getWeather(){
    weather.getWeather()
    .then((data) =>{
        console.log(data.forecast)
        ui.paint(data.forecast,data.name)
    })
    .catch(err => console.log(err))
}
