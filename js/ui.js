class UI{
    
    constructor(){
        this.forecastSection = document.querySelector('#forecast-section') 
    }
    
    paint(forecasts){
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
    }

    getDayName(num){
        switch(num) {
            case 0:
              return 'Sunday'
              break;
            case 1:
              return 'Monday'
              break;
            case 2:
              return 'Tuesday'
              break;
            case 3:
              return 'Wednesday'
              break;
            case 4:
              return 'Thursday'
              break;
            case 5:
              return 'Friday'
              break;
            case 6:
              return 'Saturday'
              break;
            default:
              return 'Err'
              break;
          }
    }

}