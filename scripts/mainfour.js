(function() {

//////////////MODEL/////////////////

var Blog = Backbone.Model.extend({

  defaults: {
    title: 'New Blog Post',
    text: 'This is a new blog post'

  },


});

///////////COLLECTION////////////////

var Tasks = Backbone.Collection.extend({
  model: Blog,
  url: 'https://api.parse.com/classes/blog',
});



  /////VIEW////////////

var PostBlogView = Backbone.View.extend({
    template: _.template($('#blogTemplate').text()),

    events : {
      'click button' : 'capturePost'
    },

    capturePost: function(event) {
      event.preventDefault();
      var gottitle= this.$('.title').val();
      var gottext= this.$('.text').val();
      console.log(gottitle, gottext);
    },

    initialize: function(){
      this.createView = new Blog();
    },

    render: function(){
      this.$el.html(this.template()); //<----now have to tell what element for it to go.
      return this;
    }


});




  /////ROUTER////////////

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': "index"
    },


    initialize: function(){
      this.blog= new Blog();
        this.blogview = new PostBlogView ({model: this.blog, el:".app-container"});

    },


    index: function(){
      this.blogview.render();
    },

      // console.log("routes:index");

  });






  ///////CONFIGURATION//////////


  $.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "eMtwArkQKzBAMp13CIrY7jRH3LfS4w1gCenZLHiI",
      "X-Parse-REST-API-Key": "jzakGFO6cBv3OXI2tPAvy79MIAhfYmh0x9kU0Gny"
    }
  });


  ///////GLUE////////////

$(document).ready(function(){
window.router = new AppRouter();
Backbone.history.start();
});


















})();
