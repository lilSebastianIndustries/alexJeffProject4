function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function () {

    let ttcArray = [
        
      'Friendly driver',

      'Angry driver',

      'Wet spot on seat',

      'Person sitting too close',

      'Presto reader not working',

      'Fare inspector on board',

      'Had a convo with a rando passenger',

      'Person talking loud on phone',

      'Too many people on board to find a seat',

      'Man-spreading',

      'Someone singing',

      'Got hit by a backpack',

      'Driver does not stop at stop',

      'Someone is grooming themselves',

      'Someone is playing music too loud',

      'Backpack taking up a seat',

      'Emergency button gets pressed',

      'Unexpected detour/delay',

      'Someone eating something that smells',

      'Witness a dispute',

      'See a cute dog',

      'Get a seat with nobody beside you',

      'Someone sitting or standing too close',

      'You have to watch a TTC vehicle go past',

      'A presto card is declined',

      'Someone is sleeping',

      'Someone sitting on outside of a double seat',

      'Driver slams on the brakes at every stop'

    ];

    ttcArray = shuffle(ttcArray);

    let hackerYouArray = [

      'Intro cat video',

      'Intro dog video',

      'safiIsGreat used as a variable',

      'Mentions something about chocolate',

      'Mentions something about coffee',

      'Story about travelling',

      '"So and so, we\'re going to brunch (mitzi\'s)!"',

      '"Call a wizard!"',

      '"was that a hand I saw over there?"',

      '"can I get a show of..."',

      "safiIsGreat used as a function",

      "Awkward silence",

      '"it\'s like Greek Hell"',

      "Impersonates father",

      "Mentions beards or beardy people",

      '"it\'s the greatest thing ever!"',

      '"remember I told you..."',

      "console.log (safiIsGreat);",

      '"Albert"',

      '*clapping*',

      "Whole row wearing hackerYou hoodies",

      "Whole row wearing the same colour",

      "Emphatic tapping on the projector screen",

      "When it's both too hot and cold",

      "When there's a dog in the space",

      '"Anyone here a Carly Rae Jepsen fan?"',

      '"That Colin guy..."',

      '"Suzette, can you put that in slack?"',

      "Class answers a question together",

      "Gets someone's name wrong",

      "Miss break time by more than 1 minute",

      'Room is too cold',

      'Room is too hot',

      '*laughter*',
      
      '"Do you say jif or gif?"',

      'When all the outlets are full',

      '"When I was in bootcamp..."',

      "Types a string in all caps",

      "Eating chocolate while speaking",

      "Takes a sip of coffee mid-sentence"

    ];

  hackerYouArray = shuffle(hackerYouArray);

  let arrayChoice = ttcArray;

//Theme Selection Logic

  $("select").change(function () {
      const themeChoice = $('option:selected').attr("value");
      console.log(themeChoice);

      if (themeChoice === "ttcOption") {
        arrayChoice = ttcArray;
        for (let i = 6; i <= 30; i++) {
          const spaceAssignment = arrayChoice[i - 6];
          $("ul li:nth-child(" + i + ")").text(spaceAssignment);
          if (i == 30) {
            $(".gridItem18").text("Free Space");
            $("section").css({
              "background-image" : "url(http://www.ttc.ca/images/ttc-main-logo.gif)"
            });
            $(".gridItem").css({ "opacity": "1" });
          }
        }
      }
      if (themeChoice === "hackerYouOption") {
        arrayChoice = hackerYouArray;
        for (let i = 6; i <= 30; i++) {
          const spaceAssignment = arrayChoice[i - 6];
          $("ul li:nth-child(" + i + ")").text(spaceAssignment);
          if (i == 30) {
            $(".gridItem18").text("Free Space");
            $(".gridItem18").css({
              "background-image": "none"
            });
            $(".gridItem").css({"opacity" : "0.95"});
            $("section").css({
              "background-image": "url(https://images.ctfassets.net/kjeq3om28nk5/29EdaLLFGICqU4OwMOUumE/cf9e89ee7dac5795db6730681157d350/2019-Winter_Bootcamp-Asaf-Gerchak-1.jpg?w=800&q=50)"});
          }
        }
      }
  });

    for (let i = 6; i <= 30; i++) {
        const spaceAssignment = arrayChoice[i-6];
        $("ul li:nth-child("+ i + ")").text(spaceAssignment);
      if (i == 30) {
        $(".gridItem18").text("Free Space");
      }
    }

    //reset the select input on refresh
    $('select').prop('selectedIndex', 0);
    

    //Game Win Logic Statements 
    
    $("li").click(function() {
    const Button = $(this).attr("class");

    if (Button.includes("uncheckable") === false) {
        $(this).toggleClass("checked");
    }
      if (
        $(".gridItem6").hasClass("checked") &&
        $(".gridItem7").hasClass("checked") &&
        $(".gridItem8").hasClass("checked") &&
        $(".gridItem9").hasClass("checked") &&
        $(".gridItem10").hasClass("checked")
      ) {
        $(".gridItem6, .gridItem7, .gridItem8, .gridItem9, .gridItem10, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)"});
        $(".gridItem6").css({"animation" : "snow1 10s linear infinite"});
        $(".gridItem7").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem8").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem9").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem10").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });
        

      } else if (
        $(".gridItem11").hasClass("checked") &&
        $(".gridItem12").hasClass("checked") &&
        $(".gridItem13").hasClass("checked") &&
        $(".gridItem14").hasClass("checked") &&
        $(".gridItem15").hasClass("checked")
      ) {
        $(".gridItem11, .gridItem12, .gridItem13, .gridItem14, .gridItem15, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem11").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem12").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem13").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem14").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem15").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem16").hasClass("checked") &&
        $(".gridItem17").hasClass("checked") &&
        $(".gridItem18").hasClass("checked") &&
        $(".gridItem19").hasClass("checked") &&
        $(".gridItem20").hasClass("checked")
      ) {
        $(".gridItem16, .gridItem17, .gridItem18, .gridItem19, .gridItem20, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem16").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem17").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem18").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem19").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem20").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem21").hasClass("checked") &&
        $(".gridItem22").hasClass("checked") &&
        $(".gridItem23").hasClass("checked") &&
        $(".gridItem24").hasClass("checked") &&
        $(".gridItem25").hasClass("checked")
      ) {
        $(".gridItem21, .gridItem22, .gridItem23, .gridItem24, .gridItem25, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem21").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem22").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem23").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem24").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem25").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem26").hasClass("checked") &&
        $(".gridItem27").hasClass("checked") &&
        $(".gridItem28").hasClass("checked") &&
        $(".gridItem29").hasClass("checked") &&
        $(".gridItem30").hasClass("checked")
      ) {
        $(".gridItem26, .gridItem27, .gridItem28, .gridItem29, .gridItem30, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem26").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem27").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem28").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem29").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem30").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem6").hasClass("checked") &&
        $(".gridItem11").hasClass("checked") &&
        $(".gridItem16").hasClass("checked") &&
        $(".gridItem21").hasClass("checked") &&
        $(".gridItem26").hasClass("checked")
      ) {
        $(".gridItem6, .gridItem11, .gridItem16, .gridItem21, .gridItem26, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem6").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem11").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem16").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem21").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem26").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem7").hasClass("checked") &&
        $(".gridItem12").hasClass("checked") &&
        $(".gridItem17").hasClass("checked") &&
        $(".gridItem22").hasClass("checked") &&
        $(".gridItem27").hasClass("checked")
      ) {
        $(".gridItem7, .gridItem12, .gridItem17, .gridItem22, .gridItem27, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem7").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem12").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem17").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem22").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem27").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem8").hasClass("checked") &&
        $(".gridItem13").hasClass("checked") &&
        $(".gridItem18").hasClass("checked") &&
        $(".gridItem23").hasClass("checked") &&
        $(".gridItem28").hasClass("checked")
      ) {
        $(".gridItem8, .gridItem13, .gridItem18, .gridItem23, .gridItem28, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem8").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem13").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem18").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem23").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem28").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem9").hasClass("checked") &&
        $(".gridItem14").hasClass("checked") &&
        $(".gridItem19").hasClass("checked") &&
        $(".gridItem24").hasClass("checked") &&
        $(".gridItem29").hasClass("checked")
      ) {
        $(".gridItem9, .gridItem14, .gridItem19, .gridItem24, .gridItem29, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem9").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem14").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem19").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem24").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem29").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image" : "none" });

      } else if (
        $(".gridItem10").hasClass("checked") &&
        $(".gridItem15").hasClass("checked") &&
        $(".gridItem20").hasClass("checked") &&
        $(".gridItem25").hasClass("checked") &&
        $(".gridItem30").hasClass("checked")
      ) {
        $(".gridItem10, .gridItem15, .gridItem20, .gridItem25, .gridItem30, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem10").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem15").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem20").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem25").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem30").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem6").hasClass("checked") &&
        $(".gridItem12").hasClass("checked") &&
        $(".gridItem18").hasClass("checked") &&
        $(".gridItem24").hasClass("checked") &&
        $(".gridItem30").hasClass("checked")
      ) {
        $(".gridItem6, .gridItem12, .gridItem18, .gridItem24, .gridItem30, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem6").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem12").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem18").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem24").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem30").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });

      } else if (
        $(".gridItem10").hasClass("checked") &&
        $(".gridItem14").hasClass("checked") &&
        $(".gridItem18").hasClass("checked") &&
        $(".gridItem22").hasClass("checked") &&
        $(".gridItem26").hasClass("checked")
      ) {
        $(".gridItem10, .gridItem14, .gridItem18, .gridItem22, .gridItem26, .resetButton").css({ "position": "absolute", "background-image": "linear-gradient(red, yellow, green)", "transform": "scale(2)" });
        $(".gridItem10").css({ "animation": "snow1 10s linear infinite" });
        $(".gridItem14").css({ "animation": "snow2 10s linear infinite" });
        $(".gridItem18").css({ "animation": "snow3 10s linear infinite" });
        $(".gridItem22").css({ "animation": "snow4 10s linear infinite" });
        $(".gridItem26").css({ "animation": "snow5 10s linear infinite" });
        $(".resetButton").css({ "animation": "snow6 10s linear infinite", "background-image": "none"  });
      }
    });

});
