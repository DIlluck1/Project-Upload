const  inputKota = document.getElementById('inputKota');
const  cekKota = document.getElementById('cekKota');
cekKota.addEventListener('click', function() {
    const kota = inputKota.value;
    console.log(kota);

    const apiKey = "5638d870582d93444aee5b71952e7906";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + kota + "&appid=" + apiKey + "&units=metric";
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            namaKota = data.name;
            console.log(namaKota);
            const kotaElement = document.getElementById('namaKota');
            kotaElement.textContent = "Kota :" + " " + namaKota;

            suhu = data.main.temp;
            console.log(suhu);
            const suhuElement = document.getElementById('suhuKota');
            suhuElement.textContent = "Suhu :" + " " + suhu + "°C";

            kondisiCuaca = data.weather[0].main;
            console.log(kondisiCuaca);
            const kondisiCuacaElement = document.getElementById('kondisiCuaca');
            kondisiCuacaElement.textContent = "Cuaca :" + " " + kondisiCuaca;

            kelembapan = data.main.humidity.unit;
            console.log(kelembapan)
            const kelembapanElement = document.getElementById('kelembapanKota');
            kelembapanElement.textContent = "Kelembapan :" + " " + data.main.humidity + "%";

            kecepatanAngin = data.wind.speed.unit;
            console.log(kecepatanAngin)
            const kecepatanAnginElement = document.getElementById('kecepatanAngin');
            kecepatanAnginElement.textContent = "Kecepatan Angin :" + " " + data.wind.speed + " m/s";

             if (kondisiCuaca === "Rain") {
                document.body.style.backgroundColor = "#052a53ff";
                document.querySelector('h1').style.color = "white";
            }else if (kondisiCuaca === "Clouds") {
                document.body.style.backgroundColor = "#686868ff";
                document.querySelector('h1').style.color = "white";
            }else {
                document.body.style.backgroundColor = "#fcff54ff";
                document.querySelector('h1').style.color = "black";
            }

            const kodeIcon = data.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + kodeIcon + ".png";
            const iconElement = document.getElementById('iconCuaca');
            iconElement.src = iconUrl;
            
        })

})


