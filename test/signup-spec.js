'use strict';

describe('Team Form page', function() {
	beforeEach(function() {
		browser.get('http://localhost:8000/');
	})
	
	it('should display an error message when the last name field has been touched but has no input', function() {
        var nameInput = element( by.model('lastName') );

        nameInput.sendKeys('a');
        nameInput.clear();

        var nameError = element( by.id('nameError') );
        expect(nameError.isDisplayed());
    })

    it('should not display an error message when nothing has been touched', function() {
        var nameError = element( by.id('nameError') );
        expect(!nameError.isDisplayed());
    })

    it('should not display an error message when the last name filed has an input', function() {
        var nameInput = element( by.model('lastName') );

        nameInput.sendKeys('a');

        var nameError = element( by.id('nameError') );
        expect(!nameError.isDisplayed());
    })

	//////////////////////////////////////////////////////

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

	it('should disable the submit button when just a confirmation password is entered', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );

		confirmPasswordInput.sendKeys('password');

		var submitButton = element( by.id('submitButton') );
		expect( submitButton.isEnabled() ).toEqual(false);
	})

	it('should display an error message when just a confirmation password is entered', function() {
		var confirmPasswordInput = element( by.model('confirmPassword') );
		var noMatchError = element( by.id('noMatchError') );

		confirmPasswordInput.sendKeys('password');

		expect( noMatchError.isDisplayed() ).toEqual(true);
	})

	it('should disable the submit button when just a confirmation password is entered then delted', function() {
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

});