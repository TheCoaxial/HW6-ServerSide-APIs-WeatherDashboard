var city = "Columbus";
var stateCode = "oh";


var currentdayURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+stateCode+",us&appid=a4f1da209176afa0326f9cbeeaa0df17"

var forcastByCityName = "http://api.openweathermap.org/data/2.5/forecast?q="+city+","+stateCode+",us&appid=a4f1da209176afa0326f9cbeeaa0df17"







$.ajax({
  url: currentdayURL,
  method:"GET"
}).then(function(response){

    console.log(response);
    var cityName = response.name;
    let humidity = response.main.humidity;
    let temp = response.main.temp;
    let windSpeed = response.wind.speed;
    $("#Today").append("<h3 id='cityname'></h3>");
    $("#cityname").text(cityName);

    $("#Today").append("<p id='temp'></p>");
    $("#temp").text(temp);

    $("#Today").append("<p id='humidity'></p>");
    $("#humidity").text(humidity);

    $("#Today").append("<p id='windSpeed'></p>");
    $("#windSpeed").text(windSpeed);

})


$.ajax({
    url: forcastByCityName,
    method:"GET"
  }).then(function(response){
  
    console.log(response);
    let date = response.list[5].dt_txt;
    console.log(date);
    let temp = response.list[5].main.temp;
    console.log(temp);
    let humidity =response.list[5].main.humidity;
    console.log(humidity);

    $("#firstDay").append("<h4 class='date'></h4>");
    $(".date").text(date);
    $("#firstDay").append("<p class='tempForcast'></p>");
    $(".tempForcast").append(temp);
    $("#firstDay").append("<p class='humidForcast'></p>");
    $(".humidForcast").append(humidity);

    $("#secondDay").append("<h4 class='date'></h4>");
    $(".date").text(date);
    $("#secondDay").append("<p class='tempForcast'></p>");
    $(".tempForcast").append(temp);
    $("#secondDay").append("<p class='humidForcast'></p>");
    $(".humidForcast").append(humidity);

    $("#thirdDay").append("<h4 class='date'></h4>");
    $(".date").text(date);
    $("#thirdDay").append("<p class='tempForcast'></p>");
    $(".tempForcast").append(temp);
    $("#thirdDay").append("<p class='humidForcast'></p>");
    $(".humidForcast").append(humidity);

    $("#fourthDay").append("<h4 class='date'></h4>");
    $(".date").text(date);
    $("#fourthDay").append("<p class='tempForcast'></p>");
    $(".tempForcast").append(temp);
    $("#fourthDay").append("<p class='humidForcast'></p>");
    $(".humidForcast").append(humidity);

    $("#fithDay").append("<h4 class='date'></h4>");
    $(".date").text(date);
    $("#fithDay").append("<p class='tempForcast'></p>");
    $(".tempForcast").append(temp);
    $("#fithDay").append("<p class='humidForcast'></p>");
    $(".humidForcast").append(humidity);
    



  
  })


  function displayCurrentDay(){

  }