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
						welcome_msg(user.name);
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

window.HomeView = Backbone.View.extend({
	tagName: "div",
	id: "home-page",
	initialize : function() {		
	},
	events: {
		"click #user_list_btn" : "user_list",
		"click #events_list" : "events_list"
	},

	user_list:function(){
	$("#home_page").hide();
	$("#user-list-view").show();
	router = new Router();
	router.navigate('userslist', {trigger: true})
	
	},
	events_list:function(){
	$("#home_page").hide();
	$("#event-list-view").show();
	router = new Router();
	router.navigate('event', {trigger: true});;
	
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

window.UserListView = Backbone.View.extend({

	tagName: "div",
	id: "user-list-view",

	initialize : function() {	
	},
	events: {
		
		"click #back_button" : "back_button"
	},
	back_button: function(){
		$("#home_page").show();
		$("#user-list-view").hide();
		router = new Router();
		router.navigate('home', {trigger: true});
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
	
	tagName: "div",
	id: "event-list-view",
	
	initialize : function() {
		var self = this;

	},
	events: {
		"click #back_button_event" : "back_button",
		
	},

	back_button: function(){
		$("#home_page").show();
		$("#event-list-view").hide();
		router = new Router();
		router.navigate('home', {trigger: true});
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

function welcome_msg(name){
	loginview.remove();
	router = new Router();
	router.navigate('home', {trigger: true})
	// homeview = new HomeView(name);
	// homeview.render();
}