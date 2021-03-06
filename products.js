let requestURL = 'https://simranjotkaler.github.io/JSON-LAB8/products.json';
//..taken the same api forward into the phase 2 also but in a better form..

function useAsynchronous(url) {
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(jso) {
        let jsonObj = jso;
        weirdDeals(jsonObj);
        //....if there is any error in the steps mentioned above, the catch block will execute
    }).catch(function(error) {
        //...using alert box here to execute
        alert('The problem in fetching is: ' + error.message);
    });

};


function weirdDeals(jsonObj) {
    let weirdDeals = jsonObj.weirdDeals;

    let section = document.querySelector('section');
    for (let i = 0; i < weirdDeals.length; i++) {

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        img.setAttribute('src', 'https://simranjotkaler.github.io/JSON-LAB8/images/' + weirdDeals[i].image);
        img.setAttribute('alt', weirdDeals[i].image);
        h2.textContent = weirdDeals[i].name;
        p1.textContent = 'Price: ' + weirdDeals[i].price;
        p2.textContent = 'description: ' + weirdDeals[i].description;
        p3.textContent = 'features: ' + weirdDeals[i].features;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        section.appendChild(article);
    }
}

function seeweather(cityid) {
    var key = '2dbf8e0d2e4bca96dc240feb4826f1c7'; //i got this key by registering to the open weather map .org website .
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityid + '&appid=' + key)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            letsseetheweather(data);
        })
        .catch(function() { //to catch the error

        });
}

window.onload = function() {
    seeweather(5894171); //city id of barrie taken from bbc.com
}

function letsseetheweather(c) {
    var celcius = Math.round(parseFloat(c.main.temp) - 273.15); //converts the temp to celcius
    var fahrenheit = Math.round(((parseFloat(c.main.temp) - 273.15) * 1.8) + 32); //converts to fahrenheit

    document.getElementById('description').innerHTML = c.weather[0].description; //getting the description
    document.getElementById('temp').innerHTML = celcius + '&deg;'; //getting the temperature
    document.getElementById('location').innerHTML = c.name; //getting the location


    if (description.indexOf('rain') > 0) {
        document.className = 'rainy'; //display color for rain
    } else if (description.indexOf('cloud') > 0) {
        document.className = 'cloudy'; //display color for cloudy
    } else if (description.indexOf('sunny') > 0) {
        document.className = 'sunny'; //display color for sunny
    }
}


//invoking the function
useAsynchronous('https://simranjotkaler.github.io/JSON-LAB8/products.json');
