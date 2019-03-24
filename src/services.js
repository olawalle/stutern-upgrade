import axios from 'axios'

import * as mutationTypes from './mutationTypes'
import store from './store'
import * as urls from './url'



let getUsers = () => {
    return axios({
        method: 'get',
        url: urls.allUsers
    })
    .then(res => {
       store.commit(mutationTypes.ALL_STUDENTS, res.data)
    })
    .catch(err => console.log(err))
}


let getSets = () => {
    return axios({
        method: 'get',
        url: urls.allSets
    })
    .then(res => {
        let data = res.data.map(set => {
            return {
                ...set,
                text: set.setName,
                value: set.setName
            }
        })
       store.commit(mutationTypes.ALL_SETS, data)
    })
    .catch(err => console.log(err))
}

let getSetStudents = (set) => {
    return axios({
        method: 'get',
        url: urls.allSets+'/'+set
    })
}

let getScholarships = () => {
    return axios({
        method: 'get',
        url: urls.scholarships
    })
    .then(res => {
        let data = res.data.map(scholarship => {
            return {
                ...scholarship,
                text: scholarship.scholarshipName,
                value: scholarship._id
            }
        })
        store.commit(mutationTypes.ALL_SCHOLARSHIPS, data)
    })
    .catch(err => console.log(err))
}

let getUserProjects = (id) => {
    return axios({
        method: 'get',
        url: urls.projects+'/'+id,
    })
}

let getSkills = () => {
    return axios({
        method: 'get',
        url: urls.skills,
    })
    .then(res => {
        store.commit(mutationTypes.SKILLS, res.data)
    })
    .catch(err => {
        console.log(err)
    })
}


let getJobTitles = () => {
    return axios({
        method: 'get',
        url: urls.tracks,
      })
    .then((res) => {
      let titles = [
        {text: 'All', value: 0}
      ]
      res.data.forEach((job, i) => {
          titles.push({    
            ...job,
            text: job.trackName,
            value: i + 1,
          })
      });
      console.log(titles)
      store.commit(mutationTypes.JOB_TITLES, titles);
    })
    .catch(err => console.log(err));
}

export default {
    getUsers,
    getSets,
    getSetStudents,
    getUserProjects,
    getScholarships,
    getSkills,
    getJobTitles
}