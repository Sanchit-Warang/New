class Weather {
    
    constructor(city){
        this.apiKey = 'bdef1b5718ce073f461c7eb939d4c9aa'
        this.city = city
        this.id = null
    }

    //Fetch Weather from API
    async getWeather() {
        await this.getCityID()
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.id}&appid=${this.apiKey}`)
        
        const data = await response.json()
        
        const output = data.list.filter(item =>{
            return item.dt_txt.includes("09:00:00")
        })
        
        return output   
    }

    async getJSON() {
       const response = await fetch('json/city.list.json')
       const data = await response.json()
       return data  
    }

    async getCityID(){
        await this.getJSON().then(data => data.forEach(set =>{
            if(set.name === this.city){
                this.id = set.id
            }
        }))
    }
}

const weather = new Weather('Mumbai')
weather.getWeather().then(data => console.log(data))