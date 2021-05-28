var venueDetails = {
    name: "My Business",
    streetNo: "12A",
    streetName: "First Street",
    city: "Adelaide",
    postcode: 5000
};

var vm = new Vue({
    el: '#app',
    data: {
        venue: venueDetails
    }
});