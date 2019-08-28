// Create app namespace to hold all methods
const ronSwansonApp = {};

const apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/63";


// Collect user input based on user selection
ronSwansonApp.userChoice = function () {
    
}

// Make AJAX request with user inputted data
ronSwansonApp.getQuotes = function () {

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json'
    }).then(function(results) {
        console.log(results);
        ronSwansonApp.filterString = () => {
            const foodArray = []
            results.forEach( string => {
                if (string.toLowerCase().includes("fish") || string.toLowerCase().includes("food") === true) {
                    return foodArray.push(string)
                    
                }
                
            })
            console.log(foodArray)
            
        }
        ronSwansonApp.filterString();
    }).fail((error) => {
        console.log(error);
    });
}

    ronSwansonApp.getQuotes();
    

// Filter array based on user inputted data

// Display data on the page
ronSwansonApp.displayInfo = function () {

}

// Start ronSwansonApp
ronSwansonApp.init = function () {

}

// Once the page is loaded run all functions in ronSwansonApp
$(document).ready(function () {
    ronSwansonApp.init();
});