Template.EditPerson.onCreated(function() {
  var self = this;
  self.autorun(function() {
    let id = FlowRouter.getParam('id');
    self.subscribe("editPerson", id);
  });
});

Template.EditPerson.helpers({
  person: () => Persons.findOne({_id: FlowRouter.getParam('id')})
});

Template.EditPerson.events({
  'click .delete-person': () => {
    Persons.remove({_id: FlowRouter.getParam('id')})
  }
});
