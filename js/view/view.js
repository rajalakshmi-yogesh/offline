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
						
						$("#login_form").hide();
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
		currTemplate1 = this.template;
		data.each(function(iModel, index, list) {
		imagesdiv = imagesdiv + currTemplate1(iModel.toJSON());
		});
		$(this.el).html(imagesdiv);
	}
});

window.UserListView = Backbone.View.extend({
	initialize : function() {		
	},
	events: {
		
		"click #events-list" : "events_list"
	},
	events_list: function(){
		$("#user_list").hide();
		router = new Router();
		router.navigate('event', {trigger: true});
		},
	render : function(){
		imagesdiv = "";
		data = this.collection;
		currTemplate = this.template;
		data.each(function(iModel, index, list) {
		imagesdiv = imagesdiv + currTemplate(iModel.toJSON());
		});
		$(this.el).html(imagesdiv);
	}
});

window.EventListView = Backbone.View.extend({
	initialize : function() {
		var self = this;

	},
	events: {
		"click #back_button" : "back_button",
		
	},

	back_button: function(){
		// history.go(-1);
		eventlistview.remove();
		router= new Router();
		router.navigate("userslist",true);
		window.location.reload();
		// this.render();
		// //$("#events_list_page").hide();

	
	},
	render : function(){		
		imagesdiv = "";
		data = this.collection;
		currTemplate = this.template;
		data.each(function(iModel, index, list) {
		imagesdiv = imagesdiv + currTemplate(iModel.toJSON());
		});
		$(this.el).html(imagesdiv);
		
	}
});