<template>
    <div class="hire-wrap">
        <b-row class="top-sect">
            <b-col sm="6" class="top-sect-texts">
                <p class="top-text" data-aos-offset="200" data-aos="fade" data-aos-duration="1200">
                    Find <i>well-trained</i> talent for your team
                </p>
                <p class="text">
                    The Stutern Graduate Accelerator finds and trains 
                    the best talent from a pool of recent graduates, 
                    empowering them with the skillset to begin a great career
                </p>
                
                <!-- <a href="#explore"> -->
                <button class="apply-btn" v-scroll-to="{
                                                el: '#candidates',
                                                duration: 1000,
                                                easing: 'linear'
                                            }">
                    Explore candidates
                </button>
                <!-- </a> -->
                
                <a href="mailto:accelerator@stutern.com">
                    <button class="apply-btn-two">
                        Contact our team
                    </button>
                </a>
            </b-col>
            <b-col sm="6" class="img-grid-wrap">
                <b-row class="left-grid-wrap">
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
                </b-row>
            </b-col>
        </b-row>
        <b-row class="tutors">
            <p class="tutor-title">
                Our graduates have been hired by leading companies
            </p>
            <b-col class="img">
                <img src="../assets/sterling.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/cowerywise.svg" alt="">
                
            </b-col>
            <b-col class="img">
                <img src="../assets/paystack.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/signalaliance.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/seamfix.svg" alt="">
            </b-col>
            <b-col class="img">
                <img src="../assets/suregifts.svg" alt="">
            </b-col>
        </b-row>
        <b-row class="main-sect-wrap">
            <b-col sm="6" class="main-sect">
                <img src="../assets/circ.svg" alt="">
                <p class="mid-sect-heading">
                    Find a great fit for your team
                </p>
                <p class="text">
                    The Stutern Graduate Accelerator provides training for 
                    recent graduates to prepare them for an outstanding career. 
                    Blending hard and soft skills ensures that our graduates are a 
                    great fit for your team.
                </p>
            </b-col>
            <b-col sm="6" class="main-sect">
                <img src="../assets/circ2.svg" alt="">
                <p class="mid-sect-heading">
                    Hire verified and qualified talent
                </p>
                <p class="text">
                    Every graduate of the Accelerator has undergone rigorous 
                    training in order to sharpen their skillset. Find vetted 
                    talent for your technical roles as fast as yesterday. 
                </p>
            </b-col>
        </b-row>
        <b-row class="explore" ref="explore" id="candidates">
            <b-col sm="12">
                <p class="explore-heading" @click="log()">
                    Explore candidates
                </p>
                <p class="text">
                    Find amazing talent for your team
                </p>
            </b-col>
            <b-col sm="5" class="filter">
                <img src="../assets/filter.svg" alt="">
                <span class="filter-heading">
                    Apply filters
                </span>
                <p class="filter-heading2" @click="test()">
                    <b>Cohourt</b>
                </p>
                <b-form-select @change="switchSet($event)" v-model="selected2" :options="options2" class="mb-3">
                </b-form-select>
                <p class="filter-heading2">
                    <b>Discipline</b>
                </p>
                <b-form-group>
                    <!-- <b-form-checkbox-group stacked v-model="selected" :options="options">
                    </b-form-checkbox-group> -->
                    
                    <b-form-radio-group @change="reLoad($event)" v-model="selected" :options="jobTitles" stacked name="radiosStacked" />
                </b-form-group>

                <!-- <b-form-radio-group v-model="selected2" :options="options2" stacked name="radiosStacked" /> -->
            </b-col>
            
            <b-col sm="12" md="7" class="user-cards" v-if="lastSet.students && lastSet.students.length > 0">
                <b-row class="user-card" @click="toSingle(user)" v-for="(user, i) in lastSet.students" :key="'student'+i">
                    <b-col sm="4" class="user-img">
                        <img :src="user.userPhoto" alt="">
                    </b-col>
                    <b-col md="8" sm="12" class="user-text">
                        <b-col sm="12" class="username">
                            <span>{{user.userName}}</span>
                            
                            <button class="apply-btn">
                                Hire me
                            </button>
                        </b-col>
                        <p class="user-job">
                            {{user.jobTitle}}
                        </p>
                        <p class="user-desc">
                            {{user.userDesc}}
                        </p>
                        <b-row>
                            <b-col  md="12" sm="12">
                                <span class="skill" v-for="(skill, i) in skills" :key="'pskill'+i">
                                    <img v-if="skill.type === 'photo' && user.userSkills.includes(skill.name)" style="width: 20px;" :src="skill.skillPhoto" alt="">
                                </span>
                            <!-- </b-col>
                            <b-col sm="8" class="text-skill-wrap"> -->
                                <span v-for="(skill, i) in skills" :key="'tskill'+i">
                                    <span class="skill text-skill" v-if="skill.type === 'text' && user.userSkills.includes(skill.name)">
                                        {{skill.skillText}}
                                    </span>
                                </span>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col sm="7" class="user-cards" v-else>
                No candidates meet your specified criteria
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as mutationTypes from '../mutationTypes'
import services from '../services'
export default {
  data () {
    return {
      lastSet: {},
      selected: 0,
      activeSet: {},
      selected2: null
    }
  },
  computed: {
    ...mapGetters({
        sets: 'getSets',
        skills: 'getSkills',
        jobTitles: 'getJobTitles'
    }),
    // lastSet () {
    //     // return this.activeSet
    // },
    options2 () {
        return this.sets
    }
  },
  methods: {
    reLoad (e) {
        let split = this.jobTitles[e].text.toLowerCase().split(' ')
        let rejoined = {}
        if (e === 0) {
            rejoined = this.activeSet
        } else {
            let filtered = this.activeSet.students.filter(user => {
                return user.jobTitle.toLowerCase().includes(split[0])
            })
            rejoined = {
                setName: this.activeSet.setName,
                students: filtered
            }
        } 
        this.lastSet = rejoined
    },

    test(refName) {
        var element = this.$refs[refName];
        var to = element.offsetTop;

        let steps = to / 0.0000000000001

        for (let index = 0; index < to; index += 1) {
            window.scrollTo(0, index);
            // console.log(index)
        }
    },
    toSingle (user) {
        this.$router.push({name: 'SingleHire', params: {userId: user._id}})
    },
    switchSet (e) {
        // console.log(e)
        services.getSetStudents(e)
        .then(res => {
            this.activeSet = res.data
            this.reLoad(1)
            console.log(this.activeSet)
        })
        .catch(err => {
            console.log(err)
        })
    },
    log() {
        console.log(this.activeSet)
    }
  },
  beforeMount () {
    this.selected2 = this.sets[0].setName
    services.getSetStudents(this.sets[0].setName)
    .then(res => {
        this.activeSet = res.data
        this.reLoad(1)
        // console.log(this.activeSet)
    })
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
        padding: 150px 120px !important;
        background-color:  rgba(247, 255, 254, 0.25);
        height: 600px;
        .top-sect-texts {
            padding-right: 150px !important;
            padding-left: 0 !important;
            .top-text {
                font-family: 'Playfair Display', serif;
                font-style: normal;
                font-weight: bold;
                line-height: 48px;
                font-size: 32px;
                color: #222829;
                i {
                    color: #67747C;
                    font-style: italic;
                }
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
        }
        .img-grid-wrap {
            padding: 0 !important;
            img {               
                animation-duration: 2s;
            }
            .left-grid {
                padding: 0 !important;
                img {
                    float: right !important;
                    margin-top: 0px
                }
                .left-grid-btm {
                    img {
                        margin-top: 20px
                    }
                }
            }
            .right-grid {
                background-image: url('../assets/pattern3.png');
                background-position: 95% 0px; 
                background-repeat: no-repeat;
                padding: 0 !important;
                height: 430px;
                img {
                    height: 370px;
                    margin-top: 20px;
                }
            }
        }
    }
    .tutors {
        padding: 30px 120px !important;
        margin-top: -25px;
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
            // img:last-c
        }
    }
    .main-sect-wrap {
        padding: 30px 120px !important; 
        .main-sect {
            padding: 10px 200px 0 0px !important;
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
    }
    .explore {
        padding: 100px 120px 40px 120px !important;
        .explore-heading {
            font-family: 'Playfair Display', serif;
            font-style: normal;
            font-weight: bold;
            line-height: normal;
            font-size: 24px;
            text-align: center;
            margin: 5px auto;
            color: #222829;
            width: 100%
        }
        .text {
            // margin: 5px auto;
            text-align: center
            // width: 100%;
        }
        .filter {
            padding: 10px 200px 10px 0;
            img {
                margin-right: 12px;
            }
            .filter-heading {
                font-style: normal;
                font-weight: bold;
                line-height: 27px;
                font-size: 18px;
                font-family: 'Playfair Display', serif;
                color: #222829;
            }
            .filter-heading2 {
                font-style: normal;
                font-weight: 500;
                line-height: 27px;
                font-size: 16px;
                margin-top: 12px;
                margin-bottom: 0 !important;
                color: #222829;
            }
        }
        .user-cards {
            padding: 0 !important;
            .user-card {
                padding: 0 !important;
                box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
                height: 220px;
                margin: 40px 0;
                overflow: hidden;
                cursor: pointer;
                .user-img {
                    padding: 0 !important;
                    height: 100%;
                    overflow: hidden;
                    img {
                        width: 110%;
                        margin-top: -10px;
                    }
                }
                .user-text {
                    padding-top: 20px !important;
                    .username {
                        padding: 0 !important;
                        span {
                            font-style: normal;
                            font-weight: bold;
                            line-height: 27px;
                            font-size: 16px;
                            font-family: 'Playfair Display', serif;
                            color: #222829;
                            text-transform: capitalize
                        }
                        button {
                            float: right !important;
                            height: 35px;
                            font-style: normal;
                            line-height: 35px;
                            font-size: 14px;
                            text-align: center;
                        }
                    }
                    .user-job {
                        font-style: normal;
                        font-weight: normal;
                        line-height: 24px;
                        font-size: 14px;
                        // text-transform: titl
                        color: #3B444F;
                    }
                    .user-desc {
                        // font-style: italic;
                        font-weight: normal;
                        line-height: 21px;
                        font-size: 12px;
                        margin-bottom: 20px;
                        color: #67747C;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;  /* Number of lines displayed before it truncate */
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .skill {
                        img {
                            margin: 12px 12px 0 0
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
                        padding: 12px 30px !important;
                        margin-right: 12px;
                        color: #0163DB;
                    }
                }
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
            padding: 40px 20px !important;
            .top-text {
            font-size: 28px;
            line-height: 36px
            }
        }
        .img-grid-wrap {
            .left-grid {
                display: none
            }
            .right-grid {
                text-align: center
            }
        }
    }
    .tutors {
      padding: 0px 12px !important;
      margin: 0 !important;
      
      .img {
        padding: 10px 0 !important;
        height: 30px;
        img {
              height: 22px;
              margin: 10px 10px 10px 0
            }
      }
    }
    .main-sect-wrap {
        padding: 20px !important;
        margin: 0 !important;
        .main-sect {    
            padding: 12px !important;
            margin-top: 39px;
            // box-shadow: 3px 3px 3px #f5faf8;
        }
    }
    .explore {
      padding: 0px 20px !important;
      margin: 0 !important;
      .filter {
        padding: 0 !important
      }
      .user-cards {
          padding: 0 !important;
          height: auto;
          .user-card {
              height: 500px !important;
                .user-img {
                    width: auto;
                    height: 210px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: auto !important
                    }
                }
                .user-text {
                    padding: 25px !important;
                    .text-skill {
                        margin-top: 10px;
                    }
                    .text-skill-wrap {
                        margin-top: 12px;
                    }
                    .username {
                        span {
                            font-size: 14px;
                        }
                    }
                    .user-desc {
                        margin-bottom: 15px
                    }
                }
            }
        }
    }
    .apply-btn {
        // padding: 0 10px !important;
        width: 46%;
        margin: 0 !important;
        font-size: 15px ;
        padding: 0 !important;
        text-align: center
    }
    .apply-btn-two {
        // padding: 0 10px !important;
        width: 46%;
        margin: 0 !important;
        float: right;
        font-size: 15px;
        white-space: nowrap;
        padding: 0 !important;
        text-align: center
    }
  }
}
</style>
