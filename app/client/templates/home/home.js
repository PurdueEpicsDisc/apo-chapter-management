/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
    
    jQuery(document).ready(function($) {
 
        $(".gototop").click(function(event){   
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
            $(".scroll li").removeClass('active');
            $(this).parents('li').toggleClass('active');
            });
    });
    

    new WOW().init();
    
});

Template.Home.onDestroyed(function () {
});
