function revert() {
  location.reload();
}

function apply() {
  // Send POST request to server, containing the updated account details.
}

var userDetails = {
  name: "user",
  familyName: "name",
  email: "user@example.com",
  phone: "+61987654321",
};

var vm = new Vue({
  el: "#app",
  data: {
    user: userDetails,
  },
  mounted() {
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      const { token } = JSON.parse(window.localStorage.getItem("user"));
      const headers = { authorization: token };

      try {
        const res = await axios.get("/user/profile", { headers });
        this.user = { ...res.data };
        console.log(res);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
});
