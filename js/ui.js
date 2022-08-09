class UI{
    
    constructor(){
        this.forecastSection = document.querySelector('#forecast-section') 
    }
    
    paint(forecast){
          const days = forecast.map(item => {
          const temp = item.dt_txt.split(' ')
          const date = new Date(temp[0])
          const result = this.getDayName(date.getDay())
          return result
        })
        console.log(days)
        this.forecastSection.innerHTML = `
        <div class="col-md">
        <div class="card card-body text-white bg-dark mb-3 text-center">
        <h2>${days[0]}</h2>
        <p><small>${forecast[0].dt_txt}</small></p>
        <center><img src="http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png" height="50%"
        width ="50%"></center>
        <h2>${Math.round(forecast[0].main.temp-273)}°C</h2>
        <p>${forecast[0].weather[0].description}</p>    
        </div>
        </div>

        <div class="col-md">
        <div class="card card-body text-white bg-dark mb-3 text-center">
        <h2>${days[1]}</h2>
        <p><small>${forecast[1].dt_txt}</small></p>
        <center><img src="http://openweathermap.org/img/wn/${forecast[1].weather[0].icon}@2x.png" height="50%"
        width ="50%"></center>
        <h2>${Math.round(forecast[1].main.temp-273)}°C</h2>
        <p>${forecast[1].weather[0].description}</p>    
        </div>
        </div>

        <div class="col-md">
        <div class="card card-body text-white bg-dark mb-3 text-center">
        <h2>${days[2]}</h2>
        <p><small>${forecast[2].dt_txt}</small></p>
        <center><img src="http://openweathermap.org/img/wn/${forecast[2].weather[0].icon}@2x.png" height="50%"
        width ="50%"></center>
        <h2>${Math.round(forecast[2].main.temp-273)}°C</h2>
        <p>${forecast[2].weather[0].description}</p>    
        </div>
        </div>

        <div class="col-md">
        <div class="card card-body text-white bg-dark mb-3 text-center">
        <h2>${days[3]}</h2>
        <p><small>${forecast[3].dt_txt}</small></p>
        <center><img src="http://openweathermap.org/img/wn/${forecast[3].weather[0].icon}@2x.png" height="50%"
        width ="50%"></center>
        <h2>${Math.round(forecast[3].main.temp-273)}°C</h2>
        <p>${forecast[3].weather[0].description}</p>    
        </div>
        </div>

        <div class="col-md">
        <div class="card card-body text-white bg-dark mb-3 text-center">
        <h2>${days[4]}</h2>
        <p><small>${forecast[4].dt_txt}</small></p>
        <center><img src="http://openweathermap.org/img/wn/${forecast[4].weather[0].icon}@2x.png" height="50%"
        width ="50%"></center>
        <h2>${Math.round(forecast[4].main.temp-273)}°C</h2>
        <p>${forecast[4].weather[0].description}</p>    
        </div>
        </div>
        `
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