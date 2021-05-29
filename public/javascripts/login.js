var vm = new Vue({
  el: "#login-app",
  data: {
    credentials: {
      email: "jazimabbas@gmail.com",
      password: "",
    },
    error: "",
    errors: [],
  },
  methods: {
    async onLogin() {
      try {
        const res = await axios.post("/user/login", { ...this.credentials });
        console.log(res);
      } catch (err) {
        const { response } = err;

        if (response.status === 422) {
          this.error = "";
          this.errors = response.data;
        } else {
          this.errors = [];
          this.error = response.data.message;
        }
      }
    },
  },
});

function validateLogin() {
  return true;
}
