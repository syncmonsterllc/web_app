$(document).ready(function(){
    $("#close").click(function(){
        $("#acc").hide();
    });
    $("#acc_open").click(function(){
        $("#acc").show(1000);
    });
    $("#acc_open").click(function(){
        $("#close").hide();
    });
    $("#acc_open").click(function(){
        $("#open").show(1000);
    });

});

$(document).ready(function(){
    $(".det_display").click(function(){
        $("#det").show(550);
    });
    $("#exit").click(function(){
        $("#det").hide(550);
    });
});

$(document).ready(function(){
    $("#account_tab").click(function(){
        $("#account_tab_content").show();
    });
    $("#account_tab").click(function(){
        $("#connect_tab_content").hide();
    });
    $("#account_tab").click(function(){
        $("#warning_tab_content").hide();
    });
    $("#account_tab").click(function(){
        $("#account_tab").addClass("active");
    });
    $("#account_tab").click(function(){
        $("#warning_tab").removeClass("active");
    });
    $("#account_tab").click(function(){
        $("#connect_tab").removeClass("active");
    });


    $("#connect_tab").click(function(){
        $("#connect_tab_content").show();
    });
    $("#connect_tab").click(function(){
        $("#account_tab_content").hide();
    });
    $("#connect_tab").click(function(){
        $("#warning_tab_content").hide();
    });
    $("#connect_tab").click(function(){
        $("#connect_tab").addClass("active");
    });
    $("#connect_tab").click(function(){
        $("#warning_tab").removeClass("active");
    });
    $("#connect_tab").click(function(){
        $("#account_tab").removeClass("active");
    });



    $("#warning_tab").click(function(){
        $("#warning_tab_content").show();
    });
    $("#warning_tab").click(function(){
        $("#connect_tab_content").hide();
    });
    $("#warning_tab").click(function(){
        $("#account_tab_content").hide();
    });
    $("#warning_tab").click(function(){
        $("#warning_tab").addClass("active");
    });
    $("#warning_tab").click(function(){
        $("#account_tab").removeClass("active");
    });
    $("#warning_tab").click(function(){
        $("#connect_tab").removeClass("active");
    });
});
