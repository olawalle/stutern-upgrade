<template>
  <div id="app">
    <b-navbar toggleable="md" id="nav">

      <b-navbar-toggle target="nav_collapse" class="coll-btn"></b-navbar-toggle>

      <b-navbar-brand>
          <router-link to="/">
            <img src="./assets/logo (1).png" alt="" class="logo">
          </router-link>
        </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <button v-for="(link, i) in topLinks" :key="i" class="top-link" @click="makeActive(i)" :class="link.active ? 'active' : ''">{{link.name}}</button>
          
          <button class="apply-btn" @click="apply()">
            Apply
          </button>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>


    <router-view/>

    <b-row class="footer">
      <b-col col-6 class="left-text">
        Stutern Inc. © {{year}}
      </b-col>
      <b-col col-6 class="right-text">
        <a href="https://web.facebook.com/stutern" target="_blank"><img src="./assets/facebook.svg" class="socials" alt=""></a>
        <a href="https://www.instagram.com/stuternhq/" target="_blank"><img src="./assets/instagram.svg" class="socials" alt=""></a>
        <a href="https://twitter.com/stutern" target="_blank"><img src="./assets/twitter.svg" class="socials" alt=""></a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import services from "./services";
export default {
  data() {
    return {
      topLinks: [
        { name: "Hire", active: false },
        { name: "Scholarships", active: false },
        { name: "Alumni", active: false }
      ]
    };
  },
  computed: {
    year() {
      let date = new Date();
      return date.getFullYear();
    },
    routeName() {
      return this.$route.name;
    }
  },
  watch: {
    routeName: function() {
      if (this.routeName === "LandingPage") {
        this.topLinks.map(link => (link.active = false));
      } else {
        this.topLinks.find(link => {
          link.name.includes(this.routeName)
            ? (link.active = true)
            : (link.active = false);
        });
      }
    }
  },
  methods: {
    makeActive(i) {
      this.topLinks.map(link => (link.active = false));
      this.topLinks[i].active = true;
      this.$router.push({ name: this.topLinks[i].name });
    },
    apply() {
      window.open(
        "https://stuternhq.vervoe.net/job-page/frontend-development-or-ui-ux-design-application/1548928271",
        "_blank"
      );
    }
  },
  mounted() {
    services.getUsers();
    services.getSets();
    services.getScholarships();
    services.getSkills();
    services.getJobTitles();
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato|Playfair+Display");
#app {
  font-family: "Lato", sans-serif;
  width: 100%;
  overflow-x: hidden;
}
#nav {
  width: 100%;
  height: 60px;
  padding: 0 102px;
  line-height: 60px;
  background: #ffffff;
  box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.02);
  position: fixed;
  top: 0;
  z-index: 10000000000000000000;
  img {
    height: 40px;
  }
  .apply-btn {
    // float: right;
    height: 45px;
    line-height: 45px;
    border: 0;
    padding: 0 54px;
    background: linear-gradient(180deg, #00d7c4 0%, #01e3c2 100%);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    color: #fff;
    margin-top: 8px;
    cursor: pointer;
    margin-left: 40px;
  }
  .top-link {
    // float: right;
    margin: 0;
    width: 120px;
    text-align: center;
    height: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 16px;
    background-color: #ffffff;
    color: #67747c;
    border: 0;
    cursor: pointer;
    border-bottom: 3px solid transparent;
  }
  .top-link:focus {
    outline: none;
  }
  .top-link:hover {
    color: #00d7c4;
  }
  .active {
    color: #00d7c4;
    border-bottom: 3px solid #00d7c4;
  }
}
button:focus {
  outline: none !important;
}
.footer {
  // height: 60px;
  padding: 40px 100px;
  line-height: 60px;
  margin-top: 140px;
}
.left-text {
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  font-size: 18px;

  color: #67747c;
}
.right-text {
  text-align: right;
}
.socials {
  width: 30px;
  float: right;
  margin: 0 10px;
}
@media (max-width: 767px) {
  #nav {
    padding: 0 12px 50px 12px;
    // overflow: hidden;
    height: auto;
    img {
      height: 25px;
      position: absolute;
      top: 17px;
      left: 23px;
    }
    button {
      display: block;
      cursor: pointer;
    }
    .apply-btn,
    .top-link {
      margin: 0 auto;
    }
    .navbar-collapse {
      padding-top: 60px !important;
      text-align: right !important;
    }
    .coll-btn {
      position: absolute;
      top: 10px;
      right: 21px;
    }
  }
  .active {
    color: #00d7c4;
    border-bottom: 0px solid transparent !important;
  }
  .button:focus {
    outline: none;
  }
  .footer {
    margin-top: 20px;
    padding: 12px !important;
  }
  .left-text {
    font-style: normal;
    font-weight: normal;
    line-height: 25px;
    font-size: 14px;

    color: #67747c;
  }
  .socials {
    width: 16px;
    float: right;
    margin: 0 10px;
  }
}
</style>
