<template>
    <div class="page-wrap">
        <h3 class="top-text-heading">
            {{title}}
        </h3>
        <iframe class="frame" :src="src" frameborder="0"></iframe>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            src: '',
            title: ''
        }
    },
    computed: {
        ...mapGetters({
            tracks: 'getJobTitles'
        })
    },
    beforeMount() {
        this.title = this.tracks.find(track => track._id === this.$route.query.to).trackName
        let src = this.tracks.find(track => track._id === this.$route.query.to).trackUrl
        this.src = 'https:'+src.split(':')[1]
    }
}
</script>
<style lang="scss" scoped>
    .page-wrap {
        min-height: 95vh;
        width: 100%;
        padding: 120px 300px;
        .top-text-heading {
            font-family: 'Playfair Display', serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            text-align: center;
            margin: 10px auto;
            color: #222829;
            margin: 0px 0 30px 0;
        }
        .frame {
            width: 100%;
            min-height: 200vh;
            height: auto
        }
        @media (max-width: 767px) {
            padding: 20px;
            .top-text-heading {
                font-size: 14px;
                margin-top: 60px;
            }
            .frame {
                width: 100%;
                min-height: 700vh;
                height: auto
            }
        }
    }
</style>
