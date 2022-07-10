import axios from 'axios';

const API_URL = '/api/journals';

const createJournal = async (journalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, journalData, config);
  return res.data;
};

const getJournals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(API_URL, config);
  return res.data;
}

const deleteJournal = async (journalid, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL + journalid, config);

  return res.data;
};

const journalService = {
  createJournal,
  getJournals,
  deleteJournal,
}

export default journalService;