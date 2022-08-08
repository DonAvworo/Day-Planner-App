$(document).ready(function () { 
  // listen for save button clicks

  // the dollar ($) sign is used to select the element that has the class of saveBtn and the click event
  // the .on() method is used to listen for the click event on the element that has the class of saveBtn
  // the function () is used to execute the code inside the function when the event is triggered
  $('.saveBtn').on('click', function () { 
    // get nearby values 
    let value = $(this).siblings('.description').val(); // get the description value from the form element that was clicked on
    let time = $(this).parent().attr('id'); // get time from parent element

    // save in localStorage through key/value pair (oop)
    localStorage.setItem(time, value);  // set key/value pair in localStorage object (oop)

    // Show notification that item was saved to localStorage by adding class 'show'
    $('.notification').addClass('show'); // .addclass keyword adds class to the element (not the element itself)

    // Timeout to remove 'show' class after 20 seconds
    setTimeout(function () {
      $('.notification').removeClass('show'); //.notification is the class of the notification and the removeclass keyword 
                                              // removes the class from the element (not the element itself)
    }, 20000);
  });

  function updateTime() {
    // get the current time
    let currentTime = moment().hours(); // this will be the current hour and will be used to compare to the time blocks

    // loop over time blocks
    $('.time-block').each(function () { // this will loop over each time block and will be used to compare to the current hour
      let timeBlock = parseInt($(this).attr('id').split('-')[1]); //parseInt will convert the string to an integer split will split...
                                                                  //...the string at the - and take the second element and convert it to an integer
      // check if we've moved past this time (if blockHour is less than currentHour) where blockHour is the hour of the time block
      if (timeBlock < currentTime) { // if timeBlock is less than currentTime
        $(this).addClass('past'); // adds the class 'past' (changes the color of the time block using the css class 'past')
      } else if (timeBlock === currentTime) { // if timeBlock is equal to currentTime
        $(this).removeClass('past'); // removes the class 'past' from time block if it is the current hour (present = current hour(color))
        $(this).addClass('present'); // adds the class 'present' to time block if it is the current hour (present = current hour)
      } else {
        $(this).removeClass('past'); // this removes the class 'past' from time block if it is in the future (future = future hour) 
        $(this).removeClass('present'); // this removes the class 'present' from time block if it is in the future (future = future hour)
        $(this).addClass('future'); // this adds the class 'future' to time block if it is in the future (future = future hour)
      }
    });
  }

  updateTime(); // this will run the hourUpdater function

  // set up interval to check if current time needs to be updated
  let interval = setInterval(updateTime, 15000);

  // saved data from localStorage will be loaded into the description input
  if (localStorage.getItem('hour-1') !== null) { // if localStorage has a value for the key 'hour-10' ie  if the user has saved data for this time block...
    $('#hour-1 .description').val(localStorage.getItem('hour-1')); // ...load the value for the key 'hour-1' into the description input
  }
  if (localStorage.getItem('hour-2') !== null) { 
    $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  }
  if (localStorage.getItem('hour-3') !== null) {
    $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  }
  if (localStorage.getItem('hour-4') !== null) {
    $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  }
  if (localStorage.getItem('hour-5') !== null) {
    $('#hour-5 .description').val(localStorage.getItem('hour-5'));
  }
  if (localStorage.getItem('hour-6') !== null) {
    $('#hour-6 .description').val(localStorage.getItem('hour-6'));
  }
  if (localStorage.getItem('hour-7') !== null) {
    $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  }
  if (localStorage.getItem('hour-8') !== null) {
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  }
  if (localStorage.getItem('hour-9') !== null) {
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  }
  if (localStorage.getItem('hour-10') !== null) {
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  }
  if (localStorage.getItem('hour-11') !== null) {
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  }
  if (localStorage.getItem('hour-12') !== null) {
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  }
  if (localStorage.getItem('hour-13') !== null) {
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  }
  if (localStorage.getItem('hour-14') !== null) {
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  }
  if (localStorage.getItem('hour-15') !== null) {
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  }
  if (localStorage.getItem('hour-16') !== null) {
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  }
  if (localStorage.getItem('hour-17') !== null) {
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  }
  if (localStorage.getItem('hour-18') !== null) {
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  }
  if (localStorage.getItem('hour-19') !== null) {
    $('#hour-19 .description').val(localStorage.getItem('hour-19'));
  }
  if (localStorage.getItem('hour-20') !== null) {
    $('#hour-20 .description').val(localStorage.getItem('hour-20'));
  }
  if (localStorage.getItem('hour-21') !== null) {
    $('#hour-21 .description').val(localStorage.getItem('hour-21'));
  }
  if (localStorage.getItem('hour-22') !== null) {
    $('#hour-22 .description').val(localStorage.getItem('hour-22'));
  }
  if (localStorage.getItem('hour-23') !== null) {
    $('#hour-23 .description').val(localStorage.getItem('hour-23'));
  }
  if (localStorage.getItem('hour-24') !== null) {
    $('#hour-24 .description').val(localStorage.getItem('hour-24'));
  }

  // save data to localStorage when user submits the form
  $('#saveBtn').on('click', function(event) { // when the user clicks the save button
    event.preventDefault(); // prevent the default action of the form from happening (ie submit)
    let hour = $(this).siblings('.time-block').attr('id'); // get the id of the time block the user is saving data for
    let description = $(this).siblings('.description').val(); // get the value of the description input
    localStorage.setItem(hour, description); // save the value of the description input to localStorage under the key of the hour the user is saving data for
  }
  );
} 
); // end of document ready function


// display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do')); // this will display the current day on the page
