<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue-django</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text href="/">Home</v-btn>
      <v-btn text href="/blog/post/list">Blog</v-btn>
      <v-btn text href="/admin">Admin</v-btn>

      <v-spacer></v-spacer>
      <v-menu left bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
            {{ me.username }}
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <template v-if="me.username === 'anonymous'">
            <v-list-item @click="dialogOpen('login')">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item @click="dialogOpen('register')">
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </template>
          <template v-else>
            <v-list-item @click="logout()">
              <v-list-item-title>LogOut</v-list-item-title>
            </v-list-item>
            <v-list-item @click="dialogOpen('password_change')">
              <v-list-item-title>ChangePassword</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- login dialog -->
    <v-dialog v-model="dialog.login" max-width="600">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form id="login-form" ref="loginForm">
            <v-text-field
              label="username"
              name="username"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>
            <v-text-field
              label="password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="save('login')"> login </v-btn>
          <v-btn text color="grey" @click="cancel('login')"> cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- register dialog -->
    <v-dialog v-model="dialog.register" max-width="600">
      <v-card class="elevation-12">
        <v-toolbar color="success" dark flat>
          <v-toolbar-title>Register Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form id="register-form" ref="registerForm">
            <v-text-field
              label="username"
              name="username"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>
            <v-text-field
              label="password"
              name="password1"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="password again"
              name="password2"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="save('register')">
            register
          </v-btn>
          <v-btn text color="grey" @click="cancel('register')">
            cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- password change dialog -->
    <v-dialog v-model="dialog.password_change" max-width="600">
      <v-card class="elevation-12">
        <v-toolbar color="warning" dark flat>
          <v-toolbar-title>Password Change Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form id="password-change-form" ref="passwordChangeForm">
            <v-text-field
              label="Old password"
              name="old_password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="New password"
              name="new_password1"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="New password again"
              name="new_password2"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="save('password_change')">
            change
          </v-btn>
          <v-btn text color="grey" @click="cancel('password_change')">
            cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "./user_event_bus"

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFtoken";

export default {
  data: () => ({
    drawer: null,
    dialog: {
      login: false,
      register: false,
      password_change: false,
    },
    me: { username: 'anonymous' },
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),

  watch: {
    me(newVal) {
      console.log("watch.me()");
      EventBus.$emit('me_change', newVal);
    }
  },

  created() {
    this.getUserInfo();
  },

  methods: {
    dialogOpen(kind) {
      if (kind === "login") {
        this.dialog.login = true;
      } else if (kind === "register") {
        this.dialog.register = true;
      } else if (kind === "password_change") {
        this.dialog.password_change = true;
      }
    },
    cancel(kind) {
      if (kind === "login") {
        this.dialog.login = false;
        this.$refs.loginForm.reset();
      } else if (kind === "register") {
        this.dialog.register = false;
        this.$refs.registerForm.reset();
      } else if (kind === "password_change") {
        this.dialog.password_change = false;
        this.$refs.passwordChangeForm.reset();
      }
    },
    save(kind) {
      if (kind === "login") {
        this.login();
        this.dialog.login = false;
        this.$refs.loginForm.reset();
      } else if (kind === "register") {
        this.register();
        this.dialog.register = false;
        this.$refs.registerForm.reset();
      } else if (kind === "password_change") {
        this.passwordChange();
        this.dialog.password_change = false;
        this.$refs.passwordChangeForm.reset();
      }
    },
    login() {
      const formData = new FormData(document.getElementById("login-form"));
      axios
        .post("/api/login/", formData)
        .then((res) => {
          this.me = res.data;
        })
        .catch((err) => {
          console.log("login failed", err.rseponse);
          alert("login failed");
        });
    },
    logout() {
      axios.get('/api/logout/')
      .then(() => {
        alert(`user ${this.me.username} logout.`);
        this.me = {username:'anonymous'};
      }).catch((err) => {
        console.log("logout failed",err.rseponse);
      });
    },
    register() {
      const formData = new FormData(document.getElementById("register-form"));
      axios
        .post("/api/register/", formData)
        .then((res) => {
          alert(`user ${res.data.username} created.`);
        })
        .catch((err) => {
          console.log("register failed", err.rseponse);
          alert("register failed");
        });
    },
    passwordChange() {
      const formData = new FormData(document.getElementById("password-change-form"));
      axios
        .post("/api/password-change/", formData)
        .then(() => {
          alert(`user ${this.me.username} password changed.`);
        })
        .catch((err) => {
          console.log("password change failed", err.rseponse);
          alert("password change failed");
        });
    },
    getUserInfo() {
      console.log("getUserInfo");
      axios.get('/api/me/')
      .then((res => {
        this.me = res.data;
      }))
      .catch(err => {
        alert(err.response.status + ' ' + err.response.statusText)
      })
    }
  },
};
</script>

<style>
</style>