describe('Team Form page', function() {
	beforeEach(function() {
		browser.get('http://localhost:8000/');
	})

	it('should show the under 13 error message when a birthday entered is under 13', function(){
		var birthdateInput = element(by.model('birthdate'));
		var tooYoung = element(by.id('tooYoung'));
		birthdateInput.sendKeys('01/22/2013');
		expect(tooYoung.isDisplayed()).toEqual(true);
	})

	it('should show the need valid date error message when an invalid date is entered', function(){
		var birthdateInput = element(by.model('birthdate'));
		var dateInvalid = element(by.id('dateInvalid'));
		birthdateInput.sendKeys('011/2');
		expect(dateInvalid.isDisplayed()).toEqual(true);
	})

	it('should not show an error message when a birthdate entered is over 13', function(){
		var birthdateInput = element(by.model('birthdate'));
		var tooYoung = element(by.id('tooYoung'));
		birthdateInput.sendKeys('01/22/2000');
		expect(tooYoung.isDisplayed()).toEqual(false);
	})

	it('should not show an error message when a birthdate entered is in valid form', function(){
		var birthdateInput = element(by.model('birthdate'));
		var dateInvalid = element(by.id('dateInvalid'));
		birthdateInput.sendKeys('01/22/2000');
		expect(dateInvalid.isDisplayed()).toEqual(false);
	})

	it('should display error when input is entered and cleared', function(){
		var birthdateInput = element(by.model('birthdate'));
		var dateInvalid = element(by.id('dateInvalid'));
		var tooYoung = element(by.id('tooYoung'));
		birthdateInput.sendKeys('01/22/2000');
		birthdateInput.clear();
		expect(dateInvalid.isDisplayed()).toEqual(false);
		expect(tooYoung.isDisplayed()).toEqual(false);

	})

	//////////////////////////////////////////////////

	it('should display an error message when the last name field has been touched but has no input', function() {
        var nameInput = element( by.model('lastName') );
        var first = element( by.id('firstName') );

        nameInput.sendKeys('a');
        nameInput.clear();
        first.sendKeys('a');

        var nameError = element( by.id('nameError') );
        expect(nameError.isDisplayed()).toEqual(true);
    })

    it('should not display an error message when Last Name has been touched', function() {
        var first = element( by.id('firstName') );
        first.sendKeys('a');

        var nameError = element( by.id('nameError') );
        expect(nameError.isDisplayed()).toEqual(false);
    })

    it('should not display an error message when the last name field has an input', function() {
        var nameInput = element( by.model('lastName') );
        var first = element( by.id('firstName') );

        nameInput.sendKeys('a');
        first.sendKeys('a');

        var nameError = element( by.id('nameError') );
        expect(nameError.isDisplayed()).toEqual(false);
    })


	it('should not display an error before the password input is touched', function() {
		var noPasswordError = element( by.id('noPasswordError') );
		expect( noPasswordError.isDisplayed() ).toEqual(false);
	})

	it('should disable the submit button when just a password is entered', function() {
		var passwordInput = element( by.model('password') );

		passwordInput.sendKeys('password');

		var submitButton = element( by.id('submitButton') );
		expect( submitButton.isEnabled() ).toEqual(false);
	})

	it('should disable the submit button when just a password is entered then deleted', function() {
		var passwordInput = element( by.model('password') );

		passwordInput.sendKeys('password');
		passwordInput.clear();

		var submitButton = element( by.id('submitButton'));
		expect( submitButton.isEnabled() ).toEqual(false);
	})

	it('should display an error message when just a password is entered then deleted', function() {
		var passwordInput = element( by.model('password') );
		var noPasswordError = element( by.id('noPasswordError') );
		var first = element( by.id('firstName') );

		passwordInput.sendKeys('password');
		passwordInput.clear();
		first.sendKeys(' ');

		expect( noPasswordError.isDisplayed() ).toEqual(true);
	})

	it('should not display an error befor the confirmation password input is touched', function() {
		var noConfirmationPasswordError = element( by.id('noConfirmationPasswordError') );
		expect( noConfirmationPasswordError.isDisplayed() ).toEqual(false);
	})

	it('should not display an error message when it is untouched', function(){
		var dateInvalid = element(by.id('dateInvalid'));
		var tooYoung = element(by.id('tooYoung'));
		expect(dateInvalid.isDisplayed()).toEquals(false);
		expect(tooYoung.isDisplayed()).toEquals(false);

	})

		var submitButton = element( by.id('submitButton') );
		expect( submitButton.isEnabled() ).toEqual(false);
	})

	it('should display an error message when just a confirmation password is entered', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );
		var noMatchError = element( by.id('noMatchError') );

		confirmPasswordInput.sendKeys('password');

		expect( noMatchError.isDisplayed() ).toEqual(true);
	})

	it('should disable the submit button when just a confirmation password is entered then deleted', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );

		confirmPasswordInput.sendKeys('password');
		confirmPasswordInput.clear();

		var submitButton = element( by.id('submitButton') );
		expect( submitButton.isEnabled() ).toEqual(false);
	})			

	it('should display an error message when just a confirmation password is entered then deleted', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );
		var noConfirmationPasswordError = element( by.id('noConfirmationPasswordError') );
		var first = element( by.id('firstName') );

		confirmPasswordInput.sendKeys('password');
		confirmPasswordInput.clear();
		first.sendKeys(' ');

		expect( noConfirmationPasswordError.isDisplayed() ).toEqual(true);
	})

	it('should disable the submit button when the password and confirmation password do not match', function() {
		var passwordInput = element( by.model('password') );
		var confirmPasswordInput = element( by.model('confirmPassword') ); 

		passwordInput.sendKeys('password');
		confirmPasswordInput.sendKeys('nomatch');

		var submitButton = element( by.id('submitButton'));
		expect( submitButton.isEnabled() ).toEqual(false);
	})

	it('should display an error message when the password and confirmation password do not match', function() {
		var passwordInput = element( by.model('password') );
		var confirmPasswordInput = element( by.model('confirmPassword') );
		var noMatchError = element( by.id('noMatchError') );

		passwordInput.sendKeys('password');
		confirmPasswordInput.sendKeys('nomatch');

		expect( noMatchError.isDisplayed() ).toEqual(true);
	})	

	//EMAIL TESTS
	//The user entered a valid email
	it('should not say: This is not a valid email address', function() {
		var emailInput = element( by.model('email') );
		var noAtSignMsg = element( by.id('noAtSignMsg') ); 

		emailInput.sendKeys('husky@uw.edu');


		expect( !noAtSignMsg.isDisplayed() );
	})
	//The user entered a valid email
	it('should not say: You must enter a valid email', function() {
		var emailInput = element( by.model('email') );
		var noInputMsg = element( by.id('noInputMsg') ); 

		emailInput.sendKeys('husky@uw.edu');


		expect( !noInputMsg.isDisplayed() );
	})

	//The user did not input an @ sign
	it('should activate: This is not a valid email address', function() {
		var emailInput = element( by.model('email') );
		var noAtSignMsg = element( by.id('noAtSignMsg') ); 

		emailInput.sendKeys('husky');


		expect( noAtSignMsg.isDisplayed() );
	})

	//The user did not enter anything
	it('should activate: You must enter a valid email', function() {
		var emailInput = element( by.model('email') );
		var noInputMsg = element( by.id('noInputMsg') ); 

		emailInput.sendKeys('');


		expect( noInputMsg.isDisplayed() );
	})
});