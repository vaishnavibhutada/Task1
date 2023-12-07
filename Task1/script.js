var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp= document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="6cfa9afa7a0516a1689d67eea871f8d1"
function convertion(val)
{
    return (val - 273).toFixed(3)
}
btn.addEventListener( 'click', function()
{
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
   .then(res=> res.json())

   .then(data=>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        city.innerHTML=`weather of <span>${nameval}<span>`
        temp.innerHTML = `Temperature: <span>${ convertion(temperature)} C</span> `
        description.innerHTML = `Sky Condition: <span>${descrip}<span>`
        wind.innerHTML=`Wind Speed: <span>${wndspeed} km/h <span>`
    })
    .catch(err => alert('you enterned wrong city name'))
})