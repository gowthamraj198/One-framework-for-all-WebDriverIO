const HomePage = require('../../pages/home.page');
const BookingsPage = require('../../pages/bookings.page');
var config = require('../../../config/wdio.conf.js').config;


describe('My Login application', () => {

    before(function() {
        // runs once before the first test in this block
        HomePage.open();
    });

    
    it('verify hotel name inside chat window', () => {
        // BookingsPage.goToCompletedTab();  
        driver.startRecordingScreen();
        HomePage.clickSignInButtonMobileWeb();
        HomePage.login (config.username, config.password);
        HomePage.goToBookingsMobile();
        let hotelName = BookingsPage.getHotelName(); 
        console.log(hotelName);
        BookingsPage.goToEditBooking();
        BookingsPage.openChatWindow();
        console.log(BookingsPage.getHotelNameInsideChatWindow());        
    });
});



