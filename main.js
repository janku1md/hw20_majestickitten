(function(){



    Menu = Backbone.Model.extend();
    var menu = new Menu({
    name: 'Thai',
    fooddescription: 'Yum yum delicious, mmmmm mmmmm good',
    price: '$' + '10.95'
    });

    shark.set({
    name: ' ',
    fooddescription: ' ',
    price: '$' + ' '
    });



    //---------------------
    // Router / Application State
    //---------------------

    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'index',
        'majesticcat/:id': 'showFood'
      },

      initialize: function(){
      this.indexView = new MajesticcatIndexView({el: '#app-container'});
      },

      index: function(){
        this.indexView.render();
      },


      showFood: function(){
        var template = _.template($('[data-template-ame=show-food]').text());
        $('#app-container').html(template());
      }

    });


    // var PostsCollection = Backbone.Collection.extend({
    //   model: Posts,
    //
    //   url: "https://api.parse.com/1/majesticcat",
    //
    //   parse: function(response){
    //     return response.results;
    //   }
    // });






  $.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "WHlbEVCGAtVLCoYwg4qdDZ9XY4R95kQoa0AY1Mr1",
      "X-Parse-REST-API-Key": "PEMX8glOhbnn4K050dGp4Dbm7WEIrGXoo0DNqxbW"
    }
  });


})();
