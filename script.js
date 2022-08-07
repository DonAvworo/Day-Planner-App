$(document).ready(function () {
  // listen for save button clicks
  $('.saveBtn').on('click', function () {
    // get nearby values 
    let value = $(this).siblings('.description').val(); // get value from description input
    let time = $(this).parent().attr('id'); // get time from parent element

    // save in localStorage through key/value pair (oop)
    localStorage.setItem(time, value);  // set key/value pair

    // Show notification that item was saved to localStorage by adding class 'show'
    $('.notification').addClass('show'); 

    // Timeout to remove 'show' class after 20 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 20000);
  });

  function hourUpdater() {
    // get current number of hours
    let currentHour = moment().hours(); // this will be the current hour and will be used to compare to the time blocks

    // loop over time blocks
    $('.time-block').each(function () {
      let blockHour = parseInt($(this).attr('id').split('-')[1]); //parseInt will convert the string to an integer

      // check if we've moved past this time (if blockHour is less than currentHour) where blockHour is the hour of the time block
      if (blockHour < currentHour) {
        $(this).addClass('past'); // adds the class 'past' to time block if it is past the current hour (past = past hour)
      } else if (blockHour === currentHour) {
        $(this).removeClass('past'); // removes the class 'past' from time block if it is the current hour (present = current hour)
        $(this).addClass('present'); // adds the class 'present' to time block if it is the current hour (present = current hour)
      } else {
        $(this).removeClass('past'); // this removes the class 'past' from time block if it is in the future (future = future hour) 
        $(this).removeClass('present'); // this removes the class 'present' from time block if it is in the future (future = future hour)
        $(this).addClass('future'); // this adds the class 'future' to time block if it is in the future (future = future hour)
      }
    });
  }

  hourUpdater(); // this will run the hourUpdater function

  // set up interval to check if current time needs to be updated
  let interval = setInterval(hourUpdater, 15000);

  if (localStorage.getItem('hour-9') !== null) {  // if localStorage has a value for the key 'hour-9' ie  if the user has saved data for this time block  
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  }
  



  // load any saved data from localStorage

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});


 // this is the code that runs when the page is loaded 
$(document).ready(function(){ 
  // Add smooth scrolling to all links
  // on click, the event will prevent the default behavior of the link and will scroll to the element with the id of the href value
  $("a").on('click', function(event) { // on click, the event will prevent the default behavior of the link 

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      
      // this will store the hash value of the link that was clicked on (this.hash is the value of the href attribute of the link)
      let hash = this.hash; 

      // the animate function will take the hash value and scroll to the element with the id of the hash value
      //
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});