import { Router } from 'express';
import axios from 'axios';

import { POKEMON_API_URL } from '../../configs/config';

const pokemonsController = {
  get router() {
    const pokemonRouter = new Router();

    pokemonRouter.get('/', async (req, res, next) => {
      const { offset, limit = 20, page } = req.query;
      const pageNum = parseInt(page, 10);
      const offsetByPage = page ? pageNum * 20 : offset;

      const noOffsetLink = `${POKEMON_API_URL}/pokemon/`;
      const link =
        offsetByPage && limit
          ? `${POKEMON_API_URL}/pokemon?offset=${offsetByPage}&limit=${limit}`
          : noOffsetLink;

      try {
        const {
          data: { results, next: nextLink, previous: previousLink, count },
        } = await axios.get(link);

        const all = await Promise.all(
          results.map(async ({ url }) => {
            const pokemon = await axios.get(url);
            return pokemon.data;
          })
        );
        return res.json({ nextLink, previousLink, count, data: all });
      } catch (e) {
        return next(e);
      }
    });

    pokemonRouter.get('/:id', async (req, res, next) => {
      const { id } = req.params;

      try {
        const { data } = await axios.get(`${POKEMON_API_URL}/pokemon/${id}`);
        return res.json(data);
      } catch (e) {
        return next(e);
      }
    });

    return pokemonRouter;
  },
};

export default pokemonsController;
