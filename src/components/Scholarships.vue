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
                <b-col class="card-container" sm="6" xs="12">
                    <div class="card">    
                        <img class="card-img" src="../assets/banner2.png" alt="">
                        <p class="card-text-heading">
                            Girls in Technology
                        </p>
                        <p class="card-text-subheading">
                            Omolara Awoyemi
                        </p>
                        <p class="card-text-content">
                            Stutern partnered with Girls in Technology to create an ongoing 
                            scholarship fund to promote diversity in software development and UX design. 
                            Each batch, successful female applicants are selected to receive 
                            a partial scholarship toward any Stutern program.
                        </p>
                        <h3 class="more" @click="toScholarship()">
                            Learn more and apply <img src="../assets/right-arrow.png" alt="">
                        </h3>
                    </div>
                </b-col>
                <b-col class="card-container" sm="6" xs="12">
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
                </b-col>
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
                <input type="text" class="myinput" placeholder="Full name*">
                <input type="text" class="myinput" placeholder="Email address*">
                <input type="text" class="myinput" placeholder="How many students will you love to sponsor?*">
                <textarea name="" id="" cols="30" rows="5" placeholder="Anything else you will like us to know?"></textarea>
                <button class="apply-btn">
                    Send
                </button>
            </b-col>
            <b-col sm="6" class="sponsor-sect-right">
                <img src="../assets/banner4.png" alt="">
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        toScholarship () {
            this.$router.push({name: 'ScholarshipChild', params: {scholarshipName: 'girlsInTech'}})
        }
    }
}
</script>
<style lang="scss" scoped>
    .scholarships-wrap {
        .top-text {
            padding: 100px 460px !important;
            text-align: center !important;
            background: rgba(247, 255, 254, 0.5);
            .top-text-heading {
                font-family: 'Playfair Display', serif;
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
                color: #67747C;
            }
        }
        .banner {
            height: 450px;
            overflow: hidden;
            img {
                width: 100%
                // height: 360px
            }
        }
        .cards-wrap {
            padding: 100px 200px !important;
            text-align: center !important;
            // background: rgba(247, 255, 254, 0.5);
            background-image: url('../assets/pattern1.png');
            
            background-repeat: no-repeat;
            background-position: left; 
            .cards-header {
                margin: 0 !important;
                text-align: center !important;
                .top-text-heading {
                    font-family: 'Playfair Display', serif;
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
                    color: #67747C;
                }
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
                    p {
                        margin: 12px 20px
                    }
                    .card {        
                        background: #FFFFFF;
                        box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.05);  
                        padding: 0 !important;      
                        height: 610px;
                        border: 0 !important;
                        border-radius: 0 !important;
                        overflow: hidden;
                        .card-img {
                            height: 290px;
                            margin: 0;
                            border-radius: 0;
                            margin-bottom: 30px
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
        .sponsor-sect {
            text-align: left;
            padding: 0 !important;
            height: 800px;
            overflow: hidden;
            .sponsor-sect-left {
                padding: 30px 40px 0 260px;
                .sponsor-text-heading {
                    font-family: 'Playfair Display', serif;
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
                    color: #67747C;
                }
                .myinput {
                    border: 1px solid #C4C4C4;
                    height: 70px;
                    width: 100%;
                    border-radius: 2px;
                    margin-top: 25px;
                    padding: 0 20px;
                }
                .myinput:focus {
                    border: 1px solid #00D7C4 !important;
                }
                textarea {
                    border: 1px solid #C4C4C4;
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
                background: linear-gradient(180deg, #00D7C4 0%, #01E3C2 100%);
                box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
                border-radius: 4px;
                color: #fff;
                margin-top: 15px;
                // margin-left: 40px;
                } 
            }
            .sponsor-sect-right {
                padding: 0 !important;
                img {
                    width: 100%;
                    float: right
                }
            }
        }
    }
</style>
