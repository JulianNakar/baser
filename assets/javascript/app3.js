$(document).ready(function () {
    var userInputLocation;

    $("#getLocalBreweriesBTN").on("click", function (event) {
        event.preventDefault();
        $("#infoSection2").empty();
        userInputLocation = $("#getLocalBreweries").val().trim();
        getCoordinates();
    });

    var latitude;
    var longitude;

    function getCoordinates() {
        var apiKeyOC = "eda741edd1bb4cfd978a562dbfb881dc";
        var queryURL = "https://api.opencagedata.com/geocode/v1/json?q=" + userInputLocation + "&key=" + apiKeyOC;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (i = 0; i < response.results.length; i++) {
                latitude = response.results[i].geometry.lat;
                longitude = response.results[i].geometry.lng;
            }
            findBreweries();
        });
    }

    function findBreweries() {
        var apiKeyG = "AIzaSyC0X5NQfT5WGSrCPeonIM9t4ByX7TgO1JY";
        var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=50000&keyword=breweries&key=" + apiKeyG;
        // "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&locationbias=point:40.2206,-74.7597&input=breweries&key=" + apiKeyG;
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
            for (i = 0; i < response.results.length; i++) {
                var name = response.results[i].name;
                var infoDiv = $("<button>")
                var rating = response.results[i].rating;
                var button = $("<button>").text("Description");
                // var image = $("<img>").attr("src", response.results[i].photos[i]["html.attributions[i]"]);
                var name = response.results[i].name + " -- " + " Rating: " + rating;
                var infoDiv = $("<div>");
                var infoSection = $("#infoSection2");
                infoDiv.append(button);
                infoDiv.prepend(name);
                infoDiv.append("<br>");
                infoDiv.append("<hr>");
                infoSection.prepend(infoDiv);
            }
            $("button").on("click", function (event) {
                event.preventDefault;
                console.log("it works");
            });
        
        });

    }

    // $("button").on("click", function (event) {
    //     event.preventDefault;
    //     console.log("it works");
    // });

});