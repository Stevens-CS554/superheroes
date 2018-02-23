import Axios from "axios";
import qs from "qs";

const marvelInstance = Axios.create();

marvelInstance.interceptors.request.use(config => {
  const api = "https://gateway.marvel.com:443/v1/public/";
  const split = config.url.split("?");
  const preQuery = split[0];

  const queryData = qs.parse(split[1] || "");
  queryData.apiKey = "edcaab04376e3dd7e094ec9c12e7fcdd";
  const query = qs.stringify(queryData);

  config.url = `${api}${preQuery}?${query}`;

  return config;
});

export const searchForSuperheroes = async superHeroName => {
  const url = `characters?nameStartsWith=${superHeroName}`;
  const httpResponse = await marvelInstance.get(url);

  return httpResponse.data.data.results;
};

export const getSuperhero = async id => {
  const url = `characters/${id}`;
  const httpResponse = await marvelInstance.get(url);

  return httpResponse.data.data.results[0];
};
