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
  },

  event: function(id) {
    return Events.findOne({_id: id}).shifts;
  }
});

AutoForm.hooks({
  editEventForm: {
    onSuccess: function(doc) {
      Router.go('eventsList');
    },
    before: {
      submit: function(doc) {
        var ref;
        if(((ref = doc.$set) != null ? ref.shifts: void 0) != null) {
          doc.$set.shifts = _.without(doc.$set.shifts,null);
        }
        return doc;
      }
    }
  }
});
