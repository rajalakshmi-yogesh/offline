Router = Backbone.Router.extend({
	routes : {
		"" : "login",
		"userslist" : "userslist",
		"event" : "event"
		},
	initialize : function() {
		},
	login : function() {
		userlist = new userDetails();
		userlist.fetch({
			success : function(model,response){
				if (!this.loginview) {
					this.loginview = new LoginView({
						el : $("#login_form"),
						collection : userlist
					});
					this.loginview.render();
				} else {
					this.loginview.delegateEvents();
				}
			}
		})
		},
		userslist : function(){
			userdetails = new userDetails();
			userdetails.fetch({
			success : function(model,response){
					if (!this.userlistview) {
					this.userlistview = new UserListView({
						el : $("#user_list"),
						collection : userdetails
						
					});
					this.userlistview.render();
				} else {
					this.userlistview.delegateEvents();
				}
			}
		})
		},
		event : function(){  
			eventdetails = new eventsList();
			eventdetails.fetch({
			success : function(model,response){
					if (!this.eventlistview) {
					this.eventlistview = new EventListView({
						el : $("#events_list_page"),
						collection : eventdetails
						
					});
					this.eventlistview.render();
				} else {
					this.eventlistview.delegateEvents();
				}
			}
		})	
		}
	});

templateLoader.load(["LoginView","UserListView","EventListView"], function() {
	app = new Router();
	Backbone.history.start();
});
