window.LoginView = Backbone.View.extend({
	initialize : function() {
		var self = this;
		console.log('Initializing Login View');
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
		console.log(this);
		
		imagesdiv = "";
		data = this.collection;
		currTemplate = this.template;
		alert("List of Users");
		console.log(currTemplate);
		 data.each(function(iModel, index, list) {
		 users  = iModel.toJSON().Users
		 console.log(users);
		// console.log(currTemplate);
		//  imagesdiv = imagesdiv + currTemplate(iModel.toJSON());
		 });
		// $(this.el).html(imagesdiv);
	}
});
