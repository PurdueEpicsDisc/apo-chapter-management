/*****************************************************************************/
/* Events: Event Handlers */
/*****************************************************************************/
Template.Events.events({
});

/*****************************************************************************/
/* Events: Helpers */
/*****************************************************************************/
Template.Events.helpers({
    
    events: function() {
        
        return Events.find();
    },
    startDateFormatted: function () {
        return moment(this.startDate).utc().format("MMM Do YYYY, h:mm");
      },
    endDateFormatted: function () {
        return moment(this.endDate).utc().format("MMM Do YYYY, h:mm");
    },
});

/*****************************************************************************/
/* Events: Lifecycle Hooks */
/*****************************************************************************/
Template.Events.onCreated(function () {
});

Template.Events.onRendered(function () {
});

Template.Events.onDestroyed(function () {
});
