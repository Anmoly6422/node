import axios from 'axios';
import readline from 'readline';
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('Enter city name: ',async(city)=>{
    const apikey='f75a39c70066f4a6c11d72039191c8aa';
    const url=`https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&appid=${apikey}&units=metric`;
    try{
        const res=await axios.get(url);
        console.log(`current temperature in ${city}` );
        console.log(`current temperature is ${res.data.main.temp}°C`);
        console.log(`weather description:${res.data.weather[0].description}°C`)

    }
    catch(error){
        console.error('Error Founding weather data:',error.message);

    }finally{
        rl.close();
    }
})