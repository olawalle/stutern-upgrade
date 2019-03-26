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
      let students = res.data.sort(function(a, b){
        var keyA = a.userSet,
            keyB = b.userSet;
            // Compare the 2 dates
            if(keyA < keyB) return 1;
            if(keyA > keyB) return -1;
            return 0;
        });
       store.commit(mutationTypes.ALL_STUDENTS, students)
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
        }).sort(function(a, b){
            var keyA = a.setName,
                keyB = b.setName;
            // Compare the 2 dates
            if(keyA < keyB) return 1;
            if(keyA > keyB) return -1;
            return 0;
        });
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