import axios from "axios";

const API_URL = "/api/entries";

const createEntry = async (entryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, entryData, config);
  return res.data;
};

const getEntries = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(API_URL, config);
  return res.data;
};

const updateEntry = async (entryid, entryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.put(API_URL + entryid, entryData, config);
  return res.data;
};

const deleteEntry = async (entryid, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.delete(API_URL + entryid, config);
  return res.data;
};

const entryService = {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry,
};

export default entryService;
