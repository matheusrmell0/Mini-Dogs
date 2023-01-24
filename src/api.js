const URL_API = 'https://dogsapi.origamid.dev/json/';

export const TOKEN_POST = (user) => {
  return {
    url: `${URL_API}jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: `${URL_API}api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const PHOTOS_API = () => {
  return {
    url: `${URL_API}api/photo/?_page=1&_total=3&_user=0`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};
