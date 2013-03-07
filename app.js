(function() {

  return {

    events: {
      'app.activated':'doSomething',
      'fetchQuote.always': function(data) {this.getQuote(data);},
      'ticket.priority.changed': function() {this.ajax('fetchQuote');}
 //     'click a.action':'getUrl'
    },

    requests: {
    	fetchQuote: {
    		url: 'http://www.iheartquotes.com/api/v1/random',
    		type: 'GET'
    	}
    },

    doSomething: function() {
    	var currentUser = this.currentUser().name();
    	var ticketSubject = this.ticket().subject();
    	this.switchTo('hello',
    		{
    			sayUsername: currentUser, 
    			saySubject: ticketSubject
    		});
    },

    getQuote: function(data) {
    	 this.switchTo('quote',
    	 {
    	 	sayQuote: data.responseText
    	 });
    }

 //   getUrl: function() {
 //       var ticketSubject = this.ticket().subject();
 //                   {
 //               
 //           });
 //   },


  };

}());
