<template>
    <div class="hire-wrap">
        <b-row class="top-sect">
            <b-col sm="6" class="top-sect-texts">
                <p class="top-text" data-aos="slide-up" data-aos-duration="700">
                  Go from <i>zero experience</i> to landing your <i>dream job</i>
                </p>
                <p class="text" data-aos="slide-up" data-aos-duration="800">
                  Stutern is a skills development and job placement platform 
                  that connects the most ambitious university graduates with 
                  long-term employment
                </p>
                
                <!-- <a href="#explore"> -->
                    <button class="apply-btn" @click="apply()" data-aos="slide-up" data-aos-duration="1000">
                      Apply
                    </button>
            </b-col>
            <b-col sm="6" class="left-img">
              <!-- <iframe src="https://www.youtube.com/watch?v=Ww1x0QCeGV8&t=6s" frameborder="0"></iframe> -->
              <!-- <img src="../assets/banner4.png" alt=""> -->
              <!-- <iframe src="https://www.youtube.com/watch?v=Ww1x0QCeGV8" frameborder="0"></iframe> -->
              <iframe width="921" height="518" src="https://www.youtube-nocookie.com/embed/Ww1x0QCeGV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <!-- <b-row class="left-grid-wrap">
                    <b-col sm="6" class="left-grid">
                        <b-col sm="12" class="left-grid-top">
                            <img src="../assets/grid1.png" class="animated slideInDown" alt="">
                        </b-col>
                        <b-col sm="12" class="left-grid-btm">
                            <img src="../assets/grid2.png" class="animated slideInUp" alt="">
                        </b-col>
                    </b-col>
                    <b-col sm="6"  class="right-grid">
                        <img src="../assets/grid3.png" class="animated 	slideInRight" alt="">
                    </b-col>
                </b-row> -->
            </b-col>
        </b-row>
        <b-row class="tutors">
            <p class="tutor-title">
              Our tutors and mentors come from leading companies
            </p>
            <b-col class="img">
                <img src="../assets/jumia.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/google.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/intelia.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/paystack.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/andela.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/flutterwave.svg" alt="">
            </b-col>
            <br>
        </b-row>
        <!-- <b-row>
          <b-col col-4 class="img" v-for="(tutor, i) in tutors" :key="i">
              <img :src="tutor.better_featured_image.source_url" alt="">
          </b-col>
        </b-row> -->
        <b-row class="impact">
          <b-col class="impact-section" sm="4">
              <p class="colored">
                2000+
              </p>
              <p class="coloreds-title">
                equivalent job placements
              </p>
          </b-col>
          <b-col class="impact-section" sm="4">
              <p class="colored">
                96%+
              </p>
              <p class="coloreds-title">
                placement rate
              </p>
          </b-col>
          <b-col class="" sm="4">
              <p class="colored">
                50,000+
              </p>
              <p class="coloreds-title">
                jobs available
              </p>
          </b-col>
        </b-row>
        <!-- <b-row class="main-sect-wrap">
            <b-col sm="6" class="main-sect main-sect-top" v-for="(point, i) in sellingPoints" :key="i">
                <img :src="point.better_featured_image.source_url" alt="">
                <p class="mid-sect-heading">
                  {{point.title.rendered}}
                </p>
                <p class="text">
                    {{point.pointText}}
                </p>
            </b-col>
        </b-row> -->
        
        <b-row class="main-sect-wrap">
            <b-col sm="6" class="main-sect main-sect-top">
                <img src="../assets/skill.svg" alt="">
                <p class="mid-sect-heading">
                  Learn valuable skills for today’s world﻿
                </p>
                <p class="text">
                    As the world rapidly evolves, the career landscape is 
                    experiencing a hige shift. Get equipped with skills that 
                    are relevant and valuable for the 21st century.
                </p>
            </b-col>
            <b-col sm="6" class="main-sect main-sect-top main-sect-right">
                <img src="../assets/funds.svg" alt="">
                <p class="mid-sect-heading">
                  Can’t pay upfront? No worries
                </p>
                <p class="text">
                    The Stutern Graduate Accelerator enables you launch your 
                    career without upfront tuition. You pay back a percentage 
                    of your income according to an income sharing agreement.
                </p>
            </b-col>
            <b-col sm="6" class="main-sect">
                <img src="../assets/monitor.svg" alt="">
                <p class="mid-sect-heading">
                  Join in from anywhere
                </p>
                <p class="text">
                    You can participate in the program from anywhere 
                    (provided you have internet access). Location is not a barrier.
                </p>
            </b-col>
            <b-col sm="6" class="main-sect main-sect-right">
                <img src="../assets/battery.svg" alt="">
                <p class="mid-sect-heading">
                  No experience required
                </p>
                <p class="text">
                    The curriculum is structured to help you get started with the basics. 
                    No previous knowledge or experience is required to join the program.
                </p>
            </b-col>
        </b-row>

        <b-row class="change">
          <div class="overlay"></div>
          <div class="change-content">
            <p class="change-heading">
              Want to change your life today?
            </p>
            <b-row>
              <b-col sm="12" class="single-change">
                <img src="../assets/notes.svg" alt="">
                <p class="single-change-heading">
                  Complete free application
                </p>
                <p class="single-change-store">
                  We look forward to learning about you through your application. Join thousands of ambitious 
                  university graduates by telling us about your interest, motivation and goals.
                </p>
              </b-col> 
              <b-col sm="12" class="single-change">
                <img src="../assets/messages.svg" alt="">
                <p class="single-change-heading">
                  Schedule an interview
                </p>
                <p class="single-change-store">
                  If we find your application exciting, we will invite you for the next stage interview. The 
                  outcome of the interview will decide if you get an offer from us or not.
                </p>
              </b-col>
              <b-col sm="12" class="single-change">
                <img src="../assets/calendar.svg" alt="">
                <p class="single-change-heading">
                  Reserve your spot
                </p>
                <p class="single-change-store">
                  To reserve your spot, you will need to complete your income sharing 
                  ageement and complete necessary requirements. 
                  Join us in class and begin your personalized immersive learning with hands on projects..
                </p>
              </b-col>
              <b-col sm="12" class="single-change-last">
                <img src="../assets/briefcase.svg" alt="">
                <p class="single-change-heading">
                  Join offline and online classes
                </p>
                <p class="single-change-store">
                  At the end of your weeks of learning, you will be attached to a team to an internship. 
                  Afterward, you will begin to interview for jobs. Our team 
                  will keep an eye on your growth even while on the job.
                </p>
              </b-col>

              <b-col sm="12" style="text-align: center">
                <button class="apply-btn-two">
                  Apply
                </button>
              </b-col>          
            </b-row>
          </div>
        </b-row>
        <b-row class="success-stories">
          <p class="success-heading">
            Success stories
          </p>
          <p class="sucess-story-text">
            We have helped many recent graduates launch new and promising careers
          </p>
          <b-row class="users">
            <b-col sm="3" class="user">
              <div class="user-details">
                <p class="name">
                  Ayowole Adenuga 
                </p>
                <p class="job-title">
                  Web developer, Interswitch
                </p>
              </div>
              <div class="overlay"></div>
              <img src="../assets/people/ayowole.png" alt="">
            </b-col>
            <b-col sm="3" class="user">
              <div class="user-details">
                <p class="name">
                  Chininso Raymond 
                </p>
                <p class="job-title">
                  UI/UX Designer, Paystack
                </p>
              </div>
              <div class="overlay"></div>
              <img src="../assets/people/chinonso.jpg" alt="">
            </b-col>
            <b-col sm="3" class="user">
              <div class="user-details">
                <p class="name">
                  Hakeeb Bashorun 
                </p>
                <p class="job-title">
                  Product Designer, Cowrywise
                </p>
              </div>
              <div class="overlay"></div>
              <img src="../assets/people/hakeeb.png" alt="">
            </b-col>
            <b-col sm="3" class="user">
              <div class="user-details">
                <p class="name">
                  Bomanaziba Josiah
                </p>
                <p class="job-title">
                  UI/UX Designer, Sela labs
                </p>
              </div>
              <div class="overlay"></div>
              <img src="../assets/people/boma.jpg" alt="">
            </b-col>
          </b-row>
        </b-row>
        <b-row class="checkers">
          <b-col sm="6" class="checkers-photo checkers-photo-left" order-sm="1">
            <img src="../assets/people/silas.jpg" alt="">
          </b-col>
          <b-col sm="6" class="checkers-text checkers-text-right" order-sm="1">
            <p class="quote">
              “Stutern gave me a platform to jump start my career.”
            </p>
            <p class="quote-text">
              I had been a graphics designer for over three years and was 
              looking to make the switch to Product Design. Going through the 
              SGA program was one of the best decisions I made in the process of 
              switching careers. Stutern gave me a platform to jump start my career.
            </p>
            <p class="name">
              Silas Onmbayugh
            </p>
            <p class="title">
              Product Designer, Sterling Bank
            </p>
          </b-col>
          <b-col sm="6" class="checkers-photo checkers-photo-right" order-sm="2">
            <img src="../assets/olajumoke.png" alt="">            
          </b-col>
          <b-col sm="6" class="checkers-text checkers-text-left" order-sm="1">
            <p class="quote">
              “SGA made me valuable I am now confident in myself more than ever.”
            </p>
            <p class="quote-text">
              I feel so blessed to be among the first set of SGA. At first all I 
              was after was to get a job and get paid. SGA did not just give me a 
              job they made me valuable and I am now confident in myself more than ever. 
              The classes were demanding and I was able to learn a lot. 

            </p>
            <p class="name">
              Olajumoke Abdulazeez
            </p>
            <p class="title">
              UI/UX Designer, PocketMoni
            </p>
            <button class="apply-btn" @click="apply()">
              Apply
            </button>
          </b-col>
        </b-row>
        <b-row class="accelerate">
          <p class="accelerate-header">
            Graduate Accelerator Tracks
          </p>
          <p class="accelerate-header-text">
            Our programs are designed to help you elevate your earning potential 
            and launch your career. You will only pay a <b>one time enrollment fee of 
            N50,000</b> to confirm your admission. Upon graduation, you will pay <b>15%
            of your annual salary for the first two years</b>
          </p>
            <b-row class="cards">
                <b-col class="card-container" sm="6" xs="12" v-for="(track, i) in tracks" :key="i">
                    <div class="card">    
                      <div class="card-img-wrap">
                        <img class="card-img" :src="track.banner" alt="">
                      </div>
                      <p class="card-text-heading">
                        {{track.trackName}}
                      </p>
                      <p class="card-text-content">
                        {{track.trackDesc}}
                      </p>
                      <h3 class="more" @click="toTrack(track.trackUrl)">
                          Apply now <img src="../assets/right-arrow.png" alt="">
                      </h3>
                    </div>
                </b-col>
            </b-row>
        </b-row>
        <b-row class="in-touch">
          <div class="overlay"></div>
          <div class="in-touch-content">
            <p class="in-touch-main-text">
              We are on a mission to <i>close the gap</i> between youth 
              unemployment and entry-level jobs in the technology industry
            </p>
            <p class="in-touch-sub-text">
              Looking to join our team or have further questions? 
            </p>
            <button class="apply-btn-two">
              Get in touch
            </button>
          </div>
        </b-row>
    </div>
