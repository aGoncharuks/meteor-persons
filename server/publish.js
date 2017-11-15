Meteor.publish('persons', () => {
  return Persons.find({});
});

Meteor.publish('editPerson', (id) => {
  return Persons.find({_id: id});
});
