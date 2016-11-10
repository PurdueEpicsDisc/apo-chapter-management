Template.EventsList.events({
});
Template.EventsList.helpers({
  events: function () {
    return Events.find();
  },
  startDateFormatted: function () {
    return moment(this.startDate).utc().format("MMM Do YYYY, h:mm");
  },
  endDateFormatted: function () {
    return moment(this.endDate).utc().format("MMM Do YYYY, h:mm");
  },
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete issue: "' + doc.title + '"?')) {
        this.remove();
        Router.go('eventsList');
      }
    };
  }
});

/*****************************************************************************/
/* EventsList: Lifecycle Hooks */
/*****************************************************************************/
Template.EventsList.onCreated(function () {
});

Template.EventsList.onRendered(function () {
});

Template.EventsList.onDestroyed(function () {
});
