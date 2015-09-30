window.LoginView = Backbone.View.extend({
	initialize : function() {
		var self = this;
		console.log('Initializing Login View');
	},
	events: {
		"click #login_button" : "login_submit"
	},
	login_submit: function(){

		user = this.$('#username').val();
		pwd = this.$('#password').val();
		alert("You logged in as " + user + " and a password of " + pwd);
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
