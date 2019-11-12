//API KEY: 184aadea88211a48fa8c7174516e9dac
//API CALL: http://api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=184aadea88211a48fa8c7174516e9dac

window.onload = function() {
    events();
  };

  function events(){
      $("#obtainWeather").click(function(){obtainWeatherInfo()});
  }

  function obtainWeatherInfo(){
    var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='
    var key = '184aadea88211a48fa8c7174516e9dac'
    var cityName = $("#cityName").val();
  
    //$( ".content a" ).each(function( index, element ) {
    $.ajax({
       // url: api_url + "?APPID=" + key + " &q=" + $( this ).text(),
        type: 'POST',
        url: api_url + cityName + "&APPID=" + key,
        contentType: "application/json",
        dataType: 'jsonp',
        statusCode: {
            200: function( data ) {
                //alert("200");
                console.log(data);
                //var obj = JSON.parse(data);
                var date = new Date();
                
                var htmlCode = "";

                switch(data.weather[0].main){
                    case "Clouds":
                            htmlCode +=
                            "<div id='contentBox1'>" + 
                            "<div class='icon cloudy'>" + 
                            "<div class='cloud'></div>" + 
                            "<div class='cloud'></div>" + 
                            "</div>" +
                            "</div>";
                            break;

                    case "Clear":
                        htmlCode += 
                        "<div class='icon sunny'>" +
                        "<div class='sun'>" +
                        "<div class='rays'></div>" +
                        "</div>" +
                        "</div>";
                        break;

                    case "Thunderstorm":
                        htmlCode += 
                        "<div class='icon thunder-storm'>" +
                        "<div class='cloud'></div>" + +
                        "<div class='lightning'>" +
                        "<div class='bolt'></div>" +
                        "<div class='bolt'></div>" +
                        "</div>" +
                        "</div>";
                        break;

                    case "Drizzle":
                        htmlCode += 
                        "<div class='icon sun-shower'>" +
                        "<div class='cloud'></div>" +
                        "<div class='sun'>" +
                        "<div class='rays'></div>" +
                        "</div>" +
                        "<div class='rain'></div>" +
                        "</div>";
                        break;

                    case "Rain":
                        htmlCode +=
                        "<div class='icon rainy'>" +
                        "<div class='cloud'></div>" +
                        "<div class='rain'></div>" +
                        "</div>";
                        break;

                    case "Snow":
                        htmlCode +=
                        "<div class='icon flurries'>" +
                        "<div class='cloud'></div>" +
                        "<div class='snow'>" +
                        "<div class='flake'></div>" +
                        "<div class='flake'></div>" +
                        "</div>" +
                        "</div>";
                        break;

                    case "Atmosphere":
                            htmlCode +=
                            "<div id='contentBox1'>" + 
                            "<div class='icon cloudy'>" + 
                            "<div class='cloud'></div>" + 
                            "<div class='cloud'></div>" + 
                            "</div>" +
                            "</div>";
                            break;
                }

                htmlCode +=
                "<div id='contentBox2'>" + 
                "<div style='margin-bottom: 5px;'>" + getDayName(date.getDay()) + "</div>" + 
                "<div style='margin-bottom: 5px;'>" + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "</div>" + 
                "<div style='margin-bottom: 10px;'>" + data.name + "</div>" + 
                "</div>" + 
                "<div id='contentBox3'>" + 
                "<div style='margin-bottom: 5px; font-size: 60px;'>" + kToC(data.main.temp) + "\xB0C</div>" + 
                "</div>";

                $("#content").css("visibility", " visible");

                $("#content").html(htmlCode);

            },
            201: function( data ) {
                alert("201!");
            }
          },
          error: function(status) {
              alert("oh noes");
          }
    })
 // });
  }

  function getDayName(dayNum){
    var dias=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dias[dayNum];
  }

  function cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    return cToFahr;
}

  function fToC(fahrenheit){
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    return fToCel;
  } 

  function kToC(kelvin){
    var kTemp = kelvin;
    var kToCel = Math.trunc(kTemp - 273.15);
    var message = kTemp+'\xB0F is ' + kToCel + '\xB0C.';
    return kToCel;
  }