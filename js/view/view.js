window.LoginView = Backbone.View.extend({

	initialize : function() {
		console.log('Initializing Login View');
	},

	events: {
		"click #login_button" : "login_submit"
	}
	login_submit: function(){
		console.log("login submitted");
		alert("submitted");
	}
	render : function() {
		imagesdiv = "";
		data = this.collection;
		currTemplate = this.template;
		data.each(function(iModel, index, list) {
			imagesdiv = imagesdiv + currTemplate(iModel.toJSON());
		});
		$(this.el).html(imagesdiv);
	},
});
