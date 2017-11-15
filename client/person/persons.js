// Meteor.subscribe("persons");
Template.PersonsList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("persons");
  });
});

Template.PersonsList.helpers({
  persons: () => Persons.find({})
});

Template.PersonsList.helpers({
  persons: () => Persons.find({})
});
