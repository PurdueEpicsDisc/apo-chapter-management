
UsersController = RouteController.extend({
  
  // A place to put your subscriptions
  // this.subscribe('items');
  // // add the subscription to the waitlist
  // this.subscribe('item', this.params._id).wait();
  
  subscriptions: function() {
    this.subscribe('users');
  },
  
  data: function () {
    return Meteor.users.findOne({});
  },

  insert: function () {
    this.render('InsertUser', {});
  },
  list: function() {
    this.render('UsersList', {});
  },
  edit: function() {
    this.render('EditUser', {});
  }
});
