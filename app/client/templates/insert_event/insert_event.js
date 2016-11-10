/*****************************************************************************/
/* InsertEvent: Event Handlers */
/*****************************************************************************/
Template.InsertEvent.events({
});

/*****************************************************************************/
/* InsertEvent: Helpers */
/*****************************************************************************/
Template.InsertEvent.helpers({
});

AutoForm.hooks({
  insertEvent: {
    onSuccess: function(doc) {
      Router.go('eventsList');
    }
  }
});


/*****************************************************************************/
/* InsertEvent: Lifecycle Hooks */
/*****************************************************************************/
Template.InsertEvent.onCreated(function () {
});

Template.InsertEvent.onRendered(function () {
});

Template.InsertEvent.onDestroyed(function () {
});
