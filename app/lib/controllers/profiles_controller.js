ProfilesController = RouteController.extend({
  
  // A place to put your subscriptions
  // this.subscribe('items');
  // // add the subscription to the waitlist
  // this.subscribe('item', this.params._id).wait();
  
  subscriptions: function() {
    this.subscribe('profiles', Meteor.userId());
  },
  
  data: function () {
    return Profiles.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertProfile', {});
  },
  list: function() {
    this.render('ProfilesList', {});
  },
  edit: function() {
    this.render('EditProfile', {});
  }
});
