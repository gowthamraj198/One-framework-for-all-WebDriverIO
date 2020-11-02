const HomePage = require('../../pages/home.page');
const BookingsPage = require('../../pages/bookings.page');
var config = require('../../../config/wdio.conf.js').config;


describe('My Login application', () => {

    before(function() {
        // runs once before the first test in this block
        HomePage.open();
    });

    
    it('verify hotel name inside chat window', () => {
        HomePage.clickSignInButton();
        HomePage.login (config.username, config.password);
        HomePage.goToBookings();
        BookingsPage.searchBooking();
        BookingsPage.openChatWindow();
        console.log(BookingsPage.getHotelNameInsideChatWindow());
    });

    // it('verify hotel name inside chat window1', () => {
    //     console.log ("test");
    // });
});


