import React from 'react';
import { Table } from 'react-bootstrap';
import capitalize from '../../utils/capitalize';
import { useSelector, shallowEqual } from 'react-redux';

// eslint-disable-next-line react/prop-types
const StatsTable = () => {
  const { id, height, weight, moves, stats, abilities } = useSelector(
    state => state.pokemon.data,
    shallowEqual,
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Id</td>
          <td>{id}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{height}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{weight}</td>
        </tr>
        {/* eslint-disable-next-line react/prop-types */}
        {stats.map(stat => (
          <tr key={`${stat.stat.name}${stat.base_stat}`}>
            <td>{capitalize(stat.stat.name)}</td>
            <td>{stat.base_stat}</td>
          </tr>
        ))}
        {/* eslint-disable-next-line react/prop-types */}
        {abilities.map(ability => (
          <tr key={`${ability.ability.name}`}>
            <td>Ability:</td>
            <td>{capitalize(ability.ability.name)}</td>
          </tr>
        ))}
        {/* eslint-disable-next-line react/prop-types */}
        {moves.map(move => (
          <tr key={`${move.move.name}`}>
            <td>Move:</td>
            <td>{capitalize(move.move.name)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StatsTable;
