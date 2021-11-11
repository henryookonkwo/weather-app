window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription_FeelsLike = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(`lat:${lat} long:${long}`)

            //https://www.weatherapi.com/api-explorer.aspx
            const api = `http://api.weatherapi.com/v1/current.json?key=bb130ba3e9b1409a98b45354211111&q=${lat},${long}&aqi=no`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp_c,feelslike_c} = data.current;
                const {tz_id} = data.location;

                //Set DOM Elements from the API
                temperatureDescription_FeelsLike.textContent = `Feels like: ${feelslike_c}`;
                temperatureDegree.textContent = temp_c;
                locationTimezone.textContent = tz_id; 


            });
        });


    }
});