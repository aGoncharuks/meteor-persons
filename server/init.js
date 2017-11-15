const personsMock = require('./mocks/persons.json');

Meteor.startup(() => {
  if(!Persons.find().count()) {
    personsMock.forEach(person => {
      Persons.insert(person);
    });
  }
});