</template>
<script>
import services from '../services'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      selected: [], // Must be an array reference!
      options: [
        {text: 'UI/UX Designer', value: 'UI/UX Designer'},
        {text: 'Front End Web Developer', value: 'Front End Web Developer'},
        {text: 'Digital Marketer', value: 'Digital Marketer'}
      ],
      selected2: null,
      options2: [
        { value: null, text: 'Select cohort' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      tutors: [],
      sellingPoints: [],
      changes: [],
      tracks: []
    }
  },
  computed: {
    ...mapGetters({
      jobTitles: 'getJobTitles'
    })
  },
  mounted () {
    services.getUsers()
    services.getSets()
    services.getScholarships()
    services.getSkills()
    let test = []
    this.jobTitles.forEach((track, i) => {
      if (i !== 0) {
        this.tracks.push(track)
      }
    })
  },
  methods: {
    test(refName) {
        var element = this.$refs[refName];
        var to = element.offsetTop;

        let steps = to / 0.0000000000001

        for (let index = 0; index < to; index += 1) {
            window.scrollTo(0, index);
            console.log(index)
        }
    },
    int () {
        
    },
    apply() {
      window.open('https://stuternhq.vervoe.com/job-opportunity/frontend-development-or-ui-ux-design-application', '_blank')
    },
    
    toTrack (url) {
      window.open(url, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
 .hire-wrap {
    min-height: 110vh;
    .text {
        font-style: normal;
        font-weight: normal;
        line-height: 27px;
        font-size: 16px;

        color: #67747C;
    }
    .top-sect {
        padding: 150px 0px 150px 120px !important;
        background-color:  rgba(247, 255, 254, 0.25);
        height: 600px;
        .top-sect-texts {
        // line-height: 600px;
          padding-left: 0 !important;
          padding-right: 150px !important;
          .top-text {
            font-family: 'Playfair Display', serif;
            font-style: normal;
            font-weight: bold;
            line-height: 48px;
            font-size: 32px;
            color: #222829;
            margin-top: 100px;
            i {
                color: #67747C;
                font-style: italic;
            }
          }
        }
        .left-img {
          padding: 0 !important;
          overflow: hidden;
          height: 450px;
          iframe {
            filter: none;
            -webkit-filter: grayscale(0);
            filter: grayscale(0);
            width: 100%;
            height: 450px;
            transition: linear all 0.5s
          }
          img:hover {
            filter: gray;
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
            width: 105%;
            margin-left: -50px;
            margin-top: -20px;
          }
        }
    }
    .tutors {
        padding: 30px 120px !important;
        .tutor-title {
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            font-size: 16px;
            width: 100%;
            color: #67747C;
        }
        .img {
            padding: 20px 0 !important;
            height: 80px;
            img {
              height: 25px;
            }
            // img:last-c
        }
        .up{
          margin-top: -14px !important
        }
    }
    .main-sect-wrap {
      padding: 30px 120px !important; 
      .main-sect {
        padding: 30px 200px 50px 0px !important;
        .mid-sect-heading {
          font-family: 'Playfair Display', serif;
          font-style: normal;
          font-weight: bold;
          line-height: 36px;
          font-size: 24px;
          color: #222829;
          margin: 12px 0;
        } 
      }
      .main-sect-right {
        border-left: 1px solid rgba(103, 116, 124, 0.05); 
        padding-left: 70px !important
      }
      .main-sect-top {
        border-bottom: 1px solid rgba(103, 116, 124, 0.05);
      }
    }
    .impact {
      padding: 60px 200px;            
    }
    .impact-section {
      border-right: 2px solid rgba(103, 116, 124, 0.15);;
    }
    .content-heading {
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 24px;
      font-family: 'Playfair Display', serif;       
      color: #222829;
      width: 100%;
      margin: 20px 0;
    }
    .colored {
      font-family: 'Playfair Display', serif;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 40px;
      text-align: center;
      color: #00D7C4;
    }
    .coloreds-title {
      font-style: normal;
      font-weight: normal;
      line-height: 26px;
      font-size: 18px;
      text-align: center;
      color: #67747C;
    }
    .change {
      max-height: 1000px;
      // padding: 30px 300px !important;
      padding: 0 !important;
      color: #fff;
      background-image: url('../assets/banner11.png');
      background-repeat: no-repeat;
      background-size: cover;
      .overlay {
        background: rgba(0, 35, 32, 0.96);
        width: 100%;
        height: 1000px
      }
      .change-content {
        width: 100%;
        margin-top: -990px;
        padding: 30px 500px;
        text-align: center;
        .change-heading {
          font-family: 'Playfair Display', serif;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          font-size: 24px;
          margin: 0 auto 15px auto;
          text-align: center;
        }
        // ul {
          // list-style-type: circle;
          text-align: left;
          .single-change {
            // border-left: 1px solid #fff;
            // padding: 0 30px;
            // content: "•"; /* Insert content that looks like bullets */
              padding-left: 88px;
              padding-bottom: 12px;
              ::before {
              background: #e5e5e5;
              // border-right: 1px solid #fff;
              box-sizing: border-box;
              content: '.';
              height: 100%;
              left: 4.7%;
              position: absolute;
              top: 0;
              width: 3px;
              z-index: 10000;
            }
            ::after {
              // background: linear-gradient(#63b5fd, #0e4396);
              // content: "•"; /* Insert content that looks like bullets */
              content: url('../assets/ring.png');
              height: 100%;
              left: 3.3%;
              position: absolute;
              top: 0;
              z-index: 10000000;
            }
            .single-change-heading {
              font-family: 'Playfair Display', serif;
              margin: 10px 0;
              font-style: normal;
              font-weight: bold;
              line-height: normal;
              font-size: 18px;
            }
          }
          .single-change-last {
              padding-left: 88px;
              padding-bottom: 12px;
            ::after {
              content: url('../assets/ring.png');
              height: 100%;
              left: 3.3%;
              position: absolute;
              top: 0;
              z-index: 10000000;
            }
            .single-change-heading {
              font-family: 'Playfair Display', serif;
              margin: 10px 0;
              font-style: normal;
              font-weight: bold;
              line-height: normal;
              font-size: 18px;
            }
          }
        // }
        .apply-btn-two {
          margin: 10px auto
        }
      }
    }
    .apply-btn {
      height: 45px;
      line-height: 45px;
      border: 0;
      padding: 0 34px;
      background: linear-gradient(180deg, #00D7C4 0%, #01E3C2 100%);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      color: #fff;
      margin-top: 8px;
  }
  .apply-btn-two {
      height: 45px;
      line-height: 45px;
      border: 0;
      padding: 0 34px;
      background: #FFFFFF;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      color: #00D7C4;
      margin-top: 8px;
      margin-left: 40px;
  }
  .success-stories {
    padding: 50px 140px 50px 120px !important;
    .success-heading {
      font-family: 'Playfair Display', serif;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 24px;
      color: #00D7C4;
      width: 100%;
    }
    .sucess-story-text {
      font-style: normal;
      font-weight: normal;
      line-height: 24px;
      font-size: 16px;
      width: 350px;
      color: #67747C;
    }
    .users {
      overflow: hidden;
      .user {
        height: 300px;
        overflow: hidden;
        color: #FFFFFF;
        .overlay {
              width: 150%;
            height: 300px;
            opacity: 0.5;
            position: relative;
            top: -300px;
            z-index: 4;
            cursor: pointer;
        }
        .overlay:hover {
          // background: transparent;
          transition: linear all 0.3s
        }
        img {
            width: 110%;
            position: relative;
            top: -610px;
            z-index: 3;
        }
        .user-details {
            margin: 0px 0 0 0;
            position: relative;
            top: 0;
            width: 140%;
            height: 100%;
            background: linear-gradient(1.25deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 23.54%);
            z-index: 5;
            padding: 12px;
            padding-top: 230px;
            cursor: pointer;
          .name {
            font-family: 'Playfair Display', serif;
            font-style: normal;
            font-weight: normal;
            line-height: 27px;
            font-size: 16px;
            margin: 0;
          }
          .job-title {
            font-style: normal;
            font-weight: normal;
            line-height: 24px;
            font-size: 14px;
          }
        }
        .user-details:hover {
          // margin: -100px 0 0 0;
          background: linear-gradient(1.25deg, rgba(0, 0, 0, 0.9) 0.99%, rgba(0, 0, 0, 0) 93.54%);
          padding-top: 220px;
          transition: linear all 0.3s
        }
      }
    }
  }
  .checkers {
    padding: 20px 0 !important;
    .checkers-photo {
      overflow: hidden;
      height: 500px;
      padding: 0 !important;
      background-image: url('../assets/pattern3.png');
      background-repeat: no-repeat;   
      img {
        width: 100%;
        filter: grayscale(0.9)
      }   
    }
    .checkers-photo-left {
      background-position: right; 
      img {
        margin-top: -70px !important
      }
    }
    .checkers-photo-right {
      background-position: left; 
    }
    .checkers-text-left {
      background-position: 108% 0px; 
    }
    .checkers-text-right {
      // background-position: 8% 0px; 
    }
    .checkers-text {
      padding: 130px 200px 0 120px !important;
      background-image: url('../assets/pattern3.png');
      background-repeat: no-repeat;
      background-position: right;
      .quote {
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-weight: bold;
        line-height: 30px;
        font-size: 20px;

        color: #222829;
      }
      .quote-text {
        font-style: normal;
        font-weight: normal;
        line-height: 24px;
        font-size: 16px;

        color: #3B444F;
      }
      .name {
        font-family: 'Playfair Display', serif;
        font-style: normal;
        font-weight: normal;
        line-height: 27px;
        font-size: 16px;
        color: #222829;
      }
      .title {
        font-style: normal;
        font-weight: normal;
        line-height: 24px;
        font-size: 16px;
        color: #67747C;
      }
    }
  }
  .accelerate {
    padding: 100px 200px !important;
    text-align: center !important;
    background-repeat: no-repeat;
    background-position: left; 
    .accelerate-header {
        font-family: 'Playfair Display', serif;
        font-style: normal;
        font-weight: bold;
        // line-height: normal;
        font-size: 24px;
        text-align: center;
        margin: 10px auto;
        color: #222829;
    }
    .accelerate-header-text {
        font-style: normal;
        font-weight: normal;
        line-height: 28px;
        font-size: 16px;
        margin: 10px auto;
        padding: 0 280px;
        color: #67747C;
    }
    .cards {
        padding: 40px 50px 0 50px;
        text-align: left;
        .pattern {
            position: relative;
            z-index: 1;
        }
        .card-container {
            padding: 0 20px;
            margin: 0 0 40px 0;
            p {
                margin: 12px 20px
            }
            .card {        
                background: #FFFFFF;
                box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.05);  
                padding: 0 !important;      
                min-height: 500px;
                border: 0 !important;
                border-radius: 0 !important;
                overflow: hidden;
                .card-img-wrap {
                  width: 100%;
                  height: 290px;
                  overflow: hidden;
                  .card-img {
                      // height: 290px;
                      width: 120%;
                      height: auto;
                      margin: 0;
                      border-radius: 0;
                      margin-bottom: 30px
                  }
                }
                .card-text-heading {
                    font-style: normal;
                    font-weight: bold;
                    line-height: normal;
                    font-size: 20px;
                    font-family: 'Playfair Display', serif;
                    color: #222829;
                }
                .card-text-subheading {
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    font-size: 18px;
                    margin-top: 0 !important;
                    color: #67747C;
                }
                .card-text-content {
                    font-style: normal;
                    font-weight: normal;
                    line-height: 24px;
                    font-size: 16px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;  /* Number of lines displayed before it truncate */
                        overflow: hidden;
                        text-overflow: ellipsis;
                    color: #67747C;
                }
                .more {
                    font-style: normal;
                    font-weight: 600;
                    line-height: 26px;
                    font-size: 18px;
                    margin: 20px;
                    color: #00D7C4;
                    cursor: pointer;
                    img {
                        width: 30px;
                        height: auto;
                        margin-left: 12px
                    }
                }
            }
        }
    }
  }
  .in-touch {
    text-align: center;
    background-image: url('../assets/banner1.png');
    height: 300px;
    .overlay {
      background: rgba(0, 35, 32, 0.95);
      width: 100%;
      height: 300px;
      margin-top: 0px;
    }
    .in-touch-content {
      color: #fff;
      margin-top: -250px;
      width: 100%;
      padding: 0 400px;
      .in-touch-main-text {
        font-family: 'Playfair Display', serif;
        font-style: normal;
        font-weight: normal;
        line-height: 36px;
        font-size: 24px;
        text-align: center;

        color: #FFFFFF;
      }
      .in-touch-sub-text {
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 18px;
        text-align: center;

        color: #FAFAFA;
      }
    }
  }
  button:hover {
    transform: translateY(-3px) !important;
    transition: all 0.6s;
    cursor: pointer
  }
  @media (max-width: 767px) {
    .top-sect {
      padding: 90px 12px 10px 12px !important;
      height: auto;
      .top-sect-texts {
        padding: 20px 30px 80px 30px !important;
        .top-text {
          margin-top: 30px;
          font-size: 28px;
          line-height: 36px
        }
      }
    }
    .tutors {
      padding: 0px 12px !important;
      margin: 0 !important;
      .tutor-title {
        // text-align: center
      }
      .img {
        padding: 5px 0 !important;
        height: 30px;
      }
      img {
        width: auto;
        height: 18px !important;
        margin: 0 20px 0 0;
      }
      .up {
        margin-top: -5px !important
      }
    }
    .impact {
      padding: 0 12px !important;
      margin: 40px 0 !important;
      .impact-section {
        border: 0;
        // border-bottom: 1px solid rgba(103, 116, 124, 0.15)
      }
    }
    .main-sect-wrap  {
      padding: 0 25px 30px 25px !important;
      margin: 0 !important;
      .main-sect {
        padding: 12px 5px !important;
        // box-shadow: 3px 3px 3px #f5faf8;
        // border: 1px solid #f5faf887;
        margin: 20px 0 0 0;
        border-radius: 4px;
        .mid-sect-heading {
          font-size: 20px;
        }
      }
      .main-sect-top, .main-sect-right {
        // border: 1px solid #f5faf887;
      }
    }
    .change {
      padding: 0 12px !important;
      max-height: 1200px;
        .overlay {
          height: 1100px;
          margin: 0px 0 0 0;
        }
      .change-content {
        padding: 0 10px;
        margin-top: -1098px;
        .change-heading {
          font-size: 18px;
          margin: 12px 0 20px 0;
        }
        .single-change {
          margin-top: 20px;
          padding-left: 58px !important;
            // border-left: 1px solid #fff;
            // padding: 0 30px;
            // content: "•"; /* Insert content that looks like bullets */
              padding-left: 88px;
              padding-bottom: 12px;
              ::before {
              background: #e5e5e5;
              // border-right: 1px solid #fff;
              box-sizing: border-box;
              content: '.';
              height: 120%;
              left: 7.7%;
              position: absolute;
              top: 0;
              width: 1px;
              z-index: 10000;
            }
            ::after {
              // background: linear-gradient(#63b5fd, #0e4396);
              // content: "•"; /* Insert content that looks like bullets */
              content: url('../assets/ring.png');
              height: 100%;
              left: 5.3%;
              position: absolute;
              top: 0;
              z-index: 10000000;
            }
          img {
            margin-top: -20px;
          }
        }
        .single-change-last {
          margin-top: 20px;
          padding-left: 58px !important;
              padding-left: 88px;
              padding-bottom: 12px;
            ::after {
              content: url('../assets/ring.png');
              height: 100%;
              left: 5.3%;
              position: absolute;
              top: 0;
              z-index: 10000000;
            }
          img {
            margin-top: -20px;
          }
        }
      }
    }
    .success-stories {
      padding: 30px 20px 0 20px !important;
      margin: 0 !important;
      overflow: hidden;
      .users {
        overflow: hidden;
        margin-top: -15px;
        .user {
          margin: 10px 0;
          .overlay {
            width: 100%
          }
          img {
            width: 100%;
            height: auto
          }
          .user-details {
              margin: 0px 0 0 0;
              position: relative;
              top: 0;
              width: 100%;
          }
        }
      }
    }
    .checkers {
      height: auto;
      .checkers-photo {
        height: 230px;
        margin: 0 !important
      }
      .checkers-text {
        padding: 10px 40px !important;
        margin: 0 !important;
        background: none;
        .name {
          margin: 0 0 5px 0;
        }
        .quote {
          margin: 0 !important;
          font-size: 16px;
        }
      }
    }
    .accelerate {
      padding: 20px 12px !important;
      .accelerate-header {
        margin-left: 25px;
      }
      .accelerate-header-text {
        padding: 0 30px !important;
        text-align: left
      }
      .cards {
        padding: 10px !important;
        .card-container {
          padding: 0 30px !important;
          p {
            margin-bottom: 5px !important
          }
        }
        .card {
          height: auto !important;
          width: 100%;
          .card-img-wrap {
            width: 100%;
            height: 290px;
            overflow: hidden;
            .card-img {
                height: auto !important;
                width: 130% !important;
                margin: 0;
                border-radius: 0;
                margin-bottom: 0 !important
            }
          }
        }
        .more {
          img {
            width: 20px
          }
        }
      }
    }
    .in-touch {
      padding: 0px !important;
      .in-touch-content {
        padding: 0 30px !important;
        .in-touch-main-text {
          font-size: 17px;
          line-height: 22px
        }
        .in-touch-sub-text {
          font-size: 15px;
          line-height: 18px          
        }
        button {
          margin: 10px 0 !important
        }
      }
    }
    .text {
      font-size: 14px;
    }
    .checkers-photo-left {
      img {
        margin-top: 0px !important
      }
    }
  }
 }
</style>
