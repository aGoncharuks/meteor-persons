Persons = new Mongo.Collection('persons');

Persons.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

PersonSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  age: {
    type: Number,
    label: "Age"
  },
  isActive: {
    type: Boolean,
    label: 'Active'
  }
});

Persons.attachSchema(PersonSchema);
