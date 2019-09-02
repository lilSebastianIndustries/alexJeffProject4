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
    ronSwansonApp.foodQuoteFromArray = ronSwansonApp.diningArray[0];
    ronSwansonApp.foodQuote = `
    <div class="speechBubble quoteBubble">
        <p class="quote">${ronSwansonApp.foodQuoteFromArray}</p>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I asked Ron Swanson for dining advice and he said, “${ronSwansonApp.foodQuoteFromArray}” #AskRonSwanson at" data-url="https://bit.ly/2jVoOxf" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>

    <form class="animated fadeIn delay-2s">
        <button type="submit" class="animated infinite pulse slower">Ask me something else or get out of my sight.</button>
    </form>`;
    $('.form').hide();
    $(".quoteDisplay")
      .hide()
      .append(ronSwansonApp.foodQuote)
      .fadeIn(1000)
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
    ronSwansonApp.philosophyQuoteFromArray = ronSwansonApp.philosophyArray[0];
    ronSwansonApp.philosophyQuote = `
        <div class="speechBubble quoteBubble">
            <p class="quote">${ronSwansonApp.philosophyQuoteFromArray}</p>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I asked Ron Swanson for philosophical advice and he said, “${ronSwansonApp.philosophyQuoteFromArray}” #AskRonSwanson at" data-url="https://bit.ly/2jVoOxf" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        <form class="animated fadeIn delay-2s">
            <button type="submit" class="animated infinite pulse slower">Ask me something else or get out of my sight.</button>
        </form>`;
    $(".form").hide();
    $(".quoteDisplay")
        .hide().append(ronSwansonApp.philosophyQuote).fadeIn(1000)
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
    ronSwansonApp.improvementQuoteFromArray = ronSwansonApp.improvementArray[0];
    ronSwansonApp.improvementQuote = `
        <div class="speechBubble quoteBubble">
            <p class="quote">${ronSwansonApp.improvementQuoteFromArray}</p>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I asked Ron Swanson for self-improvement advice and he said, “${ronSwansonApp.improvementQuoteFromArray}” #AskRonSwanson at" data-url="https://bit.ly/2jVoOxf" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        
        <form class="animated fadeIn delay-2s">
            <button type="submit" class="animated infinite pulse slower">Ask me something else or get out of my sight.</button>
        </form>`
    $(".form").hide();
    $(".quoteDisplay")
        .hide().append(ronSwansonApp.improvementQuote).fadeIn(1000)
        .css("position", "static");
}

ronSwansonApp.badgeSwap = () => {
    $('.approveBadge').click(function () {
        $(".approveBadge").attr('src', "assets/ron_disapproves.png");
    });
}

// Start ronSwansonApp
ronSwansonApp.init = function () {
    ronSwansonApp.userChoice();
    ronSwansonApp.badgeSwap();
};

// Once the page is loaded run all functions in ronSwansonApp
$(document).ready(function () {
    ronSwansonApp.init();
});