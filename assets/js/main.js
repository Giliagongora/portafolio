
$(document).ready(function(){

// funcionalidad al navbar
  $('.button-collapse').sideNav({
      menuWidth: 170, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens, 
    }
  );

//slider
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });




});
