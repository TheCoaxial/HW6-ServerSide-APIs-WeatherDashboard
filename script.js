


var city = "";
var stateCode = "";

if(city === null || undefined){
    city = Columbus;
} else{
    city = localStorage.getItem("city");
}
console.log(city);

if(stateCode === null || undefined){
    stateCode = oh;
} else {
    stateCode = localStorage.getItem("stateCode");
}

var currentdayURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+stateCode+",us&appid=a4f1da209176afa0326f9cbeeaa0df17"

var forcastByCityName = "http://api.openweathermap.org/data/2.5/forecast?q="+city+","+stateCode+",us&appid=a4f1da209176afa0326f9cbeeaa0df17"



$("#search").click(function(){
    
    var userInput = $("#searchInput").val();
    console.log(userInput);
    var queryArray = userInput.split(',');
    console.log(queryArray);
    localStorage.setItem("city", queryArray[0]);
    localStorage.setItem("stateCode", queryArray[1]);
    

})



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
    $("#temp").text("Temp: "+temp);

    $("#Today").append("<p id='humidity'></p>");
    $("#humidity").text("Humidity: "+humidity+"%");

    $("#Today").append("<p id='windSpeed'></p>");
    $("#windSpeed").text("Windspeed :"+windSpeed+"MPH");

})


$.ajax({
    url: forcastByCityName,
    method:"GET"
  }).then(function(response){
  

    function displayForcast(i){
        date = response.list[i].dt_txt;
        temp = response.list[i].main.temp;
        humidity =response.list[i].main.humidity;
        console.log(response);
        console.log(date);
        console.log(temp);
        console.log(humidity);
    
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
    
    console.log(response);
    console.log(date);
    console.log(temp);
    console.log(humidity);


  
  })


  function displayForcast(i){
    date = response.list[i].dt_txt;
    temp = response.list[i].main.temp;
    humidity =response.list[i].main.humidity;
    

  }