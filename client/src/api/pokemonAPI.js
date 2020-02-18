import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const PokemonAPI = {
  getAll: () => axios.get(`${baseUrl}/pokemons`),
  getPrev: offset => axios.get(`${baseUrl}/pokemons${offset}`),
  getNext: offset => axios.get(`${baseUrl}/pokemons${offset}`),
  getById: url => axios.get(`${baseUrl}${url}`),
  getPage: pageNum => axios.get(`${baseUrl}/pokemons?page=${pageNum}`),
};
