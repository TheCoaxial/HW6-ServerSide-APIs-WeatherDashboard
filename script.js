


var city = "";
var stateCode = "";
var recentCity = [];
var recentState = [];

if(city === null || undefined){
    city = "Columbus";
} else{
    city = localStorage.getItem("city");
}
console.log(city);

if(stateCode === null || undefined){
    stateCode = "oh";
} else {
    stateCode = localStorage.getItem("stateCode");
}

var queryArray =[];
var userInput;
var lat = 0;
var lon = 0;
var uvURL ="";

$(document).ready(function(){

currentDay();
forCast();

$("#search").click(function(){
     console.log("I ran");
    userInput = $("#searchInput").val();
     console.log(userInput);
    queryArray = userInput.split(',');
    console.log(queryArray);
    localStorage.setItem("city", queryArray[0]);
    localStorage.setItem("stateCode", queryArray[1]);
    city = queryArray[0].trim();
    stateCode = queryArray[1];
    $("p").empty();
    $("h3").empty();
    // event.preventDefault();
    currentDay();
    forCast();

})
console.log(stateCode);

function currentDay(){
    var currentdayURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+stateCode+",us&units=imperial&appid=a4f1da209176afa0326f9cbeeaa0df17"
$.ajax({
  url: currentdayURL,
  method:"GET"
}).then(function(response){

    //console.log(response);
    var cityName = response.name;
    let humidity = response.main.humidity;
    let temp = response.main.temp;
    let windSpeed = response.wind.speed;
    lat = response.coord.lat;
    lon = response.coord.lon;

    $("#Today").append("<h3 id='cityname'></h3>");
    $("#cityname").text(cityName);

    $("#Today").append("<p id='temp'></p>");
    $("#temp").text("Temp: "+temp);

    $("#Today").append("<p id='humidity'></p>");
    $("#humidity").text("Humidity: "+humidity+"%");

    $("#Today").append("<p id='windSpeed'></p>");
    $("#windSpeed").text("Windspeed :"+windSpeed+"MPH");
    
     uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=a4f1da209176afa0326f9cbeeaa0df17"

     $.ajax({
        url: uvURL,
        method:"GET"
      }).then(function(response){
          uvIndex = response.value;
        console.log(response);
        $("#Today").append("<p id='uv'></p>");
        $("#uv").text("UV :"+uvIndex);
    })

})
}


function forCast(){
    var forcastByCityName = "http://api.openweathermap.org/data/2.5/forecast?q="+city+","+stateCode+",us&units=imperial&appid=a4f1da209176afa0326f9cbeeaa0df17"

$.ajax({
    url: forcastByCityName,
    method:"GET"
  }).then(function(response){
  

    function displayForcast(i){
        date = response.list[i].dt_txt;
        temp = response.list[i].main.temp;
        humidity =response.list[i].main.humidity;
        // console.log(response);
        // console.log(date);
        //console.log(temp);
        // console.log(humidity);
    
      }

    displayForcast(0);

    $("#firstDay").append("<h4 id='date1'></h4>");
    $("#date1").text(date);
    $("#firstDay").append("<p id='tempForcast1'></p>");
    $("#tempForcast1").append("Temp: "+temp);
    $("#firstDay").append("<p id='humidForcast1'></p>");
    $("#humidForcast1").append("Humidity: "+humidity+"%");

    displayForcast(8);

    $("#secondDay").append("<h4 id='date2'></h4>");
    $("#date2").text(date);
    $("#secondDay").append("<p id='tempForcast2'></p>");
    $("#tempForcast2").append("Temp: "+temp);
    $("#secondDay").append("<p id='humidForcast2'></p>");
    $("#humidForcast2").append("Humidity: "+humidity+"%");
    
    displayForcast(17);

    $("#thirdDay").append("<h4 id='date3'></h4>");
    $("#date3").text(date);
    $("#thirdDay").append("<p id='tempForcast3'></p>");
    $("#tempForcast3").append("Temp: "+temp);
    $("#thirdDay").append("<p id='humidForcast3'></p>");
    $("#humidForcast3").append("Humidity: "+humidity+"%");

    displayForcast(26);

    $("#fourthDay").append("<h4 id='date4'></h4>");
    $("#date4").text(date);
    $("#fourthDay").append("<p id='tempForcast4'></p>");
    $("#tempForcast4").append("Temp: "+temp);
    $("#fourthDay").append("<p id='humidForcast4'></p>");
    $("#humidForcast4").append("Humidity: "+humidity+"%");

    displayForcast(35);

    $("#fithDay").append("<h4 id='date5'></h4>");
    $("#date5").text(date);
    $("#fithDay").append("<p id='tempForcast5'></p>");
    $("#tempForcast5").append("Temp: "+temp);
    $("#fithDay").append("<p id='humidForcast5'></p>");
    $("#humidForcast5").append("Humidity: "+humidity+"%");
    
     //console.log(response);
    // console.log(date);
    // console.log(temp);
    // console.log(humidity);
  })






}


  
})