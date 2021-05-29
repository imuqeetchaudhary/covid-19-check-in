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
    },
  },
  methods: {
    async onRegister() {
      alert(this.venue_owner);
      alert(this.registerURL);

      // try {
      //   const res = await axios.post("/user/register", {});
      //   console.log(res);
      // } catch (err) {
      //   console.log(err.response);
      // }
      //   alert("user registration");
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
