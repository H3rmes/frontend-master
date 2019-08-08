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
          $(".user_item").addClass('active_tab');
          $(".c-card__subtitle").html("Hi, My name is");
          $(".c-card__title").html(_this.fullname);
          $(".u-image").attr('src', _this.picture);
        }
      });

     
    $(".user_item").hover(function() { 
        var title = "Hi, My name is";
        var fullname  = _this.fullname;

        // Remove active class
        if(!$(".user_item").hasClass("active_tab")) {
            $('.user_item').addClass('active_tab');
        }

        if($(".email_item").hasClass("active_tab")) {
            $('.email_item').removeClass('active_tab');
        }

        if($(".calender_item").hasClass("active_tab")) {
            $('.calender_item').removeClass('active_tab');
        }

        if($(".location_item").hasClass("active_tab")) {
            $('.location_item').removeClass('active_tab');
        }

        if($(".call_item").hasClass("active_tab")) {
            $('.call_item').removeClass('active_tab');
        }

        if($(".locked_item").hasClass("active_tab")) {
            $('.locked_item').removeClass('active_tab');
        }

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(fullname);
    });

    $(".email_item").hover(function() { 
        var title = "My email address is";
        var email  = _this.email;

        // Remove active class
        if($(".user_item").hasClass("active_tab")) {
            $('.user_item').removeClass('active_tab');
        }

        if(!$(".email_item").hasClass("active_tab")) {
            $('.email_item').addClass('active_tab');
        }

        if($(".calender_item").hasClass("active_tab")) {
            $('.calender_item').removeClass('active_tab');
        }

        if($(".location_item").hasClass("active_tab")) {
            $('.location_item').removeClass('active_tab');
        }

        if($(".call_item").hasClass("active_tab")) {
            $('.call_item').removeClass('active_tab');
        }

        if($(".locked_item").hasClass("active_tab")) {
            $('.locked_item').removeClass('active_tab');
        }

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(email);
    });

    $(".calender_item").hover(function() { 
        var title = "My birthday is";
        var dob  = new Date(_this.dob);

        // Remove active class
        if($(".user_item").hasClass("active_tab")) {
            $('.user_item').removeClass('active_tab');
        }

        if($(".email_item").hasClass("active_tab")) {
            $('.email_item').removeClass('active_tab');
        }

        if(!$(".calender_item").hasClass("active_tab")) {
            $('.calender_item').addClass('active_tab');
        }

        if($(".location_item").hasClass("active_tab")) {
            $('.location_item').removeClass('active_tab');
        }

        if($(".call_item").hasClass("active_tab")) {
            $('.call_item').removeClass('active_tab');
        }

        if($(".locked_item").hasClass("active_tab")) {
            $('.locked_item').removeClass('active_tab');
        }

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(dob.getDate()+"/"+dob.getMonth()+"/"+dob.getFullYear());
    });

    $(".location_item").hover(function() { 
        var title = "My address is";
        var location  = _this.location;

        // Remove active class
        if($(".user_item").hasClass("active_tab")) {
            $('.user_item').removeClass('active_tab');
        }

        if($(".email_item").hasClass("active_tab")) {
            $('.email_item').removeClass('active_tab');
        }

        if($(".calender_item").hasClass("active_tab")) {
            $('.calender_item').removeClass('active_tab');
        }

        if(!$(".location_item").hasClass("active_tab")) {
            $('.location_item').addClass('active_tab');
        }

        if($(".call_item").hasClass("active_tab")) {
            $('.call_item').removeClass('active_tab');
        }

        if($(".locked_item").hasClass("active_tab")) {
            $('.locked_item').removeClass('active_tab');
        }
        

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(location);
    });

    $(".call_item").hover(function() { 
        var title = "My phone number is";
        var cell  = _this.cell;

        // Remove active class
        if($(".user_item").hasClass("active_tab")) {
            $('.user_item').removeClass('active_tab');
        }

        if($(".email_item").hasClass("active_tab")) {
            $('.email_item').removeClass('active_tab');
        }

        if($(".calender_item").hasClass("active_tab")) {
            $('.calender_item').removeClass('active_tab');
        }

        if($(".location_item").hasClass("active_tab")) {
            $('.location_item').removeClass('active_tab');
        }

        if(!$(".call_item").hasClass("active_tab")) {
            $('.call_item').addClass('active_tab');
        }

        if($(".locked_item").hasClass("active_tab")) {
            $('.locked_item').removeClass('active_tab');
        }

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(cell);
    });

    $(".locked_item").hover(function() { 
        var title = "My password is";
        var password  = _this.password;

        // Remove active class
        if($(".user_item").hasClass("active_tab")) {
            $('.user_item').removeClass('active_tab');
        }

        if($(".email_item").hasClass("active_tab")) {
            $('.email_item').removeClass('active_tab');
        }

        if($(".calender_item").hasClass("active_tab")) {
            $('.calender_item').removeClass('active_tab');
        }

        if($(".location_item").hasClass("active_tab")) {
            $('.location_item').removeClass('active_tab');
        }

        if($(".call_item").hasClass("active_tab")) {
            $('.call_item').removeClass('active_tab');
        }

        if(!$(".locked_item").hasClass("active_tab")) {
            $('.locked_item').addClass('active_tab');
        }

        $(".c-card__subtitle").html(title);
        $(".c-card__title").html(password);
    });
 }
