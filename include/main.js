$( "#intro h3" ).hover(function() {
  $( this ).animate({opacity: "0"}, "slow");
});



var waypoint = $("#about").waypoint({
    handler: function(){
        $("#intro h3").animate({opacity: "0.6"}, "slow");
    },
    offset: "50%"
});

var waypoint = $(".div4").waypoint({
  handler: function() {
            $(".meter #htmlskill").animate({width: "70%"}, 1000);
            $(".meter #cssskill").animate({width: "55%"},  1000);
            $(".meter #javascriptskill").animate({width: "35%"}, 1000);
            $(".meter #gitskill").animate({width: "50%"}, 1000);
            $(".meter #phpskill").animate({width: "50%"}, 1000);
            $(".meter #pythonskill").animate({width: "15%"}, 1000);
    console.log('Basic waypoint triggered');
  },
  offset: "30%"
});
