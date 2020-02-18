import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import capitalize from '../../utils/capitalize';
import './PokemonCard.scss';

const PokemonCard = ({ pokemon }) => {
  const {
    name,
    sprites: { front_default },
  } = pokemon;

  return (
    <div className="PokemonCard">
      <div className="image">
        <img src={front_default} alt="Pokemon's image" />
      </div>
      <div className="cord-body">
        <h5 className="title">{capitalize(name)}</h5>
        <p className="description">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <div className="button">
          <Link to={`/pokemons/${pokemon.id}`}>
            <Button variant="outline-info">Open</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sprites: PropTypes.objectOf(PropTypes.string),
  }),
};

export default PokemonCard;
