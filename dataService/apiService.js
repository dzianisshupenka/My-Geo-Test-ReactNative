export default class apiService {

    async getAddress(lat, lng) {
        let url = `https://open.mapquestapi.com/geocoding/v1/reverse?key=6O7OTGMH5Ip76wIw0XddEJTpq6wzQzdq&location=${lat},${lng}`
        const res = await fetch(url);

        if (res.ok) {
            return await res.json();
        }
      }

    async getWeather(lat, lng) {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=86cb1a99753c488a9125112015998ce8&lang=ru&units=metric`;
        const res = await fetch(url);

        if (res.ok) {
            return await res.json();
        }
      }
 }