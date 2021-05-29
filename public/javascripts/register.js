var vm = new Vue({
  el: "#app",
  data: {
    venue_owner: false,
    credentials: {
      name: "Jazim Abbas",
      familyName: "",
      email: "",
      password: "",
      phone: "",
      confirmPassword: "",
    },
    venueDetail: {
      venueName: "",
      streetNumber: "",
      streetName: "",
      town: "",
      postcode: "",
    },
  },
  methods: {
    async onRegister() {
      console.log({ ...this.credentials, ...this.venueDetail });
      const credentials = { ...this.credentials, ...this.venueDetail };

      try {
        const res = await axios.post(this.registerURL, credentials);
        console.log(res);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    registerURL() {
      return this.venue_owner ? "/venue-owner/register" : "/user/register";
    },
  },
});

function back() {
  window.location.href = "/login.html";
}

function register() {
  return true;
}

function validatePassword() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("password-confirm");

  if (String(password.value) != String(confirmPassword.value)) {
    confirmPassword.setCustomValidity("Passwords must match.");
  } else {
    confirmPassword.setCustomValidity("");
  }
}
