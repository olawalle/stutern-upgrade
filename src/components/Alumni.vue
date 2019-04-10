<template>
    <div class="scholarships-wrap">
        <b-row class="top-text">
            <h3 class="top-text-heading">
                Alumni
            </h3>
            <p class="sub-text">
                The success of the Stutern Graduate Accelerator is seen in the quality of 
                graduates we have turned out over several cohorts. Our graduates have gone 
                on to begin new and promising careers.
            </p>
        </b-row>
        <b-row class="banner">
            <img src="../assets/banner6.png" alt="">
        </b-row>
        
        <b-row class="sets" v-for="(set, i) in reducedSets" :key="i">    
            <b-col sm="12">
                <p class="set">
                    {{ i }}
                </p>
            </b-col>
            <!-- <div class="scrolling-wrapper" :ref="'set'+i"> -->
                <b-col sm="1" class="side-btn" >
                    <!-- <div class="full" v-if="set.length > 6" @click="toLeft('set'+i)">
                        <button>
                            <img src="../assets/arrow-right.svg" class="left-img" alt="">
                        </button>
                    </div> -->
                </b-col>
                <b-col sm="10" class="content-holder" :ref="'set'+i">
                    <div class="card-wrap">
                        <div class="card-inner-wrapper" style="width: 100%; white-space: initial">
                            <div class="card" v-for="(user, i) in set" :key="'user'+i" @click="toSingle(user)">
                                <img :src="user.userPhoto" alt="">
                                <div class="user-details">
                                    <p class="name">
                                    {{user.userName}} 
                                    </p>
                                    <p class="job-title">
                                    {{user.jobTitle}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col sm="1" class="side-btn">
                </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            reducedSets: {},
            v1: 'scroll-wrapper',
            v2: 'scroll-wrapper2'
        }
    },
    computed: {
        ...mapGetters({
            sets: 'getSets',
            students: 'getStudents'
        })
    },
    methods: {
        toScholarship () {
            this.$router.push({name: 'ScholarshipChild', params: {scholarshipName: 'girlsInTech'}})
        },
        toLeft (i) {
            let cont = this.$refs[i][0]
            cont.scrollLeft = cont.scrollWidth - cont.clientWidth
        },
        toRight (i) {
            let cont = this.$refs[i][0]
            cont.scrollLeft = 0
        },
        toSingle (user) {
            this.$router.push({name: 'SingleHire', params: {userId: user._id}})
        },
        log () {
            let cont = this.$refs['scroll-wrapper']
            cont.scrollLeft = cont.scrollWidth - cont.clientWidth
        },
    },
    mounted () {
        this.reducedSets = this.students.reduce((agg, curr) => {  
          agg[curr.userSet] = agg[curr.userSet] ? agg[curr.userSet].concat(curr) : [curr];
          return agg
        }, {})
        for (let i = 0; i < this.sets.length; i++) {
            this.reducedSets[this.sets[i].setName]
            .sort(function(a,b) {
                if (a.userName > b.userName) return 1
                if (a.userName < b.userName) return -1
                return 0
            })
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
            .side-button {
                width: 100px;
                background-color: green;
                height: 200px;
            }
            .alumni-card  {
                display: inline;
                max-width: 19%;
                max-height: 300px;
                margin: 0 5px;
                background-color: red;
                overflow: hidden;
                img {
                    width: 100%
                } 
            }
            .inside {
                width: 150%;
                margin-top: 20px;
                height: 350px;
                // background-color: green;
                padding: 20px 0 20px 0px;
                overflow: auto;
                transition: linear 0.5s all;
                overflow-x: auto;
                .my-btn {
                    // width: 5%;
                    cursor: pointer;
                    text-align: center;
                    background-color: red;
                }
                .inside-inside {
                    height: 100%;
                    background-color: rgb(181, 181, 181);
                    min-width: 18.00%;
                    margin: 0 0.5%;
                    border: 1px solid #EEE;
                    display: inline-block;
                    // margin-left: -200px;
                }
                .card-none {
                    display: none
                }
                .block {
                    display: inline-block;
                }
                .btn-none {
                    display: none;
                    // width: 0;
                    overflow: hidden;
                }
                .btn-block {
                    display: inline-block;
                    width: 5%;
                    transition: linear 3s all;
                }
            }
        }
        ::-webkit-scrollbar {
            width: 0px;  /* remove scrollbar space */
            background: transparent;  /* optional: just make scrollbar invisible */
        }
        .sets {
            .set {
                font-family: 'Playfair Display', serif;
                font-style: normal;
                font-weight: bold;
                line-height: normal;
                font-size: 24px;
                margin: 70px 0 15px 110px;
                color: #00D7C4;
            }
                .side-btn {
                    .full {
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        margin-top: -30px;
                        button {
                            background-color: #fff;
                            border: 0 !important;
                            img {
                                height: 25px;
                            }
                            .left-img {
                                -ms-transform: rotate(180deg); /* IE 9 */
                                -webkit-transform: rotate(180deg); /* Safari 3-8 */
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
                .content-holder {
                    white-space: nowrap;
                    overflow-y: auto;
                    scroll-behavior: smooth;
                .card-wrap {
                    width: 100%;
                    display: inline-block;
                }
                .card {
                    display: inline-block;
                    max-width: 280px;
                    min-width: 280px;
                    height: 300px;
                    border: 0 !important;
                    border-radius: 4px !important;
                    // background-color: #67747C;
                    margin: 0 15px 10px 0;
                    overflow: hidden;
                    cursor: pointer;
                    scroll-behavior: smooth;
                    .user-details {
                            position: relative;
                            top: -325px;
                            margin: 0 0 0 0px;
                            padding-left: 20px;
                            height: 100%;
                            padding-top: 240px;
                            background: linear-gradient(1.25deg, rgba(0, 0, 0, 0.9) 0%, rgba(54, 54, 54, 0) 45.54%);
                            color: #fff;
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
                        padding-top: 230px;
                        transition: linear all 0.4s
                    }
                    img {
                        height: 110%;
                        filter: grayscale(0.99);
                        transition: all 0.5s
                    }
                    button {
                        border: 0;
                        background-color: transparent;
                        color: #67747C;
                        height: 100%;
                        width: 110px;
                        cursor: pointer;
                    }
                }
                .card:hover img {
                    transform: scale(1.05);
                    filter: grayscale(0.1)
                }
                // }
            }
        }
        button:hover {
            transform: translateY(-3px) !important;
            transition: all 0.6s;
            cursor: pointer
        }
        @media (max-width: 767px) {
            .top-text {
                padding: 90px 12px !important;
                margin: 0 !important;
                .top-text-heading {
                    font-size: 28px
                }
                .sub-text {
                    font-size: 16px;
                    line-height: 24px
                }
            }
            .banner {
                height: 300px;
                img {
                    height: 90%;
                    width: 220%;
                    margin-left: -12%
                }
            }
            .sets {
                .set {
                    margin: 10px 20px
                }
                .content-holder {
                    .card-wrap {
                        .card-inner-wrapper {
                            padding: 10px 20px !important;
                            .card {
                                display: inline-block;
                                height: 300px;
                                border: 0 !important;
                                border-radius: 4px !important;
                                overflow: hidden;
                                cursor: pointer;
                                margin: 12px auto;
                                min-width: 100% !important;
                                scroll-behavior: smooth;
                                img {
                                    height: 130%;
                                    -webkit-filter: grayscale(0.99);
                                    filter: grayscale(0.99);
                                    -webkit-transition: all 0.5s;
                                    transition: all 0.5s;
                                }
                                .user-details {
                                    position: relative;
                                    top: -325px;
                                    margin: 0 0 0 0px;
                                    padding-left: 20px;
                                    height: 100%;
                                    padding-top: 170px;
                                    background: linear-gradient(1.25deg, rgba(0, 0, 0, 0.9) 0%, rgba(54, 54, 54, 0) 45.54%);
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>