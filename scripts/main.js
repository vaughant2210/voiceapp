(function() {



//////////////////MODEL//////////////////////////////

var App = Backbone.Model.extend({

  defaults: function() {
      return {
          term:''
      };
  }
});


/////////////////////COLLECTION//////////////////////



var Searchlist = Backbone.Collection.extend({
  model: App
  });

var searches = new Searchlist();


////////////////////VIEW //////////////////////////


  var SearchClickview = Backbone.View.extend({

      el: 'form',
      events: {
        'submit': 'searchModel'
      },

      initialize: function(){
        this.listenTo(this.model, 'change', this.render);
      },

  });


///////////////////ROUTER/////////////////////////////////

  var ResultsRouter = Backbone.Router.extend({
    routes: {
        '': 'index', //homepage
        "search/:category" : 'results', // #search/coffee or pastry
      },

      index: function() {
        router.navigate("search/:category");
        console.log("we have loaded the homepage");
      },

      results: function(category) {
        model.set('search', category);

      },

  });



    $(document).ready(function() {
      $('#new-search').submit(function(ev){
        var searchone = new Search ({ term: $('#searchterm').val() });
        searches.add(searchone);
        console.log(searches.toJSON());
      });

    // Make a new instance of the Router and verifying it
    var router = new ResultsRouter();
    // Start Backbone's URL monitoring
    Backbone.history.start();
  });





})();
