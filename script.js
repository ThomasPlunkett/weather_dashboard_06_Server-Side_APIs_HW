var searchForm = $("search-form");
var searchTermEl = $("#search-term");




searchForm.on("submit", function(event) {
    event.preventDefault();
    // grab the search term out of the input.
    var searchTermEl = searchTermEl.val();
    console.log(searchTerm);
  
    // build API url with search term and the API key
    // store the API key in a variable
    // make and API call using fetch
    // convert the response from JSON
    // start by console logging the data.

});
