// Create app namespace to hold all methods
const ronSwansonApp = {};

ronSwansonApp.apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/63";
ronSwansonApp.diningArray = [];
ronSwansonApp.philosophyArray = [];
ronSwansonApp.improvementArray = [];

ronSwansonApp.foodChoice = 0;
ronSwansonApp.philosophyChoice = 0;
ronSwansonApp.improvementChoice = 0;

// Collect user input based on user selection
ronSwansonApp.userChoice = function () {
    $('.food').click(function(e){
        e.preventDefault();
        ronSwansonApp.getQuotes();
        ronSwansonApp.foodChoice = ronSwansonApp.foodChoice + 1;
    })

    $('.philosophy').click(function (e) {
        e.preventDefault();
        ronSwansonApp.getQuotes();
        ronSwansonApp.philosophyChoice = ronSwansonApp.philosophyChoice + 1;
    })
    // }
    $('.improvement').click(function (e) {
        e.preventDefault();
        ronSwansonApp.getQuotes();
        ronSwansonApp.improvementChoice = ronSwansonApp.improvementChoice + 1;
    })
}

// Make AJAX request with user inputted data
ronSwansonApp.getQuotes = function () {
    $.ajax({
        url: ronSwansonApp.apiUrl,
        method: 'GET',
        dataType: 'json'
    }).then(function(results) {
        if (ronSwansonApp.foodChoice > 0) {
        ronSwansonApp.filterDining(results);
        } else if (ronSwansonApp.philosophyChoice > 0) {
        ronSwansonApp.filterPhilosophy(results);
        } else if (ronSwansonApp.improvementChoice > 0) {
        ronSwansonApp.filterImprovement(results);
        }
    }).fail(() => {
        alert('Gone fishing, try again later!');
    });
}

// Filter for dining advice
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
            return ronSwansonApp.diningArray.push(string);
        }
    })
    const foodQuote = ronSwansonApp.diningArray[0];
    $('.form').hide();
    $('.quoteDisplay')
      .hide().append(`<p class="speech-bubble quote">${foodQuote}</p>`).fadeIn(1000)
      .css("position", "static");
}

// Filter array for philosophical advice and append on page
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
            return ronSwansonApp.philosophyArray.push(string)
        }
    })
    const philosophyQuote = ronSwansonApp.philosophyArray[0];
    $(".form").hide();
    $(".quoteDisplay")
        .hide().append(`<p class="speech-bubble quote">${philosophyQuote}</p>`).fadeIn(1000)
        .css("position", "static");
}

// Filter array for self-improvement advice
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
            return ronSwansonApp.improvementArray.push(string)
        }
    })
    const improvementQuote = ronSwansonApp.improvementArray[0];
    $(".form").hide();
    $(".quoteDisplay")
        .hide().append(`<p class="speech-bubble quote">${improvementQuote}</p>`).fadeIn(1000)
        .css("position", "static");
}

// Start ronSwansonApp
ronSwansonApp.init = function () {
    ronSwansonApp.userChoice();
};

// Once the page is loaded run all functions in ronSwansonApp
$(document).ready(function () {
    ronSwansonApp.init();
});