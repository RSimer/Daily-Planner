
var date = moment().format("MMM:Do:YYYY");
$("#currentDay").text(date);


// maybe use this as the current feature for the seperate hour function so it knows 
// when to turn red
setInterval(function() {
    var date = new Date();
    $('#currentTime').html(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        );
}, 500);



