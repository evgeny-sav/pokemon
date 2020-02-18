import { Router } from 'express';

import pokemonsController from '../controllers/pokemonsController';

const pokemonRouter = {
  get router() {
    const router = new Router();

    router.use('/pokemons', pokemonsController.router);

    return router;
  },
};

export default pokemonRouter;
