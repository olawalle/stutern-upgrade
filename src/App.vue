<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.svg" alt="">

      <button class="apply-btn">
        Apply
      </button>
      
      <button v-for="(link, i) in topLinks" :key="i" class="top-link" @click="makeActive(i)" :class="link.active ? 'active' : ''">{{link.name}}</button>

    </div>
    <router-view/>

    <b-row class="footer">
      <b-col sm="6" class="left-text">
        Stutern Inc. © {{year}}
      </b-col>
      <b-col sm="6" class="right-text">
        <img src="./assets/facebook.png" class="socials" alt="">
        <img src="./assets/instagram.png" class="socials" alt="">
        <img src="./assets/twitter.png" class="socials" alt="">
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topLinks: [
        {name: 'Alumni', active: false},
        {name: 'Scholarships', active: false},
        {name: 'Hire', active: true}
      ],
    }
  },
  computed: {
    year () {
      let date = new Date()
      return date.getFullYear()
    }
  },
  methods: {
    makeActive(i) {
      this.topLinks.map(link => link.active = false)
      this.topLinks[i].active = true;
      this.$router.push({name: this.topLinks[i].name})
    }
  }
}
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato|Playfair+Display');
  #app {
    font-family: 'Lato', sans-serif;
    width: 100%;
    overflow-x: hidden
  }
  #nav {
    width: 100%;
    height: 80px;
    padding: 0 108px;
    line-height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.02);
    img {
      height: 30px;
    }
    .apply-btn {
      float: right;
      height: 50px;
      line-height: 50px;
      border: 0;
      padding: 0 54px;
      background: linear-gradient(180deg, #00D7C4 0%, #01E3C2 100%);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      color: #fff;
      margin-top: 15px;
      margin-left: 40px;
    }   
    .top-link {
      float: right;
      margin: 0;
      width: 120px;
      text-align: center;
      height: 80px;     
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 16px;
      background-color: #ffffff;
      color: #67747C;
      border: 0;
      cursor: pointer;
      border-bottom: 3px solid transparent
    }
    .top-link:focus {
      outline: none
    }
    .top-link:hover {
      color: #00D7C4
    }
    .active {
      color: #00D7C4;
      border-bottom: 3px solid #00D7C4
    }
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

    color: #67747C;
  }
  .right-text {
    text-align: right;
  }
  .socials {
    width: 30px;
    float: right;
    margin: 0 10px;
  }
</style>
