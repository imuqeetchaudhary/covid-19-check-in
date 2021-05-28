function revert() {
    location.reload();
}

function apply() {
    // Send POST request to server, containing the updated account details.
}

var userDetails = {
    givenName: "user",
    familyName: "name",
    email: "user@example.com",
    phone: "+61987654321"
};

var vm = new Vue({
    el: '#app',
    data: {
        user: userDetails
    }
});