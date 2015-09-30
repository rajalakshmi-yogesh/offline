

Router = Backbone.Router.extend({
	routes : {
		"" : "login",
		"userslist" : "userslist"
		
	},
	initialize : function() {
		},
	login : function() {
		userlist = new userDetails();

		userlist.fetch({
			success : function(model,response){
				console.log("hello got it congrats")
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
		userlist.fetch({
		success : function(model,response){
				console.log(" Display User List")
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

		}
	});

templateLoader.load(["LoginView","UserListView"], function() {
	app = new Router();
	Backbone.history.start();
});
