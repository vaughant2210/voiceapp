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


ListView = Backbone.View.extend ({

  tagName: 'ul',
  initialize: function() {
    this.template = _.template( $('#item-container').text());
  },


  render: function(){
    

    // var el = this.$el,
    //   template = this.template;

    this.$el.empty();
    this.$el.append("<li>Hello</li>");
    this.$el.append("<li>Goodbye</li>");
    this.$el.append(this.template({value : "Hello Backbone"}));
    //
    // wines.each(function(wine){
    //     el.append(template( wine.toJSON()));
    // });
    return this;
  }


});

HomeView = Backbone.View.extend ({

  el: 'body',
  initialize: function() {
    this.render();

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




















})();
