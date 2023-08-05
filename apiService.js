const BASE_URL = 'http://localhost:3003/api';

async function registerUser(user) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

async function generateToken(credentials) {
  const response = await fetch(`${BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

async function storeData(data) {
  const response = await fetch(`${BASE_URL}/data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function retrieveData(key, accessToken) {
  const response = await fetch(`${BASE_URL}/data/${key}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return response.json();
}

async function updateData(key, value, accessToken) {
  const response = await fetch(`${BASE_URL}/data/${key}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  return response.json();
}

async function deleteData(key, accessToken) {
  const response = await fetch(`${BASE_URL}/data/${key}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return response.json();
}

export default {
  registerUser,
  generateToken,
  storeData,
  retrieveData,
  updateData,
  deleteData,
};