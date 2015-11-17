'use strict';

describe('Team Form page', function() {
	beforeEach(function() {
		browser.get('http://localhost:8000/');
	})
	
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

	//////////////////////////////////////////////////////

	it('should not display an error befor the password input is touched', function() {
		var noPasswordError = element( by.id('noPasswordError') );
		expect( !noPasswordError.isDisplayed() );
	})

	it('should disable the submit button when just a password is entered', function() {
		var passwordInput = element( by.model('password') );

		passwordInput.sendKeys('password');

		var submitButton = element( by.id('submitButton') );
		expect( !submitButton.isEnabled() );
	})

	it('should disable the submit button when just a password is entered then deleted', function() {
		var passwordInput = element( by.model('password') );

		passwordInput.sendKeys('password');
		passwordInput.clear();

		var submitButton = element( by.id('submitButton'));
		expect( !submitButton.isEnabled() );
	})

	it('should display an error message when just a password is entered then deleted', function() {
		var passwordInput = element( by.model('password') );
		var noPasswordError = element( by.id('noPasswordError') );

		passwordInput.sendKeys('password');
		passwordInput.clear();

		expect( noPasswordError.isDisplayed() );
	})

	it('should not display an error befor the confirmation password input is touched', function() {
		var noConfirmationPasswordError = element( by.id('noConfirmationPasswordError') );
		expect( !noConfirmationPasswordError.isDisplayed() );
	})

	it('should disable the submit button when just a confirmation password is entered', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );

		confirmPasswordInput.sendKeys('password');

		var submitButton = element( by.id('submitButton') );
		expect( !submitButton.isEnabled() );
	})

	it('should display an error message when just a confirmation password is entered', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );
		var noMatchError = element( by.id('noMatchError') );

		confirmPasswordInput.sendKeys('password');

		expect( noMatchError.isDisplayed() );
	})

	it('should disable the submit button when just a confirmation password is entered then delted', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );

		confirmPasswordInput.sendKeys('password');
		confirmPasswordInput.clear();

		var submitButton = element( by.id('submitButton') );
		expect( !submitButton.isEnabled() );
	})			

	it('should display an error message when just a confirmation password is entered then deleted', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );
		var noConfirmationPasswordError = element( by.id('noConfirmationPasswordError') );

		confirmPasswordInput.sendKeys('password');
		confirmPasswordInput.clear();

		expect( noConfirmationPasswordError.isDisplayed() );
	})

	it('should disable the submit button when the password and confirmation password do not match', function() {
		var passwordInput = element( by.model('password') );
		var confirmPasswordInput = element( by.model('confirmPassword') ); 

		passwordInput.sendKeys('password');
		confirmPasswordInput.sendKeys('nomatch');

		var submitButton = element( by.id('submitButton'));
		expect( !submitButton.isEnabled() );
	})

	it('should display an error message when the password and confirmation password do not match', function() {
		var passwordInput = element( by.model('password') );
		var confirmPasswordInput = element( by.model('confirmPassword') );
		var noMatchError = element( by.id('noMatchError') );

		passwordInput.sendKeys('password');
		confirmPasswordInput.sendKeys('nomatch');

		expect( noMatchError.isDisplayed() );
	})	

	it('should enable the submit button when the password and confirmation password match', function() {
		var passwordInput = element( by.model('password') );
		var confirmPasswordInput = element( by.model('confirmPassword') ); 

		passwordInput.sendKeys('password');
		confirmPasswordInput.sendKeys('password');

		var submitButton = element( by.id('submitButton'));
		expect( submitButton.isEnabled() );
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