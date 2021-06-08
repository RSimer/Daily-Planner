
var dayay = moment().format("MMM:Do:YYYY");
$("#currentDay").text(dayay);
var date =new Date();
var time = date.getHours();
// maybe use this as the current feature for the seperate hour function so it knows 
// when to turn red
setInterval(function() {

    $('#currentTime').html(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        );
}, 500);

// creating a save upon clicking the save button and should keep the text given
$('.saveBtn').on('click', function(){
    
    $('textarea[type="text"]').each(function(){
        var  id =$(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id,value);

    });


});

$('.saveBtn').on('load', function(){

    $('textarea[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);

    }); 
});


// hour settings 

// once document is loaded and ready
$(document).ready(function() {
  var rows = $("div.row")

  // rows is an array of divs, let's work with each element one by one 
  $.each(rows, function(_i, row) {
    //remove previous classes assigned to it (this may not be necessary)
    $(row).removeClass("past");
    $(row).removeClass("present");
    $(row).removeClass("future");

    // Read the value of the data-time attribute & turn it into a number
    var dataAttString = $(row).data('time');
    var dataAttNum = Number(dataAttString);

    // assign a CSS class according to the current hour (calculated at the beginning)
    if (dataAttNum < time) {
      $(row).addClass("past");
    } else if (dataAttNum === time) {
      $(row).addClass("present");
    } else if (dataAttNum > time) {
      $(row).addClass("future");
    }
  });
});