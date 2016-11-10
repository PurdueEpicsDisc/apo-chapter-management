Template.EditEvent.events({
});
Template.EditEvent.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete issue: "' + doc.name + '"?')) {
        this.remove();
        Router.go('eventsList');
      }
    };
  }
});

AutoForm.hooks({
  editEventForm: {
    onSuccess: function(doc) {
      Router.go('eventsList');
    }
  }
});
