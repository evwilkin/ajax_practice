$(document).ready(function() {

  var results = [];

  $("button").on("click", function(e) {
    var d = new Date();
    e.preventDefault();
    var $userInput = $("input").val();
    //Reset input box
    $("input").val("");
    $("#showData").html("");
    results = [];
    //Send request
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.reddit.com/search.json?q="+$userInput, true);
    xhr.send();

    xhr.onload = function(data) {
      if (xhr.status === 200) {
        var response = JSON.parse(data.currentTarget.responseText);
        response.data.children.forEach(function(child) {
          results.push(child);
        });
        results.forEach(function(item) {
          $("#showData").append("<li>"+item.data.title+"</li>");
        });
        var day = new Date();
        console.log(day - d);
      }
    };

  });

});