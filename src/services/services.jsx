import axios from 'axios';

axios.defaults.baseURL = 'https://6442742376540ce2258c8814.mockapi.io/';

export const getAllUsers = async (page, per_page, value) => {
  try {
    if (page && per_page) {
      return await axios
        .get(`followers/?page=${page}&limit=${per_page}&followed=${value}`)
        .then(({ data }) => {
          return data;
        });
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateUserData = async (id, body) => {
  try {
    await axios.put(`followers/${id}`, { ...body }).then(({ data }) => {
      return data;
    });
  } catch (err) {
    console.log(err);
  }
};
