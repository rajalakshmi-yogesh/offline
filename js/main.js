

Router = Backbone.Router.extend({
	routes : {
		"" : "login",
		
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
		}
	});

templateLoader.load(["LoginView"], function() {
	app = new Router();
	Backbone.history.start();
});
