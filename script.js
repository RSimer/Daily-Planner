
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

// var saveDat = JSON.parse(localStorage.getItem('description'));
// gotta make that button work baby!!!


// localStorage.setItem('description', JSON.stringify(saveDat));


// hour settings 

// once document is loaded and ready
$(document).ready(function() {
  var rows = $('.row');
  var time = moment().hours();
  $('.time-block').each(function(){
    var blockHour = parseInt($(this).attr("id").split("-")[1])
    if(blockHour < time){
      $(this).addClass('past');

      console.log(this);
    
    }else if(blockHour === time){
      $(this).removeClass('past');
      $(this).addClass('present');
    }else{
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })


$('.saveBtn').on('click',function(){

  var textVal = $(this).siblings(".description").val();
  var time = $(this).parent().attr('id');

  console.log(textVal, time);
  localStorage.setItem(time,textVal);
})

console.log(rows);
console.log(time);



 $('#hour-9 .description').val(localStorage.getItem("hour-9"));
 $('#hour-10 .description').val(localStorage.getItem("hour-10"));
 $('#hour-11 .description').val(localStorage.getItem("hour-11"));
 $('#hour-12 .description').val(localStorage.getItem("hour-12"));
 $('#hour-13 .description').val(localStorage.getItem("hour-13"));
 $('#hour-14 .description').val(localStorage.getItem("hour-14"));
 $('#hour-15 .description').val(localStorage.getItem("hour-15"));
 $('#hour-16 .description').val(localStorage.getItem("hour-16"));
 $('#hour-17 .description').val(localStorage.getItem("hour-17"));
});




