window.LoginView = Backbone.View.extend({
	initialize : function() {
		var self = this;
		},
	events: {
		"click #login_button" : "login_submit"
	},
	login_submit: function(){
		data = this.collection;
		username = this.$('#username').val();
		pwd = this.$('#password').val();
		data.each(function(iModel, index, list) {
			users  = iModel.toJSON().Users			
	    	jQuery.each(users, function(i, user) {
	    		if(username == user.name && pwd == user.password)
					{
						alert("You logged in as " + username + " and a password is " + pwd);
						router = new Router();
						router.navigate('userslist', {trigger: true})
					}
				});
	    	});
	return false;
	},
	render : function() {

		imagesdiv = "";
		data = this.collection;
		currTemplate = this.template;
		data.each(function(iModel, index, list) {
		imagesdiv = imagesdiv + currTemplate(iModel.toJSON());
		});
		$(this.el).html(imagesdiv);
	}
});

window.UserListView = Backbone.View.extend({
	initialize : function() {
		console.log('Initializing User View');
		
	},
	render : function(){
		$("#login_form").hide();
		imagesdiv = "";
		data = this.collection;
		currTemplate = this.template;
		data.each(function(iModel, index, list) {
		imagesdiv = imagesdiv + currTemplate(iModel.toJSON());
		});
		$(this.el).html(imagesdiv);
	}
		
});
