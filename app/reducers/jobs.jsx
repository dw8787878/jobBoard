import axios from 'axios'

//action types:
const GET_JOBS = 'GET_JOBS'

//action creator:
export const getJobs = jobs => ({
  type: GET_JOBS, jobs
})

//reducer:
const reducer = (state=[], action) => {
  let newState = []
  switch (action.type) {
    case GET_JOBS:
      newState = action.jobs
      break
    default:
    return state
  }
  return newState
}

//thunks:
export const fetchJobs = () =>
  dispatch =>
    axios.get('/api/jobs')
    .then((res) => res.data)
    .then((jobs) => {
      dispatch(getJobs(jobs))
    }).catch(err => {
      console.error('Fetching jobs unsuccessful', err)
    })



export default reducer;
