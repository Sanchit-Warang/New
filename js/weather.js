class Weather {
    
    constructor(city){
        this.apiKey = 'bdef1b5718ce073f461c7eb939d4c9aa'
        this.city = city
        this.cityExits = false
        this.id = null
        this.time = Math.round((new Date().getHours())/3)*3
    }

    //Fetch Weather from API
    async getWeather() {
        await this.getCityID()
        const ui = new UI()
        if(this.cityExits === true){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.id}&appid=${this.apiKey}`)
        
            const data = await response.json()

            const output =  {
                name : data.city.name,
                forecast : data.list.filter(item =>{
                    return item.dt_txt.includes(`${this.time}:00:00`||`0${this.time}:00:00`)
                }),
            }
            ui.setAlert('Found the city !!!','success')
            this.cityExits = false    
            return output
        }else{
            ui.setAlert('Check the city name !!!','danger')
            this.city = 'Mumbai'
        }
    }

    //Fetcht the city id json
    async getJSON() {
       const response = await fetch('json/city.list.json')
       const data = await response.json()
       return data  
    }

    //Get the city id from the city name
    async getCityID(){
        await this.getJSON().then(data => data.forEach(set =>{
            if(set.name === this.city){
                this.id = set.id
                this.cityExits = true
            }
        }))
    }
    //Change weather location
    changeLocation(city){
        this.city = city
    }

    cityExits(){
        return this.cityExits
    }
}
