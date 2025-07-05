const axios = require('axios');

async function get(url, params = {}) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error.message);
    return null;
  }
}

module.exports = {
  get,
};
