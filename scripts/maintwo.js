(function() {



 Wine = Backbone.Model.extend();

 firstWine = new Wine({
   name: 'Close Pegase'

 });

Wines = Backbone.Collection.extend({

    model: Wine,
    url: "#"

});

wines = new Wines([
  {name: "Robert Mondovi"},
  {name: "CakeBread"}
  ]);

wines.each(function (model){
  console.log(model.get('name'));
});


HomeView = Backbone.View.extend ({

  el: 'body',
  initialize: function() {
    this.render();
    console.log(this.$el);
  },


  render: function(){
    this.$el.empty();
    this.$el.append("<h1>My App</h1>");
    this.listView = new ListView();
    this.$el.append(this.listView.render().el);

    return this;
  }

});


wineApp = new HomeView();



ListView = Backbone.View.extend ({

  tagName: 'ul',
  initialize: function() {
  },


  render: function(){
    this.$el.empty();
    this.$el.append("<li>Hello</li>");
    this.$el.append("<li>Goodbye</li>");
    return this;
  }

});

listView = new ListView ();



















})();
