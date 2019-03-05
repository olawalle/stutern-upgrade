<template>
    <div class="scholarships-wrap">
        <b-row class="top-text">
            <h3 class="top-text-heading" @click="log()">
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
        <b-row class="sets">    
            <p class="set">
                SGA 0.1
            </p>
            <div class="scrolling-wrapper" :ref="v1">
                <span class="card  btn-wrap">
                    <button class="my-btn" @click="toLeft(v1)">
                        left
                    </button>
                </span>
                <div class="card-wrap">
                    <div class="card">
                        <img src="../assets/jessica.jpg" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <br>
                </div>
                <div class="card  btn-wrap">
                    <button class="my-btn" @click="toRight(v1)">
                        right
                    </button>
                </div>
            </div>
            <p class="set">
                SGA 0.2
            </p>
            <div class="scrolling-wrapper" :ref="v2">
                <div class="card btn-wrap">
                    <button class="my-btn" @click="toLeft(v2)">
                        left
                    </button>
                </div>
                <div class="card-wrap">
                    <div class="card">
                        <img src="../assets/jessica.jpg" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                <br>
                    <div class="card">
                        <img src="../assets/jessica.jpg" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/silas.png" alt="">
                        <div class="user-details">
                            <p class="name">
                            Hakeeb Bashorun 
                            </p>
                            <p class="job-title">
                            Product Designer, Cowrywise
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card btn-wrap">
                    <button class="my-btn" @click="toRight(v2)">
                        right
                    </button>
                </div>
            </div>
        </b-row>
        <!-- <b-row class="sets">    
            <p class="set">
                SGA 0.1
            </p>
            <div class="scrolling-wrapper" ref="scroll-wrapper">
                <div class="card">
                    <button class="my-btn" @click="toLeft()">
                        left
                    </button>
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <br>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/silas.png" alt="">
                </div>
                <div class="card">
                    <button class="my-btn" @click="toRight()">
                        right
                    </button>
                </div>
            </div>
        </b-row> -->
    </div>
</template>
<script>
export default {
    data () {
        return {
            v1: 'scroll-wrapper',
            v2: 'scroll-wrapper2'
        }
    },
    methods: {
        toScholarship () {
            this.$router.push({name: 'ScholarshipChild', params: {scholarshipName: 'girlsInTech'}})
        },
        toLeft (i) {
            let cont = this.$refs[i]
            cont.scrollLeft = cont.scrollWidth - cont.clientWidth
        },
        toRight (i) {
            let cont = this.$refs[i]
            cont.scrollLeft = 0
        },
        log () {
            // this.right = 'btn-none'
            // this.left = 'btn-block'
            // this.farLeft = 'card-block'
            // this.farRight = 'card-none'
            // this.shift = {'margin-left': '0%'}
            let cont = this.$refs['scroll-wrapper']
            cont.scrollLeft = cont.scrollWidth - cont.clientWidth
        },
        // log () {
        //     console.log(this.$refs['scroll-wrapper'].scrollWidth - this.$refs['scroll-wrapper'].clientWidth)
        //     console.log(this.$refs['scroll-wrapper'].scrollLeft)
        // }
    },
    mounted () {
        console.log(this.$refs)
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
                    // width: 100%
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
        .sets {
            padding: 20px 0 !important;
            margin: 0 !important;
            .set {
                font-family: 'Playfair Display', serif;
                font-style: normal;
                font-weight: bold;
                line-height: normal;
                font-size: 24px;
                margin: 70px 0 0 110px;
                color: #00D7C4;
            }
            .scrolling-wrapper {
                overflow-x: auto;
                overflow-y: hidden;
                white-space: nowrap;
                min-height: 350px;
                padding: 20px 0;
                background-image: url('../assets/pattern4.png');
                background-repeat: no-repeat;
                background-position: 90% 20px;
                // -webkit-overflow-scrolling: touch;
                scroll-behavior: smooth;
                .card-wrap {
                    width: 125%;
                    display: inline-block
                }
                .card {
                    display: inline-block;
                    max-width: 300px;
                    height: 300px;
                    border: 0 !important;
                    border-radius: 4px !important;
                    // background-color: #67747C;
                    margin: 0 15px 30px 0;
                    overflow: hidden;
                    // scroll-behavior: smooth;
                    .user-details {
                            position: relative;
                            top: -300px;
                            margin: 0 0 0 0px;
                            padding-left: 20px;
                            height: 100%;
                            padding-top: 235px;
                            background: linear-gradient(1.25deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 25.54%);
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
                        padding-top: 225px;
                        transition: linear all 0.3s
                    }
                    img {
                        height: 100%
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
                    filter: grayscale(0.9)
                }
                .my-btn {
                    height: 600px !important;
                    margin-top: -600px;
                    margin-right: 0 !important
                }
                &::-webkit-scrollbar {
                    display: none;
                }
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
                .scrolling-wrapper {
                    padding: 10px 20px !important;
                    overflow: hidden;
                    .card {
                        display: block;
                        min-width: 85%;
                        max-height: 300px;
                        .btn-wrap {
                            display: none !important
                        }
                    }
                    .btn-wrap {
                        display: none !important
                    }
                    button {
                        display: none
                    }
                }
            }
        }
    }
</style>
