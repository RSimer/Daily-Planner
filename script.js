
// get the live date out of the way
    var dayay = moment().format("MMM:Do:YYYY");
    $("#currentDay").text(dayay);
// gotta make them variables
var date = new Date();
var time = date.getHours();
var save = $('.saveBtn');
var hourGet = $('hour-').data(time);

// maybe use this as the current feature for the seperate hour function so it knows 
// when to turn red
setInterval(function() {
var date = new Date();
    $('#currentTime').html(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        );
}, 500);

// creating a save upon clicking the save button and should keep the text given

var saveDat = JSON.parse(localStorage.getItem('description'));
// gotta make that button work baby!!!
save.each(function(){

});

localStorage.setItem('description', JSON.stringify(saveDat));


// hour settings 

// once document is loaded and ready
$(document).ready(function() {
  var rows = $('.row');
  var time = moment().hour();
console.log(rows);
console.log(time);
  // rows is an array of divs, let's work with each element one by one 
  rows.each(function() {
    //creates a blank slate 
    $(rows).removeClass("past");
    $(rows).removeClass("present");
    $(rows).removeClass("future");

    // code turn to number
    var hourGet = $('#hour-');
    var hourString = Number(hourGet);

    // assign a CSS class according to the current hour (calculated at the beginning)
    if (hourGet < time) {
      $(rows).addClass("past");
    } else if (hourGet === time) {
      $(rows).addClass("present");
    } else if (hourGet > time) {
      $(rows).addClass("future");
    }
    console.log(hourGet);
    console.log(hourString);
    
  });
});

// current hours === 
// future hours for loop highlight green

// creating possible for loop for the hour function


