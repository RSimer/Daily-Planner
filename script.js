
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

// creating a save upon clicking the save button and should keep the text given
$('.saveBtn').on('click', function(){
    
    $('textarea').each(function(){
        var  id =$(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id,value);

    });


});

