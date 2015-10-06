userDetail = Backbone.Model.extend();
eventList = Backbone.Model.extend();
userDetails = Backbone.Collection.extend({ 
    model   :  userDetail,
    url   : "data/user.json", 
   });
eventsList = Backbone.Collection.extend({ 
    model   :  eventList,
    url   : "data/events.json", 
   });
