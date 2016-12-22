$(function(){

    var templates = {
        progress: "<div class='progress'>\
        <div class='indeterminate'></div>\
        </div>"
    };

    $(".parallax").parallax();
    $(".carousel.full").carousel({
        full_width: true,
        no_wrap: true
    });

    $(".button-collapse").sideNav();

    $(".scrollSpy").scrollSpy({
        scrollOffset: 60
    });

    $("select.material-select").material_select();

    $("#nav-mobile").find("li").find("a").click(function() {
        $('.button-collapse').sideNav('hide');
    });

    $("#view-portfolio-item").modal({
        ready: function(modal, trigger) {
            $.post("endpoints/portfolio-item.html", {}, function(data) {
                $(modal).find(".modal-content").html(data);
                $(modal).find(".carousel").carousel({
                    full_width: true,
                    no_wrap: true
                });
            });
        },
        complete: function(modal) {
            $(modal).find(".modal-content").html(templates.progress);
        }
    });


    var floatingScrollBtn = $("#floatingHome");

    var onScroll;
    $(window).scroll(onScroll = function(e){
        if(document.body.scrollTop > 300) {
            floatingScrollBtn.fadeIn("fast");
        } else {
            floatingScrollBtn.fadeOut("fast");
        }

        if(document.body.scrollTop > 80 && $("#header").hasClass("top-pos")) {
            $("#header").removeClass("top-pos");
        } else if(document.body.scrollTop <= 80 && !$("#header").hasClass("top-pos")) {
            $("#header").addClass("top-pos");
        }

    });
    onScroll();
});