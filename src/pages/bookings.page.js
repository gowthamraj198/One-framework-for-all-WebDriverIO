const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookingsPage extends Page {
    /**
     * define selectors using getter methods
     */
    
     get bookingIdTextBox () {
         return $('#booking-id')
     }
     get searchButton () {
         return $('button[data-element-name="BlpBookingIdSearch"]')
     }
     get chatIcon () {
        return this.selector('i.ficon-chat', '.chat-text-2')
     }
     get hotelNameInsideChatWindow () {
        return this.selector('div.hotel-title', '.hotel-title')
     }

     //mobile
     get competedTab () {
        return $('span[data-name="Past"]')
    }
    get hotelName () {
        return $('.hotel-name')
    }

     searchBooking () {
         this.bookingIdTextBox.setValue('63077267');
         this.searchButton.click();
     }

     getHotelName() {
        return this.hotelName.getText();
     }

     goToEditBooking() {
         this.hotelName.click();
     }

     goToCompletedTab () {
         this.competedTab.click();
     }

     openChatWindow () {
        this.chatIcon.click();
     }

     getHotelNameInsideChatWindow() {
        this.wait(this.hotelNameInsideChatWindow)
         return this.hotelNameInsideChatWindow.getText();
     }
}

module.exports = new BookingsPage();
