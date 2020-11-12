
$(document).ready(function () {
     
     $("#resbtn").on('click',function(){
          var input =  '';
                input =  $('#name').val()
                email =  $('#email').val()
                date =  $('#date').val()
                party =  $('#party').val()

      alert(input+" your table is booked on "+ date+" for "+party+" people " +", we will send a confirmation to "+email)
         });
       });


 function myFunction() {
        var x = document.getElementById("myLinks");
 
            if (x.style.display === "block") {
                x.style.display = "none";
               } 
            else {
                x.style.display = "block";
               }
              }




   $(function () {
      $(document).ajaxStart(function () {      
          $('.lds-dual-ring').show();
      });
  
      $(document).ajaxStop(function () {        
          $('.lds-dual-ring').hide();
      });
  
      navigator.geolocation.getCurrentPosition(function (position) {
  
          $.ajax({
              method: "GET",                                                                                        
              url: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=' + position.coords.latitude + ',' + position.coords.longitude,
              dataType: "json"                                                                                     
               }) 
         
            .done(function (data) {
                  $.ajax({
                       method: 'GET',
                      url: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/' + data[1].woeid,
                      dataType: 'json'
                   })
            .done(function (data) {
                       $('#location').text(data.title);
                       $('#min-temp').text(Math.round(data.consolidated_weather[1].min_temp));
                       $('#max-temp').text(Math.round(data.consolidated_weather[1].max_temp));
                       $('#weather-state').attr('src', 'https://www.metaweather.com/static/img/weather/' + data.consolidated_weather[1].weather_state_abbr + '.svg');
                                                                                                                       
                   })
            .always(function () {
                      $('.lds-ring').hide();
                      });
                   });
                });
             });











