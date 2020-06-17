<template>
    <div class="singlehire-page-wrap">
        <b-row class="top-sect">
            <b-col sm="6" class="top-sect-texts">
                <p class="name">
                    {{activeUser.userName}} 
                    <span class="av" v-if="activeUser.availability">available for hire</span>
                    <span class="not-av" v-else>not available</span>
                </p>
                <p class="title">
                    {{activeUser.jobTitle}}
                </p>
                <p class="self-text">
                    {{activeUser.userDesc}}
                </p>
                <p class="skill-title">
                    SKILLS & TOOLS
                </p>
                
                
                <span class="skill" v-for="(skill, i) in skills" :key="'pskill'+i">
                    <img v-if="skill.type === 'photo' && activeUser.userSkills.includes(skill.name)" style="width: 30px" :src="skill.skillPhoto" alt="">
                </span>
                <span v-for="(skill, i) in skills" :key="'tskill'+i">
                    <span class="skill text-skill" v-if="skill.type === 'text' && activeUser.userSkills.includes(skill.name)">
                        {{skill.skillText}}
                    </span>
                </span>
                <b-row class="top-btns">
                    <!-- <a :href='email' v-if="activeUser.availability">
                        <button class="apply-btn">
                            Hire me
                        </button>
                    </a>      
                    <button v-else disabled class="apply-btn not-allowed" title="Candidate unavailable">
                      Hire me
                    </button>     -->
                    <button class="apply-btn" @click="hireNow()">
                        Hire me
                    </button>     
                    <button class="apply-btn-two" @click="hireMe()">
                        View CV
                    </button>
                </b-row>
            </b-col>
            <b-col sm="6" class="img-grid-wrap">
                <img :src="activeUser.userPhoto" class="animated 	slideInRight" alt="">
            </b-col>
        </b-row>
        <!-- <b-row class="sect-two">
            <p class="sect-two-heading">
                What I have worked on
            </p>
            <b-col class="card-container" v-for="(project, i) in projects" :key="i" sm="6" xs="12">
                <div class="card">    
                    <img class="card-img" :src="project.projectBanner" alt="">
                    <p class="card-text-heading">
                        {{project.projectTitle}}
                    </p>
                    <p class="card-text-content">
                        {{project.projectDesc}}
                    </p>
                </div>
            </b-col>
            <b-col class="card-container" v-if="projects.length === 0" sm="12" xs="12" style="text-align: center">
                This user has no projects on display
            </b-col>
        </b-row> -->
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import services from "../../services";
export default {
  data() {
    return {
      projects: [],
      email: ""
    };
  },
  computed: {
    ...mapGetters({
      sets: "getSets",
      students: "getStudents",
      skills: "getSkills"
    }),
    activeUser() {
      return this.students.find(user => user._id === this.$route.params.userId);
    }
  },
  mounted() {
    // this goes to an email
    // this.email = `mailto:accelerator@stutern.com?subject=Request to Hire&cc=${
    //   this.activeUser.userEmail
    // }`;
    services
      .getUserProjects(this.$route.params.userId)
      .then(res => {
        this.projects = res.data.userProjects;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    // this goes to a google form "hire now"
    hireNow() {
      window.open("https://forms.gle/7UaKupXe2vDBUCVP6", "_blank");
    },
    hireMe() {
      window.open(this.activeUser.userCV, "_blank");
    }
  }
};
</script>
<style lang="scss" scoped>
.singlehire-page-wrap {
  width: 100%;
  .top-sect {
    padding: 150px 120px !important;
    background-color: rgba(247, 255, 254, 0.25);
    min-height: 600px;
    .top-sect-texts {
      padding-right: 120px !important;
      padding-left: 0 !important;
      overflow: hidden;
      .top-btns {
        margin: 0 !important;
      }
      .name {
        font-family: "Playfair Display", serif;
        font-style: normal;
        font-weight: bold;
        line-height: 27px;
        font-size: 18px;
        text-transform: capitalize;
        color: #222829;
        i {
          color: #67747c;
          font-style: italic;
        }
        .av {
          font-style: normal;
          font-weight: 500;
          line-height: 27px;
          font-size: 12px;
          text-align: center;
          background: rgba(235, 0, 42, 0.05);
          border-radius: 50px;
          padding: 5px 20px;
          margin-left: 30px;
          font-weight: 600;
          color: #eb002a;
          text-transform: lowercase;
        }
        .not-av {
          font-style: normal;
          font-weight: 500;
          line-height: 27px;
          font-size: 12px;
          text-align: center;
          background: rgba(59, 68, 79, 0.05);
          border-radius: 50px;
          padding: 5px 20px;
          margin-left: 30px;
          font-weight: 600;
          color: #3b444f;
          text-transform: lowercase;
        }
      }
      .title {
        font-style: normal;
        font-weight: normal;
        line-height: 24px;
        font-size: 14px;
        color: #222829;
      }
      .self-text {
        // font-style: italic;
        font-weight: normal;
        line-height: 26px;
        font-size: 18px;

        color: #67747c;
      }
      .skill-title {
        margin: 40px 0 0 0;
        font-style: normal;
        font-weight: normal;
        line-height: 24px;
        font-size: 14px;

        color: #222829;
      }
      .skill {
        img {
          margin: 12px 12px 0 0;
        }
      }
      .text-skill {
        background: rgba(1, 99, 219, 0.02);
        border-radius: 50px;
        font-style: normal;
        font-weight: normal;
        line-height: 21px;
        font-size: 10px;
        text-align: center;
        white-space: nowrap;
        padding: 12px 30px !important;
        margin-right: 12px;
        color: #0163db;
      }
      .apply-btn-two {
        height: 45px;
        line-height: 45px;
        border: 0;
        padding: 0 34px;
        background: #ffffff;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        color: #00d7c4;
        margin-top: 28px;
        margin-left: 40px;
      }
      .apply-btn {
        height: 45px;
        line-height: 45px;
        border: 0;
        padding: 0 34px;
        background: linear-gradient(180deg, #00d7c4 0%, #01e3c2 100%);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        color: #fff;
        margin-top: 28px;
      }
      .not-allowed {
        cursor: not-allowed !important;
      }
    }
    .img-grid-wrap {
      background-image: url("../../assets/pattern3.png");
      background-position: 97% 0px;
      background-repeat: no-repeat;
      padding: 0 50px 0 0 !important;
      height: 430px;
      img {
        height: 370px;
        margin-top: 20px;
        float: right;
      }
    }
  }
  .sect-two {
    padding: 20px 100px;
    .sect-two-heading {
      font-family: "Playfair Display", serif;
      width: 100%;
      text-align: center;
      margin: 20px 0;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 24px;
      text-align: center;

      color: #222829;
    }
    .card-container {
      padding: 0 20px;
      margin: 0 0 40px 0;
      p {
        margin: 12px 0px;
      }
      .card {
        background: #ffffff;
        // box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.05);
        padding: 0 !important;
        height: 500px;
        border: 0 !important;
        border-radius: 0 !important;
        overflow: hidden;
        .card-img {
          height: 290px;
          margin: 0;
          border-radius: 0;
          margin-bottom: 30px;
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
  button:hover {
    transform: translateY(-3px) !important;
    transition: all 0.6s;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    .top-sect {
      padding: 100px 20px 30px 20px !important;
      margin: 0 !important;
      height: auto;
      .top-sect-texts {
        padding: 0 !important;
        .self-text {
          font-size: 16px;
          line-height: 28px;
        }
      }
      .top-btns {
        padding: 12px;
        text-align: center;
        // margin: 0 !important
      }
      .img-grid-wrap {
        padding: 0px !important;
        overflow: hidden;
        img {
          margin: 20px auto !important;
        }
      }
    }
    .sect-two {
      padding: 10px 20px !important;
      margin: 0 !important;
      .card-container {
        padding: 0 !important;
        // box-shadow: 3px 3px 3px #f5faf8;
        .card {
          height: auto;
          .card-img {
            height: 200px;
          }
        }
        .card-text-heading {
          margin: 0 12px;
        }
        .card-text-content {
          margin: 12px;
        }
      }
    }
  }
}
</style>
