/**
 * Created by Mike on 11/2/2016.
 */






function toggleBlur() {
    if (getCookie('blur') != 'true') {
        document.cookie = 'blur=true';
    } else {
        document.cookie = 'blur=false';
    }
}

// helps for the search bar
function selectSearch(searchNr) {
    switch (searchNr) {
        
        // Dot 1
        case 0:
            $(".search_0").addClass("searchView");
            $("#dot_0").addClass("current");

            $(".search_1").removeClass("searchView");
            $(".search_2").removeClass("searchView");
            $("#dot_1").removeClass("current");
            $("#dot_2").removeClass("current");
            //$(".search_0_i").focus();
            break;

            // Dot 2
        case 1:
            $(".search_1").addClass("searchView");
            $("#dot_1").addClass("current");

            $(".search_0").removeClass("searchView");
            $(".search_2").removeClass("searchView");
            $("#dot_0").removeClass("current");
            $("#dot_2").removeClass("current");
            //$(".search_1_i").focus();
            break;

            // Dot 3
        case 2:
            $(".search_2").addClass("searchView");
            $("#dot_2").addClass("current");

            $(".search_1").removeClass("searchView");
            $(".search_0").removeClass("searchView");
            $("#dot_1").removeClass("current");
            $("#dot_0").removeClass("current");
            //$(".search_2_i").focus();
            break;

            // Dot 4
        case 3:
            $(".search_3").addClass("searchView");
            $("#dot_3").addClass("current");

            $(".search_2").removeClass("searchView");
            $(".search_0").removeClass("searchView");
            $("#dot_1").removeClass("current");
            $("#dot_0").removeClass("current");
            //$(".search_2_i").focus();
            break;
    }
}


// API for Toronto, get free API at Openweathermap.org
var json_url = "http://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=4d4f708161b300a37b2b987b6acf2ce0";
var city;
var temp_curr;
var temp_low;
var temp_high;
var description;
var icon;

// When the API is done loading, the below function will insert all the information

$.when(
    $.getJSON(json_url)
).done( function(json_obj) {

        city = json_obj["name"];
        temp_curr = k_to_c(json_obj["main"]["temp"]);
        temp_low = k_to_c(json_obj["main"]["temp_min"]);
        temp_high = k_to_c(json_obj["main"]["temp_max"]);

        description = json_obj["weather"][0]["description"];



    code = json_obj["weather"][0]["icon"];

    icon = "http://openweathermap.org/img/w/"+code+".png";

    //http://openweathermap.org/img/w/10d.png


        insertWeatherInfo();
    }
);
function k_to_c(kelvin) {
    return (kelvin - 273.15).toFixed(0);
}


// Function called when the api is done loading
function insertWeatherInfo() {
    //$("#city").append(city);
    $("#icon").append('<img src="'+'http://openweathermap.org/img/w/10d.png'+'" />');

// You can search the website for the correct icon

    $("#description").append(description);
    $("#temp_curr").prepend(temp_curr + "&deg;");
    $("#temp_low").append(temp_low + "&deg; /");
    $("#temp_high").append(temp_high + "&deg;");

}

// Time stuff that loads when the homepage is loading
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h = checkTime(h); 
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function changeColour(i)
{
    document.getElementById("html").style.color = i;
}





// huge array of sites to insert
    var data =
    {
        "sites": {

            "4chan": [
                /* 0 */ {"url": "https://boards.4chan.org/g/#catalog", "display": "/g/"},
                /* 1 */ {"url": "https://boards.4chan.org/v/#catalog", "display": "/v/"},
                /* 3 */ {"url": "https://boards.4chan.org/pol/#catalog", "display": "/pol/"},
                /* 4 */ {"url": "https://boards.4chan.org/int/#catalog", "display": "/int/"},
                /* 5 */ {"url": "https://boards.4chan.org/x/#catalog", "display": "/x/"},
                /* 6 */ {"url": "https://boards.4chan.org/fa/#catalog", "display": "/fa/"},
                /* 7 */ {"url": "https://boards.4chan.org/a/#catalog", "display": "/a/"},
                /* 8 */ {"url": "https://boards.4chan.org/r9k/#catalog", "display": "/r9k/"}
            ],

            "Social Sites": [
                /* 0 */   {"url": "https://facebook.com", "display": "FB"},
                /* 1 */   {"url": "https://reddit.com", "display": "Leddit"},
                /* 2 */   {"url": "https://twitter.com", "display": "Twitter"}
            ],

            "Programming Sites": [
                /* 0 */ {"url" : "https://stackexchange.com", "display": "Stack Exchange"},
                /* 1 */ {"url" : "http://www.cplusplus.com/", "display": "C++"}
                /* 2 */ {"url" : "https://www.stackoverflow.com", "display": "Stack Overflow"}
            ]
        }
    };



// Night and day function I want to implement

function getStylesheet() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime&&currentTime < 5) {
        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
    }
    if (5 <= currentTime&&currentTime < 11) {
        document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
    }
    if (11 <= currentTime&&currentTime < 16) {
        document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
    }
    if (16 <= currentTime&&currentTime < 22) {
        document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
    }
    if (22 <= currentTime&&currentTime <= 24) {
        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
    }
}
