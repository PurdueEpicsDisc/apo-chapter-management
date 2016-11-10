BuffersController = RouteController.extend({
  
  // A place to put your subscriptions
  // this.subscribe('items');
  // // add the subscription to the waitlist
  // this.subscribe('item', this.params._id).wait();
  
  subscriptions: function() {
    this.subscribe('buffers', Meteor.userId());
  },
  
  data: function () {
    return Buffers.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertBuffer', {});
  },
  list: function() {
    this.render('BuffersList', {});
  },
  edit: function() {
    this.render('EditBuffer', {});
  }
});
