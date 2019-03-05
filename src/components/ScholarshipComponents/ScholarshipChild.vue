<template>
    <div class="scholarship-wrap">
        <b-row class="top-banner">
            <img src="../../assets/banner2.png" alt="">
        </b-row>
        <b-row class="floating-box">
            <div class="floater">
                <p class="floater-header">
                    Girls in Technology
                </p>
                <p class="floater-subtext">
                    Omolara Awoyemi
                </p>
            </div>
        </b-row>
        <b-row class="inner-nav">
            <div class="inner-content">
                <button v-for="(link, i) in innerLinks" :key="i" class="inner-link" @click="makeActive(i)" :class="link.active ? 'active' : ''">{{link.name}}</button>
            </div>
        </b-row>
        <b-row class="overview">
            <p class="content-heading">
                Overview
            </p>
            <p class="texts">
                Stutern partnered with <b>Girls in Technology</b> to create an ongoing scholarship 
                fund to promote diversity in software development and UX design. Each batch, 
                successful female applicants are selected to receive a partial scholarship 
                toward any Stutern program. To-date, Girls in Technology has funded close to 
                <b>$1,000</b> in scholarships for Stutern students. 
            </p>
        </b-row>
        <b-row class="impact">
            <p class="content-heading">
                Impact
            </p>
            <!-- <b-row class="sects"> -->
                <b-col class="impact-section" sm="4">
                    <p class="colored">
                        14
                    </p>
                    <p class="coloreds-title">
                        number of beneficiaries
                    </p>
                </b-col>
                <b-col class="impact-section" sm="4">
                    <p class="colored">
                        N200,000
                    </p>
                    <p class="coloreds-title">
                        average salary after program
                    </p>
                </b-col>
                <b-col class="" sm="4">
                    <p class="colored">
                        96%+
                    </p>
                    <p class="coloreds-title">
                        placement rate
                    </p>
                </b-col>

                <b-col sm="6" class="mycard">
                    <div class="right-card">
                        <p class="quote">
                            “Girls in Technology is encouraging females out there interested in tech”
                        </p>
                        <p class="texts">
                            Its a known fact that there aren't enough women in the tech industry, Girls in 
                            Technology gave all the females in SGA scholarships. Girls in technology is 
                            encouraging females out there interested in starting a career in the tech space, 
                            which I think is amazing.
                        </p>
                        <img src="../../assets/eniola.png" class="user-img" alt="">
                        <p class="name">
                            Eniola Aminu
                        </p>
                        <p class="user-title">
                            UI/UX Designer, Cokards
                        </p>
                    </div>
                </b-col>
                
                <b-col sm="6" class="mycard">
                    <div class="left-card">
                        <p class="quote">
                            “...the realization that I was not alone and I had a support system cheering me on”
                        </p>
                        <p class="texts">
                            I think the first impact for me was the realization that I was not alone and I had a 
                            support system cheering me on, secondly the girls in technology came through for me 
                            financially with a scholarship and for these I’m forever grateful.
                        </p>
                        <img src="../../assets/orezi.png" class="user-img" alt="">
                        <p class="name">
                            Orezi Omikiti
                        </p>
                        <p class="user-title">
                            UI/UX Designer, Suregroup
                        </p>
                    </div>
                </b-col>
            <!-- </b-row> -->
        </b-row>
        <b-row class="how-to-apply">
            <p class="content-heading">
                How to apply
            </p>
            <b-col sm="6">
            <div class="mylist">
                <span class="number colored">
                    1
                </span>
                <div class="list-content text">
                    You are eligible if you are <b>female</b>.
                </div>
            </div>
            <div class="mylist">
                <span class="number colored">
                    2
                </span>
                <div class="list-content text">
                    Scholarships are reviewed and awarded periodically. 
                    The <b>deadline</b> to apply for a given period is the 
                    application closing date. Applicants are contacted the 
                    following week to schedule an interview, and applicants are
                     notified of a decision by the following Friday. 
                </div>
            </div>
            <div class="mylist">
                <span class="number colored">
                    3
                </span>
                <div class="list-content text">
                    <b>Full scholarships</b> override the Income Sharing Agreement 
                    financing option. <b>Partial scholarships</b> accommodates the 
                    Income Sharing Agreement financing option.
                </div>
            </div>
            <div class="mylist">
                <span class="number colored">
                    4
                </span>
                <div class="list-content text">
                    Upon selection for the scholarship, we ask each applicant commit 
                    to <b>blogging</b> about their Stutern experience (either on their own 
                    blog or on Stutern’s blog), and giving Stutern permission to share 
                    their projects and their Stutern experience with prospective students.

                </div>
            </div>
            <button class="apply-btn">
                Apply now
            </button>
            </b-col>
            <b-col sm="6" class="apply-img-wrap">
                <img src="../../assets/banner5.png" alt="">
            </b-col>
        </b-row>
        <b-row class="past-beneficiaries">
            <p class="content-heading">
                Past beneficiaries
            </p>
            <b-col sm="6" class="set-wrap">
                <p class="set">
                    SGA 0.4
                </p>
                <ul>
                    <li><b>Jokotade Adewale</b> - UI/UX Designer</li>
                    <li><b>Taiwo Osokoya</b> - UI/UX Designer</li>
                    <li><b>Aghama Jesurobo</b> - UI/UX Designer</li>
                    <li><b>Oluwaseyi Abiodun</b> - UI/UX Designer</li>
                    <li><b>Opeyemi Olatoye</b> - UI/UX Designer</li>
                </ul>
            </b-col>
            <b-col sm="6" class="set-wrap left-set">
                <p class="set">
                    SGA 0.4
                </p>
                <ul>
                    <li><b>Jokotade Adewale</b> - UI/UX Designer</li>
                    <li><b>Taiwo Osokoya</b> - UI/UX Designer</li>
                    <li><b>Aghama Jesurobo</b> - UI/UX Designer</li>
                    <li><b>Oluwaseyi Abiodun</b> - UI/UX Designer</li>
                    <li><b>Opeyemi Olatoye</b> - UI/UX Designer</li>
                </ul>
            </b-col>
            <b-col sm="6" class="set-wrap">
                <p class="set">
                    SGA 0.4
                </p>
                <ul>
                    <li><b>Jokotade Adewale</b> - UI/UX Designer</li>
                    <li><b>Taiwo Osokoya</b> - UI/UX Designer</li>
                    <li><b>Aghama Jesurobo</b> - UI/UX Designer</li>
                    <li><b>Oluwaseyi Abiodun</b> - UI/UX Designer</li>
                    <li><b>Opeyemi Olatoye</b> - UI/UX Designer</li>
                </ul>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            innerLinks: [
                {name: 'Overview', active: true},
                {name: 'Impact', active: false},
                {name: 'Apply', active: false},
                {name: 'Past beneficiaries', active: false},
            ]
        }
    },
    methods: {
        makeActive(i) {
            this.innerLinks.map(link => link.active = false)
            this.innerLinks[i].active = true;
            // this.$router.push({name: this.innerLinks[i].name})
        }
    }
}
</script>

