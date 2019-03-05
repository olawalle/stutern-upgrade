import axios from 'axios'

import store from './store'
import * as urls from './url'



const getTopData = () => {
    return axios({
        url: urls.homesUrl,
        method: 'get',
    })
}

const getTracksData = () => {
    return axios({
        url: urls.tracksUrl,
        method: 'get',
    })
}


const getTutors = () => {
    return axios({
        url: urls.tutorsUrl,
        method: 'get',
    })
}


const getSellingPoints = () => {
    return axios({
        url: urls.sellingPointsUrl,
        method: 'get',
    })
}

const getChange = () => {
    return axios({
        url: urls.changesUrl,
        method: 'get',
    })
}

export default {
    getTopData,
    getTracksData,
    getTutors,
    getSellingPoints,
    getChange
}