(function(){
	var qc = this;
	var newQuoteService = new QuoteService();

	newQuoteService.getQuote(function(res){
		$('#quote').append('<p>' + res.quote + '</p>');
	})
	//Get your QuoteService
	
}())
