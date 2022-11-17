<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-md flex-nowrap navbar-new-top">
      <div class="navbar-brand">
        <img class="logo" src="../assets/nav.png" alt="" />
      </div>
      <ul class="nav navbar-nav mr-auto">
        <li class="nav-item">
          <div v-if="disabledBar" class="navSearch">
            <div class="form">
              <input
                type="search"
                id="query"
                name="name"
                placeholder="Search Akatsuki..."
                aria-label="Search through site content"
                v-model="search"
                v-on:keyup.enter="validate()"
              />
              <button class="navSrcBtn">
                <svg viewBox="0 0 1024 1024">
                  <path
                    class="path1"
                    d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-danger"
            :disabled="!flag"
            @click="signOut()"
          >
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["getUser"]),
    disabledBar () {
        return this.$route.path == '/products' ? true : false
    }
  },
  watch: {
    getUser(val) {
      if (val.code == 0) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    search(val) {
      if (val.length) {
        let obj = { name: val };
        this.$store.dispatch("handleProducts", obj);
      } else {
        this.$store.dispatch("handleProducts");
      }
    },
  },
  data() {
    return {
      flag: false,
      search: ""
    };
  },
  methods: {
    signOut() {
      this.$store.state.user = {};
      this.flag = false;
      this.$router.push("/");
    },
    validate() {
      let obj = { name: this.search };
      this.$store.dispatch("handleProducts", obj);
    },
  },
};
</script>

<style scoped>
.navbar-new-top {
  background: grey;
}
.navbar-brand {
  font-weight: 600;
}
.navSearch {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-around;
  width: 50%;
}
.form {
  background-color: white;
  width: 500px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: left;
}
@media (max-width: 800px) {
  .form {
    width: 250px;
  }
  svg {
    width: 43px !important;
  }
}
input {
  all: unset;
  font: 16px system-ui;
  color: #1c658c;
  width: 2000px;
  padding: 6px 10px;
}
::placeholder {
  color: #1c658c;
  opacity: 0.7;
}
svg {
  color: #1c658c;
  fill: currentColor;
  width: 100%;
  height: 44px;
  padding: 10px;
}
.navSrcBtn {
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 44px;
}
.navbar-brand img {
  height: 50px;
  width: 80px;
}
.navbar-new-top ul {
  margin-right: 9%;
}
.navbar-new-top ul li {
  margin-left: 40%;
}
.navbar-nav .nav-item a {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  transition: 1s ease;
}
.navbar-nav .nav-item a:hover {
  color: #0062cc;
}
.navbar-expand-md {
  justify-content: space-around;
}
.btn-danger {
  width: 161%;
  cursor: pointer;
}
</style>
