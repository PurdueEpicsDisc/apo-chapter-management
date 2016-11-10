Template.UsersList.events({
});
Template.UsersList.helpers({
  users: function () {
    return Meteor.users.find();
  },
  email: function() {
    return this.emails[0].address;
  },
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      // if (confirm('Really delete issue: "' + doc.title + '"?')) {
        this.remove();
        Router.go('usersList');
      // }
    };
  }
});