const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get signInButton () {
        return this.selector('#sign-in-btn', 'div[data-action="signIn"]')      
    }

    get inputUsername () { 
        return this.selector('#signin-email-input', '#email')
    }
    get inputPassword () { 
        return this.selector('#signin-password-input', '#password')
    }
    get btnSubmit () { 
        return this.selector('#sign-in-submit-button', 'button[data-action="signIn"]')
    }

    get headerDropdown () { return $('.header-dropdown') }
    
    get bookingsMenu () { 
        return this.selector('a.booking-menu', 'div[data-action="myBookings"]')
    }

    //mobile
    get continueToWebsite () { return $('button[data-element-name="mob-continue-site"]') }
    get hamburgerMenu () { return $('button[data-action="openMenu"] span') }
    get signInButtonMobile () { return $('button[data-action="emailSignIn"]') }


    clickSignInButton () {
        console.log ("signInBtn", this.signInButton)
        this.signInButton.click();
        while(!this.inputPassword.isDisplayed()) 
        {
            console.log ("displayed: ",this.inputPassword.isDisplayed())
            if(!this.inputPassword.isDisplayed())
                this.signInButton.click();
        }
    }

    clickSignInButtonMobileWeb () {
        // this.continueToWebsite.click();
        this.hamburgerMenu.click();
        this.signInButton.click();
        this.signInButtonMobile.click();
    }

    login (username, password) {
        this.wait(this.inputUsername)
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    goToBookings () {
        this.headerDropdown.click();
        this.bookingsMenu.click();
    }

    goToBookingsMobile () {
        // this.hamburgerMenu.click();
        while(!this.bookingsMenu.isDisplayed()) 
        {
            console.log ("displayed: ",this.bookingsMenu.isDisplayed())
            this.hamburgerMenu.click();
        }
        this.bookingsMenu.click();
    }

    open () {
        return super.open();
    }
}

module.exports = new HomePage();
