import Axios from "axios";

const marvelInstance = Axios.create();
marvelInstance.interceptors.request.use(config => {
  config.url = `https://gateway.marvel.com:443/v1/public/${
    config.url
  }&apikey=edcaab04376e3dd7e094ec9c12e7fcdd`;

  return config;
});

export const searchForSuperheroes = async superHeroName => {
  const url = `characters?nameStartsWith=${superHeroName}`;
  const httpResponse = await marvelInstance.get(url);

  return httpResponse.data.data.results;
};
