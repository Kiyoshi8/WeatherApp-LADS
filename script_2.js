    const apiKey = "1315f0438c8f4519678e788c0d967483";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "QIYUCLOUDY.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "SHENXINGHUICLEAR.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "LISHENRAIN.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "QIYUDRIZZLE.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "SHENXINGHUIHAZE.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "LISHENSNOW.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

        }


    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })

