<template>
    <div class="scholarships-wrap">
        <b-row class="top-text">
            <h3 class="top-text-heading">
                Scholarships
            </h3>
            <p class="sub-text">
                As we further our mission of closing the gap between youth 
                unemployment and entry-level jobs in the technology industry, our partners 
                are supporting us on this mission by sponsoring scholarships
            </p>
        </b-row>
        <b-row class="banner">
            <img src="../assets/banner1.png" alt="">
        </b-row>
        <b-row class="cards-wrap">
            <b-row class="cards-header">
                <p class="top-text-heading">
                    Begin your journey today!
                </p>
                <p class="sub-text">
                    Launch your new career with the Graduate Accelerator 
                    through these scholarships provided by our generous sponsors
                </p>
            </b-row>
            <b-row class="cards">
                <b-col class="card-container" sm="6" xs="12" v-for="(scholarship, i) in scholarships" :key="i">
                    <div class="mycard">    
                        <div class="card-img-wrap">
                            <img class="card-img" :src="scholarship.banner" alt="">
                        </div>
                        <p class="card-text-heading">
                            {{scholarship.scholarshipName}}
                        </p>
                        <!-- <p class="card-text-subheading">
                            {{scholarship.scholarshipFacilitator}}
                        </p> -->
                        <p class="card-text-content">
                            {{scholarship.scholarshipDesc}}
                        </p>
                        <h3 class="more" @click="toScholarship(scholarship._id)">
                            Learn more and apply <img src="../assets/arrow-right.svg" alt="">
                        </h3>
                    </div>
                </b-col>
                <!-- <b-col class="card-container" sm="6" xs="12">
                    <div class="card">    
                        <img class="card-img" src="../assets/banner3.png" alt="">
                        <p class="card-text-heading">
                            Ignite Scholarships
                        </p>
                        <p class="card-text-subheading">
                            Tonia Osadebe
                        </p>
                        <p class="card-text-content">
                            Stutern partnered with Ignite Scholarships to create an 
                            ongoing scholarship fund to promote diversity in software development and 
                            UX design. Each batch, successful female applicants 
                            are selected to receive a partial scholarship toward any Stutern program.
                        </p>
                        <h3 class="more" @click="toScholarship()">
                            Learn more and apply <img src="../assets/right-arrow.png" alt="">
                        </h3>
                    </div>
                </b-col> -->
            </b-row>
        </b-row>
        <b-row class="sponsor-sect">
            <b-col sm="6" class="sponsor-sect-left">
                <p class="sponsor-text-heading">
                    Become a sponsor
                </p>
                <p class="sponsor-text-content">
                    Your sponsorship enables recent graduates to join the Stutern Graduate Accelerator, 
                    a skills development and job placement training that connects the most ambitious
                    university graduates with long-term employment..
                </p>
                <form action="mailto:accelerator@stutern.com" method="post" enctype="text/plain">
                <input type="text" class="myinput" name="full name" placeholder="Full name*">
                <input type="text" class="myinput" name="email address" placeholder="Email address*">
                <input type="text" class="myinput" name="no of students to sponsor" placeholder="How many students will you love to sponsor?*">
                <textarea id="" cols="30" name="additional info" rows="4" placeholder="Anything else you will like us to know?"></textarea>
                <input type="submit" value="Send" class="apply-btn">
                <!-- <button class="apply-btn">
                    Send
                </button> -->
                </form>
            </b-col>
            <b-col sm="6" class="sponsor-sect-right">
                <img src="../assets/banner4.png" alt="">
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import services from "../services";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      scholarships: "getAllScholarships"
    })
  },
  methods: {
    toScholarship(id) {
      this.$router.push({
        name: "ScholarshipChild",
        params: { scholarshipName: id }
      });
    }
  },
  mounted() {
    services.getScholarships();
  }
};
</script>
<style lang="scss" scoped>
.scholarships-wrap {
  .top-text {
    padding: 100px 460px !important;
    text-align: center !important;
    background: rgba(247, 255, 254, 0.5);
    .top-text-heading {
      font-family: "Playfair Display", serif;
      font-style: normal;
      font-weight: bold;
      // line-height: normal;
      font-size: 32px;
      text-align: center;
      margin: 10px auto;
      color: #222829;
    }
    .sub-text {
      font-style: normal;
      font-weight: normal;
      line-height: 28px;
      font-size: 18px;
      text-align: center;
      color: #67747c;
    }
  }
  .banner {
    height: 450px;
    overflow: hidden;
    img {
      width: 100%;
      // height: 360px
    }
  }
  .cards-wrap {
    padding: 100px 200px !important;
    text-align: center !important;
    // background: rgba(247, 255, 254, 0.5);
    background-image: url("../assets/pattern1.png");

    background-repeat: no-repeat;
    background-position: left;
    .cards-header {
      margin: 0 !important;
      text-align: center !important;
      .top-text-heading {
        font-family: "Playfair Display", serif;
        font-style: normal;
        font-weight: bold;
        // line-height: normal;
        font-size: 32px;
        text-align: center;
        margin: 10px auto;
        color: #222829;
      }
      .sub-text {
        font-style: normal;
        font-weight: normal;
        line-height: 28px;
        font-size: 18px;
        margin: 10px auto;
        padding: 0 280px;
        color: #67747c;
      }
    }
    .cards {
      padding: 40px 50px 0 50px;
      text-align: left;
      overflow: hidden;
      .pattern {
        position: relative;
        z-index: 1;
      }
      .card-container {
        width: 100%;
        padding: 0 20px;
        p {
          margin: 12px 20px;
        }
        .mycard {
          width: 100%;
          background: #ffffff;
          box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.05);
          padding: 0 !important;
          height: 500px;
          border: 0 !important;
          border-radius: 0 !important;
          margin-bottom: 10px;
          overflow: hidden;
          .card-img-wrap {
            width: 100%;
            height: 290px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            .card-img {
              // height: 310px;
              // margin-left: -20px;
              width: 100%;
              margin: 0;
              border-radius: 0;
              margin-bottom: 0px;
            }
          }
          .card-text-heading {
            font-style: normal;
            font-weight: bold;
            line-height: normal;
            font-size: 20px;
            font-family: "Playfair Display", serif;
            color: #222829;
          }
          .card-text-subheading {
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            font-size: 18px;
            margin-top: 0 !important;
            color: #67747c;
          }
          .card-text-content {
            font-style: normal;
            font-weight: normal;
            line-height: 24px;
            font-size: 16px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3; /* Number of lines displayed before it truncate */
            overflow: hidden;
            text-overflow: ellipsis;
            color: #67747c;
          }
          .more {
            font-style: normal;
            font-weight: 600;
            line-height: 26px;
            font-size: 18px;
            margin: 20px;
            color: #00d7c4;
            cursor: pointer;
            img {
              width: 30px;
              height: auto;
              margin-left: 12px;
            }
          }
        }
      }
    }
  }
  .sponsor-sect {
    text-align: left;
    padding: 0 !important;
    height: 750px;
    overflow: hidden;
    .sponsor-sect-left {
      padding: 30px 40px 0 260px;
      .sponsor-text-heading {
        font-family: "Playfair Display", serif;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 28px;
        color: #222829;
      }
      .sponsor-text-content {
        font-style: normal;
        font-weight: normal;
        line-height: 24px;
        font-size: 16px;
        color: #67747c;
      }
      .myinput {
        border: 1px solid #c4c4c4;
        height: 60px;
        width: 100%;
        border-radius: 2px;
        margin-top: 25px;
        padding: 0 20px;
      }
      .myinput:focus {
        border: 1px solid #00d7c4 !important;
      }
      textarea {
        border: 1px solid #c4c4c4;
        width: 100%;
        border-radius: 2px;
        padding: 20px;
        margin-top: 25px;
      }
      .apply-btn {
        // float: right;
        height: 50px;
        line-height: 50px;
        border: 0;
        padding: 0 54px;
        background: linear-gradient(180deg, #00d7c4 0%, #01e3c2 100%);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        color: #fff;
        margin-top: 15px;
        cursor: pointer;
        // margin-left: 40px;
      }
    }
    .sponsor-sect-right {
      padding: 0 !important;
      img {
        width: 100%;
        float: right;
      }
    }
  }
  button:hover {
    transform: translateY(-3px) !important;
    transition: all 0.6s;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    .top-text {
      padding: 90px 12px !important;
      margin: 0 !important;
      .top-text-heading {
        font-size: 28px;
      }
      .sub-text {
        font-size: 16px;
        line-height: 24px;
      }
    }
    .banner {
      height: 300px;
      img {
        height: 90%;
        width: 220%;
        margin-left: -12%;
      }
    }
    .cards-wrap {
      padding: 20px !important;
      .cards-header {
        margin: 10px 0;
        text-align: center;
        .top-text-heading {
          margin: 0px auto;
          font-size: 20px;
        }
        .sub-text {
          padding: 0 !important;
          font-size: 16px;
          line-height: 24px;
          margin: 10px 20px;
        }
      }
      .cards {
        padding: 10px !important;
        overflow: hidden;
        .card-container {
          width: 100%;
          overflow: hidden;
          .mycard {
            margin-top: 20px;
            height: auto;
            width: 100%;
            .card-img-wrap {
              align-items: unset;
              height: 250px;
              .card-img {
                margin: 0 0 10px 0;
                height: 240px;
                width: auto;
              }
              .card-text-heading {
                font-size: 18px;
              }
              .card-text-subheading {
                font-size: 16px;
              }
              .card-text-content {
                font-size: 14px;
              }
              .more {
                font-size: 14px;
                img {
                  width: 20px;
                }
              }
            }
          }
          p {
            margin: 5px 20px;
          }
        }
      }
    }
    .sponsor-sect {
      height: auto;
      .sponsor-sect-left {
        padding: 12px 37px;
        margin: 0 !important;
        .myinput {
          margin-top: 10px;
          height: 50px;
        }
      }
      .sponsor-sect-right {
        display: none;
      }
    }
  }
}
</style>
