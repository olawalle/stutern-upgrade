<template>
    <div class="singlehire-page-wrap">
        <b-row class="top-sect">
            <b-col sm="6" class="top-sect-texts">
                <p class="name">
                    Michael Chinedu <span class="av">available for hire</span>
                </p>
                <p class="title">
                    UI/UX Designer
                </p>
                <p class="self-text">
                    Consequently, another drawer, and two porters, and several maids 
                    and the landlady, were all loitering by accidental places and there was a lot more.
                </p>
                <p class="skill-title">
                    SKILLS & TOOLS
                </p>
                
                <span class="skill">
                    <img src="../../assets/figma.png" alt="">
                </span>
                <span class="skill">
                    <img src="../../assets/xd.png" alt="">
                </span>
                <span class="skill">
                    <img src="../../assets/invision.png" alt="">
                </span>
                <span class="skill">
                    <img src="../../assets/sketch.png" alt="">
                </span>
                <span class="skill">
                    <img src="../../assets/html.png" alt="">
                </span>
                <span class="skill text-skill">
                    User research
                </span>
                <span class="skill text-skill">
                    Design thinking
                </span>
                <b-row class="top-btns">
                    <button class="apply-btn" @click="test('explore')">
                        Hire me
                    </button>                
                    <button class="apply-btn-two">
                        View CV
                    </button>
                </b-row>
            </b-col>
            <b-col sm="6" class="img-grid-wrap">
                <img src="../../assets/user3.png" class="animated 	slideInRight" alt="">
            </b-col>
        </b-row>
        <b-row class="sect-two">
            <p class="sect-two-heading">
                What I have worked on
            </p>
            <b-col class="card-container" sm="6" xs="12">
                <div class="card">    
                    <img class="card-img" src="../../assets/digital.png" alt="">
                    <p class="card-text-heading">
                        Project title
                    </p>
                    <p class="card-text-content">
                        Include a brief description of the project here. This will serve to 
                        provide viewers with a sense of what the project was about
                    </p>
                </div>
            </b-col>
            <b-col class="card-container" sm="6" xs="12">
                <div class="card">    
                    <img class="card-img" src="../../assets/digital.png" alt="">
                    <p class="card-text-heading">
                        Project title
                    </p>
                    <p class="card-text-content">
                        Include a brief description of the project here. This will serve to 
                        provide viewers with a sense of what the project was about
                    </p>
                </div>
            </b-col>
            <b-col class="card-container" sm="6" xs="12">
                <div class="card">    
                    <img class="card-img" src="../../assets/digital.png" alt="">
                    <p class="card-text-heading">
                        Project title
                    </p>
                    <p class="card-text-content">
                        Include a brief description of the project here. This will serve to 
                        provide viewers with a sense of what the project was about
                    </p>
                </div>
            </b-col>
            <b-col class="card-container" sm="6" xs="12">
                <div class="card">    
                    <img class="card-img" src="../../assets/digital.png" alt="">
                    <p class="card-text-heading">
                        Project title
                    </p>
                    <p class="card-text-content">
                        Include a brief description of the project here. This will serve to 
                        provide viewers with a sense of what the project was about
                    </p>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .singlehire-page-wrap {
        width: 100%;
    .top-sect {
        padding: 150px 100px !important;
        background-color:  rgba(247, 255, 254, 0.25);
        height: 600px;
        .top-sect-texts {
            padding-right: 150px !important;
            .name {
                font-family: 'Playfair Display', serif;
                font-style: normal;
                font-weight: bold;
                line-height: 27px;
                font-size: 18px;

                color: #222829;
                i {
                    color: #67747C;
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
                    color: #EB002A;
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
                font-style: italic;
                font-weight: normal;
                line-height: 32px;
                font-size: 24px;

                color: #67747C;
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
            .apply-btn-two {
                height: 45px;
                line-height: 45px;
                border: 0;
                padding: 0 34px;
                background: #FFFFFF;
                box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
                border-radius: 4px;
                color: #00D7C4;
                margin-top: 28px;
                margin-left: 40px;
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
                margin-top: 28px;
            }
        }
        .img-grid-wrap {
                background-image: url('../../assets/pattern3.png');
                background-position: 90% 0px; 
                background-repeat: no-repeat;
                padding: 0 100px 0 0 !important;
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
                font-family: 'Playfair Display', serif;
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
                    margin: 12px 0px
                }
                .card {        
                    background: #FFFFFF;
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
        button:hover {
            transform: translateY(-3px) !important;
            transition: all 0.6s;
            cursor: pointer
        }
        @media (max-width: 767px) {
            .top-sect {
                padding: 150px 20px 30px 20px !important;
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
                    text-align: center
                }
                .img-grid-wrap {
                    padding: 0px !important;
                    img {
                        margin: 20px auto !important
                    }
                }
            }
            .sect-two {
                padding: 10px 20px !important;
                margin: 0 !important;
                .card-container {
                    padding: 0 !important;
                    box-shadow: 3px 3px 3px #f5faf8;
                    .card {
                        height: auto;
                        .card-img {
                            height: 200px
                        }
                    }
                    .card-text-heading {
                        margin: 0 12px;
                    }
                    .card-text-content {
                        margin: 12px
                    }
                }
            }
        }
    }
</style>

