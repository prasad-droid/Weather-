var lat, lon;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // x.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  lat = lat;
  lon = lon;

  getdata();
}
getLocation();

// showPosition()

// lat=19.4594
// lon=72.8189

apikey = "309fbf4d24ee6e2250d2b188c4f7983a";

let data;


async function getdata() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
  );
  data = await response.json();
  console.log(data);
  showdata(data);
}

function showdata(data) {
  $('#location').html(data.name);
  $('#decs').html(data.weather[0].description)
  $('#temp').html(data.main.temp + "°")
  $('#country').html(data.sys.country)
  $('#cloudy').html(data.clouds.all + "%")
  $('#humidity').html(data.main.humidity + "°C")
  $('#wind').html(data.wind.speed + "Km/h")
  $('#pressure').html(data.main.pressure)
  $('#min').html(data.main.temp_min)
  $('#max').html(data.main.temp_max)

}



var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#location");
var description = document.querySelector("#decs");
var temp = document.querySelector("#temp");
var cloud = document.querySelector("#cloudy");
var humid = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var press = document.querySelector("#pressure");
var cont = document.querySelector('#country')
var mix = document.querySelector('#min')
var max = document.querySelector('#max')

apik = "309fbf4d24ee6e2250d2b188c4f7983a";



btn.addEventListener("click", function () {

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik + '&units=metric'
  )
    .then((res) => res.json())

    // .then(data => console.log(data))

    .then((data) => {

      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspd = data["wind"]["speed"];
      var cld = data["clouds"]["all"];
      var hum = data['main']['humidity'];
      var pre = data['main']['pressure'];
      var con = data['sys']['country'];
      var mi = data['main']['temp_max']
      var ma = data['main']['temp_max']


      city.innerHTML = nameval;
      temp.innerHTML = tempature + '°';
      description.innerHTML = descrip;
      wind.innerHTML = wndspd + "km/h";
      cloud.innerHTML = cld + '%';
      humid.innerHTML = hum + "°C" ;
      press.innerHTML = pre ;
      cont.innerHTML = con;
      min.innerHTML = mi;
      max.innerHTML = ma;
      inputval.value="";

    })

    .catch((e) => alert("You entered Wrong city name"));

    
});

document.getElementById('NY').addEventListener('click', async () =>{
  response=await fetch( "https://api.openweathermap.org/data/2.5/weather?q=New York&appid="+apik +'&units=metric')
  data=await response.json()
  console.log(data)
  showdata(data)
})

document.getElementById('LA').addEventListener('click', async () =>{
  response=await fetch( "https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid="+apik +'&units=metric')
  data=await response.json()
  console.log(data)
  showdata(data)
})
document.getElementById('TY').addEventListener('click', async () =>{
  response=await fetch( "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid="+apik +'&units=metric')
  data=await response.json()
  console.log(data)
  showdata(data)
})
document.getElementById('MX').addEventListener('click', async () =>{
  response=await fetch( "https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid="+apik +'&units=metric')
  data=await response.json()
  console.log(data)
  showdata(data)
})
document.getElementById('DL').addEventListener('click', async () =>{
  response=await fetch( "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid="+apik +'&units=metric')
  data=await response.json()
  console.log(data)
  showdata(data)
})
document.getElementById('SH').addEventListener('click', async () =>{
  response=await fetch( "https://api.openweathermap.org/data/2.5/weather?q=Shanghai&appid="+apik +'&units=metric')
  data=await response.json()
  console.log(data)
  showdata(data)
})