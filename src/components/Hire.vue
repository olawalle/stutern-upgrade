<template>
    <div class="hire-wrap">
        <b-row class="top-sect">
            <b-col sm="6" class="top-sect-texts">
                <p class="top-text">
                    Find <i>well-trained</i> talent for your team
                </p>
                <p class="text">
                    The Stutern Graduate Accelerator finds and trains 
                    the best talent from a pool of recent graduates, 
                    empowering them with the skillset to begin a great career
                </p>
                
                <button class="apply-btn">
                    Explore candidates
                </button>
                
                <button class="apply-btn-two">
                    Contact our team
                </button>
            </b-col>
            <b-col sm="6" class="img-grid-wrap">
                <b-row class="left-grid-wrap">
                    <b-col sm="6" class="left-grid">
                        <b-col sm="12" class="left-grid-top">
                            <img src="../assets/grid1.png" alt="">
                        </b-col>
                        <b-col sm="12" class="left-grid-btm">
                            <img src="../assets/grid2.png" alt="">
                        </b-col>
                    </b-col>
                    <b-col sm="6"  class="right-grid">
                        <img src="../assets/grid3.png" alt="">
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="tutors">
            <p class="tutor-title">
                Our graduates have been hired by leading companies
            </p>
            <b-col sm="2" class="img">
                <img src="../assets/sterling.png" alt="">
            </b-col>
            <b-col sm="2" class="img">
                <img src="../assets/cowerywise.png" alt="">
                
            </b-col>
            <b-col sm="2" class="img">
                <img src="../assets/paystack.png" alt="">
            </b-col>
            <b-col sm="2" class="img">
                <img src="../assets/signalaliance.png" alt="">
            </b-col>
            <b-col sm="2" class="img">
                <img src="../assets/seamfix.png" alt="">
            </b-col>
            <b-col sm="2" class="img">
                <img src="../assets/suregifts.png" alt="">
            </b-col>
        </b-row>
        <b-row class="main-sect-wrap">
            <b-col sm="6" class="main-sect">
                <img src="../assets/fit.png" alt="">
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
                <img src="../assets/hire.png" alt="">
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
        <b-row class="explore">
            <b-col sm="12">
                <p class="explore-heading">
                Explore candidates
            </p>
            <p class="text">
                Find amazing talent for your team
            </p>
            </b-col>
            <b-col sm="5" class="filter">
                <img src="../assets/filter.png" alt="">
                <span class="filter-heading">
                    Apply filters
                </span>
                <p class="filter-heading2">
                    <b>Discipline</b>
                </p>
                <b-form-group>
                    <b-form-checkbox-group stacked v-model="selected" :options="options">
                    </b-form-checkbox-group>
                </b-form-group>
                <p class="filter-heading2">
                    <b>Cohourt</b>
                </p>
                <b-form-select v-model="selected2" :options="options2" class="mb-3">
                </b-form-select>
            </b-col>
            <b-col sm="7" class="user-cards">
                <b-row class="user-card">
                    <b-col sm="4" class="user-img">
                        <img src="../assets/user.png" alt="">
                    </b-col>
                    <b-col sm="8" class="user-text">
                        <b-col sm="12" class="username">
                            <span>Cynthia Morgan</span>
                            
                            <button class="apply-btn">
                                Hire me
                            </button>
                        </b-col>
                        <p class="user-job">
                            UI/UX Designer
                        </p>
                        <p class="user-desc">
                            Consequently, another drawer, and two porters, and several 
                            maids and the landlady, were all loitering by accidental places 
                            and there was a lot more.
                        </p>
                        <span class="skill">
                            <img src="../assets/figma.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/xd.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/invision.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/sketch.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/html.png" alt="">
                        </span>
                        <span class="skill text-skill">
                            User research
                        </span>
                        <span class="skill text-skill">
                            Design thinking
                        </span>
                    </b-col>
                </b-row>
                <b-row class="user-card">
                    <b-col sm="4" class="user-img">
                        <img src="../assets/user3.png" alt="">
                    </b-col>
                    <b-col sm="8" class="user-text">
                        <b-col sm="12" class="username">
                            <span>Cynthia Morgan</span>
                            
                            <button class="apply-btn">
                                Hire me
                            </button>
                        </b-col>
                        <p class="user-job">
                            UI/UX Designer
                        </p>
                        <p class="user-desc">
                            Consequently, another drawer, and two porters, and several 
                            maids and the landlady, were all loitering by accidental places 
                            and there was a lot more.
                        </p>
                        <span class="skill">
                            <img src="../assets/figma.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/xd.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/invision.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/sketch.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/html.png" alt="">
                        </span>
                        <span class="skill text-skill">
                            User research
                        </span>
                        <span class="skill text-skill">
                            Design thinking
                        </span>
                    </b-col>
                </b-row>
                <b-row class="user-card">
                    <b-col sm="4" class="user-img">
                        <img src="../assets/user2.png" alt="">
                    </b-col>
                    <b-col sm="8" class="user-text">
                        <b-col sm="12" class="username">
                            <span>Cynthia Morgan</span>
                            
                            <button class="apply-btn">
                                Hire me
                            </button>
                        </b-col>
                        <p class="user-job">
                            UI/UX Designer
                        </p>
                        <p class="user-desc">
                            Consequently, another drawer, and two porters, and several 
                            maids and the landlady, were all loitering by accidental places 
                            and there was a lot more.
                        </p>
                        <span class="skill">
                            <img src="../assets/figma.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/xd.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/invision.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/sketch.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/html.png" alt="">
                        </span>
                        <span class="skill text-skill">
                            User research
                        </span>
                        <span class="skill text-skill">
                            Design thinking
                        </span>
                    </b-col>
                </b-row>
                <b-row class="user-card">
                    <b-col sm="4" class="user-img">
                        <img src="../assets/user.png" alt="">
                    </b-col>
                    <b-col sm="8" class="user-text">
                        <b-col sm="12" class="username">
                            <span>Cynthia Morgan</span>
                            
                            <button class="apply-btn">
                                Hire me
                            </button>
                        </b-col>
                        <p class="user-job">
                            UI/UX Designer
                        </p>
                        <p class="user-desc">
                            Consequently, another drawer, and two porters, and several 
                            maids and the landlady, were all loitering by accidental places 
                            and there was a lot more.
                        </p>
                        <span class="skill">
                            <img src="../assets/figma.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/xd.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/invision.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/sketch.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/html.png" alt="">
                        </span>
                        <span class="skill text-skill">
                            User research
                        </span>
                        <span class="skill text-skill">
                            Design thinking
                        </span>
                    </b-col>
                </b-row>
                <b-row class="user-card">
                    <b-col sm="4" class="user-img">
                        <img src="../assets/user3.png" alt="">
                    </b-col>
                    <b-col sm="8" class="user-text">
                        <b-col sm="12" class="username">
                            <span>Cynthia Morgan</span>
                            
                            <button class="apply-btn">
                                Hire me
                            </button>
                        </b-col>
                        <p class="user-job">
                            UI/UX Designer
                        </p>
                        <p class="user-desc">
                            Consequently, another drawer, and two porters, and several 
                            maids and the landlady, were all loitering by accidental places 
                            and there was a lot more.
                        </p>
                        <span class="skill">
                            <img src="../assets/figma.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/xd.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/invision.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/sketch.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/html.png" alt="">
                        </span>
                        <span class="skill text-skill">
                            User research
                        </span>
                        <span class="skill text-skill">
                            Design thinking
                        </span>
                    </b-col>
                </b-row>
                <b-row class="user-card">
                    <b-col sm="4" class="user-img">
                        <img src="../assets/user4.png" alt="">
                    </b-col>
                    <b-col sm="8" class="user-text">
                        <b-col sm="12" class="username">
                            <span>Cynthia Morgan</span>
                            
                            <button class="apply-btn">
                                Hire me
                            </button>
                        </b-col>
                        <p class="user-job">
                            UI/UX Designer
                        </p>
                        <p class="user-desc">
                            Consequently, another drawer, and two porters, and several 
                            maids and the landlady, were all loitering by accidental places 
                            and there was a lot more.
                        </p>
                        <span class="skill">
                            <img src="../assets/figma.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/xd.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/invision.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/sketch.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/html.png" alt="">
                        </span>
                        <span class="skill text-skill">
                            User research
                        </span>
                        <span class="skill text-skill">
                            Design thinking
                        </span>
                    </b-col>
                </b-row>
                <b-row class="user-card">
                    <b-col sm="4" class="user-img">
                        <img src="../assets/user2.png" alt="">
                    </b-col>
                    <b-col sm="8" class="user-text">
                        <b-col sm="12" class="username">
                            <span>Cynthia Morgan</span>
                            
                            <button class="apply-btn">
                                Hire me
                            </button>
                        </b-col>
                        <p class="user-job">
                            UI/UX Designer
                        </p>
                        <p class="user-desc">
                            Consequently, another drawer, and two porters, and several 
                            maids and the landlady, were all loitering by accidental places 
                            and there was a lot more.
                        </p>
                        <span class="skill">
                            <img src="../assets/figma.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/xd.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/invision.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/sketch.png" alt="">
                        </span>
                        <span class="skill">
                            <img src="../assets/html.png" alt="">
                        </span>
                        <span class="skill text-skill">
                            User research
                        </span>
                        <span class="skill text-skill">
                            Design thinking
                        </span>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>
<script>
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
      ]
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
        padding: 150px 100px !important;
        background-color:  rgba(247, 255, 254, 0.25);
        height: 600px;
        .top-sect-texts {
            padding-right: 150px !important;
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
                background-position: 90% 0px; 
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
        padding: 30px 100px !important;
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
        padding: 30px 100px !important; 
        .main-sect {
            padding: 10px 200px 0 10px !important;
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
        padding: 100px 100px 40px 100px !important;
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
            .user-card {
                padding: 0 !important;
                box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
                // height: 210px;
                margin: 40px 0;
                overflow: hidden;
                .user-img {
                    padding: 0 !important;
                    img {
                        width: 100%
                    }
                }
                .user-text {
                    padding-top: 25px !important;
                    .username {
                        padding: 0 !important;
                        span {
                            font-style: normal;
                            font-weight: bold;
                            line-height: 27px;
                            font-size: 16px;
                            font-family: 'Playfair Display', serif;
                            color: #222829;
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

                        color: #3B444F;
                    }
                    .user-desc {
                        font-style: italic;
                        font-weight: normal;
                        line-height: 21px;
                        font-size: 14px;
                        margin-bottom: 20px;
                        color: #67747C;
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
 }
</style>
