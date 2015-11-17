

	it('should show the under 13 error message when a birthday entered is under 13', function(){
		var birthdateInput = element(by.model('birthdate'));
		var tooYoung = element(by.id('tooYoung'));
		birthdateInput.sendKeys('01/22/2013');
		expect(tooYoung.isDisplayed()).toEquals(true);
	})

	it('should show the need valid date error message when an invalid date is entered', function(){
		var birthdateInput = element(by.model('birthdate'));
		var dateInvalid = element(by.id('dateInvalid'));
		birthdateInput.sendKeys('011/2');
		expect(dateInvalid.isDisplayed()).toEquals(true);
	})

	it('should not show an error message when a birthdate entered is over 13', function(){
		var birthdateInput = element(by.model('birthdate'));
		var tooYoung = element(by.id('tooYoung'));
		birthdateInput.sendKeys('01/22/2000');
		expect(tooYoung.isDisplayed()).toEquals(false);
	})

	it('should not show an error message when a birthdate entered is in valid form', function(){
		var birthdateInput = element(by.model('birthdate'));
		var dateInvalid = element(by.id('dateInvalid'));
		birthdateInput.sendKeys('01/22/2000');
		expect(dateInvalid.isDisplayed()).toEquals(false);
	})

	it('should display error when input is entered and cleared', function(){
		var birthdateInput = element(by.model('birthdate'));
		var dateInvalid = element(by.id('dateInvalid'));
		var tooYoung = element(by.id('tooYoung'));
		birthdateInput.sendKeys('01/22/2000');
		birthdateInput.clear();
		expect(dateInvalid.isDisplayed()).toEquals(false);
		expect(tooYoung.isDisplayed()).toEquals(false);
	})

	it('should not display an error message when it is untouched', function(){
		var dateInvalid = element(by.id('dateInvalid'));
		var tooYoung = element(by.id('tooYoung'));
		expect(dateInvalid.isDisplayed()).toEquals(false);
		expect(tooYoung.isDisplayed()).toEquals(false);

	})

});