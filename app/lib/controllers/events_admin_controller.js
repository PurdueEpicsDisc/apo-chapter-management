EventsAdminController = RouteController.extend({
  
  // A place to put your subscriptions
  // this.subscribe('items');
  // // add the subscription to the waitlist
  // this.subscribe('item', this.params._id).wait();
  
  subscriptions: function() {
    this.subscribe('events', Meteor.userId());
  },
  
  data: function () {
    return Events.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertEvent', {});
  },
  list: function() {
    this.render('EventsList', {});
  },
  edit: function() {
    this.render('EditEvent', {});
  }
});
