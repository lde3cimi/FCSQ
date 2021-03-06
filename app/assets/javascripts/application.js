// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require bootstrap-sprockets
//= require bootstrap
//= require_tree .

(function($){
  $(function(){
    
    $("a").addClass("waves-effect");

    $('.button-collapse').sideNav();
    $('.modal').modal();
    $('.parallax').parallax();
    $('select').material_select();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('#schedule_via_city_number').change(function(){
      var val = this.value;
      $(".ajax_form_for_city_names").remove();
      $.ajax({
      	url: "/loadcity",
      	data: {
      	  amount: val
      	},
      	dataType:"script"
      })
    });


    if ($('#query_for_schedule_status_flag').length > 0){
      var ajax_query = setInterval(function(){

        if ($('.finished_flag').length == $('#query_for_schedule_status_flag').length){
          clearInterval(ajax_query);
          return
        };

        $('.0').each(function(){ 
          $.ajax({
            url: "/schedules/" + $(this).val(),
            data: {
              id: $(this).val()
            },
            type: 'PATCH',
            dataType:"script"
          })
        });
      }, 4000);
    };
  }); // end of document ready
})(jQuery); // end of jQuery name space