<style lang="scss" scoped>
    .scholarship-wrap {
        width: 100%;
        min-height: 100vh;
        .top-banner {
            height: 450px;
            overflow: hidden;
            img {
                width: 110% !important;
                height: 650px !important;
                margin-top: -100px;
            }
        }
        .floating-box {
            padding: 0 200px !important;
            height: 200px;
            .floater {
                height: 200px;
                margin-top: -100px;
                text-align: center;
                background-color: #fff;
                width: 100%;
                padding: 50px;
                .floater-header {
                    font-family: 'Playfair Display', serif;
                    font-style: normal;
                    font-weight: bold;
                    line-height: normal;
                    font-size: 32px;
                    text-align: center;

                    color: #222829;
                }
                .floater-subtext {
                    font-style: normal;
                    font-weight: normal;
                    line-height: normal;
                    font-size: 18px;
                    text-align: center;

                    color: #67747C;
                }
            }
        }
        .inner-nav {
            padding: 0 200px !important;
            .inner-content {
                padding: 0;
                height: 40px;
                width: 100%;
                border-bottom: 0.5px solid rgba(103, 116, 124, 0.25);
                .inner-link {
                    margin: 0;
                    width: auto;
                    padding: 0 20px;
                    text-align: center;
                    height: 40px;     
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    font-size: 16px;
                    background-color: #ffffff;
                    color: #67747C;
                    border: 0;
                    cursor: pointer;
                    border-bottom: 0.5px solid rgba(103, 116, 124, 0.25);
                }
                .inner-link:focus {
                    outline: none
                }
                .inner-link:hover {
                    color: #00D7C4
                }
                .active {
                    color: #00D7C4;
                    border-bottom: 2px solid #00D7C4
                }
            }
        }
        .overview {
            padding: 50px 200px 15px 200px;
        }
        .impact {
            padding: 0px 200px 50px 200px;            
        }
        .impact-section {
            border-right: 1px solid  #67747C;
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
        .mycard {
            padding: 0 !important;
            margin: 20px 0 !important;
            .texts {
                height: 150px
            }
        }
        .right-card {
            background: rgba(21, 110, 220, 0.02);
            border-radius: 5px;
            padding: 30px;
            margin-top: 40px;
            text-align: center;
            margin-right: 40px;
            // height: 500px
        }
        .left-card {
            background: rgba(224, 155, 61, 0.02);
            border-radius: 5px;
            padding: 30px;
            margin-top: 40px;
            text-align: center;
            margin-left: 40px;
            // height: 500px
        }
        .quote {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-weight: bold;
            line-height: 30px;
            font-size: 20px;
            text-align: left;
            color: #222829;
        }
        .user-img {
            margin: 20px auto !important;
            text-align: center;
        }
        .name {
            font-style: normal;
            font-weight: normal;
            line-height: 26px;
            font-size: 16px;
            text-align: center;
            margin: 5px auto;
            color: #222829;
        }
        .user-title {
            font-style: normal;
            font-weight: normal;
            line-height: 24px;
            font-size: 16px;
            text-align: center;
            margin: 5px auto;
            color: #67747C;
        }
        .texts {
            text-align: left;
            font-style: normal;
            font-weight: normal;
            line-height: 27px;
            font-size: 16px;

            color: #67747C;
        }
        .how-to-apply {
            background: rgba(247, 255, 254, 0.5);
            padding: 50px 200px;
            .mylist {
                margin: 20px 0;
            }
            .list-content {
                color: #3B444F;
                margin-left: 40px;
                margin-top: -30px;
            }
            .number {
                height: 100px;
            }
            .apply-img-wrap {
                padding-right: 0 !important
            }
            img {
                float: right;
                margin-top: -50px
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
            margin-left: 40px;
        } 
        .past-beneficiaries {
            padding: 20px 100px;
            background-image: url('../../assets/pattern2.png');
            background-position: 100% 34px; 
            background-repeat: no-repeat;
            min-height: 600px;
            // background-position: right; 
            .content-heading {
                margin-left: 150px;
            }
            .left-set {
                border-left: 4px solid rgba(103, 116, 124, 0.25) !important;
            }
            .set-wrap {
                padding: 0 0 0 150px !important;
                .set {
                    color: #00D7C4;
                    font-family: 'Playfair Display', serif;
                    font-style: normal;
                    font-weight: bold;
                    line-height: 26px;
                    font-size: 20px;
                    margin-top: 25px;
                }
                ul {
                    padding: 0 !important;
                    li {
                        list-style-type: none;
                        font-style: normal;
                        line-height: 26px;
                        font-size: 18px;

                        color: #222829;
                    }
                }
            }
        }
        @media (max-width: 767px) {
            .top-banner {
                height: auto;
                margin-top: 60px;
                img {
                    height: 230px !important;
                    margin-top: 0
                }
            }
            .floating-box {
                padding: 20px 50px !important;
                height: 150px;
                .floater {
                    padding: 20px;
                    margin-top: -50px;
                    box-shadow: 3px 3px 3px #f5faf8;
                    height: 130px;
                    .floater-header {
                        font-size: 26px
                    }
                }
            }
            .inner-nav {
                padding: 0 20px !important;
                .inner-content {
                    .inner-link {
                        width: auto;
                        padding: 0 12px;
                        font-size: 12px;
                    }
                }
            }
            .overview {
                padding: 20px !important;
                margin: 0 !important
            }
            .impact {
                padding: 20px !important;
                margin: 0 !important;
                .impact-section {
                    border: 0 !important
                }
            }
            .mycard {
                .right-card, .left-card {
                    margin: 0
                }
                .texts {
                    height: auto
                }
            }
            .how-to-apply {
                padding: 0px !important;
                margin: 0 !important;
                .content-heading {
                    font-size: 20px;
                    margin: 12px 0 0 20px;
                }
                .apply-img-wrap {
                    height: 300px;
                    margin-top: 30px;
                    overflow: hidden;
                }
            }
            .past-beneficiaries {
                padding: 20px !important;
                margin: 0 !important;
                background-image: none;
                .content-heading {
                    margin: 10px 20px 0 0 !important;
                    font-size: 20px;
                }
                .set-wrap {
                    padding: 0 !important; ul {
                        li {
                            font-size: 14px;
                        }
                    }
                }
                .left-set {
                    border: 0 !important
                }
            }
        }
    }
</style>
