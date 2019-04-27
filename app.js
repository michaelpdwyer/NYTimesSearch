<button id="search">Search</button>

    <div id="search-results"></div>

  // Need to figure out this button to get info from the form
  numRecords = 3;
searchTerm = "trump"

var searchWord = "q=" + searchTerm + "&";
var numberOfRecords = numRecords;
//   var startingYear = startYear;
//   var endingYear = endYear;

$("#search").on("click", function () {
    APIkey = "api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";
    var query = $(this).attr("data-query");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + searchWord + APIkey;
    //    https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
    var results;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (res) {
            console.log(res);


        });
    for (var i = 0; i <= numberOfRecords; i++) {

        var articleDiv = $("<div>");

        var article = res.reponse.docs[i];

        var headline = article.headline[0];

        var p = $("<h1>").text(headline);

        console.log(headline);

        // var personImage = $("<img>");
        // personImage.attr("src", results[i].images.fixed_height.url);

        // gifDiv.prepend(p);
        // gifDiv.prepend(personImage);

        $("#search-results").prepend(articleDiv);

    }
});