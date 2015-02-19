(function() {




Person = Backbone.Model.extend({

  defaults: {
    name: 'John Doe',
    age: '30',
    occupation: 'worker'
},

});



Persons = Backbone.Collection.extend({

  model: Person,
  url: "#"

});


var PersonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#personTemplate').text()),

  render: function (){
    this.$el.html( this.template(this.model.toJSON()));
  }

});

person= new Person({name: 'vaughan', age: '25', occupation: 'student'});
personView = new PersonView ({model: person, el:'.app-container'});


// call render function on personview

personView.render();
// append code to body of html

// $('.app-container').html(personView.el);


















})();
