/**
 * Javascript file for Frontend Master
 * @author Bongani Ndhlovu
 * 
 */

 // Display engine object
 var MAIN_PAGE;

 $(function() {
    MAIN_PAGE = new MainPage();
 })

 function MainPage() {
    var _this = this;
    var fullname;
    var email;
    var dob;
    var location;
    var cell;
    var password;
    var picture;

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
           console.log(data);
          _this.fullname = data.results[0].name.first +" "+ data.results[0].name.last;
          _this.email = data.results[0].email;
          _this.dob = data.results[0].dob.date;
          _this.location = data.results[0].location.street;
          _this.cell = data.results[0].cell;
          _this.password = data.results[0].login.password;
          _this.picture = data.results[0].picture.large;
        
          // initial conditions
          $(".user").addClass('active');
          $(".c-card__subtitle").html("Hi, My name is");
          $(".c-card__title").html(_this.fullname);
          $(".u-image").attr('src', _this.picture);
        }
      });

     
    $(".user").hover(function() { 
        var title = "Hi, My name is";
        var fullname  = _this.fullname;

        // Remove active class
        $('.user').removeClass('active')

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(fullname);
    });

    $(".email").hover(function() { 
        var title = "My email address is";
        var email  = _this.email;

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(email);
    });

    $(".calender").hover(function() { 
        var title = "My birthday is";
        var dob  = new Date(_this.dob);
        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(dob.getDate()+"/"+dob.getMonth()+"/"+dob.getFullYear());
    });

    $(".location").hover(function() { 
        var title = "My address is";
        var location  = _this.location;

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(location);
    });

    $(".call").hover(function() { 
        var title = "My phone number is";
        var cell  = _this.cell;

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(cell);
    });

    $(".locked").hover(function() { 
        var title = "My password is";
        var password  = _this.password;

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(password);
    });
 }
