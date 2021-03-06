import axios from 'axios';

export const getPolls = () => {
  return axios.get('/api/polls')
}

export const getUserPolls = id => {
  return axios.get(`/api/polls/user/${id}`)
}

export const getPoll = id => {
  return axios.get(`/api/polls/${id}`)
}

export const writePoll = data => {
  return axios.post('/api/polls/new', data)
}

export const getVotedPolls = userId => {
  return axios.get(`/api/polls/voted/${userId}`);
}

export const deletePoll = pollId => {
  return axios.delete(`/api/polls/${pollId}`);
}