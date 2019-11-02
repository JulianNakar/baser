$(document).ready(function () {

    var userInput;
    $("#submitBTN").on("click", function (event) {
        event.preventDefault();
        userInput = $("#inlineFormInputName2").val().trim();
        displayBeerStyle();
    });

    function displayBeerStyle(event) {
        $("#beerStyleList").empty();
        var apiKey = "236b3591f8f9cc9a8b4672d788d3ab7b";
        var queryURL = "https://sandbox-api.brewerydb.com/v2/search?q=" + userInput + "&key=" + apiKey;

        $.ajax({
            url: "https://enigmatic-beyond-33445.herokuapp.com/cors",
            method: "POST",
            data: {
                url: queryURL,
                method: "GET",
                key: "6a00bee3031c82ad63a1aae5555a6e3b",
            },
        }).then(function (response) {
            console.log(response);
        });
    };

    var userInputLocation;
    $("#submitBTNLocation").on("click", function (event) {
        event.preventDefault();
        userInputLocation = $("#inlineFormInputName3").val().trim();
        displayBreweryLocation();
    });

    function displayBreweryLocation(event) {
        var apiKey = "236b3591f8f9cc9a8b4672d788d3ab7b";
        var queryURL = "https://sandbox-api.brewerydb.com/v2/menu/categories?q=" + userInputLocation + "&key=" + apiKey;

        console.log(queryURL)
        $.ajax({
            url: "https://enigmatic-beyond-33445.herokuapp.com/cors",
            method: "POST",
            data: {
                url: queryURL,
                method: "GET",
                key: "6a00bee3031c82ad63a1aae5555a6e3b",
            },
        }).then(function (response1) {
            console.log(response1);
            
        });
    }


    $(document).on("click", ".beer", function() {
        console.log("run")
        console.log(this.value)
        $(".modal-body").text(this.value)

    })

    var userInputAvailability;
    $("#submitBeerAvailability").on("click", function (event) {
        event.preventDefault();
        userInputAvailability = $("#inlineFormInputName4").val().trim();
        displayBeerAvailability();
    });

    function displayBeerAvailability(event) {
        var apiKey = "236b3591f8f9cc9a8b4672d788d3ab7b";
        var queryURL = "https://sandbox-api.brewerydb.com/v2/search/geo/point?radius=100&lat=40.741895&lng=-73.989308&key=" + apiKey;

        console.log(queryURL)
        $.ajax({
            url: "https://enigmatic-beyond-33445.herokuapp.com/cors",
            method: "POST",
            data: {
                url: queryURL,
                method: "GET",
                key: "6a00bee3031c82ad63a1aae5555a6e3b",
            },
        }).then(function (response2) {
            console.log(response2);
        });
    }
    displayBeerAvailability();
});