let url = 'https://simranjotkaler.github.io/JSON-LAB8/products.json';

//using the same function used in lab 4 with url as parameter
function useAsynchronous(url) {
    //uisng fetch api insta=ead of xhr object
    fetch(url).then(function(response) {
        //fetch api uses promises as you can see we are using then blocks
        //also here we specify response type like this where json() is kind of a method
        return response.json();
    }).then(function(jso) {
        //passing the json info to jsonObj which is used in next function
        let jsonObj = jso;
        //calling the weirdDeals functions
        weirdDeals(jsonObj);
        //if there is any error in the steps mentioned above, the catch block will execute
    }).catch(function(error) {
        //using alert box here to execute
        alert('The problem in fetching is: ' + error.message);
    });

};

//function which actually contains elements to be added dynamically
function weirdDeals(jsonObj) {
    let weirdDeals = jsonObj.weirdDeals;
    //calling the section element
    let section = document.querySelector('section');
    for (let i = 0; i < weirdDeals.length; i++) {
        //creating elements dynamically
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        //setting the  attributes
        img.setAttribute('src', 'https://simranjotkaler.github.io/JSON-LAB8/images/' + weirdDeals[i].image);
        img.setAttribute('alt', weirdDeals[i].image);
        h2.textContent = weirdDeals[i].name;
        p1.textContent = 'Price ' + weirdDeals[i].price;
        p2.textContent = 'Details ' + weirdDeals[i].details;
        //appending the elements in the section which is in body of html document
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        section.appendChild(article);
    }
}



//invoking the function
useAsynchronous('https://simranjotkaler.github.io/JSON-LAB8/products.json');
