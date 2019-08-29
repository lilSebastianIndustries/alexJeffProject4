// Create app namespace to hold all methods
const ronSwansonApp = {};

const apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/63";
const diningArray = [];
const philosophyArray = [];
const improvementArray = [];

let foodChoice = 0;
let philosophyChoice = 0;
let improvementChoice = 0;

// Collect user input based on user selection
// ronSwansonApp.userChoice = function () {
    $('.food').click(function(e){
        e.preventDefault();
        ronSwansonApp.getQuotes();
        foodChoice = foodChoice + 1;
        // $('section').append(diningArray[0]);
    })

    $('.philosophy').click(function (e) {
        e.preventDefault();
        ronSwansonApp.getQuotes();
        philosophyChoice = philosophyChoice + 1;
    })
    // }
    $('.improvement').click(function (e) {
        e.preventDefault();
        ronSwansonApp.getQuotes();
        improvementChoice = improvementChoice + 1;
    })

// Make AJAX request with user inputted data
ronSwansonApp.getQuotes = function () {
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json'
    }).then(function(results) {
        if (foodChoice > 0) {
        ronSwansonApp.filterDining(results);
        } else if (philosophyChoice > 0) {
        ronSwansonApp.filterPhilosophy(results);
        } else if (improvementChoice > 0) {
        ronSwansonApp.filterImprovement(results);
        }
    }).fail(() => {
        alert('Gone fishing, try again later!');
    });
}

ronSwansonApp.filterDining = (results) => {
    results.forEach(string => {
        if (
            string.toLowerCase().includes("eggs") ||
            string.toLowerCase().includes("cholesterol") ||
            string.toLowerCase().includes("meat") ||
            string.toLowerCase().includes("steak") ||
            string.toLowerCase().includes("breakfast") ||
            string.toLowerCase().includes("food") ||
            string.toLowerCase().includes("diet") ||
            string.toLowerCase().includes("consume") ||
            string.toLowerCase().includes("turkey") ||
            string.toLowerCase().includes("milk")
            === true) {
            return diningArray.push(string);
        }
    })
    console.log('working');
    $('section').append(diningArray[0]);
}

ronSwansonApp.filterPhilosophy = (results) => {
    results.forEach(string => {
        if (
            string.toLowerCase().includes("people") ||
            string.toLowerCase().includes("love") ||
            string.toLowerCase().includes("nothing") ||
            string.toLowerCase().includes("grown") ||
            string.toLowerCase().includes("history") ||
            string.toLowerCase().includes("god") ||
            string.toLowerCase().includes("country") ||
            string.toLowerCase().includes("ever") ||
            string.toLowerCase().includes("cried") ||
            string.toLowerCase().includes("tax") ||
            string.toLowerCase().includes("dog") ||
            string.toLowerCase().includes("weak") ||
            string.toLowerCase().includes("effigy") ||
            string.toLowerCase().includes("recommendations")
        === true) {
            return philosophyArray.push(string)
        }
    })
    $('section').append(philosophyArray[0]);
}

ronSwansonApp.filterImprovement = (results) => {
    results.forEach(string => {
        if (
            string.toLowerCase().includes("yoga") ||
            string.toLowerCase().includes("motivate") ||
            string.toLowerCase().includes("crying") ||
            string.toLowerCase().includes("musk") ||
            string.toLowerCase().includes("boys") ||
            string.toLowerCase().includes("honor") ||
            string.toLowerCase().includes("punch") ||
            string.toLowerCase().includes("enthusiasm") ||
            string.toLowerCase().includes("necessary") ||
            string.toLowerCase().includes("shorts") ||
            string.toLowerCase().includes("haircut") ||
            string.toLowerCase().includes("good") ||
            string.toLowerCase().includes("rage") ||
            string.toLowerCase().includes("tears") ||
            string.toLowerCase().includes("friends")
            === true) {
            return improvementArray.push(string)
        }
    })
    $('section').append(improvementArray[0]);
}

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