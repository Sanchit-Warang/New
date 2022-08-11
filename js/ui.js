class UI{
    
    constructor(){
        this.forecastSection = document.querySelector('#forecast-section')
        this.locationDisplay = document.querySelector('#location') 
        this.alert = document.querySelector('#alert')
    }
    
    paint(forecasts,name){
        let output = ''
        forecasts.forEach(forecast => {
          const temp = forecast.dt_txt.split(' ')
          const date = new Date(temp[0])
          const day = this.getDayName(date.getDay())
          output += `
          <div class="col-md">
          <div class="card card-body text-white bg-dark mb-3 text-center">
          <h2>${day}</h2>
          <p><small>${forecast.dt_txt}</small></p>
          <center><img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" height="50%"
          width ="50%"></center>
          <h2>${Math.round(forecast.main.temp-273)}°C</h2>
          <p>${forecast.weather[0].description}</p>    
          </div>
          </div>
          `
        });
        this.forecastSection.innerHTML = output
        this.locationDisplay.innerHTML =`
        <center><h1 class="text-white">${name}</h1></center>
        `
    }

    setAlert(message,type){
      setTimeout(() => {
        
        this.alert.innerHTML = `
        <div class="col-md-6 mx-auto">
        <div class="alert alert-${type}">
        ${message}
        </div>
        </div>
        `
      },200)
      setTimeout(() => this.alert.innerHTML = '', 3000)
    }

    getDayName(num){
        switch(num) {
            case 0:
              return 'Sunday'
            case 1:
              return 'Monday'
            case 2:
              return 'Tuesday'
            case 3:
              return 'Wednesday'
            case 4:
              return 'Thursday'
            case 5:
              return 'Friday'
            case 6:
              return 'Saturday'
            default:
              return 'Err'
          }
    }

}